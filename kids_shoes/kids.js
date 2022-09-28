let toys=[{image:"https://m.media-amazon.com/images/I/71Gb7zOTHmL._AC_SR768,1024_.jpg",
name:"UGG Kids Rennon Low (Toddler/Little Kid)"
},
{image:"https://m.media-amazon.com/images/I/61-0XFgc29L._AC_SR768,1024_.jpg",
name:"UGG Kids Caplan Slip-On (Toddler/Little Kid/Big Kid)",price:100},
{image:"https://m.media-amazon.com/images/I/61cVxAErA0L._AC_SR768,1024_.jpg",
name:"UGG Kids Rennon II Weather (Toddler/Little Kid)",price:80},
{image:"https://m.media-amazon.com/images/I/61ggJZuHQzL._AC_SR768,1024_.jpg",
name:"UGG Kids Classic Clear Mini Checks (Toddler/Little Kid/Big Kid)",price:90},
{image:"https://m.media-amazon.com/images/I/71igE8yBLCL._AC_SR768,1024_.jpg",
name:"UGG Kids Fluff Yeah Slide Checks (Little Kid/Big Kid)",price:99},
{image:"https://m.media-amazon.com/images/I/61C9-iL5-iL._AC_SR768,1024_.jpg",
name:"UGG Kids Rennon II Weather (Toddler/Little Kid)",price:79},
{image:"https://m.media-amazon.com/images/I/71ggj8unfCS._AC_SR768,1024_.jpg",
name:"UGG Kids Neumel II Graphic (Little Kid/Big Kid)",price:69},
{image:"https://m.media-amazon.com/images/I/51JAxoYneJL._AC_SR768,1024_.jpg",
name:"UGG Kids Fluff Yeah Slide Checks (Toddler/Little Kid)",price:49},
{image:"https://m.media-amazon.com/images/I/61T0Oh1WGgL._AC_SR768,1024_.jpg",
name:"UGG Kids Highland Hi Heritage (Toddler/Little Kid/Big Kid)",price:59},
{image:"https://m.media-amazon.com/images/I/61WSg+sOxyL._AC_SR768,1024_.jpg",
name:"UGG Kids Neumel Ez-Fit (Toddler/Little Kid)",price:69},
{image:"https://m.media-amazon.com/images/I/51KWFH5-mFL._AC_SR768,1024_.jpg",
name:"UGG Kids Tasman (Infant/Toddler)",price:78},
{image:"https://m.media-amazon.com/images/I/61zKohHuOwL._AC_SR768,1024_.jpg",
name:"UGG Kids Cozy II (Toddler/Little Kid/Big Kid)",price:25},
{image:"https://m.media-amazon.com/images/I/71N5dfaFzqL._AC_SR768,1024_.jpg",
name:"UGG Kids Fluff Yeah Slide Spotty (Toddler/Little Kid)",price:58},
{image:"https://m.media-amazon.com/images/I/81kHZl74LFL._AC_SR768,1024_.jpg",
name:"UGG Kids Fluff Yeah Slide Spotty (Toddler/Little Kid)",price:69},
{image:"https://m.media-amazon.com/images/I/71zm45s0qHL._AC_SR768,1024_.jpg",
name:"UGG Kids Fluff Yeah Slide Spotty (Toddler/Little Kid)",price:25},
{image:"https://m.media-amazon.com/images/I/71I2ybOvoLL._AC_SR768,1024_.jpg",
name:"UGG Kids Fluff Yeah Slide (Little Kid/Big Kid)",price:22},
{image:"https://m.media-amazon.com/images/I/61GFOqsfPEL._AC_SR768,1024_.jpg",
name:"UGG Kids Highland Hi Heritage (Toddler/Little Kid/Big Kid)",price:45},
{image:"https://m.media-amazon.com/images/I/61ffy7yvbnS._AC_SR768,1024_.jpg",
name:"UGG Kids Tasman & Beanie (Infant/Toddler)",price:78},
{image:"https://m.media-amazon.com/images/I/61E0WtJKX-L._AC_SR768,1024_.jpg",
name:"UGG Kids Fluff Yeah Slide Checks (Toddler/Little Kid)",price:75},
{image:"https://m.media-amazon.com/images/I/61fRt9W0hjL._AC_SR768,1024_.jpg",
name:"UGG Kids Fluff Yeah Slide Checks (Little Kid/Big Kid)",price:85}
]


let append=()=>{
    let div=document.querySelector("#main")
    div.innerHTML=null;
    toys.forEach(function(el){
        let card=document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("id","img")
        image.src=el.image;
        let name=document.createElement("h3")
        name.innerText=el.name
        let price=document.createElement("h4")
        price.innerText=`$ ${el.price}`
        card.addEventListener("click",function(){
            storeData(el)
            })
    card.append(image,name,price)
    div.append(card)
    })
    }
append()
import navbar from "../navbar/components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()
import footer from "../navbar/components/footer.js"
document.getElementById("foot").innerHTML=footer()

