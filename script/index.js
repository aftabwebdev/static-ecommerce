import { query, queryAll } from "./my_modules/settings.js";

/* navbar menu */
query(".navbar .menu").addEventListener("click", (event) => {
	event.stopPropagation();
	const navList = query(".navbar .bottom");
	if (navList.style.display === "block") {
		navList.style.display = "none";
	} else {
		navList.style.display = "block";
	}
});
