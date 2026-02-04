import GuidedAffirmationsGallery from "../../../components/GuidedAffirmationsGallery";
import images from "../../../constants/affirmation-images";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const galleryData = [
    {
        title: "Positividad",
        data: [
            { id: 1, name: "P1", text: "Soy capaz de lograr todo lo que me propongo", image: images.californiaBackyardOne },
            { id: 2, name: "P2", text: "Mi mente está llena de pensamientos brillantes", image: images.californiaBackyardTwo },
            { id: 3, name: "P3", text: "Hoy será un gran día lleno de oportunidades", image: images.californiaBackyardThree },
            { id: 4, name: "P4", text: "Atraigo abundancia y alegría a mi vida", image: images.californiaBackyardFour },
        ],
    },
    {
        title: "Reducir Ansiedad",
        data: [
            { id: 5, name: "A1", text: "Inhalo paz, exhalo tensión", image: images.englishCountrysideOne },
            { id: 6, name: "A2", text: "Estoy a salvo y en control de mi mente", image: images.englishCountrysideTwo },
            { id: 7, name: "A3", text: "Todo pasa y esto también pasará", image: images.englishCountrysideThree },
            { id: 8, name: "A4", text: "Confío en el proceso de la vida", image: images.englishCountrysideFour },
        ],
    },
    {
        title: "Éxito y Abundancia",
        data: [
            { id: 9, name: "E1", text: "El éxito fluye hacia mí naturalmente", image: images.mountainMeditateOne },
            { id: 10, name: "E2", text: "Merezco la prosperidad en todas sus formas", image: images.mountainMeditateTwo },
            { id: 11, name: "E3", text: "Mis acciones crean resultados positivos", image: images.mountainMeditateThree },
            { id: 12, name: "E4", text: "Soy un imán para las buenas oportunidades", image: images.mountainMeditateFour },
        ],
    },
    {
        title: "Paz Interior",
        data: [
            { id: 13, name: "PI1", text: "Mi paz es mi mayor prioridad", image: images.relaxingRiverOne },
            { id: 14, name: "PI2", text: "Suelto lo que no puedo controlar", image: images.relaxingRiverTwo },
            { id: 15, name: "PI3", text: "Mi corazón está tranquilo y en paz", image: images.relaxingRiverThree },
            { id: 16, name: "PI4", text: "Vivo el presente con gratitud", image: images.relaxingRiverFour },
        ],
    },
];

const Page = () => {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View className="flex-1">
            <LinearGradient
                colors={["#2e1f58", "#54426b", "#a790af"]}
                className="flex-1 px-5"
                style={{ paddingTop: insets.top }}
            >
                {/* Header limpio de espacios */}
                <View className="flex-row items-center mt-2 mb-4">
                    <Pressable 
                        onPress={() => router.back()} 
                        className="bg-white/10 p-2 rounded-full"
                    >
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </Pressable>
                    <Text className="text-white/60 font-medium ml-4">AFIRMACIONES</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className="text-zinc-50 text-3xl font-bold mt-5">Cambia tus creencias</Text>
                    <Text className="text-zinc-300 text-lg mb-8">Afirmaciones diarias para tu bienestar</Text>
                    
                    <View className="pb-24"> 
                        {galleryData.map((g) => (
                            <GuidedAffirmationsGallery
                                key={g.title}
                                title={g.title}
                                products={g.data}
                            />
                        ))}
                    </View>
                </ScrollView>
            </LinearGradient>
            <StatusBar style="light" />
        </View>
    );
};

export default Page;