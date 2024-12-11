//ENCABEZADO
var encabezado = document.querySelector('header');
console.log(encabezado);
var h7 = document.createElement("h7");
console.log(h7);
var textoh7 = document.createTextNode("PROYECTO");
console.log(textoh7);
encabezado.appendChild(h7);
h7.appendChild(textoh7);

var section1 = document.createElement("sectioon");
console.log(section1);
encabezado.appendChild(section1);

var div = document.createElement("div");
console.log(div);
section1.appendChild(div);
var h4 = document.createTextNode("INICIO");
console.log(h4);
div.appendChild(h4);

var div = document.createElement("div");
console.log(div);
section1.appendChild(div);
var h5 = document.createTextNode("SOBRE NOSOTROS");
console.log(h5);
div.appendChild(h5);

var div = document.createElement("div");
console.log(div);
section1.appendChild(div);
var h6 = document.createTextNode("CONTACTOS");
console.log(h6);
div.appendChild(h6);


//MAIN
var cuerpo = document.querySelector('main');
console.log(cuerpo);

var h1 = document.createElement("h1");
console.log(h1);

var textoh1 = document.createTextNode("PRODUCTOS");
console.log(textoh1);

cuerpo.appendChild(h1);
h1.appendChild(textoh1);



//SECTION
var section = document.createElement("section1");
console.log(section);
cuerpo.appendChild(section);


//ARTICLE 1
var article = document.createElement("article");
console.log(article);
section.appendChild(article);

var parrafo = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam suscipit voluptate itaque neque ipsum eaque quos cum, eum quod ad temporibus sint deleniti culpa natus hic sapiente labore voluptates.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam suscipit voluptate itaque neque ipsum eaque quos cum, eum quod ad temporibus sint deleniti culpa natus hic sapiente labore voluptates.");
console.log(parrafo);
article.appendChild(parrafo);

var img1 = document.createElement("img");
img1.src = "/leon.jpg";
article.appendChild(img1);



//ARTICLE 2
var article2 = document.createElement("article2");
console.log(article2);
section.appendChild(article2);

var parrafo2 = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam suscipit voluptate itaque neque ipsum eaque quos cum, eum quod ad temporibus sint deleniti culpa natus hic sapiente labore voluptates.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam suscipit voluptate itaque neque ipsum eaque quos cum, eum quod ad temporibus sint deleniti culpa natus hic sapiente labore voluptates.");
console.log(parrafo2);
article2.appendChild(parrafo2);

var img2 = document.createElement("img");
img2.src = "/gato.jpeg";
article2.appendChild(img2);

//Footer
var piePagina = document.querySelector('footer');
console.log(piePagina);

var h3 = document.createElement("h3");
console.log(h3);

var textoh3 = document.createTextNode("TODOS LOS DERECHOS RESERVADOS");
console.log(textoh3);

piePagina.appendChild(h3);
h3.appendChild(textoh3);


//ESTILOS
section1.style.display = "flex";
section1.style.justifyContent = "right";
section1.style.gap = "5rem";
h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontsize = "10px";
h1.style.textAlign = "center";
section.style.display = "flex";
section.style.justifyContent = "space-around";
section.style.border = "1px solid black";
article.style.border = "1px solid black";
article2.style.border = "1px solid black";
article.style.display = "flex";
article2.style.display = "flex";
article.style.flexDirection = "column";
article2.style.flexDirection = "column";
article.style.alignItems = "center"; 
article2.style.alignItems = "center";
img1.style.width = "500px";
img1.style.height = "500px";
img2.style.width = "500px";
img2.style.height = "500px";
piePagina.style.textAlign = "center";
