import navbar from "../components/navbar.js"

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()



let btn=document.getElementById("signin")
btn.addEventListener("click",function(){
    window.location.href="/overrated-impulse-4022/navbar/signup.html"
})
let userlist=JSON.parse(localStorage.getItem("userInfo"))||[]
let accountHolder=""
let account=document.getElementById("signin")

userlist.forEach((el)=>{
    accountHolder=(el.name)
})
let loginsucces=localStorage.getItem("userlogin")
if(loginsucces==="successfull"){
    account.innerText=accountHolder
    account.setAttribute("onclick",function(){
        console.log("inside")
    })
}
else{
    account.innerText="Sign In / Register"
}
let cart=document.getElementById("cart")
cart.addEventListener("click",function(){
    window.location.href="/overrated-impulse-4022/cart and payment/cart/cart.html"
})

