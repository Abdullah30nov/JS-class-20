var firebaseConfig = {
    apiKey: "AIzaSyAlzrsToitMnU6rKzTPslcwOslICow6qMk",
    authDomain: "testing-web-app-c218e.firebaseapp.com",
    projectId: "testing-web-app-c218e",
    databaseURL: "https://testing-web-app-c218e-default-rtdb.firebaseio.com",
    storageBucket: "testing-web-app-c218e.appspot.com",
    messagingSenderId: "47486244519",
    appId: "1:47486244519:web:b4b96a4274663487c02d82"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var db = firebase.database();
var auth = firebase.auth();

function btnclick() {
    var name = document.getElementById('name');
    var rollno = document.getElementById('rollno');
    var btn = document.getElementById('btn');

    var obj = {
        name: name.value,
        rollno: rollno.value
    }
    var key = Date.now().toString(25);

    firebase.database().ref('users/' + key).set(obj)
    name.value = ""
    rollno.value = ""

}

function getDataFromDatabase() {
    firebase.database().ref('users').on('child_added', function (data) {
        console.log(data.val());
    })
}
getDataFromDatabase()