let size=document.createElement("div")
  document.querySelector("#Wsize").addEventListener("click",function(){
     let div= document.querySelector("#Wsize")
    
 
   
     size.innerHTML=null
     size.setAttribute("class", "bargrid")
     size.innerHTML=`<h4>Toys(572)</h4><br><h4>Games(14)</h4><br><h4>Puzzles(15)</h4><br>`
     div.append(size)
  })
 let brand=document.createElement("div")
 document.querySelector("#brand").addEventListener("click", function(){
 let div=document.querySelector("#brand")
 brand.innerHTML=null;
 brand.innerHTML=`<input type="checkbox" id="brand1" name="brand1">
 <label for="brand1">Green Toys(65)</label><br>
 <input type="checkbox" id="brand2" name="brand2">
 <label for="brand2">Lego(186)</label><br>
 <input type="checkbox" id="brand3" name="brand3">
 <label for="brand3">Manhattan Toy(74)</label><br>
 <input type="checkbox" id="brand4" name="brand4">
 <label for="brand4">Mellisa & Doug(188)</label><br>
 <input type="checkbox" id="brand5" name="brand5">
 <label for="brand5">National Geographic(7)</label><br>
 <input type="checkbox" id="brand6" name="brand6">
 <label for="brand6">NERF(70)</label><br>
 <input type="checkbox" id="brand7" name="brand7">
 <label for="brand7">RavenBurger(234)</label><br>
 `
 div.append(brand)
 })
 let ct=document.createElement("div")
 document.querySelector("#price").addEventListener("click", function(){
     let div=document.querySelector("#price")
     ct.innerHTML=null;
     ct.innerHTML=`<input type="checkbox" id="c1" name="c1">
     <label for="c1">Harry Potter(298) </label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">Avengers(256)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">Batman(102)</label><br></br>
     <input type="checkbox" id="c4" name="c4">
     <label for="c4">Superman (123)</label><br></br>
     <input type="checkbox" id="c5" name="c5">
     <label for="c5">Warner Bros</label><br>
     <input type="checkbox" id="c6" name="c6">
     <label for="c6">Mickey Mouse</label><br>
     <input type="checkbox" id="c7" name="c7">
     <label for="c7">BabyYoda (11)</label><br>
     <input type="checkbox" id="c8" name="c8">
     <label for="c8">Lego (9)</label><br>`
     div.append(ct)
 })
 let c=document.createElement("div")
 document.querySelector("#color").addEventListener("click", function(){
 let div=document.querySelector("#color")
    c.innerHTML=null;
     c.innerHTML=`
     <input type="checkbox" id="c1" name="c1">
     <label for="c1">GOLDEN (11)</label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">BLACK (9)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">BLUE (2)</label><br>
     <input type="checkbox" id="c4" name="c4">
     <label for="c4">GREEN (11)</label><br>
     <input type="checkbox" id="c5" name="c5">
     <label for="c5">ORANGE (9)</label><br>
     <input type="checkbox" id="c6" name="c6">
     <label for="c6">RED (2)</label><br>
     <input type="checkbox" id="c7" name="c7">
     <label for="c7">PINK (11)</label><br>
     <input type="checkbox" id="c8" name="c8">
     <label for="c8">PURPLE (9)</label><br>
     <input type="checkbox" id="c9" name="c9">
     <label for="c9">YELLOW (2)</label><br>
     <input type="checkbox" id="c10" name="c10">
     <label for="c10">GREY (11)</label><br>
     <input type="checkbox" id="c11" name="11">
     <label for="c11">BROWN (9)</label><br>
     <input type="checkbox" id="c12" name="c12">
     <label for="c12">NAVY (2)</label><br>`
     div.append(c)
 })
 
 let feature=document.createElement("div")
 document.querySelector("#features").addEventListener("click", () => {
     let div=document.querySelector("#features")
     feature.innerHTML=null;
     feature.innerHTML=`<input type="checkbox" id="c1" name="c1">
     <label for="c1">3-4 years (11)</label><br>
     `
     div.append(feature)
 })
 let closure=document.createElement("div")
 document.querySelector("#closures").addEventListener("click",function() {
     let div=document.querySelector("#closures")
     closure.innerHTML=null;
     closure.innerHTML=`<input type="checkbox" id="c1" name="c1">
     <label for="c1">Licensed(298) </label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">Clock (2)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">Easy to Clean (2)</label><br></br>`
     div.append(closure)
 })
 let shoe1=document.createElement("div")
 document.querySelector("#shoe").addEventListener("click",function(e) {
     let div=document.querySelector("#shoe")
   shoe1.innerHTML=null;
   shoe1.innerHTML=`<input type="checkbox" id="c1" name="c1">
   <label for="c1">6-10oz(231) </label><br>
   <input type="checkbox" id="c2" name="c2">
   <label for="c2">Kids (62)</label><br>`
 div.append(shoe1)
 })
 let cat=document.createElement("div")
 document.querySelector("#cat").addEventListener("click",function() {
     let div=document.querySelector("#cat")
     cat.innerHTML=null;
     cat.innerHTML=`<input type="checkbox" id="c1" name="c1">
     <label for="c1">$50&under(2981) </label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">$&under150 (2123)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">$200&under(2238)</label><br></br>`
     div.append(cat)
 })
 function storeData(el){
    //  let list=JSON.parse(localStorage.getItem("productinfo"))
    //  list.push(el)
     localStorage.setItem("productinfo",JSON.stringify(el))
     window.location.href="/overrated-impulse-4022/product_page/product.html"
     }