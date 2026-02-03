# 🧘 Simple Meditation App

Una aplicación de meditación y afirmaciones creada con **React Native** y **Expo**. La app permite realizar sesiones de meditación con sonidos de la naturaleza y leer afirmaciones diarias categorizadas.

## 🚀 Tecnologías utilizadas

* **Framework:** [Expo](https://expo.dev/) (SDK 54)
* **Navegación:** [Expo Router](https://docs.expo.dev/router/introduction/) (Basado en archivos)
* **Estilos:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native)
* **Lenguaje:** TypeScript
* **Iconos:** @expo/vector-icons

## 🛠️ Cómo se creó este proyecto

1.  **Inicialización:** Se utilizó `npx create-expo-app` con el template de navegación.
2.  **Estructura de Navegación:** Se implementó una jerarquía de `(tabs)` para la pantalla principal y un `Stack` para las pantallas de detalle de afirmaciones y meditación.
3.  **Context API:** Se creó un `TimerContext` para gestionar el tiempo de meditación de forma global.
4.  **Diseño:** Se utilizaron Gradientes lineales (`expo-linear-gradient`) y fuentes personalizadas (`RobotoMono`) para una experiencia visual relajante.
5.  **Datos:** Las afirmaciones se organizaron en una galería dinámica cargada desde constantes locales.

## 💻 Instalación y Ejecución

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio e instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Sincronizar dependencias de Expo:**
    ```bash
    npx expo install --check
    ```

3.  **Ejecutar en modo desarrollo:**
    * Para **Android** (requiere SDK configurado): `npx expo start --android`
    * Para **iOS** (requiere macOS): `npx expo start --ios`
    * Para **Web**: `npx expo start --web`
    * Para **Celular físico**: Escanea el código QR con la app **Expo Go**.

## 🌐 Despliegue en Vercel (Web)

Para visualizar la versión web en la nube:
1. Conecta tu repositorio de GitHub a [Vercel](https://vercel.com/).
2. Vercel detectará automáticamente que es un proyecto de Expo.
3. Asegúrate de que el comando de build sea: `npx expo export:web`.