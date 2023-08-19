import {app} from '../../firebase/firebase.js'
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

let auth = getAuth(app);

let signInBtn = document.querySelector(".submit")
signInBtn.addEventListener("click", () => {
    let lEmail = document.getElementById("s-email").value;
    let lPassword = document.getElementById("s-pass").value;
    
    signInWithEmailAndPassword(auth, lEmail, lPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        location.replace("../CrudApp/blog.html")
        console.log("Yes Your Successfully Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        document.querySelector(".error-para").innerHTML = errorMessage
      });
})

let btn = document.querySelector(".l-btn")
btn.addEventListener("mouseover", () => {
    let remove = document.querySelector(".s-btn")
    remove.classList.remove("s-btn")
})
btn.addEventListener("mouseout", () => {
    let remove = document.getElementById("s-btn")
    remove.classList.add("s-btn")
})