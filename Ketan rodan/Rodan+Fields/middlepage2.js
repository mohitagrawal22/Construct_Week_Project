var data = JSON.parse(localStorage.getItem("data")) || [];

var leftdiv = document.createElement("div");
leftdiv.setAttribute("id", "left77");

var up = document.createElement("div");
up.setAttribute("id", "up1_78");
var lefth1 = document.createElement("h1");
lefth1.innerText = "Discover the life- changing products loved by millions";
// lefth1.setAttribute("id", "left_h1");

up.append(lefth1);

var down = document.createElement("div");
down.setAttribute("id", "down1_79");
var img1 = document.createElement("img");
img1.setAttribute(
  "src",
  "https://www.rodanandfields.com/en-us/medias/Best-Sellers-Image-Desktop.jpg?context=bWFzdGVyfHJvb3R8NjA5MTd8aW1hZ2UvanBlZ3xoOTcvaGNkLzEyODg5MTg3ODExMzU4LmpwZ3w2ZGZjZGYxNzg4ZDY2ODI2NzQyZTMyNGI2YmExYmRkNGNjYTBkNGI4MzE5OTIwM2M4M2Q1MGZlMmY1YmFjMDJk"
);
img1.setAttribute("id", "img81");
var lefta = document.createElement("a");
lefta.setAttribute(
  "href",
  "https://www.rodanandfields.com/en-us/featured/c/best-sellers"
);
lefta.innerText = "Shop Best Sellers";
lefta.setAttribute("id", "left_a");

down.append(lefta, img1);

leftdiv.append(up, down);

document.querySelector("#container84").append(leftdiv);

data.map(function (elem) {
  var main = document.createElement("div");
  main.setAttribute("class", "main83");
  var img = document.createElement("img");
  img.setAttribute("id", "img82");
  img.setAttribute("src", elem.imgurl);

  var name = document.createElement("h4");
  name.innerText = elem.name;
  var information = document.createElement("p");
  information.innerText = elem.info;
  information.setAttribute("id", "info75");

  var pricedata = document.createElement("p");
  pricedata.innerText = elem.price;
  pricedata.setAttribute("id", "price81");

  var retailtag = document.createElement("p");
  retailtag.innerText = elem.retailP;
  retailtag.setAttribute("id", "retail80");

  var addBut = document.createElement("button");
  addBut.innerText = "Add to Bag";
  addBut.setAttribute("id", "button76");

  main.append(img, name, information, pricedata, retailtag, addBut);

  document.querySelector("#container84").append(main);
});
