let sign=()=>{
    window.location.href="/overrated-impulse-4022/navbar/signup.html"
}


let fun=()=>{
    console.log(userlist)
    let email=document.getElementById("email").value
    let pwd=document.getElementById("pwd").value
    userlist.forEach((el)=>{
        if(email===el.email&&pwd===el.password){
            let login=localStorage.setItem("userlogin","successfull")
            window.location.href="/overrated-impulse-4022/Home page/Homepage.html"
        }
        else{
            alert("Invalid Credentials or User not found")
        }
    })
    // window.location.href="/overrated-impulse-4022/navbar/nav.html"
}

let userlist=JSON.parse(localStorage.getItem("userInfo"))||[]
let loginsucces=localStorage.getItem("userlogin")

