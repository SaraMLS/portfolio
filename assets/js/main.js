const burger = document.querySelector(".burger");
let navigation = document.querySelector(".navigation")

burger.addEventListener("click", () => {
	navigation.classList.toggle("active")
	document.body.classList.toggle("navigation-open")
	if (burger.classList.contains("active")) {
		burger.classList.remove("active")
		navigation.classList.add("hidden")
	} else {
		navigation.classList.remove("hidden")
		burger.classList.add("active")
	}
})