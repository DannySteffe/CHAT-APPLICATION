import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC0XUhb9Wh0VWILUocLF-lg2ivsLfwEfb8",
  authDomain: "chat-app-gs-cb6ab.firebaseapp.com",
  projectId: "chat-app-gs-cb6ab",
  storageBucket: "chat-app-gs-cb6ab.appspot.com", // Fixed storage bucket format
  messagingSenderId: "1032038588590",
  appId: "1:1032038588590:web:ec2bbcadec42dbae694d3f",
  measurementId: "G-VXYZ4W5P45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        
        // Create user document
        await setDoc(doc(db, "users", user.uid), { // Changed user.id to user.uid
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey, there! I'm using chat app",
            lastseen: Date.now()
        });
        
        // Create chats document
        await setDoc(doc(db, "chats", user.uid), { // Changed "Chats" to "chats" for consistency
            chatData: []
        });
        
        toast.success("Account created successfully!");
        return user;
    } catch (error) {
        console.error("Signup error:", error);
        toast.error(error.message); // Show full error message
        throw error; // Re-throw for further handling
    }
};

export { signup, auth, db }; // Export auth and db for other uses