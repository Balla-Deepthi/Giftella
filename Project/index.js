var url="https://project-carts.onrender.com/Gifts"
let container=document.getElementById("container")
async function getData()
{
    let response=await fetch(url)
    if(!response.ok)
    {
        throw new Error("HTTP Error",response.status)
    }
    let result=await response.json()
    localStorage.setItem("Gifts",JSON.stringify(result))
    displayData(result)
  
}
function displayData(result)
{
    container.innerHTML=``
    result.forEach(ele=>
    {
        console.log(ele)
        let item=document.createElement("div")
        let{image,title,price,id,category}=ele
        item.innerHTML=`
        <img src="${image}">
        <p>${category}</p>
        <p>${title}</p>
        <p>${price}</p>
        <a href=""><i class="ri-heart-line"></i></a>
        <a href=""><i class="ri-shopping-bag-line cart"></i></a>

        `
        container.appendChild(item)
    }
    )
}
getData()
