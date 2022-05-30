// On clicking remove button the item should be removed from DOM as well as localstorage.
var arr1=JSON.parse(localStorage.getItem("coffee"));
sum=0;
for(var i=0;i<arr1.length;i++)
{
  sum+=+(arr1[i].price);
}
document.querySelector("#total_amount").innerText=sum;
arr1.forEach(function(el,index)
{
    let div=document.createElement("div")
    div.setAttribute("id","div1")
    let img=document.createElement("img")
    img.setAttribute("id","img1")
    img.src=el.image;
    let name=document.createElement("h2")
    name.innerText=el.title;
    let h2=document.createElement("h2");
    h2.innerText=el.price;
    let btn=document.createElement("button")
    btn.innerText="Remove";
    btn.setAttribute("id","remove_coffee")
    btn.addEventListener("click",function()
    {
        remitem(el,index)
    })
    div.append(img,name,h2,btn)
    document.querySelector("#bucket").append(div)
})
function remitem(el,index)
{
  arr1.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(arr1))
    window.location.reload()
}
