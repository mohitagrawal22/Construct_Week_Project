var leader=[{image:"https://www.rodanandfields.com/en-us/medias/14-exec-720x720-Sumita.jpg?context=bWFzdGVyfHJvb3R8NzAwNjN8aW1hZ2UvanBlZ3xoNzcvaGI5LzEzMjg1MDE4MTczNDcwLmpwZ3xkZDBiZmY0NTYyMzIyN2U1OTkzODdiZDQwMzJjMWE3ODFkNTNiZWIzNWVkZDUzZThjODRiMTAxZmRiZTI0YWFm",
name:"Dr. Sumita Butani",role:"Senior Vice President, Innovation"},
{image:"https://www.rodanandfields.com/en-us/medias/lp-Executives-4VerticalImageLockup-TimFalla-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NTQ2MnxpbWFnZS9qcGVnfGltYWdlcy9oYzYvaDQwLzg4MjIxNjEyNDQxOTAuanBnfDYxMzJiYTI1ZjY1OGNlODIxNjE4ZWI1ZGUxZjFiNTRmNWFjNzUyZjQ2MjRhOGYwM2Q4NTJmZTA0OGI1Y2E4MTM",
name:"DR. TIMOTHY FALLA, PhD",role:"Chief Scientific Officer"},
{image:"https://www.rodanandfields.com/en-us/medias/13-exec-720x720-Mel.jpg?context=bWFzdGVyfHJvb3R8MTAyMTM4fGltYWdlL2pwZWd8aDA1L2g3NS8xMzI4NTAxODM3MDA3OC5qcGd8ZGVmMGY3NzdlYWQ2ZGUxZDQzMjBkNzNhZTkyNGExZWYxMjdhYTdhMDA3MTI4ZTJjZGY4MzYzY2ZjOWM0M2Y5ZA",
name:"Melissa Seitz",role:"Vice President and General Manager, APAC"},
{image:"https://www.rodanandfields.com/en-us/medias/10-exec-720x720-Dalia.jpg?context=bWFzdGVyfHJvb3R8MTA4NjYyfGltYWdlL2pwZWd8aDIwL2gzMC8xMzI4NTAxODQzNTYxNC5qcGd8ZTE1MzIyZjk5YThkZGYwNmM0ZjYzZDRiMTViYjYyYzZlNjhhYTQzZGZkYjc0NzgzNjZhMmQ3ZTE0YzRmODI1Zg",
name:"Dalia Stoddard",role:"Chief Transformation Officer"},

{image:"https://www.rodanandfields.com/en-us/medias/12-exec-720x720-Janine.jpg?context=bWFzdGVyfHJvb3R8MTA4OTE2fGltYWdlL2pwZWd8aDJjL2g3YS8xMzI4NTAxODU2NjY4Ni5qcGd8MDFkNGNhZTZlOGJhNzJjNWNmNzFmZGZiYTIxNzY2ZWRmMTUyZDcwYTIyNWVlOGE0MjMxMjVhNTU0MGI1ZTgwZA",
name:"Janine Weber",role:"Senior Vice President, North America Sales"},]

leader.map(function(elem){
    var div1=document.createElement("div")
    var avatar=document.createElement("img");
    avatar.setAttribute("src",elem.image);
    avatar.setAttribute("id","avatar")
    var name=document.createElement("p");
    name.innerText=elem.name;
    name.setAttribute("id","name")
    var role=document.createElement("p");
    role.innerText=elem.role;
    role.setAttribute("id","role")
div1.append(avatar,name,role);
document.querySelector("#container2").append(div1);
})