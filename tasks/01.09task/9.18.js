const list = [
    {product: "Apple", price: 25},
    {product: "Cherry", price: 32},
    {product: "Strawberry", price: 45}
];

let max = 0; 
let res = '';

for (let el of list) {
  if (el.price > max) {
    max = el.price;
    res = el.product;
  } 
}

console.log(res);
