const products = [
    {
        id: 1, name: 'Cerveza Stella Rubia lata', price: 200, category: 'cerveza', img: '../images/stella_lata.png', stock: 30
    },
    {
        id: 2, name: 'Vino Alma Mora Malbec', price: 550, category: 'vino', img: '', stock: 12
    },
    {
        id: 3, name: 'Coca-cola 2.5L', price: 320, category: 'no alcoholica', img: '', stock: 18
    },
    {
        id: 4, name: 'Cerveza Quilmes Rubia lata', price: 150, category: 'cerveza', img: '', stock: 50
    },
    {
        id: 5, name: 'Pepsi 2.5L', price: 300, category: 'no alcoholica', img: '', stock: 18
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products)
    })
};