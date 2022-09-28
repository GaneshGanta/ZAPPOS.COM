    var count=0;
    let arr=["Be the first to shop the newest home styles—now on Zappos! Shop Home Now", "Say Good bye to Ttress with our Back-to-School Guide!Shop Kid's Style", "Easy Returns: FREE UPS Pickups from your home (no printer required)! Learn More", "Introducing Afterpay! Buy now, pay later. No Interest, ever! Learn More", "Easy Returns: FREE UPS Pickups from your home (no printer required)! Learn More"];

    carosel(count);

    function carosel(a){
        console.log("ganesh")
        let main=document.getElementById("carosel");
        main.innerHTML=null;
        for(let i=a;i<a+1;i++){
        console.log(arr[a]);
        let btn=document.createElement("button")
        btn.innerText="<";
        btn.addEventListener("click",leftSlider)
        let btn1=document.createElement("button")
        btn1.innerText=">";
    
        btn1.addEventListener("click",rightSlider)
        let p=document.createElement("p")
        p.innerText=arr[a];
        main.append(p,btn,btn1);

    }
    }
    carosel(count)
    let kids=document.getElementById("kid")
    kids.addEventListener("click",function(){
      window.location.href="/overrated-impulse-4022/kids_shoes/kids.html"
    })

function leftSlider(){
    if(count==0){
        count=4;
    }else{
        count=count-1
    }
         carosel(count);
    }
function rightSlider(){
    if(count==4){
        count=0;
    }else{
        count=count+1;
    }
     carosel(count);
}



let arr_of_images=[

    {Image:"https://m.media-amazon.com/images/I/71uRk+8BmWL._AC_SX255_.jpg",title:"Sneakers & Athletic Shoes"},
    {Image:"https://m.media-amazon.com/images/I/61fG76XoNJL._AC_SX255_.jpg",title:"Sandals"},
    {Image:"https://m.media-amazon.com/images/I/71nRTCE1YnL._AC_SX255_.jpg",title:"dresses"},
    {Image:"https://m.media-amazon.com/images/I/81F2loGWI+L._AC_SX255_.jpg",title:"Backpacks for School"},
    {Image:"https://m.media-amazon.com/images/I/711VZSyPARL._AC_SX255_.jpg",title:"Swimwear"},
    {Image:"https://m.media-amazon.com/images/I/71bsyTFrQbL._AC_SX255_.jpg",title:"Wedges"},
];

    let x=document.getElementById("popular")

    arr_of_images.forEach(function(el){
       
        let div=document.createElement("div");

        let box=document.createElement("div");
        box.addEventListener("click",function(){
            displaydata(el)
        })
        div.setAttribute("class","cards");
        let image=document.createElement("img");
        image.src=el.Image;
        let p=document.createElement("p");
        p.innerText=el.title;
        p.style.marginTop="20px";
        div.append(image);
        box.append(div,p)
        x.append(box)
    });
function displaydata(el){
    if(el.title==="Sneakers & Athletic Shoes"){
        window.location.href="/overrated-impulse-4022/Athlete shoes/athlete.html"
    }
    else if(el.title==="Sandals"){
        window.location.href="/overrated-impulse-4022/sandals/sandals.html"
    }
    else if(el.title==="dresses"){
        window.location.href="/overrated-impulse-4022/Dresses/dresses.html"
    }
    else if(el.title==="Backpacks for School"){
        window.location.href="/overrated-impulse-4022/Backpacks/backpack.html"
    }
    else if(el.title==="Swimwear"){
        window.location.href="/overrated-impulse-4022/Swim Wear/swimwear.html"
    }
    else if(el.title==="Wedges"){
        window.location.href="/overrated-impulse-4022/Wedges/wedges.html"
    }
    

}

    let arr_of_images2=[

        {image:"https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-CASUAL-SNEAKERS-JULY-TRIPTYCH-500X500.jpg",title:"Anything But Ordinary: Women's Sneakers",details:"Look for head-turning prints and colorways!",link:"SHOP WOMEN'S EVERYDAY SNEAKERS"},
        {image:"https://m.media-amazon.com/images/G/01/2022/homepage7.04/WOMENS-HP-SWIM-ON-SALE-JULY-TRIPTYCH-500X500.jpg",title:"Women's Swimwear on Sale",details:"Save on one pieces, swim separates, cover-ups, and more!",link:"SHOP SALE WOMEN'S SWIM"},
        {image:"https://m.media-amazon.com/images/G/01/2022/Mens/MENS-SWIM-NEW-ARRIVAL-JUNE-TRIPTYCH-500X500.jpg",title:"End-of-Season Swimwear for Men",details:"Dive in! it's not too late to suit up for pool season!",link:"SHOP SALE MEN'S SWIM"},

  ];

  let y=document.getElementById("popular1")

  arr_of_images2.forEach(function(el){

    let div=document.createElement("div");
    div.setAttribute("class","cards2");
    let box=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.image;
    let p=document.createElement("h3");
    p.innerText=el.title;
    let links=document.createElement("h4");
    links.innerText=el.link;
    let des=document.createElement("p")
    des.innerText=el.details;
    div.append(image);
    box.append(div,p,des,links);
    y.append(box);

  })

