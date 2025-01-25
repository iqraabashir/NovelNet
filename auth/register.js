
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'

  // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
  import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js'

  // Add Firebase products that you want to use
  import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js'
  import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js'
  const firebaseConfig = {
    apiKey: "AIzaSyCWnN3xUr6qNWAS2So1wjxOQB6DuXIb1Ls",
    authDomain: "novelnet-2c3b0.firebaseapp.com",
    projectId: "novelnet-2c3b0",
    storageBucket: "novelnet-2c3b0.appspot.com",
    messagingSenderId: "675791285909",
    appId: "1:675791285909:web:67de73e04295baf728f59c",
    measurementId: "G-MJD1BJSM58"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app)
  




const submitBtn = document.querySelector("#submitBtn")

submitBtn.addEventListener("click", (e) => {

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPass = document.querySelector("#confirmPass")
    e.preventDefault()
    if ( !email.value  || !password.value || !confirmPass.value )
    {
        alert("Please enter all fields")
        return
    }

    if (password.value != confirmPass.value)
    {
        alert("Passwords not matching")
        return
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      alert("Registered sucessfully")
      window.location.href = "/auth/login.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      alert(errorMessage)
      // ..
    });

}
)

 