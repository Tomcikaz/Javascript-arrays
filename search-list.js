const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (inStock.includes(search.toLowerCase() ) ) {
message = `We have <strong> ${search.toLowerCase()} </strong> in stock!`; 
}
else {
 message = `Sorry we don't have any <strong> ${search.toLowerCase()} </strong> :(`; 
}
document.querySelector("main").innerHTML = `<p>${message}</p>`;