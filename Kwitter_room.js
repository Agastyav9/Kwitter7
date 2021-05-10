var firebaseConfig = {
    apiKey: "AIzaSyBBXJH7aj383TYCPWBC2T4VhvMgFrotR-U",
    authDomain: "kwitter-4bb4a.firebaseapp.com",
    databaseURL: "https://kwitter-4bb4a-default-rtdb.firebaseio.com",
    projectId: "kwitter-4bb4a",
    storageBucket: "kwitter-4bb4a.appspot.com",
    messagingSenderId: "109056079523",
    appId: "1:109056079523:web:4ab353d00572cacb13f116",
    measurementId: "G-Y6PTQHCGGM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 

  function addRoom()
  {
   room_name = document.getElementById("room_name").value;
   
   firebase.database().ref("/").child(room_name).update({
   purpose:"addingroomname"
   });

   localStorage.setItem("room_name" , room_name);
   
   window.location = "kwitter_page.html"
   }


function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
                Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });
});}
   getData();


function getName()
{
    var x = localStorage.getItem("user_name");
    var y = "Welcome!"
    name1 = "<h4> "+ y+ x +"<img class='user_tick' src='tick.png'></h4>";
    document.getElementById("name2").innerHTML += name1;
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html"; 
}


function logout2()  
{
  
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html";
}