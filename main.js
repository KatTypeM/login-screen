// Author: Jason DeBay


// Javascript
// links to html page
const containerLogin = document.querySelector(".container-login");
const inputEmail = document.querySelector("#input-email");
const labelEmail = document.querySelector("#label-email");
const inputPassword = document.querySelector("#input-password");
const labelPassword = document.querySelector("#label-password");
const displayLogin = document.querySelector(".display-login");
const containerWelcome = document.querySelector(".container-welcome");


// Floating label logic
const FloatLabel = (() => {
	// add active class
	const handleFocus = (e) => {
		const target = e.target;
		target.parentNode.classList.add("active");
		target.setAttribute("placeholder", target.getAttribute("data-placeholder"));
	};
	
	// remove active class
	const handleBlur = (e) => {
		const target = e.target;
		if(!target.value){
			target.parentNode.classList.remove("active");
		};
		target.removeAttribute("placeholder");
	};
	
	// register events
	const bindEvents = (element) => {
		const floatField = element.querySelector("input");
		floatField.addEventListener("focus", handleFocus);
		floatField.addEventListener("blur", handleBlur);
	};
	
	// get DOM elements
	const init = () => {
		const floatContainers = document.querySelectorAll(".container-input");
		floatContainers.forEach((element) => {
			if(element.querySelector("input").value){
				element.classList.add("active");
			};
			bindEvents(element);
		});
	};
	return {
		init: init
	};
})();
FloatLabel.init();


// logic for login button
const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", function (){
	// console.log('test btn');
	
	if(inputEmail.value === "" && inputPassword.value === ""){
		displayLogin.innerHTML = "Please enter a email and password.";
	}
	else if(inputEmail.value === "" && inputPassword.value !== ""){ 
		displayLogin.innerHTML = "Please enter a email.";
	}
	else if(inputEmail.value !== "" && inputPassword.value === ""){
		displayLogin.innerHTML = "Please enter a password.";
	}
	else{
		userLoginVerfication();
	};
	
});


 // logic for logout button
const btnLogout = document.querySelector("#btn-logout");
btnLogout.addEventListener("click", () => {
	containerWelcome.style.display = "none";
	containerLogin.style.display = "flex";
});


// logic for checking users against login list
// number of wrong logins
let countLogin = 5;
// function for number of wrong logins
function userLoginVerfication(){
	// get values from form
	let userName = inputEmail.value;
	let userPassword = inputPassword.value;
	// everytime button clicked minus login
	countLogin--;
	displayLogin.innerHTML = `Login Attempts remaining ${countLogin}`;
	
	for(let i = 0; i < users.length; i++){
		if(userName === users[i].email && userPassword === users[i].password){
			inputEmail.value = "";
			inputPassword.value = "";
			displayLogin.innerHTML = "Login Attempts 5";
			containerLogin.style.display = "none";
			containerWelcome.style.display = "flex";
			countLogin = 5;
			break;
		};
	};
	
	if(countLogin < 1){
		btnLogin.style.display = "none";
		displayLogin.innerHTML = "Login Disabled";
	};
};


// valid user list
const users = [
	{
	email: "cat@gmail.com",
	password: "meowmeow"
	},
	{
	email: "1",
	password: "1"
	},
	{
	email: "kat@gmail.com",
	password: "meowmeow"
	},
	{
	email: "qwe",
	password: "123"
	},
];
















