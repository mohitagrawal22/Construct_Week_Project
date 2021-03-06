data=[
    {image:"https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
url:"https://www.rodanandfields.com/en-us/shop/spotless-regimen/p/UNRS001",
text:"SPOTLESS Regimen ",
price:"8980"
},
{
    image:"https://www.rodanandfields.com/en-us/medias/XTPCS01-Regimen-Explainer-Pore-Cleansing-MD-System-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyNTc5NXxpbWFnZS9wbmd8aW1hZ2VzL2gyOC9oMjkvMTQ2MDQwOTU3ODI5NDIucG5nfGYxY2EwZWMyODQxNTM0MTE5ODRmOTlkZjZmYTY5MzE2MDZjNjE5NmZmMjE4M2U1NTNmODE3ZDJhMWI3ZTM1Y2E",
    url:"https://www.rodanandfields.com/en-us/shop/pore-cleansing-md-system/p/XTPCS01",
    text:"Pore Cleansing MD System ",
    price:"2604"
},
{
    image:"https://www.rodanandfields.com/en-us/medias/DERDLB1-cat.jpg?context=bWFzdGVyfGltYWdlc3wxMDkyNHxpbWFnZS9qcGVnfGltYWdlcy9oNGEvaDE4Lzg4MjE4NDQxNDgyNTQuanBnfDVmY2E4ZmM1YzdlNjQxMmI4YjgzNGY4MDIwNWVlZDc2MmNhYzVjN2FjZmQyMTFiNmU1NDc4Y2RiNGQyOWFmZjk",
    url:"https://www.rodanandfields.com/en-us/shop/radiant-defense-liquid-brush/p/DERDLB1",
    text:"Radiant Defense Liquid Brush",
    price:"3834"
},
{
    image:"https://www.rodanandfields.com/en-us/medias/ESMRB01-720x600-Desktop-1-.jpg?context=bWFzdGVyfGltYWdlc3w0MTM2OHxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaDMxLzE0MDMyNzUyNTc0NDk0LmpwZ3w5OTBlOTQ0ZDA5MjhhMzJiZDc3NWI4MGQ4Zjc3ZGVmYmJmM2M0YmU5MDkxNTc5NmMzOTJiNjBiMzEwZDZhOTc1"
    ,
    url:"https://www.rodanandfields.com/en-us/shop/essentials-complete-eye-makeup-remover/p/ESMRB01",
    text:"ESSENTIALS Complete Eye Makeup Remover",
    price:"3228"
},

{
image:"https://www.rodanandfields.com/en-us/medias/ESBL200-cat.jpg?context=bWFzdGVyfGltYWdlc3wyMjg3NHxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDJhLzg4MjE4NDQ4NjkxNTAuanBnfGQ2M2NlOTA4ZWU1ODZjZjkyNDQwZTNhN2VhM2FjM2E1MmZjMjI3YWEyMjkzYmRmZDQ5ZGM2OGJlMWI4MjJjYTA",
url:"https://www.rodanandfields.com/en-us/shop/essentials-daily-body-moisturizer/p/ESBL200",
text:" ESSENTIALS Daily Body Moisturizer ",
price:"2724"
},

  {  image:"https://www.rodanandfields.com/en-us/medias/ESLS002-cat.jpg?context=bWFzdGVyfGltYWdlc3wzNjk5NHxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDRlLzg4MjE4NDQ5Njc0NTQuanBnfGQ5M2Q2OWZjNDEzM2Q4MTMwYTc5N2M3MThhYzdiODVjYTMzZjY2N2Y3MWVjYTNlZWNmNmRlMmEzMGNmNDlhY2Q",
    url:"https://www.rodanandfields.com/en-us/shop/essentials-lip-shield-spf-25-two-pack-/p/ESLS002",
    text:"ESSENTIALS Lip Shield SPF 25 (Two-Pack)",
    price:"1917"
},
]
displaydata(data);
    var cartArr=JSON.parse(localStorage.getItem("cartDetails")) || [];
function displaydata(data){
document.querySelector("#data").innerHTML="";

data.map(function(elem){
    var div=document.createElement("div");
    var avatar=document.createElement("img");
    avatar.setAttribute("src",elem.image);
    avatar.setAttribute("id","image");
    var link=document.createElement("a");
    link.setAttribute("href",elem.url);
    link.innerText=elem.text;
    link.setAttribute("id","link")
    var price =document.createElement("p");
    price.innerText=elem.price;
    price.setAttribute("id","price");
    var button=document.createElement("button");
    button.innerText="ADD TO Cart";
    button.setAttribute("id","button")
    button.setAttribute("id","button")
    button.addEventListener("click",function(){

        addtocart(elem);
    })

    div.append(avatar,link,price,button);
    document.querySelector("#data").append(div);

})

function addtocart(elem){
    console.log(elem);
    cartArr.push(elem);
    elem.quant=1;
    console.log(cartArr)
    localStorage.setItem("cartDetails",JSON.stringify(cartArr));
}

}
function sortItems(){
    var sorting=document.getElementById("sorter").value;
    console.log(sorting)
    if(sorting =='h2l'){
   data.sort(function(a,b){
     return b.price-a.price;
   })
      
    }
    if(sorting =='l2h'){
   data.sort(function(a,b){
     return a.price-b.price;
   })

    }
    displaydata(data)

  }
  var search =document.getElementById("search").addEventListener("keyup",search);

  function search(){
    var searchText=document.getElementById("search").value;
    console.log(searchText);
    var filterdata=data.filter(function(elem,index){
                 return elem.text.includes(searchText);
    })
    displaydata(filterdata);
    document.getElementById("items").textContent = filterdata.length;
  }




