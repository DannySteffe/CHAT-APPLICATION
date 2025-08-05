import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyC0XUhb9Wh0VWILUocLF-lg2ivsLfwEfb8",
  authDomain: "chat-app-gs-cb6ab.firebaseapp.com",
  projectId: "chat-app-gs-cb6ab",
  storageBucket: "chat-app-gs-cb6ab.firebasestorage.app",
  messagingSenderId: "1032038588590",
  appId: "1:1032038588590:web:ec2bbcadec42dbae694d3f",
  measurementId: "G-VXYZ4W5P45"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
 
const signup = async (username,email,password) => {
    try {
        const res = await createUserWithEmailAndPassword (auth, email, password);
        const user = res.user;
        await SendToBack(doc(db, "users",user.id),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"hey, there i an using chat app",
            lastseen:Date.now()
            
        }
        )
        await setDoc(doc(db, "Chats", user.uid), {
            chatData:[]
        })
    } catch (error) {
        console.error(Error );

    }
}