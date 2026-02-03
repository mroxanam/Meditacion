import TimerProvider from "@/context/TimerContext";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Evita que la pantalla de carga se oculte automáticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        if (error) {
            console.error("Error cargando fuentes:", error);
        }
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    // Solo retornamos null mientras cargan. Si hay error, fontsLoaded será false
    // pero el useEffect ocultará el Splash y mostrará la app con fuente estándar.
    if (!fontsLoaded && !error) {
        return null; 
    }

    return (
        <SafeAreaProvider>
            <TimerProvider>
                <Stack>
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
                    <Stack.Screen 
                        name="(modal)/adjust-meditation-duration" 
                        options={{ headerShown: false, presentation: "modal" }} 
                    />
                </Stack>
            </TimerProvider>
        </SafeAreaProvider>
    );
}