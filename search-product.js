const products = [
    { name: 'Sansung s3 phone', price: 21000 },
    { name: 'Asus laptop d34', price: 32000 },
    { name: 'apple smart watch', price: 18000 },
    { name: 'Bosundhora papper', price: 10000 },
    { name: 'old granny land phone', price: 100 },
]

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        // console.log(name);
        if (name.indexOf(searchText) != -1) {
            // console.log(name);
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, 'phone');
console.log(matched);