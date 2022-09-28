let toys=[{image:"https://m.media-amazon.com/images/I/81B9UHWyMiL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Moppettes Bea Bear Stuffed Animal Nurturing Playset with Bear Plush Toy",
price:23.50
},
{image:"https://m.media-amazon.com/images/I/71bKgIkbNXL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Little Jurassics Chomp Dinosaur Stuffed Animal",
price:16.99
},
{image:"https://m.media-amazon.com/images/I/71F3b8EeynL._AC_SR768,1024_.jpg",
name:"Melissa & Doug Melissa & Doug On The Go Water Wow! Reusable Water-Reveal Deluxe Activity Pad",
price:43.50
},
{image:"https://m.media-amazon.com/images/I/815N1bYPccL._AC_SR768,1024_.jpg",
name:"LEGO LEGO DC Batman Batmobile Tumbler: Scarecrow Showdown 76239 (422 Pieces)",
price:23.40
},
{image:"https://m.media-amazon.com/images/I/812pjfDOsRL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Chicken Stunt Bike 60310 Building Kit; Fun Cool Toy for Kids (10 Pieces)",
price:12.90
},
{image:"https://m.media-amazon.com/images/I/81+-XbOIPeL._AC_SR768,1024_.jpg",
name:"LEGO LEGO Disney Encanto The Madrigal House 43202 Building Kit; Kids Who Love Construction Toys and House Play (587 Pieces)",
price:19.99
},
{image:"https://m.media-amazon.com/images/I/71jMCiYhDeL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Stunt Competition 60299 Building Kit (73 Pieces)",
price:32.80
},
{image:"https://m.media-amazon.com/images/I/81Ai9MzqnLL._AC_SR768,1024_.jpg",
name:"Ravensburger Ravensburger Universal Back to The Future Game Strategy Game for Ages 10 & Up",
price:12.50
},
{image:"https://m.media-amazon.com/images/I/819hi2UK7PL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Stunt Park 60293 Building Kit (170 Pieces)",
price:35.50
},
{image:"https://m.media-amazon.com/images/I/710VRkFD-zL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Selfie Stunt Bike 60309 Building Kit; Fun Selfie Stick Stunt Bike Toy for Kids (14 Pieces)",
price:25.50
},
{image:"https://m.media-amazon.com/images/I/514wwvpKs6L._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Demolition Stunt Bike 60297 Building Kit (12 Pieces)",
price:30.50
},
{image:"https://m.media-amazon.com/images/I/81zEkx-778L._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Fire Stunt Bike 60311 Building Kit; Fun, Cool Toy for Kids (11 Pieces)",
price:40.90
},
{image:"https://m.media-amazon.com/images/I/71Tj7A1U1YL._AC_SR768,1024_.jpg",
name:"LEGO LEGO City Rocket Stunt Bike 60298 Building Kit (14 Pieces)",
price:32.45
},
{image:"https://m.media-amazon.com/images/I/61Rs9CT9nAL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Wimmer-Ferguson Crinkle Tiger Baby Sensory Toy with Ribbon Tags",
price:40.85
},
{image:"https://m.media-amazon.com/images/I/61QCbKRypGL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Woodlanders Bella Owl Stuffed Animal",
price:35.50
},
{image:"https://m.media-amazon.com/images/I/61nlrSKsnPL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Little Nook Stuffed Animal with Removable Clothing, Sleeping Bag & Keepsake Box",
price:45.50
},
{image:"https://m.media-amazon.com/images/I/71YghW90kyL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Musical Forest Trio 3 Piece Wooden Toy Set for Toddlers with Bear Rattle, Llama Clacker & Hedgehog Guiro",
price:18.99
},
{image:"https://m.media-amazon.com/images/I/81MGmkS1h6L._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Squeezmeez Squeezable",
price:10.99
},
{image:"https://m.media-amazon.com/images/I/71jjpXR0xEL._AC_SR768,1024_.jpg",
name:"Manhattan Toy Manhattan Toy Little Jurassics Stuffed Animal",
price:45.54
},
{image:"https://m.media-amazon.com/images/I/61qxH8x6xkL._AC_SR768,1024_.jpg",
name:"Manhattan ToyLloyd",
price:8.99
},
]
let append=()=>{
let div=document.querySelector("#maintoys")
div.innerHTML=null;
toys.forEach(function(el){
    let card=document.createElement("div")
    card.setAttribute("id","colorChange")
    let image=document.createElement("img")
    image.setAttribute("id","img")
    image.src=el.image;
    let name=document.createElement("h3")
    name.innerText=el.name
    let price=document.createElement("h4")
    //price.innerText=`$${Math.floor(Math.random()*100)}`
    price.innerText=`$${el.price}`
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

 let sortBy =document.getElementById("sort")
 sortBy.addEventListener("change",sortData)

 function sortData(){
    let value=sortBy.value;

    if(value=="lth"){
    toys.sort(function(a,b){
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0;
      })
      console.log(toys)
      append(toys)
      } else {
    toys.sort(function(a,b){
        if(a.price<b.price) return 1;
        if(a.price>b.price) return -1;
        return 0;
      })
      console.log(toys)
     append(toys)
    }
}