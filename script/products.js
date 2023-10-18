import { API, getAPI } from "https://aftabwebdev.github.io/api/API.js";
import { query } from "./my_modules/settings.js";

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

/* fetch data */

getAPI(API.products, (products) => {
	products.forEach((product) => {
		const { id, name, priceCents, image } = product;

		query(".product-list-one").innerHTML += `
			<div class="card">
				<div class="image">
					<img src="${image}"	alt="Card Image" />
				</div>
				<h3>${name}</h3>
				<p>Price: $${(priceCents / 100).toFixed(2)}</p>
				<form method="get" action="product-details.html">
					<input type="hidden" name="id" value="${id}" />
					<input class="link-button" type="submit" value="Details" />
				</form>
			</div>
		`;
	});
});

// query("product-details").innerHTML = "Hello!";

const baseURL = "http://127.0.0.1:82";

const param = new URL("/pages/product-details.html", baseURL).searchParams;

param.forEach((value, key) => {
	console.log(key, value);
});
