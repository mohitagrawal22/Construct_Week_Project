var middlepagedata3 = JSON.parse(localStorage.getItem("middlepagedata3")) || [];

var title = document.createElement("h1");
title.setAttribute("class", "title1_86");
title.innerText = "Derm Inspired Skincare for Every Concern";
document.querySelector("#container85").append(title);

var imgdiv = document.createElement("div");
imgdiv.setAttribute("class", "imgdiv87");

middlepagedata3.map(function (elem, index, arr) {
  var main = document.createElement("div");
  main.setAttribute("class", "main88");

  var mainup = document.createElement("div");
  mainup.setAttribute("id", "mainup89");

  var maindown = document.createElement("div");
  maindown.setAttribute("id", "maindown90");

  var img1 = document.createElement("img");
  img1.setAttribute("src", elem.imgurl1);
  img1.setAttribute("class", "image1_91");
  // var divimg = document.createElement("div");
  // divimg.setAttribute("class", "overlay");

  var img2 = document.createElement("img");
  img2.setAttribute("src", elem.imgurl2);
  img2.setAttribute("class", "image2_92");

  var name = document.createElement("h4");
  name.setAttribute("id", "prodtitle");
  name.innerText = elem.name;

  mainup.append(img1, img2);
  maindown.append(name);

  main.append(mainup, maindown);

  imgdiv.append(main);

  document.querySelector("#container85").append(imgdiv);
});

var botbut = document.createElement("button");
botbut.setAttribute("class", "but93");
botbut.innerText = "Shop All products";
document.querySelector("#container85").append(botbut);
