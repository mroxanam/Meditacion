import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import Colors from "../../constants/Colors";
import React from "react";
import { Platform } from "react-native";




const Page = () => {
    const router = useRouter();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: "#8e8e93",
                tabBarStyle: {
                    backgroundColor: "#161b2e",
                    borderTopColor: "#333",
                    // --- AJUSTES PARA QUE NO QUEDE ABAJO ---
                    height: Platform.OS === 'android' ? 70 : 90, // Más alto en iPhone, justo en Android
                    paddingBottom: Platform.OS === 'android' ? 12 : 30, // Despega los iconos del borde
                    position: 'absolute', // Esto a veces ayuda a que el sistema no lo empuje
                    borderTopWidth: 0,
                    elevation: 0, // Quita sombras raras en Android
                },
            }}
        >
            {/* 1. INICIO (CASITA) - Cambiamos el name para evitar conflictos */}
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        // Usamos Entypo para la casita por si Ionicons falla
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        router.replace("/");
                    },
                }}
            />

            {/* 2. MEDITAR */}
            <Tabs.Screen
                name="nature-meditate"
                options={{
                    tabBarLabel: "Meditar",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="flower-tulip" size={24} color={color} />
                    ),
                }}
            />

            {/* 3. MOTIVACIÓN */}
            <Tabs.Screen
                name="affirmations"
                options={{
                    tabBarLabel: "Motivación",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="open-book" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default Page;