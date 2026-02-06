# 🧘 Meditacion App

Una aplicación nativa de meditación y afirmaciones creada con **React Native** y **Expo**. Diseñada para ofrecer una experiencia de relajación mediante sonidos de la naturaleza y afirmaciones diarias.

## 🚀 Tecnologías utilizadas

* **Framework:** [Expo](https://expo.dev/) (SDK 51 - Estable)
* **Navegación:** [Expo Router](https://docs.expo.dev/router/introduction/)
* **Estilos:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS)
* **Motor de Build:** [EAS Build](https://expo.dev/build) (Para generar el APK de Android)
* **Iconos:** @expo/vector-icons

## 🛠️ Estructura del Proyecto

1. **Navegación:** Jerarquía de `(tabs)` para acceso rápido y `Stack` para sesiones de meditación.
2. **Gestión de Estado:** `TimerContext` para controlar el tiempo de meditación en toda la app.
3. **Interfaz:** Uso de `expo-linear-gradient` para fondos relajantes y fuentes `RobotoMono`.
4. **Multimedia:** Integración de sonidos locales para sesiones de respiración.

## 📱 Cómo generar el APK para Android

Para crear el archivo instalable y enviarlo por WhatsApp, se utiliza **EAS Build**:

1. **Configurar el build:**
   bash
   eas build:configure