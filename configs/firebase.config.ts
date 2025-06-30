// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqIop-Hd9A9Tu2brjzQRMa3mFSteagEZU",
  authDomain: "ai-learn-lab.firebaseapp.com",
  projectId: "ai-learn-lab",
  storageBucket: "ai-learn-lab.firebasestorage.app",
  messagingSenderId: "575635697013",
  appId: "1:575635697013:web:a575230440fe77b47df73c",
  measurementId: "G-PT9JJYPLMC"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Storage
const firebaseStorage = getStorage(app);

// Export firebaseStorage for use in other files
export { firebaseStorage };