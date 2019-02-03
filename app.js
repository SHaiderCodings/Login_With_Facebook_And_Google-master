 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD1qhX9vqrRX6h0jK_mvfg6XOAVZLieRNA",
    authDomain: "form-cf10c.firebaseapp.com",
    databaseURL: "https://form-cf10c.firebaseio.com",
    projectId: "form-cf10c",
    storageBucket: "form-cf10c.appspot.com",
    messagingSenderId: "98195973306"
  };
  firebase.initializeApp(config);

  function fblogin(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
        
      console.log(token)
      console.log(user.displayName);
      console.log(user.email);
      console.log(user.photoURL);
      // var obj={
      //     displayname:user.displayName,
      //     email:user.email,
      //     userpic:user.photoURL
      // }
      // localStorage.setItem("Userlog",JSON.stringify(obj));
      // console.log(user);
      location="login.html";
   }).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
   });
  }