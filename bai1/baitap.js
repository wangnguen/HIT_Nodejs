// let products = [
// 	{
// 		id: 1,
// 		name: "Sony Xperia XZ",
// 		price: 100,
// 		brand: "Sony",
// 	},
// 	{
// 		id: 2,
// 		name: "Samsung Galaxy S7",
// 		price: 200,
// 		brand: "Samsung",
// 	},
// 	{
// 		id: 3,
// 		name: "Iphone 6",
// 		price: 300,
// 		brand: "Apple",
// 	},
// 	{
// 		id: 4,
// 		name: "Iphone 7",
// 		price: 400,
// 		brand: "Apple",
// 	},
// ];

// const newProduct = {
// 	id: 5,
// 	name: "Xiaomi Redmi Note 4",
// 	price: 150,
// 	brand: "Xiaomi",
// };

// products.push(newProduct);
// console.log(products);
// console.log(products.filter((item) => item != "Xiaomi Redmi Note 4"));
// console.log(products.find((item) => item["id"] === 4));
// products.sort((a, b) => b.price - a.price);
// console.log(products);
// console.log(
// 	products.reduce((total, item) => {
// 		return total + item.price;
// 	}, 0),
// );

/// bai2:
// const users = [
// 	{
// 		id: 1,
// 		name: "Nguyen Van A",
// 		age: 20,
// 		address: "Ha Noi",
// 	},
// 	{
// 		id: 2,
// 		name: "Tran Thi B",
// 		age: 25,
// 		address: "Ho Chi Minh",
// 	},
// 	{
// 		id: 3,
// 		name: "Le Thi C",
// 		age: 30,
// 		address: "Da Nang",
// 	},
// 	{
// 		id: 4,
// 		name: "Pham Van D",
// 		age: 35,
// 		address: "Hai Phong",
// 	},
// 	{
// 		id: 5,
// 		name: "Hoang Van E",
// 		age: 40,
// 		address: "Ho Chi Minh",
// 	},
// 	{
// 		id: 6,
// 		name: "Tran Thi F",
// 		age: 45,
// 		address: "Nha Trang",
// 	},
// ];

// const oldHuman = users.filter((user) => user.age >= 30);

// const findHuman = users.find((user) => user["address"] === "Ho Chi Minh");

// const checkHuman = users.some((user) => user.age === 50);

// const newArr = users.map((user) => user.name);

// console.log(oldHuman);
// console.log(findHuman);
// console.log(checkHuman);
// console.log(newArr);

// bai4
const customers = [
	{
		id: 1,
		name: "Nguyen Van A",
		age: 20,
		address: "Ha Noi",
		orders: [
			{
				id: 1,
				name: "Iphone 6",
				price: 300,
				quantity: 2,
			},
			{
				id: 2,
				name: "Iphone 7",
				price: 400,
				quantity: 1,
			},
		],
	},
	{
		id: 2,
		name: "Tran Thi B",
		age: 25,
		address: "Ho Chi Minh",
		orders: [
			{
				id: 3,
				name: "Samsung Galaxy S7",
				price: 200,
				quantity: 1,
			},
		],
	},
	{
		id: 3,
		name: "Le Thi C",
		age: 30,
		address: "Da Nang",
		orders: [
			{
				id: 4,
				name: "Sony Xperia XZ",
				price: 100,
				quantity: 3,
			},
		],
	},
	{
		id: 4,
		name: "Pham Van D",
		age: 35,
		address: "Hai Phong",
		orders: [],
	},
	{
		id: 5,
		name: "Hoang Van E",
		age: 40,
		address: "Ho Chi Minh",
		orders: [
			{
				id: 6,
				name: "Iphone 6",
				price: 300,
				quantity: 1,
			},
			{
				id: 7,
				name: "Iphone 7",
				price: 400,
				quantity: 1,
			},
		],
	},
	{
		id: 6,
		name: "Tran Thi F",
		age: 45,
		address: "Nha Trang",
		orders: [
			{
				id: 8,
				name: "Samsung Galaxy S7",
				price: 200,
				quantity: 1,
			},
			{
				id: 9,
				name: "Sony Xperia XZ",
				price: 100,
				quantity: 2,
			},
		],
	},
];

// const tmp1 = [];
// const newArr = () =>
// 	customers.forEach((item) => {
// 		if (item.orders.length) {
// 			tmp1.push(
// 				item.orders.reduce((total, item) => {
// 					return total + item.price;
// 				}, 0),
// 			);
// 		}
// 	});
// newArr();
// console.log(tmp1);

// const tmp2 = [];
// const filterCus = () => {
// 	customers.forEach((item) => {
// 		if (item.orders.length) {
// 			let res = item.orders.reduce((total, item) => {
// 				return total + item.price;
// 			}, 0);
// 			if (res > 300) {
// 				tmp2.push(item);
// 			}
// 		}
// 	});
// };

// filterCus();
// console.log(tmp2);

// const filterCus = () => {
// 	customers.forEach((item) => {
// 		if (item.orders.length) {
// 			let res = item.orders.reduce((total, item) => {
// 				return total + item.price;
// 			}, 0);
// 			item.totalPrice = res;
// 		}
// 	});
// };
// filterCus();
// let minCustomer = customers.reduce((min, customer) => (customer.totalPrice < min.totalPrice ? customer : min), customers[0]);

// console.log(minCustomer);

// const cus = customers.filter((item) => item.orders.length === 0);

// console.log(cus);
