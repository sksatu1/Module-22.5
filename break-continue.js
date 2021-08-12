const products = [
    { name: 'Sansung s3 phone', price: 21000 },
    { name: 'Asus laptop d34', price: 32000 },
    { name: 'apple smart watch', price: 18000 },
    { name: 'Bosundhora papper', price: 10000 },
    { name: 'old granny land phone', price: 100 },
]
// use of break -------------------------------------

/* for (const product of products) {
    if (product.price < 1000) {
        break;
    }
    console.log(product)

} */

// use of continue -----------------------------------
for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}