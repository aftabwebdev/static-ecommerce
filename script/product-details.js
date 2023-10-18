import { API, getAPI } from "https://aftabwebdev.github.io/api/API.js";
import { query } from "./my_modules/settings.js";

query(".navbar .menu").addEventListener("click", (event) => {
	event.stopPropagation();
	const navList = query(".navbar .bottom");
	if (navList.style.display === "block") {
		navList.style.display = "none";
	} else {
		navList.style.display = "block";
	}
});

const params = new URL(document.location).searchParams;
const productId = params.get("id");

getAPI(API.products, (products) => {
	products.forEach((product) => {
		if (productId === product.id) {
			query(".product-details").innerHTML = `
        <h2>${product.name}</h2>
        <div class="card">
          <div class="image">
            <img src="${product.image}"/>
          </div>
          <p>Price: $${(product.priceCents / 100).toFixed(2)}</p>
          <p>Ratings: ${product.rating.count}</p>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veritatis temporibus quod itaque perferendis incidunt tempora quis culpa dignissimos nisi accusamus error est mollitia consequuntur architecto odio placeat qui. Facilis, nesciunt ut reprehenderit quos culpa natus amet minima magnam. Deserunt ad consequuntur hic sunt mollitia! Facere tenetur autem natus totam.
          </article>
        </div>
      `;
		}
	});
});
