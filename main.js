


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB7TZnRZDFwpeZGcIxcvDE-hJquzP4U9Fk",
    authDomain: "newpro2-790b5.firebaseapp.com",
    databaseURL: "https://newpro2-790b5.firebaseio.com",
    projectId: "newpro2-790b5",
    storageBucket: "newpro2-790b5.appspot.com",
    messagingSenderId: "81549790576",
    appId: "1:81549790576:web:0d8c52e849b2e4cb4dd3b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  //Start grabbing our DOM
  const submitBtn = document.querySelector('#Submit');

  let userName = document.querySelector('#userFullName');
  let userEmail = document.querySelector('#userEmail');
  let userMessage = document.querySelector('#userMessage');

  const db = firestore.collection("contact-data");

  submitBtn.addEventListener('click', function(){
      let userNameInput = userName.value; 
      let userEmailInput = userEmail.value; 
      let userMessageInput = userMessage.value; 

      // Access the daatabase

      db.doc().set({
          name: userNameInput,
          email: userEmailInput,
          message: userMessageInput
      })

      .then(function(){
          console.log("data saved");
      })
      .catch(function(error){
          console.log(error);
      });
  });
  
  

