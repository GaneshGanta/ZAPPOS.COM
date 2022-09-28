

//fetch cart from LS
let cart=JSON.parse(localStorage.getItem('cart'))||[]
let itemlength=JSON.parse(localStorage.getItem("items"))
let tbody = document.querySelector(".tbody");

let totalQuantity = 0;
let totalPrice = 0;
let sPrice = 0;

displayData(cart);
function displayData(data) {
  data.forEach(function (item, index, array) {
    let row = document.createElement("div");
    row.className = "trow";
    
    let leftside = document.createElement("div");
    leftside.className = "leftside";
    
    let img = document.createElement("img");
    img.setAttribute("src", item.image);
    
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerText = item.name;
    
    let h3 = document.createElement("h3");
    h3.innerText = item.name;
    
    div.append(h4, h3);
    leftside.append(img, div);
    
    let rightside = document.createElement("div");
    rightside.className = "rightside";
    let table_acc = document.createElement("div");
    table_acc.className = "table-action";
    
    //price
    let mrp = document.createElement("h3");
    mrp.innerText = `(${item.price} each)`;
    
    // totalQuantity
    let totalQTBtn = document.createElement("button");
    totalQTBtn.className = "btn-minddle";
    let qty = 1;
    totalQuantity += qty;
    totalQTBtn.innerText = qty;
    
    //totalAmount
    let h1 = document.createElement("h1");
    let total = (item.price * qty).toFixed(2);
    totalPrice += +total;
    h1.innerText = `$${total}`;
    h1.className = "row-total";
    
    let actionDiv = document.createElement("div");
    
    //inc function
    let incBtn = document.createElement("button");
    incBtn.className = "inc-btn";
    incBtn.innerText = "+";
    incBtn.addEventListener("click", function () {
      qty++;
      if (qty >= 1) {
        totalQTBtn.innerText = qty;
        totalQuantity += 1;
        sPrice = item.price;
        total = (item.price * qty).toFixed(2);
        h1.innerText = `$${total}`;
        displayTotalQuantity();
        increaseDisplayTotalPrice(sPrice);
      }
    });
    
    //dec function
    let decBtn = document.createElement("button");
    decBtn.className = "dec-btn";
    decBtn.innerText = "-";
    decBtn.addEventListener("click", function () {
      if (qty > 1) {
        qty--;
        totalQuantity -= 1;
        totalQTBtn.innerText = qty;
        sPrice = item.price;
        total = (item.price * qty).toFixed(2);
        h1.innerText = `$${total}`;
        displayTotalQuantity();
        decreaseDisplayTotalPrice(sPrice);
      } else {
        alert("Carts need minimul one item");
      }
    });

    actionDiv.append(incBtn, totalQTBtn, decBtn);

    let anqarTarg = document.createElement("a");
    anqarTarg.innerText = "Remove";
    anqarTarg.addEventListener("click", function () {
      deleteFunc(item, index, array);
    });

    table_acc.append(h1, mrp, actionDiv, anqarTarg);
    rightside.append(table_acc);
    row.append(leftside, rightside);
    tbody.append(row);
  });
}

//delete item
function deleteFunc(item, index, array) {
  array.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(array));
  window.location.reload();
}

//total quantity
let h3TotalQt = document.querySelector(".totQt");
let totQty = document.querySelector(".totQty");
let smTQ = document.querySelector(".smTQ");
function displayTotalQuantity() {
  h3TotalQt.innerText = `${itemlength} Item in My Cart`;
  totQty.innerText = `Cart Summary (${itemlength} Items)`;
  smTQ.innerText = `Subtotal (${itemlength} items)`;
}
displayTotalQuantity();

//total price
let h3TotalPrice = document.querySelector(".page-total");
function displayTotalPrice() {
  totalPrice = totalPrice.toFixed(2);
  h3TotalPrice.innerText = `$${totalPrice}`;
}
displayTotalPrice();

//total price after increase
function increaseDisplayTotalPrice(sPrice) {
  let h3TotalPrice = document.querySelector(".page-total");
  let oldPrice = h3TotalPrice.innerText;
  oldPrice = oldPrice.split("$");
  let val = oldPrice[1];
  let newVal = (+val + +sPrice).toFixed(2);
  h3TotalPrice.innerText = `$${newVal}`;
}

//total price aftre decrease
function decreaseDisplayTotalPrice(sPrice) {
  let h3TotalPrice = document.querySelector(".page-total");
  let oldPrice = h3TotalPrice.innerText;
  oldPrice = oldPrice.split("$");
  let val = oldPrice[1];
  let newVal = (+val - +sPrice).toFixed(2);
  h3TotalPrice.innerText = `$${newVal}`;
}

//check out button click
document.querySelector(".chek-btn").addEventListener("click", function () {
  let finalPrice = document.querySelector(".page-total");
  let oldPrice = finalPrice.innerText;
  oldPrice = oldPrice.split("$");
  let val = oldPrice[1];
  localStorage.setItem("totalQuantity", totalQuantity) || "0";
  localStorage.setItem("totalCartPrice", val);
  window.location.href = "../checkoutPage/checkout.html";
});

