# Firebase Authentication Setup Guide

## 🔥 Firebase Configuration Required

Your Firebase authentication system is now integrated! Follow these steps to complete the setup:

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" or select an existing project
3. Follow the setup wizard

### 2. Enable Authentication Methods

1. In your Firebase project, go to **Build** → **Authentication**
2. Click on the **Sign-in method** tab
3. Enable:
   - **Email/Password** authentication
   - **Google** sign-in provider

### 3. Enable Cloud Firestore Database

1. In your Firebase project, go to **Build** → **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (for development)
   - Note: Update security rules for production!
4. Select a Cloud Firestore location (closest to your users)
5. Click **Enable**

**Important**: Your app will fail to save data if Firestore is not enabled!

### 4. Register Your Web App

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps" section
3. Click the **Web** icon (`</>`)
4. Register your app with a nickname (e.g., "Anastomosis Web")
5. Copy the configuration object

### 5. Update Firebase Config

Open `src/firebase/config.js` and replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 6. Configure Google Sign-In (Optional but Recommended)

1. In Firebase Console → Authentication → Sign-in method → Google
2. Add your **authorized domains** (e.g., `localhost`, your production domain)
3. Configure OAuth consent screen if prompted

## 🎯 Features Implemented

✅ **Email/Password Authentication**
- Sign up with email and password
- Login with existing credentials
- Minimum 6-character password requirement

✅ **Google OAuth Sign-In**
- One-click sign-in with Google account
- Automatic user profile creation

✅ **Toggle Between Login/Signup**
- Seamless switching between login and signup modes
- Conditional form fields (full registration form only shown for signup)

✅ **Error Handling**
- User-friendly error messages
- Success notifications
- Loading states

✅ **Protected Routes**
- `ProtectedRoute` component created for securing routes
- Automatic redirect to login for unauthenticated users

## 📝 Usage Examples

### Protecting a Route

To protect any route, wrap it with the `ProtectedRoute` component:

```javascript
import ProtectedRoute from './components/ProtectedRoute';

<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

### Using Auth in Components

Access user info and auth methods anywhere:

```javascript
import { useAuth } from './context/AuthContext';

function MyComponent() {
  const { user, logout } = useAuth();
  
  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName || user.email}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
```

## 🔒 Security Notes

- Never commit your `firebase/config.js` with real credentials to public repos
- Use environment variables for production: `.env` file with `VITE_FIREBASE_API_KEY` etc.
- Set up Firebase Security Rules for your database/storage

### Recommended Firestore Security Rules (Production)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own registration data
    match /registrations/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can only read/write their own progress
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

To apply these rules:
1. Go to Firebase Console → Firestore Database → Rules
2. Replace the default rules with the above
3. Click **Publish**

## 🚀 Testing

1. Start your dev server: `npm run dev`
2. Navigate to `/register`
3. Try signing up with email/password
4. Try logging in with Google
5. Toggle between login and signup modes

## 📚 Additional Resources

- [Firebase Auth Documentation](https://firebase.google.com/docs/auth)
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks) (optional enhancement)
