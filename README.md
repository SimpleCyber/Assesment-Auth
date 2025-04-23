
## 🚀 Auth App with Supabase | React Native + Expo  
> Secure email authentication flow using Supabase – Login, Signup, Logout, and basic navigation with Expo.

---

### 📸 Screenshots

| Splash Screen | Login Page | Loading Screen | Home Page |
|:-------------:|:----------:|:--------------:|:---------:|
| ![](https://github.com/SimpleCyber/Assesment-Auth/blob/main/assets/Images/Expo.jpg) | ![](https://github.com/SimpleCyber/Assesment-Auth/blob/main/assets/Images/Home%20page.jpg) | ![](https://github.com/SimpleCyber/Assesment-Auth/blob/main/assets/Images/Loading%20Screen.jpg) | ![](https://github.com/SimpleCyber/Assesment-Auth/blob/main/assets/Images/LoginPage.jpg) |
| **Expo.jpg** |  **Home page.jpg**  | **Loading Screen.jpg** | **LoginPage.jpg** |

---

### 🧩 Features

- ✅ Splash screen with animated loading and branding
- ✅ Login & Signup with email/password (Supabase Auth)
- ✅ Email verification prompt for new users
- ✅ Home screen with "Hi" greeting
- ✅ Logout button (clears session)
- ✅ Session persistence with auto-login
- ✅ Clean, responsive UI with modern styling

---

### 🛠️ Tech Stack

- **React Native (with Expo)**
- **Supabase (Free Tier)**
- **AsyncStorage** – to persist user sessions
- **KeyboardAvoidingView, ScrollView** – for smooth UX on all devices

---

### 🧱 Project Setup

```bash
# Clone the repository
git clone https://github.com/SimpleCyber/Assesment-Auth.git
cd Assesment-Auth

# Install dependencies
npm install

# Setup your Supabase credentials
# 1. Create a .env file
# 2. Add:
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Start development server
npx expo start
```

---

### 📌 Phases of Development

| Phase | Description |
|-------|-------------|
| **Phase 1** | 🔹 Project scaffolding using Expo <br> 🔹 Basic navigation + folder structure <br> 🔹 Installed Supabase & AsyncStorage |
| **Phase 2** | 🔹 Splash screen with logo <br> 🔹 Keyboard-aware login/signup UI <br> 🔹 Responsive styling |
| **Phase 3** | 🔹 Supabase email auth integration <br> 🔹 Signup with email verification <br> 🔹 Login with error handling |
| **Phase 4** | 🔹 Home screen with greeting + logout <br> 🔹 Auth state management <br> 🔹 Session persistence using AsyncStorage |
| **Phase 5** | 🔹 Added images and screenshots <br> 🔹 README and documentation for deployment |

---

### 🧪 Test Cases

- ✅ Login fails for unregistered users
- ✅ Login success for registered users
- ✅ Signup success shows verification alert
- ✅ Logout clears session and redirects to login

---

### 📂 Folder Structure (Essentials)

```
Assesment-Auth/
│
├── assets/
│   └── images/
│       ├── Expo.jpg
│       ├── Home page.jpg
│       ├── Loading Screen.jpg
│       └── LoginPage.jpg
│
├── lib/
│   └── supabase.ts         # Supabase client config
│
├── screens/
│   └── AuthScreen.tsx      # Login/Signup logic
│   └── HomeScreen.tsx      # Post-login screen
│
├── App.tsx                 # Main navigation and routing
└── README.md
```

