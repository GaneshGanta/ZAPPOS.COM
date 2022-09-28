
function user(n,e,p){
    this.name=n
    this.email=e
    this.password=p
}






let userlist=JSON.parse(localStorage.getItem("userInfo"))||[]


let fun=()=>{
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("pwd").value
    let reenterpwd=document.getElementById("rpwd").value
    console.log(password)
    console.log(reenterpwd)
     if(password===reenterpwd){
            let newUser=new user(name,email,password)
            console.log(newUser)
            userlist.push(newUser)
            let list=localStorage.setItem("userInfo",JSON.stringify(userlist))
            window.location.href="/overrated-impulse-4022/navbar/login.html"
        }
        else{
            alert("Password is not same re-enter the correct password")
        }
}
