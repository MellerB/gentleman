
export const testCookies = () =>
{
    setCookieJson([
        {id: 1, count: 2},
        {id: 2, count: 1},
    {id: 3, count: 12},
    ])
    

    addItem(4)
    //removeItem(2)
    console.log(getCookieJson())
}

const addItem = (id) =>
{

    let tab = getCookieJson()

    const element = tab.filter((el) => el.id==id)[0]

    if(element)
    {
    const index = tab.findIndex((el) => el===element)

    tab[index] = {id: element.id, count: element.count+1}


    }
    else{
        tab.push({id:id,count:1})
    }
    setCookieJson(tab)
}

/*const removeItem = (id) =>
{

    let tab = getCookieJson()

    const element = tab.filter((el) => el.id==id)[0]

    if(element)
    {
    const index = tab.findIndex((el) => el===element)

    tab.pop(index)

    setCookieJson(tab)
    }

}*/
//SHOULD BE DONE AGAIN

const setCookieJson = (cookie) =>
{
    const json = JSON.stringify(cookie); 
    document.cookie = json
}

const getCookieJson = () =>{
    return JSON.parse(document.cookie)
}