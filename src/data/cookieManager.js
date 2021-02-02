import {indexedProducts} from "./products"

export const getProducts = () =>
{
    const distribution = getCookieJson()
    let t = []
    distribution.forEach(dist => {
        t.push(makeProductObject(indexedProducts.filter(p => p.id===dist.id)[0],dist.amount))
    });
    return t
}

const makeProductObject = (product, amount) => 
{
    return {
    id: product.id,
    amount: amount,
    name: product.name,
    age: product.age,
    type: product.type,
    price: product.price,
    imageURL: product.imageURL,
    remove: () => removeItem(product.id),
    add: () => addItem(product.id),
    getCount: () => getItemsCount(product.id)
    }
}

const getItemsCount = (id) => {
    const tab = getCookieJson()
    const t = tab.filter((el) => el.id === id)[0]
    if(!t)
    {return 0}
    return t.count
}

export const addItem = (id) =>
{
    let tab = getCookieJson()

    const element = tab.filter((el) => el.id === id)[0]

    if(element)
    {
    const index = tab.findIndex((el) => el === element)
    tab[index] = {id: element.id, count: element.count+1}
    }
    else{
        tab.push({id:id,count:1})
    }
    setCookieJson(tab)
}

export const removeItem = (id) => 
{
    let tab = getCookieJson()
    const element = tab.filter((el) => el.id === id)[0]
    if(element)
    {
        const index = tab.findIndex((el) => el === element)
        if(element.count <= 1)
        {
            tab.splice(index,1)
        }
        else
        {
            tab[index].count-=1
        }
        setCookieJson(tab)
    }
}

export const getItemsAmount = () =>
{
    let tab = getCookieJson()
    return tab.reduce((a, b) => +a + +b.count, 0);
}

const setCookieJson = (cookie) =>
{
    const json = JSON.stringify(cookie); 
    document.cookie = json
}

const getCookieJson = () =>{
    if(document.cookie)
    {
        return JSON.parse(document.cookie)
    }
    else
    {
        return []
    }
}