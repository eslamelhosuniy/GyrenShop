let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let registetbtn = document.querySelector("#tab-register");
let loginBtn = document.querySelector("#tab-login");


registetbtn.addEventListener("click", () => {
	registetbtn.classList.add("active");
	loginBtn.classList.remove("active");
	login.classList.remove("active");
	login.classList.remove("show");
	signup.classList.add("active");
	signup.classList.add("show");
	
    
});

loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
	registetbtn.classList.remove("active");
	login.classList.add("show");
	login.classList.add("active");
	signup.classList.remove("active");
	signup.classList.remove("show");


});
