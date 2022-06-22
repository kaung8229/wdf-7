let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; // array type = HTML collections -> a tags
val = document.links[0]; 
val = document.links[3];
val = document.links[3].id;
val = document.links[3].className; // string

val = document.links[3].classList; // array type = DOMTokenList // array
val = document.links[3].classList[0];
val = document.links[3].classList[1];


val = document.forms; // array type = HTML collections -> form tag
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className; // String
val = document.forms[0].classList; // array type = DOMTokenList
val = document.forms[0].action; 
val = document.forms[0].method; 


val = document.images; // array type = HTML collections -> img tags
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className; //String
val = document.images[0].classList; // array type = DOMTokenList
val = document.images[0].classList[0];

val = document.images[0].alt;
val = document.images[0].src;
val = document.images[0].getAttribute("type");
val = document.images[0].getAttribute("alt");


val = document.scripts; //HTML Collection
val = document.scripts[0];
// val = document.scripts[0].classList; // DOMTokenList
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute("src");
val = document.scripts[0].getAttribute("type");


// console.log(val);


// change style with js
// document.getElementById("taskTitle").style.backgroundColor = "yellowgreen";
// document.getElementById("taskTitle").style.color="#fff";
// document.getElementById("taskTitle").style.padding="5px";


// change content
// document.getElementById("taskTitle").textContent = "My Lists"; // can't write html code
// document.getElementById("taskTitle").innerText = "My Jobs"; // can't write html code
// document.getElementById("taskTitle").innerHTML = "<span style='color:red'>My Jobs</span>"; // can write html code



// call by class name
let lis = document.getElementsByClassName("list-group-item");
// console.log(lis); 
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[1].textContent = "Have to visit"; // overwrite all html code and text in li tag



// call by tag name (Element)
let litags = document.getElementsByTagName("li");
// console.log(litags);
// console.log(litags[0]);
// litags[0].style.color = "blue";
// litags[1].innerText = "Have to visit"; // overwrite all html code and text in li tag



// querySelector ( First Only One )
// console.log(document.querySelector("#taskTitle"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));

document.querySelector("li").style.color = "blue"; // only first li
document.querySelector("ul li").style.color = "blue"; // only first ul > first li
document.querySelector("ul li:nth-child(odd)").style.color = "blue"; // only odd first li
document.querySelector("ul li:nth-child(even)").style.color = "blue"; // only even first li
document.querySelector("ul li:last-of-type").style.color = "blue"; // only last li
document.querySelector("ul li:nth-of-type(3)").style.color = "blue"; // only chlid (3) li


// let listitems = document.querySelector("ul").querySelector(".list-group-item"); // first class list-group-item
//  listitems = document.querySelector("ul").getElementsByClassName("list-group-item"); // HTMl collection li
// console.log(listitems);
// console.log(listitems[3]);
// console.log(typeof listitems);


// let arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function(arritem,idx){
//     console.log(arritem);

//     // arritem.textContent = "Hello";

//     arritem.innerText = `${idx} : Hello`;
// })





// querySelectorALL()
let its = document.querySelector("ul.list-group li.list-group-item");
// console.log(its);


let itms = document.querySelectorAll("ul.list-group li.list-group-item"); // NodeList -> array type
// console.log(itms);
// console.log(itms[3]);

// itms.forEach(function(itm,idx){
//     // console.log(itm);

//     // itm.textContent = "Hello";

//     itm.innerText = `${idx} : Hello`;
// })


let liodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodds);

let lievens = document.querySelectorAll("li:nth-child(even)");
// console.log(lievens);


liodds.forEach(function(liodd){
    // console.log(liodd);
    liodd.style.backgroundColor = "gray";
})


for(let i = 0; i < lievens.length; i++){
    // console.log(i);
    lievens[i].style.backgroundColor = "silver";
}





// Children

let chl;

let getul = document.querySelector("ul.list-group");
// console.log(getul);

let getli = document.querySelector("li.list-group-item");
// console.log(getli);

chl = getul.children; // HTMl collection
// console.log(chl);
// console.log(chl[3]);


// getul.children[1].innerText = "Have to eat";
// getul.children[1].innerHTML = `Have to read <a href="#" id="delete-item2" class="delete-item"><i class="far fa-trash-alt"></i></a>`


// children to children

chl = getul.children; // HTMl collection -> array type
chl = getul.children[1];
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList; // DOMTokenList -> array type
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].getAttribute("href");
        // ul       li           a        HTML collection
chl = getul.children[1].children[0].children;
        // ul       li           a       i
chl = getul.children[1].children[0].children[0];
// console.log(chl);




// first element child
// chl = getul.querySelector("li");
chl = getul.firstElementChild;
// console.log(chl);

// last element child
// chl = getul.querySelector("li:last-child");
chl = getul.lastElementChild;
// console.log(chl);


