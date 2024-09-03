import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase , ref , push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appsettings = {
  databaseURL: "https://playground-21c5f-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appsettings);
const database = getDatabase(app)
const moviesInDB = ref(database,"movies");
console.log(app);

const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {
  const inputvalue = inputField.value;
  push(moviesInDB,inputValue);

  console.log(`${inputvalue} added to database`);
});
