	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli - $1.99",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: true,
        nutFree: true,
        organic: false,
		price: 1.99
	},
	{
		name: "Bread - $2.35",
		vegetarian: true,
		glutenFree: false,
        lactoseFree: true,
        nutFree: true,
        organic: false,
		price: 2.35
	},
    {
		name: "Organic Bagel - $2.75",
		vegetarian: false,
		glutenFree: true,
        lactoseFree: true,
        nutFree: true,
        organic: true,
		price: 2.75
	},
    {
		name: "Organic Plums - $2.99",
		vegetarian: false,
		glutenFree: true,
        lactoseFree: true,
        nutFree: true,
        organic: true,
		price: 2.99
	},
    {
		name: "Almond Granola - $3.97",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: true,
        nutFree: false,
        organic: true,
		price: 3.97
	},
    {
		name: "Maple Cookies - $4.45",
		vegetarian: true,
		glutenFree: false,
        lactoseFree: false,
        nutFree: true,
        organic: false,
		price: 4.45
	},
	{
		name: "Organic Potatoes - $4.97",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: true,
        nutFree: true,
        organic: true,
		price: 4.45
	},
	{
		name: "Organic Yogurt - $5.99",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: true,
        nutFree: true,
        organic: true,
		price: 5.99
	},
    {
		name: "Yogurt - $7.99",
		vegetarian: true,
		glutenFree: true,
        lactoseFree: false,
        nutFree: true,
        organic: false,
		price: 7.99
	},
    {
		name: "Salmon - $10.00",
		vegetarian: false,
		glutenFree: true,
        lactoseFree: true,
        nutFree: true,
        organic: false,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
        else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
        else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
        else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