let arr_of_images3=[
    {image:'https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png',title:'Diversity Equity & Inclusion',des:'At Zappos, diversity and individuality are central to our core values.',spec:'LEARN MORE ABOUT ZAPPOS ONE PURPOSE'},
    {image:'https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg',title:'Zappos for Good',des:'Learn how to easily donate or recycle your secondhand items.',spec:'EXPLORE ZAPPOS FOR GOOD'},
    {image:'https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png',title:'Goods for Good',des:"We're highliting brands who are making a difference and helping build a better place for us all.",spec:'SHOP GOODS FOR GOOD'},
];

let last=document.getElementById("last");
arr_of_images3.forEach(function(el){
    let div=document.createElement("div");
    div.addEventListener('click',function(){
        redirect(el)
    })
    let image=document.createElement("img");
     image.src=el.image;
    let title=document.createElement("h3");
    title.innerText=el.title;
    let des=document.createElement("p");
    des.innerText=el.des;
    let spec=document.createElement("h4");
    spec.innerText=el.spec;
    div.append(image,title,des,spec);
    last.append(div)

});

function redirect(el){
    if(el.title=='Diversity Equity & Inclusion'){
        window.location.href="/overrated-impulse-4022/Zappos one purpose/purpose.html"
    }else if(el.title=="Zappos for Good"){
        window.location.href="/overrated-impulse-4022/Zappos for good/zappos good.html" 
    }else{
        window.location.href="/overrated-impulse-4022/Zappos Goods for Good/goods for good.html"

    }
}
let arr_of_images4=[


    {image:"https://m.media-amazon.com/images/I/91NlHmHtP1L._AC_SX255_.jpg",rating:"&#9825 2255;",name:"Calvin Klein Underwear modern cotton",price:"$75"},
    {image:"https://m.media-amazon.com/images/I/81NYE4eC+xL._AC_SX255_.jpg",rating:"&#9825 216",name:"Calvin Klein Modern Cootm Light weight",price:"$47"},
    {image:"https://m.media-amazon.com/images/I/61wO3GRY0SL._AC_SX255_.jpg",rating:"&#9825 688",name:"adidas Adilette Comfort ADJ",price:"$35.00"},
    {image:"https://m.media-amazon.com/images/I/71xRHd9E7AL._AC_SX255_.jpg",rating:"&#9825 176",name:"adidas Running Cloudfoam Pure 2.0",price:"$22.67"},
    {image:"https://m.media-amazon.com/images/I/71rQq8PIULL._AC_SX255_.jpg",rating:"&#9825 478",name:"Under Armour Raid 2.0 Shorts",price:"$22.67"},
    {image:"https://m.media-amazon.com/images/I/71zTWHC52RL._AC_SX255_.jpg",rating:"&#9825 245",name:"Under Armour Raid 2.0 Shorts",price:"$22.58"},
    {image:"https://m.media-amazon.com/images/I/711y37XiVqL._AC_SX255_.jpg",rating:"&#9825 2858",name:"Crocs Classic Tie-Dye-Grape",price:"$35.00"},
    {image:"https://m.media-amazon.com/images/I/71mmrJgjtbL._AC_SX255_.jpg",rating:"&#9825 193",name:"adidas Running Cloudfoam Pure 2.0",price:"$74.95"},
    {image:"https://m.media-amazon.com/images/I/81j8hvSmu7L._AC_SX255_.jpg",rating:"&#9825 26",name:"Calvin klein Men's Cottom Classic",price:"$59.50"},
    {image:"https://m.media-amazon.com/images/I/71u6W-t6wOL._AC_SX255_.jpg",rating:"&#9825 75",name:"Crocs kids classic clog(Toddler)",price:"$34.95"},
    {image:"https://m.media-amazon.com/images/I/71wbtYunZzL._AC_SX255_.jpg",rating:"&#9825 91",name:"adidas Running Questar",price:"$57.91"},
    {image:"https://m.media-amazon.com/images/I/81bdJtidxtL._AC_SX255_.jpg",rating:"&#9825 507",name:"Levi's@Women's 501@ High-Rise Shorts",price:"$49.99"},
    {image:"https://m.media-amazon.com/images/I/812dWoLYTeL._AC_SX255_.jpg",rating:"&#9825 228",name:"Under Armour UA TECH 1/2 ZIP",price:"$27.97"},
    {image:"https://m.media-amazon.com/images/I/61OB1zpc5WL._AC_SX255_.jpg",rating:"&#9825 14 ",name:"Under Armour New Freedom Flag",price:"$20.75"},
    {image:"https://m.media-amazon.com/images/I/81fKtCtOOGS._AC_SX255_.jpg",rating:"&#9825 316",name:"Levi's@Womes's Wedgie Straight",price:"$69.99"},
    {image:"https://m.media-amazon.com/images/I/61Edlc2zjAL._AC_SX255_.jpg",rating:"&#9825 402",name:"Crocs Classic Lined Tie-Dynamic ",price:"$40.00"},
    {image:"https://m.media-amazon.com/images/I/61TKFhh1HnL._AC_SX255_.jpg",rating:"&#9825 77",name:"Under Armour Kids Brawler 2.0 Pants",price:"$30.00"},
    {image:"https://m.media-amazon.com/images/I/71Fv5Q2gbPL._AC_SX255_.jpg",rating:"&#9825 59",name:"Under Armour ignite Vi Graphic FB",price:"$34.95"},
    
];

