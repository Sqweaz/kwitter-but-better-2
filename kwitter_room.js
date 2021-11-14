// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM0YcOKOjM_RVNoN22vi5EAM9idTKCB94",
    authDomain: "kwitter-but-better.firebaseapp.com",
    databaseURL: "https://kwitter-but-better-default-rtdb.firebaseio.com",
    projectId: "kwitter-but-better",
    storageBucket: "kwitter-but-better.appspot.com",
    messagingSenderId: "432801148619",
    appId: "1:432801148619:web:e7566c96fff49e2d40754e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