// child element count
// chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;


// console.log(chl);



// parent element
const getfirstli = document.querySelector("li.list-group-item:first-child");
// console.log(getfirstli);

let par = getfirstli.parentElement;
// console.log(par);



// next element sibling
        // listitem 1   listitem 2
let sbl = getfirstli.nextElementSibling;
        // listitem 1   listitem 2       listitem 3
    sbl = getfirstli.nextElementSibling.nextElementSibling;
        // listitem 1   listitem 2       listitem 3         listitem 4           listitem 5
    sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

    // console.log(sbl);


// previous element sibling
let psbl = getfirstli.nextElementSibling.previousElementSibling;

// console.log(sbl);




// Create Element
var newli = document.createElement("li");

// Add ID
newli.id = "new-item";


// Add class (className)
newli.className = "list-group-item";
// newli.className = "list-group-item acc";
// newli.className = "list"; //overwirte

// Add class (classList)
// newli.classList.add("efg");
// newli.classList.add("hik"); // append


// Add Attribute
newli.setAttribute("title","newitem");



// Add text
// newli.textContent = "hay";
// newli.innerText = "hi";
// newli.innerHTML = `List item 6 <a href="#" id="delete-item4" class="delete-item delete-me"><i class="far fa-trash-alt"></i></a>`;



// create text node
newli.appendChild(document.createTextNode("Save"));

// console.log(newli);




const newlink = document.createElement("a");

// add href
newlink.href = "#";

// add id
newlink.id = "delete-item6";

// add class
newlink.classList.add("delete-item");


newlink.innerHTML = `<i class="far fa-trash-alt"></i>`;

// console.log(newlink);


// append a to li
newli.appendChild(newlink);

// console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);





// Replace ELement

const newtitleh2 = document.createElement("h2");

newtitleh2.id = "tasktitle";

var newcaption = document.createTextNode("All My Lists");
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);

const oldtitleh4 = document.getElementById("taskTitle");
// console.log(oldtitleh4);



// replaceChild()

const getcardaction = document.querySelector(".card-action");
getcardaction.replaceChild(newtitleh2,oldtitleh4);




// Remove ELement
const getlis = document.querySelectorAll("li");
// console.log(getlis);
// console.log(getlis[0]);
// getlis[0].remove();
// getlis[5].remove();



// Remove child element
const getfirstul = document.querySelector("ul");
// console.log(getfirstul);

// getfirstul.remove(); self delete

getfirstul.removeChild(getlis[5]); //delete child




// Revision

// className vs classList

const firstli = document.querySelector("li:first-child");
// console.log(firstli);
// console.log(firstli.children); //HTML collection
// console.log(firstli.children[0]);


let firstlink;

firstlink = firstli.children[0];
// console.log(firstlink.className);

// firstlink.className = "delete-myself";
// firstlink.className = "delete-item";
// firstlink.className = "delete-item delete-me deleter-myself";


// firstlink = firstlink.classList; // DOMTokenList
// console.log(firstlink);
// console.log(firstlink[0]);
// console.log(firstlink[1]);



// firstlink.classList.add("delete-ourserve");
// firstlink.classList.add("delete-myself");
// firstlink.classList.add("delete-ourserve","delete-myself");


// firstlink.className = "delete-item delete-me deleter-myself delete-ourserve";
// firstlink.className = "delete-item delete-me deleter-myself";


// firstlink.classList.remove("delete-myself");
// firstlink.classList.remove("delete-myself","delete-ourserve");


// replace(old,new) -> classList
// firstlink.classList.replace("delete-me","delete-myself");
// firstlink.classList.replace("delete-item","delete-ourserve");


// contains() -> classList
if(firstlink.classList.contains("delete-me")){
    // console.log("Yes");
}else{
    // console.log("No");
}



if(firstlink.className === "delete-item"){
    // console.log("Yes");
}else{
    // console.log("No");
}

// console.log(firstlink.className);




// Attribute

let getatt = firstlink.href;
getatt = firstlink.getAttribute("href");
// console.log(getatt);
firstlink.setAttribute("href","https://google.com");

getatt = firstlink.hasAttribute("href");
// console.log(getatt); //true
getatt = firstlink.hasAttribute("title");
// console	.log(getatt);//false




// addEventListener(eventtype,function)

const clearbtn = document.querySelector(".clear-tasks");

// Method 1
// clearbtn.addEventListener('click',(e)=>{

// 	// console.log('hay i am working');

// 	// console.log(e);
// 	// console.log(e.target);
// 	// console.log(this);

// 	e.preventDefault();

// });


// Method 2

clearbtn.addEventListener("click",myclick);

// console.log(clearbtn.className);

