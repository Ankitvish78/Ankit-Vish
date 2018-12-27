  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUeMatAE73hvfTn6SuosoQX75zSpLnYes",
    authDomain: "web-developer-9264a.firebaseapp.com",
    databaseURL: "https://web-developer-9264a.firebaseio.com",
    projectId: "web-developer-9264a",
    storageBucket: "web-developer-9264a.appspot.com",
    messagingSenderId: "341312485820"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, phone, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    email:email,
    message:message
  });
}
