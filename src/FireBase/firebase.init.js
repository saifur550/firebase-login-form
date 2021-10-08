import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.congig";


const initalizeAuthnentiction = () => {
    initializeApp(firebaseConfig)
}


export default initalizeAuthnentiction;