let left=0;
let right=5;
    
  function abc(left,right){
    let main=document.getElementById("popular_items");
    main.innerHTML=null;
  for(let i=left;i<=right;i++){
    let div=document.createElement("div")
    div.setAttribute("class","cards")
     let box=document.createElement("div")
     let images=document.createElement("img");
     images.src=arr_of_images4[i].image;
     div.append(images);
    //  let rating=document.createElement("p")
    //  rating.innerText=arr_of_images4[i].rating;
     let des=document.createElement("h4");
     des.innerText=arr_of_images4[i].name;
     let price=document.createElement("p");
     price.innerText=arr_of_images4[i].price;
     box.append(div,des,price);
     box.addEventListener("click",function(){
        storeData(arr_of_images4[i])
     })
     main.append(box);

 }
}

abc(left,right);


function slideRight(){
    console.log("ganws")
    if(right>11){
        return;

    }
    else{

    left=left+6;
    right=right+6;
    abc(left,right);
    }
}

function slideleft(){
    console.log("ganesh")

    if(left==0){
        console.log("ganesh");
    }else{
        right=right-6;
        left=left-6;
        abc(left,right)
    }
}


let arr_of_images5=[


    {Image:"https://www.zappos.com/boutiques/3377/hoka_header012722.gif",title:"HOKA"},
    {Image:"https://www.zappos.com/boutiques/2631/FreePeople_Header070121.jpg",title:"Free People"},
    {Image:"https://www.zappos.com/boutiques/4033/ON_header140422.jpg",title:"On"},
    {Image:"https://www.zappos.com/boutiques/108/stevemadden_header093013.jpg",title:"STEVE MADDEN"},
    {Image:"https://www.zappos.com/boutiques/179/nb_header170922.jpg",title:"New Balance"},
    {Image:"https://www.zappos.com/boutiques/148/birkenstock_head-010616.jpg",title:"Birkenstock"},
    {Image:"https://www.zappos.com/boutiques/184/ugg_header_092116.jpg",title:"UGG"},
    {Image:"https://www.zappos.com/boutiques/162/asics_header061206.gif",title:"ASICS"},
    {Image:"https://www.zappos.com/boutiques/193/brooks_head-060116.jpg",title:"Brooks"},
    {Image:"https://www.zappos.com/boutiques/775/crocs_head_042617.jpg",title:"Crocs"},
    {Image:"https://www.zappos.com/boutiques/272/sorel_head_101215.jpg",title:"SOREL"},
    {Image:"https://www.zappos.com/boutiques/617/THENORTHFACE_header042619.gif",title:"The North Face"},


];
 
function brands(arr){
    let brand=document.getElementById("trending")
    brand.innerHTML=null;

  arr.forEach(function(el){
       
    let div=document.createElement("div");
     let box=document.createElement("div");
     div.setAttribute("class","cards");
    let titles=document.createElement("p");
    titles.innerText=el.title;
    let image=document.createElement("img");
    image.src=el.Image;
    div.append(image)
    box.append(div,titles)
    brand.append(box);
});

};
brands(arr_of_images5);

function sliding(left,right){
    let main=document.getElementById("trending");
    main.innerHTML=null;
  for(let i=left;i<=right;i++){
    let div=document.createElement("div")
    div.setAttribute("class","cards")
     let box=document.createElement("div")
     box.addEventListener("click",function(){
         submit(arr_of_images5[i])
     });
     let images=document.createElement("img");
     images.src=arr_of_images5[i].Image;
     div.append(images);
     let price=document.createElement("p");
     price.innerText=arr_of_images5[i].title;
     box.append(div,price);
     main.append(box);

 }
}
sliding(left,right);
 function leftSlide(){

    if(left==0){
        return;
    }else{
        right=right-6;
        left=left-6;
        sliding(left,right)
    }

}

