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
    console.log(getCookieJson())
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