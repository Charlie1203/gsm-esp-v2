const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("mouseenter", function () {
	dropdownMenu.classList.add("visible");
});

dropdownToggle.addEventListener("mouseleave", function () {
	dropdownMenu.classList.remove("visible");
});

dropdownMenu.addEventListener("mouseenter", function () {
	dropdownMenu.classList.add("visible");
});

dropdownMenu.addEventListener("mouseleave", function () {
	dropdownMenu.classList.remove("visible");
});

const dropdownToggle2 = document.getElementById("drop2");
const dropdownMenu2 = document.getElementById("menu2");

dropdownToggle2.addEventListener("mouseenter", function () {
	dropdownMenu2.classList.add("visible");
});

dropdownToggle2.addEventListener("mouseleave", function () {
	dropdownMenu2.classList.remove("visible");
});

dropdownMenu2.addEventListener("mouseenter", function () {
	dropdownMenu2.classList.add("visible");
});

dropdownMenu2.addEventListener("mouseleave", function () {
	dropdownMenu2.classList.remove("visible");
});

const dropdownToggle3 = document.getElementById("drop3");
const dropdownMenu3 = document.getElementById("menu3");

dropdownToggle3.addEventListener("mouseenter", function () {
	dropdownMenu3.classList.add("visible");
});

dropdownToggle3.addEventListener("mouseleave", function () {
	dropdownMenu3.classList.remove("visible");
});

dropdownMenu3.addEventListener("mouseenter", function () {
	dropdownMenu3.classList.add("visible");
});

dropdownMenu3.addEventListener("mouseleave", function () {
	dropdownMenu3.classList.remove("visible");
});

function displayNav() {
	let nav = document.getElementById("navMobile");
	if (nav.style.display === "block") {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";
	}
}
