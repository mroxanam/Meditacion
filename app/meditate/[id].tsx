import AppGradient from "../../components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// @ts-ignore
import { Audio } from "expo-av";
import CustomButton from "../../components/CustomButton";

import MEDITATION_IMAGES from "../../constants/meditation-images";
import { TimerContext } from "../../context/TimerContext";
import { MEDITATION_DATA, AUDIO_FILES } from "../../constants/MeditationData";

const Page = () => {
    const { id } = useLocalSearchParams();
    const { duration: secondsRemaining, setDuration } = useContext(TimerContext);

    const [isMeditating, setMeditating] = useState(false);
    const [audioSound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlayingAudio, setPlayingAudio] = useState(false);

    // 1. CONTROL DEL TEMPORIZADOR
    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (secondsRemaining === 0) {
            setMeditating(false);
            stopSound(); 
            return;
        }

        if (isMeditating) {
            timerId = setTimeout(() => {
                setDuration(secondsRemaining - 1);
            }, 1000);
        }

        return () => clearTimeout(timerId);
    }, [secondsRemaining, isMeditating]);

    // 2. CORRECCIÓN: LIMPIEZA PROFUNDA AL SALIR (Para el botón Inicio/Casita)
    useEffect(() => {
        return () => {
            // Cuando sales de la pantalla, forzamos el alto total
            if (audioSound) {
                audioSound.stopAsync().then(() => {
                    audioSound.unloadAsync();
                });
            }
        };
    }, [audioSound]);

    const initializeSound = async () => {
        const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
        
        // Configuramos el modo de audio para que no falle en segundo plano
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: false,
            playsInSilentModeIOS: true,
        });

        const { sound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audioFileName]
        );
        setSound(sound);
        return sound;
    };

    const stopSound = async () => {
        if (audioSound) {
            await audioSound.stopAsync();
            setPlayingAudio(false);
        }
    };

    const togglePlayPause = async (shouldPlay: boolean) => {
        let sound = audioSound;
        if (!sound) {
            sound = await initializeSound();
        }

        if (shouldPlay) {
            await sound.playAsync();
            setPlayingAudio(true);
        } else {
            await sound.pauseAsync();
            setPlayingAudio(false);
        }
    };

    async function toggleMeditationSessionStatus() {
        if (secondsRemaining === 0) setDuration(10);

        const nextState = !isMeditating;
        setMeditating(nextState);
        await togglePlayPause(nextState);
    }

    const handleAdjustDuration = () => {
        if (isMeditating) toggleMeditationSessionStatus();
        router.push("/(modal)/adjust-meditation-duration");
    };

    const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, "0");
    const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={MEDITATION_IMAGES[Number(id) - 1]}
                resizeMode="cover"
                style={{ flex: 1 }}
            >
                <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <Pressable
                        onPress={() => router.back()}
                        style={{ position: 'absolute', top: 64, left: 24, zIndex: 10, opacity: 0.8 }}
                    >
                        <AntDesign name="left-circle" size={44} color="white" />
                    </Pressable>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ alignSelf: 'center', borderWidth: 2, borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 999, width: 240, height: 240, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 48, color: 'white', fontFamily: 'Roboto-Mono' }}>
                                {formattedTimeMinutes}:{formattedTimeSeconds}
                            </Text>
                            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginTop: 8 }}>
                                {isMeditating ? "EN SESIÓN" : "REPOSO"}
                            </Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 40, paddingHorizontal: 32 }}>
                        <CustomButton
                            title="Ajustar tiempo"
                            onPress={handleAdjustDuration}
                            containerStyles="bg-white/10 border border-white/20"
                            textStyles="text-white font-normal"
                        />
                        <CustomButton
                            title={isMeditating ? "Detener" : "Empezar Meditación"}
                            onPress={toggleMeditationSessionStatus}
                            containerStyles="mt-4 bg-white py-4"
                            textStyles="text-black font-bold"
                        />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default Page;