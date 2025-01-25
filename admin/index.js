
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, onAuthStateChanged ,signOut } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js'
import { getFirestore,collection ,getDocs } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js'

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
const db  = getFirestore(app)

const signOutBtn = document.querySelector("#signOut")

const totalBooks = document.querySelector("#total_books")

signOutBtn.addEventListener("click", () => {
    signOut(auth).then( ()=> {
        alert("logged out")
    } )
})

window.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, async(user) => {
       
        if (!user) {
            window.location.href = "/login.html"
            return
        }

        const querySnapshot = await getDocs(collection(db, "books"));
        const count  = querySnapshot.size
        totalBooks.innerText = count

      
    })
})

