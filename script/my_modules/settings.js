export function query(selector) {
	return document.querySelector(selector);
}
export function queryAll(selector) {
	return document.querySelectorAll(selector);
}

// query('input[type="submit"]').addEventListener("click", (e) =>
// 	e.preventDefault()
// );
