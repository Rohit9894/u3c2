function order()
{
 setTimeout(function(){
     alert("your order is accepted")
 },0)
 setTimeout(function(){
    alert("your order is being prepared")
},3000)
setTimeout(function(){
    alert("your order is being packed")
},8000)
setTimeout(function(){
    alert("your order is being fully delibver")
},10000)
setTimeout(function(){
    alert("your order is deliverd")
},12000)
}