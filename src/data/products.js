export const products =
    [
        {
            name: "Jacek Daniel",
            age: 12,
            type: "burbon",
            origin: "USA",
            price: 69.69,
            imageURL: "https://propaganda24h.pl/environment/cache/images/500_500_productGfx_1293384820a33685a0938e2fd74f85c4.jpg"
        },
        {
            name: "Jaś Wędrowniczek red",
            age: 3,
            type: "Blend",
            origin: "chyba szkocja",
            price: 3.50,
            imageURL: "https://smaczajama.pl/userdata/public/gfx/a8f6bd71f68ed70a7adc9eacdaf5fa02.jpg"
        },
        {
            name: "Jacek Daniel",
            age: 12,
            type: "burbon",
            origin: "USA",
            price: 69.69,
            imageURL: "https://propaganda24h.pl/environment/cache/images/500_500_productGfx_1293384820a33685a0938e2fd74f85c4.jpg"
        },
        {
            name: "Jaś Wędrowniczek red",
            age: 3,
            type: "Blend",
            origin: "chyba szkocja",
            price: 3.50,
            imageURL: "https://smaczajama.pl/userdata/public/gfx/a8f6bd71f68ed70a7adc9eacdaf5fa02.jpg"
        },
        {
            name: "Jacek Daniel",
            age: 12,
            type: "burbon",
            origin: "USA",
            price: 69.69,
            imageURL: "https://propaganda24h.pl/environment/cache/images/500_500_productGfx_1293384820a33685a0938e2fd74f85c4.jpg"
        },
        {
            name: "Jaś Wędrowniczek red",
            age: 3,
            type: "Blend",
            origin: "chyba szkocja",
            price: 3.50,
            imageURL: "https://smaczajama.pl/userdata/public/gfx/a8f6bd71f68ed70a7adc9eacdaf5fa02.jpg"
        }
    ]


export const indexedProducts = (() => {
    return products.map((product, id) => {
        return {
        id: id,
        name: product.name,
        age: product.age,
        type: product.type,
        price: product.price,
        imageURL: product.imageURL
        }
    }) 
})()