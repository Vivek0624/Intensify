// function BMI(){
// 		var w=document.getElementById('w').value;
// 		var h=document.getElementById('h').value;
// 		var bmi=w/(h/100*h/100);
// 		document.getElementById("result").innerHTML="Your BMI is" + bmi;
// }
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// FIREBASE
// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyCcNKmXcY-3oyNihSCANvVbejhmla81FDI",
//   authDomain: "contactform-8f644.firebaseapp.com",
//   databaseURL: "https://contactform-8f644-default-rtdb.firebaseio.com",
//   projectId: "contactform-8f644",
//   storageBucket: "contactform-8f644.appspot.com",
//   messagingSenderId: "969739600527",
//   appId: "1:969739600527:web:96694ce4d855ce0cc6e6fa",
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

//     --------------------------------------------------------------------------
// Reference contactInfo collections
// var contactInfo = firebase.database().ref("Information");

//     --------------------------------------------------------------------------

//  -------- THIS IS MAIN PART ---------
// Listen for a Submit
// document.getElementById("contactForm").addEventListener("submit", submitForm);

//  -------- THIS IS ALSO MAIN PART ---------
// function submitForm(e) {
//   e.preventDefault();

//   // Get input Values
//   let name = document.getElementById("name").value;
//   let company = document.getElementById("last").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let message = document.getElementById("message").value;

//   // IMPORTANT CONSOLE LOG ====
//   // console.log(name, company, email, phone, message);

//   //  Save message
//   saveContactInfo(name, company, email, phone, message);

//   // Reset Form
//   document.getElementById("contactForm").reset();

//   // Show alert
//   document.querySelector(".alert").style.display = "block";

//   // Hide alert after 3 seconds
//   setTimeout(function () {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);
// }

// Save infos to Firebase
// function saveContactInfo(name, last, email, phone, message) {
//   let newContactInfo = contactInfo.push();
//   newContactInfo.set({
//     name: name,
//     last: last,
//     email: email,
//     phone: phone,
//     message: message,
//   });
// }

//////////////////// SCROLLING ANIMATION
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#features");

btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();

  // OLD WAY (FOR EVERY BROWSERS)
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // NEW WAY
  section1.scrollIntoView({ behavior: "smooth" });
});
////////////////////////////////////////////////////////////////////////////////
// NEED TO FIX THIS
// FORM ONLY WORKING IN CONTACT FORM PAGE NOT ON OTHERS

const submitForm = function (e) {
  e.preventDefault();

  // Reset Form
  document.getElementById("contactForm").reset();

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 6000);
};

//  -------- THIS IS MAIN PART ---------
// Listen for a Submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

/////////////////////////////////////////////////////////////////////////////////////
// CALCULATOR 1

function getbmivalue() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  height = height * 12;
  height = height * 0.025; // height in meter

  var newbmivalue = (weight / (height * height)).toFixed(2);

  // newbmivalue = Math.round(newbmivalue)

  document.getElementById("bmivalue").value = newbmivalue;
}
