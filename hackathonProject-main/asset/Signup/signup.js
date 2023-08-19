import { app } from '../../firebase/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

let auth = getAuth(app);
const db = getFirestore(app);
let col = collection(db, "userData");


let signupForm = document.getElementById("signup-form")

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstName = signupForm[0].value
    let lastName = signupForm[1].value
    let email = signupForm[2].value
    let password = signupForm[3].value
    let confirmPass = signupForm[4].value

    console.log(password, confirmPass)

    console.log(signupForm);

    if (password !== confirmPass) {
        document.querySelector(".error-para").innerHTML = "Your Password Dost not Match"
        return
    }


    createUserWithEmailAndPassword(auth, email, password)

        .then(async (userCredential) => {
            const user = userCredential.user;
            const userId = user.uid
            console.log(user);
            console.log(user.uid)

            user.displayName = `${firstName} ${lastName}`
            
            // User ki details Firebase database mein store karein
            let myData = await setDoc(doc(col, userId), {
                firstName: firstName,
                lastName: lastName,
                email: email
            })
            console.log(myData)
            location.replace("../Signin/signin.html")
        })
        .then(() => {
            alert("your data has been successfully submitted")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            document.querySelector(".error-para").innerHTML = errorMessage
        })

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


