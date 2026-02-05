import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/CustomButton"; 
import AppGradient from "../../components/AppGradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import beachImage from "../../assets/meditation-images/beach.webp";

const Home = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                style={{ flex: 1 }}
            >
                <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <SafeAreaView
                        style={{
                            flex: 1,
                            paddingHorizontal: 32,
                            justifyContent: "space-between",
                            paddingBottom: 80,
                        }}
                    >
                        <Animated.View entering={FadeInDown.delay(300).springify()}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: 40,
                                    marginTop: 40,
                                }}
                            >
                                MEDITACIÓN
                            </Text>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: 20,
                                    marginTop: 12,
                                    opacity: 0.9,
                                }}
                            >
                                Una forma simple de relax
                            </Text>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(600).springify()}>
                            <CustomButton
                                onPress={() => router.push("/(tabs)/nature-meditate")}
                                title="INGRESAR"
                            />
                        </Animated.View>

                        <StatusBar style="light" />
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default Home;