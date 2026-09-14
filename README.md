# 🧘 Meditacion App

Aplicación de meditación y afirmaciones creada con React Native + Expo. Está pensada para ofrecer una experiencia relajante con sonidos de la naturaleza, sesiones guiadas y mensajes positivos diarios.

## 🚀 Tecnologías utilizadas

- React Native
- Expo
- Expo Router
- NativeWind
- Expo AV
- Expo Linear Gradient
- EAS Build
- @expo/vector-icons

## 🧠 Características principales

- Pantalla principal con acceso rápido a meditación y afirmaciones
- Sesiones de respiración con temporizador
- Fondo visual relajante con degradados
- Sonidos ambientales integrados
- Diseño móvil con enfoque calmante y minimalista

## 🗂️ Estructura del proyecto

- `app/` — pantallas y rutas de navegación
- `components/` — componentes reutilizables
- `context/` — contexto de estado global (por ejemplo, `TimerContext`)
- `assets/` — imágenes, íconos y fuentes
- `package.json` — dependencias y scripts
- `app.json` — configuración de Expo
- `eas.json` — perfiles de build para EAS

## ✅ Requisitos previos

Antes de generar el APK, necesitas tener instalado:

- Node.js 18 o superior
- npm o yarn
- Expo CLI
- EAS CLI
- Cuenta de Expo activa

Instalación rápida:

```bash
npm install -g eas-cli
npx expo install
```

## ▶️ Cómo ejecutar la app localmente

Desde la carpeta del proyecto:

```bash
cd Meditacion
npm install
npx expo start
```

Luego puedes abrir la app en:

- Android emulador
- iOS simulator
- Expo Go en el dispositivo

## 📱 Cómo generar un APK con EAS Build

La forma recomendada para crear el archivo `.apk` para Android es usar Expo EAS Build.

### 1) Inicia sesión en Expo

```bash
eas login
```

Si no tienes cuenta, crea una en https://expo.dev

### 2) Configura el proyecto para EAS

```bash
eas build:configure
```

Esto crea o actualiza el archivo `eas.json` y conecta el proyecto con tu cuenta de Expo.

### 3) Verifica la configuración

El proyecto ya incluye un perfil de build para APK en `eas.json`:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

### 4) Genera el APK

```bash
eas build --platform android --profile preview
```

Esto compilará la app en Android y generará un instalable tipo APK.

### 5) Descarga el archivo

Cuando termine la compilación, Expo te mostrará un enlace para descargar el APK. También podrás verlo en la sección de builds de tu dashboard de Expo.

## 📦 Generar APK para enviar por WhatsApp

Una vez finalizado el build, sigue estos pasos:

1. Abre tu dashboard de Expo
2. Entra en la build finalizada
3. Descarga el archivo APK
4. Envíalo por WhatsApp o compártelo con el equipo

## 🔧 Comandos útiles

```bash
# Iniciar servidor de desarrollo
npx expo start

# Ejecutar en Android
npm run android

# Verificar configuración de Expo
npx expo config --type public

# Generar build de Android
 eas build --platform android --profile preview
```

## 📝 Nota importante

Si quieres instalar la app en tu teléfono sin jugar con emuladores, el flujo recomendado es:

- compilar con EAS Build
- descargar el APK
- compartirlo por WhatsApp
- instalarlo en el dispositivo Android

## ⚠️ Solución rápida si falla el build

Si el build falla, revisa lo siguiente:

- que hayas iniciado sesión con `eas login`
- que el proyecto esté asociado a tu cuenta de Expo
- que `app.json` y `eas.json` estén correctos
- que las dependencias estén instaladas con `npm install`

## 👤 Autor

Proyecto desarrollado para una experiencia de meditación y atención plena, enfocada en calma, relajación y hábitos sostenibles.