function myclick(e){

	// console.log("i am working");

	// console.log(e);
	// console.log(e.target);
	// console.log(this);

	let val;

	val = e.target.className;
	val = e.target.classList; //DOM Token List
	val = e.target.id;
	// console.log(val);

	// e.target.innerText = "Finished";


	// Event Type
	val = e.type;
	// console.log(val);

	// Coordinates event - relateive to the window
	let clientx = e.clientX;
	let clienty = e.clientY;
	// console.log(clientx,clienty);


	// Coordinates event - relateive to the element
	let offsetx = e.offsetX;
	let offsety = e.offsetY;
	// console.log(offsetx,offsety);

}


// MouseEvent
const clbtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const headingh2 = document.querySelector('h2');


// single click
// clbtn.addEventListener('click',mouseeventtype);


// double click
// clbtn.addEventListener('dblclick',mouseeventtype);


// mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);


// mouseup
// clbtn.addEventListener('mouseup',mouseeventtype);


// mouseenter
// card.addEventListener('mouseenter',mouseeventtype);


// mouseover
// card.addEventListener('mouseover',mouseeventtype);


// mouseleave
// card.addEventListener('mouseleave',mouseeventtype);


// mouseout
// card.addEventListener('mouseout',mouseeventtype);


// mousemove
// card.addEventListener('mousemove',mouseeventtype);


function mouseeventtype(e){

	console.log(`Event type = ${e.type}`);

	// headingh2.textContent = `Mouse X = ${e.clientX}, Mouse Y = ${e.clientY}`;
	// headingh2.textContent = `Mouse X = ${e.offsetX}, Mouse Y = ${e.offsetY}`;

	// document.body.style.background = `rgb(${e.clientY},${e.clientX},${e.clientY},1)`;

}


// const fomel = document.querySelector("form");

// fomel.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
// 	console.log(`Event Type = ${e.type}`);

// 	e.preventDefault();
// }


const inputtask = document.getElementById("task");
const geth2 = document.querySelector("h2");

// input event
// keydown
// inputtask.addEventListener('keydown',inputeventtypetake);

// keypress
// inputtask.addEventListener('keypress',inputeventtypetake);

// keyup
// inputtask.addEventListener('keyup',inputeventtypetake);

// input
// inputtask.addEventListener('input',inputeventtypetake);

// focus
// inputtask.addEventListener('focus',inputeventtypetake);

// blur
// inputtask.addEventListener('blur',inputeventtypetake);

// cut (ctrl + X)
// inputtask.addEventListener('cut',inputeventtypetake);

// paste (ctrl + v)
// inputtask.addEventListener('paste',inputeventtypetake);

// change
// inputtask.addEventListener('change',inputeventtypetake);

function inputeventtypetake(e){
	console.log(`Event Type = ${e.type}`);

	// console.log(inputtask.value);
	// geth2.textContent = inputtask.value;

	console.log(e.target.value);
	geth2.textContent = e.target.value;
}



// Event bubbling
// document.querySelector(".card-title").addEventListener('click',function(){
// 	console.log("I am card title")
// })

// document.querySelector(".card-content").addEventListener('click',function(){
// 	console.log("I am card content")
// })

// document.querySelector(".card").addEventListener('click',function(){
// 	console.log("I am card")
// })



// Event Delegation

// const deleitem = document.querySelector(".delete-item");

// deleitem.addEventListener("click",deleteitem);

// function deleteitem(e){

// 	console.log("i am delete item");

// 	console.log(e.target);

// 	e.preventDefault();

// }



// document.body.addEventListener("click",eventdeleg);

function eventdeleg(e){

	// console.log("i am working");
	// console.log(e.target);


	      // i
	// if(e.target.className == "far fa-trash-alt"){
	// 	console.log("i")
	// }


	      // i       a
	// if(e.target.parentElement.className == "delete-item"){
	// 	console.log("i")
	// }


	     // i        a
	// if(e.target.parentElement.className == "delete-item delete-me"){
	// 	console.log("i")
	// }


	// with classList
	if(e.target.parentElement.classList.contains("delete-item")){
		// console.log("i");

			// i
		// e.target.remove();

			// i		a
		// e.target.parentElement.remove();

			// i 		a				li
		e.target.parentElement.parentElement.remove();


	}

	e.preventDefault();

}


document.querySelector("form").addEventListener('submit',function(e){

	e.preventDefault();

	// console.log("hel");

	const getnewtask = document.getElementById('task').value;

	// console.log(getnewtask);

	// localStorage.setItem("mytasks",getnewtask);

	let alltasks;

	if(localStorage.getItem("mytasks") === null){
		alltasks = [];
	}else{
		alltasks = JSON.parse(localStorage.getItem("mytasks"));
	}

	alltasks.push(getnewtask);

	// localStorage.setItem("mytasks",alltasks);

	// JSON.stringify()
	localStorage.setItem("mytasks",JSON.stringify(alltasks));

	console.log(alltasks);
})

