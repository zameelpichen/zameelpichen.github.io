
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD4y0JC0ZZ0mZ9YDu6mHjiYTA5efEER7KU",
    authDomain: "megham2-0.firebaseapp.com",
    databaseURL: "https://megham2-0.firebaseio.com",
    projectId: "megham2-0",
    storageBucket: "",
    messagingSenderId: "1050222086918",
    appId: "1:1050222086918:web:0b0780e8e0f90693d32c87",
    measurementId: "G-1C78JVYLWF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
// var messagesRef = firestore.collection().ref('messages');


// Listen for submit
document.getElementById('contact').addEventListener('submit',submitForm);


// Submit Form
function submitForm(e) {
  e.preventDefault();

  // Get Values

  var email = getInputVal('email');
  var name = getInputVal('name');
  var message = getInputVal('message');

// Save Message
  saveMessage(email,name,message);

  // Confirmation
  Swal.fire(
'Thank You!',
'Submitted successfully!',
'success'
)

// Clear form
document.getElementById("contact").reset();

}

// Function to get input
function getInputVal(id) {
return document.getElementById(id).value;

}


// Save msgs to firebasejs

function saveMessage(email,name,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email : email,
    name : name,
    message : message
  });
}
