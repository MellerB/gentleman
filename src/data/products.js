export const products =
[
    {
        name: "Jack Daniel's",
        age: 4,
        type: "Tennessee Whiskey",
        origin: "USA",
        price: 84.00,
        imageURL: "https://products3.imgix.drizly.com/ci-jack-daniels-old-no-7-92707d5e737cf4ac.jpeg?auto=format%2Ccompress&fm=jpg&q=20"
    },
    {
        name: "Jack Daniel's Gentleman Jack",
        age: 4,
        type: "Tennessee Whiskey",
        origin: "USA",
        price: 118.00,
        imageURL: "https://d3r5darlys1q8e.cloudfront.net/midvalleywine/jack-daniel-s-gentleman-jack-rare-tennessee-whiskey_1.jpg"
    },
    {
        name: "Johnnie Walker Red Label",
        age: 3,
        type: "Blend",
        origin: "Scotch Whisky",
        price: 59.00,
        imageURL: "https://media.danmurphys.com.au/dmo/product/900934-1.png"
    },
    {
        name: "Johnnie Walker Black Label 12",
        age: 12,
        type: "Blend",
        origin: "Scotch Whisky",
        price: 104.00,
        imageURL: "https://www.aeliadutyfree.pl/media/catalog/product/cache/image/1200x/17f82f742ffe127f42dca9de82fb58b1/b/3/b385ceafa327793caa16cb62550b91c6b99fd42f_5000267023625_1.jpg"
    },
    {
        name: "Johnnie Walker Green Label 15",
        age: 15,
        type: "Blend",
        origin: "Scotch Whisky",
        price: 167.00,
        imageURL: "https://winakonesera.pl/wp-content/uploads/2020/06/EW039.jpg"
    },
    {
        name: "Bushmills 10",
        age: 10,
        type: "Single Malt",
        origin: "Irish Whiskey",
        price: 118.00,
        imageURL: "https://www.celticwhiskeyshop.com/image/cache/2020%20Uploads/Bushmills_10yr_Single_Malt-776x1176.jpg"
    },
    {
        name: "The Glenlivet 12",
        age: 12,
        type: "Single Malt",
        origin: "Scotch Whisky",
        price: 137.00,
        imageURL: "https://www.lcbo.com/content/dam/lcbo/products/021097.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
    },
    {
        name: "The Singleton of Dufftown 12",
        age: 12,
        type: "Single Malt",
        origin: "Scotch Whisky",
        price: 159.00,
        imageURL: "https://cdn.webshopapp.com/shops/242291/files/309841246/image.jpg"
    },
    {
        name: "Glenfiddich 15",
        age: 15,
        type: "Single Malt",
        origin: "Scotch Whisky",
        price: 207.00,
        imageURL: "https://media.danmurphys.com.au/dmo/product/903946-1.png"
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