const burger = document.querySelector(".burger");
const navbar = document.querySelector("nav");
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

let burgerRect = burger.getBoundingClientRect()
let burgerHeight = burgerRect.top + burgerRect.height

document.addEventListener("scroll", () => {
	let className = "scrolled"
	if (window.scrollY >= (burgerHeight - 20)) {
		navbar.classList.add(className)
		burger.classList.add(className)
	} else {
		navbar.classList.remove(className)
		burger.classList.remove(className)
	}
})