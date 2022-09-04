const firebaseConfig = {
    apiKey: "AIzaSyDJpSUp4Rn9tTDreU-V4szm-nl-OfSgxqM",
    authDomain: "chat-app--project-e245b.firebaseapp.com",
    databaseURL: "https://chat-app--project-e245b-default-rtdb.firebaseio.com",
    projectId: "chat-app--project-e245b",
    storageBucket: "chat-app--project-e245b.appspot.com",
    messagingSenderId: "688931211088",
    appId: "1:688931211088:web:6569cfc670fd4696294e55"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_welcomename").innerHTML = "Welcome "+user_name+"!";
  function addroom(){

   room_name= document.getElementById("room_name").value;
  
   firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_room.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
         console.log("room_name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function logout() {
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
   
}
