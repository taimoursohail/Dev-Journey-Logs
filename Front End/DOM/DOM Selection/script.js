document.getElementsByClassName("list")[0].innerHTML = 
    '<a href="https://www.expedia.com">London</a>';

document.getElementsByTagName("li")[1].innerHTML = 
    "<strong>Nottingham</strong>";

document.getElementById("Third").innerHTML = 
    "Walsall";

document.querySelectorAll(".list")[3].innerHTML = 
    "<em>Manchester</em>";

document.querySelectorAll("ul .list")[4].innerHTML = 
    "Birmingham";

document.querySelectorAll("body ul .list")[5].innerHTML = 
    "Dudly";

document.querySelectorAll(".list")[5].style.color = 
    "Green"; //by this you can't change the entire class elements because .style (setter property only applicable on single element because getElementsByClassName() returns a collection)

document.querySelector("input").checked = true;

document.querySelector("button").style.backgroundColor = "yellow";

document.querySelector("h1").style.color = "#ffd700";

document.querySelector("h1").innerHTML = "<u>'Hello World'</u>";

document.querySelector("h1").style.fontSize = "15rem";

document.querySelector("h1").classList.add("huge"); // I've added that class into external css file and re-sized the font

// TEXT Manupulation innerHTML v/s textContent vs innerText (CHECK BROWSER DEVELOPER TOOL)

console.log(document.querySelectorAll("ul > li")[3].innerHTML); // it reaveals the whole HTML 
console.log(document.querySelectorAll("ul > li")[1].innerText); // .innerText property is based on CSS where I hide it. Check ./stye.css
console.log(document.querySelectorAll("ul > li")[2].textContent); // .textContent property doesn't respect the CSS code it log or shows everything

