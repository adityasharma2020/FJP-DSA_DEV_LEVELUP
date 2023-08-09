

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBat5s_Fg18wljjQGCt7UoWm3uMsbUXU0M',
  authDomain: 'tutorial-4bb96.firebaseapp.com',
  projectId: 'tutorial-4bb96',
  storageBucket: 'tutorial-4bb96.appspot.com',
  messagingSenderId: '438844378502',
  appId: '1:438844378502:web:b12971a15e289796467007',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Check if the user is already authenticated
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in, redirect to index.html
    window.location.href = 'index.html'
  } else {
    // No user is signed in, stay on login.html
    console.log('User not signed in')
  }
})

// After successful sign-in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Set a flag in localStorage to indicate the user is logged in
      localStorage.setItem('loggedIn', 'true');
      
      // Rest of your logic
    }
  });

// Sign-in functionality
document
  .getElementById('login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault() // Prevent form submission

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    // Sign in with email and password
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // User signed in, redirect to index.html
        window.location.href = 'index.html'
      })
      .catch(function (error) {
        // Handle sign-in error
        console.error('Sign-in error:', error)
      })
  })

console.log(user);
// After successful sign-in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Get a reference to the Firestore collection for the user's data
      const userDocRef = firebase.firestore().collection('users').doc(user.uid);
  
      // Save the formattedSheetDB data to Firestore
      userDocRef.set({
        sheets: sheetDB, // Use your actual sheetDB here
      })
      .then(() => {
        console.log('Data saved to Firestore');
      })
      .catch((error) => {
        console.error('Error saving data to Firestore:', error);
      });
    }
  });
  