function rightSlide(){

    if(right>5){
        return;

    }
    else{

    left=left+6;
    right=right+6;
    sliding(left,right);
    }

}
import navbar from "../navbar/components/navbar.js"

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()

import footer from "../navbar/components/footer.js"

let foot=document.getElementById("foot")
foot.innerHTML=footer()


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

let first=document.getElementById("firstimg")
first.addEventListener("click",function(){
    window.location.href="/overrated-impulse-4022/snicker_section/shoes_snickers.html"
})


let final=document.getElementById("image")
final.addEventListener("click",function(){
    window.location.href="/overrated-impulse-4022/AffterPay/afterpay.html"
})



let searchbtn=document.getElementById("srch")
searchbtn.addEventListener("click",function(){
    let query=document.getElementById("search").value
    if(query==="kid"){
        window.location.href='/overrated-impulse-4022/kids_shoes/kids.html'
    }
    else if(query==="womens"){
        window.location.href='/overrated-impulse-4022/Dresses/dresses.html'
    }
    else if(query==="sandals"){
        window.location.href='/overrated-impulse-4022/sandals/sandals.html'
    }
    else if(query==="sneakers"){
        window.location.href='/overrated-impulse-4022/snicker_section/shoes_snickers.html'
    }
    else if(query==="Athletics"){
        window.location.href='/overrated-impulse-4022/Athlete shoes/athlete.html'
    }
    else if(query==="swimwear"){
        window.location.href='/overrated-impulse-4022/Swim Wear/swimwear.html'
    }
})
let firstLeft =document.getElementById("slideLeft")
firstLeft.addEventListener("click",function(){
    slideleft()
});
let firstRight =document.getElementById("slideRight")
firstRight.addEventListener("click",function(){
    slideRight()

});

let secLeft=document.getElementById("leftSlide")
secLeft.addEventListener("click",function(){
    leftSlide();
})
let secRight=document.getElementById("rightSlide")
secRight.addEventListener("click",function(){
    rightSlide();
})

let grid_images=[

    { 
        image:"https://m.media-amazon.com/images/I/71CqKYbcA3L._AC_SX255_.jpg",
        name:"Briken Stock Arizona Soft Footbed",
        price:140.00
    },
    { 
        image:"https://m.media-amazon.com/images/I/71JX4PjmkDL._AC_SX255_.jpg",
        name:"Birkenstock Gizeh Braided",
        price:135.00
    },
  
    { 
        image: "https://m.media-amazon.com/images/I/61CPKNuTfGL._AC_SX255_.jpg",
        name:"Birkenstock Arizona Earthy Vegan",
        price:110.00
    },
    {
        image:"https://m.media-amazon.com/images/I/715HZIo6VQL._AC_SX255_.jpg",
        name:"birkenstock Glenda by Papillio",
        price:125.00
    },
    
    {
        image:"https://m.media-amazon.com/images/I/718YWBy22nL._AC_SX255_.jpg",
        name:"Birkenstock Soley by Papillio",
        price:140.00
   },
    {
        image:"https://m.media-amazon.com/images/I/71eqSqz3bfL._AC_SX255_.jpg",
        name:"Biekenstock Francs Oiled Leather",
        price:125.00
    }, 
    {
       image:"https://m.media-amazon.com/images/I/71obW6DTZjL._AC_SX255_.jpg",
        name:"Birkenstock Oswego Canvas",
        price:135.00
    },
    {
        image:"https://m.media-amazon.com/images/I/61mX6yjKOTL._AC_SX255_.jpg",
        name:"Birkenstock Arizona VeganCanvas",
        price:110.00
    }
];



function sub_grid2(arr){

    let container=document.querySelector(".sub_grid2")
    
    arr.forEach(function(el){

      let div=document.createElement("div")
         div.addEventListener("click",function(){
            storeData(el)
         })
        let image=document.createElement("img")
        image.src=el.image;
        let name=document.createElement("h4")
        name.innerText=el.name;
        let price=document.createElement("p")
        price.innerText=`$${el.price}`;
        div.append(image,name,price)
        container.append(div)
    })


}
sub_grid2(grid_images)

function storeData(el){
    //let list=JSON.parse(localStorage.getItem("productinfo"))||[]
    //list.push(el)
    localStorage.setItem("productinfo",JSON.stringify(el))
    window.location.href="/overrated-impulse-4022/product_page/product.html"
    }

    let suedes=document.querySelector(".suedes")
    suedes.addEventListener("click",function(){
        window.location.href="/overrated-impulse-4022/slippers/slippers.html"
    })

    let suede=document.querySelector(".suede")
    suede.addEventListener("click",function(){
        console.log("ganesh")
        window.location.href="/overrated-impulse-4022/slippers/slippers.html"
    })
 