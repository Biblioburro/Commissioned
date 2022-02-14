var numDivs = document.getElementsByTagName("div").length;
var divs =document.getElementsByTagName("div");
let colorArr = ['red','green','blue']; 
let tagArr = ['p','span','H1','H2','H3','H4','H5','H6','td','li'];

function replaceArrTagsHTML(){

	for(let j = 0 ; j<tagArr.length;j++){
		var elements = document.getElementsByTagName(tagArr[j]);
		for(let i = 0 ; i<elements.length;i++){
			elements[i].innerHTML = 'bruh'; 	
		}
	}
}

function bruhHtmlText(tagName){
var elements = document.getElementsByTagName(tagName);
for(let i = 0 ; i< elements.length;i++){
elements[i].innerHTML = "bruh";

}
}
function bruhHtmlInput(){
var elements = document.getElementsByTagName("input");
for(let i = 0 ; i< elements.length;i++){
elements[i].value = "bruh";
}
var elements = document.getElementsByTagName("option");
for(let i = 0 ; i< elements.length;i++){
elements[i].innerHTML = "bruh";
}
}
function rickHtmlLinks(){
var imgurl = "https://c.tenor.com/Nbg6A9cVK4gAAAAC/cry-about-it-rickroll.gif"
var elements = document.getElementsByTagName("a");
for(let i = 0 ; i< elements.length;i++){
elements[i].href = imgurl;
}
}
function rickHtmlImgs(){
var imgurl = "https://c.tenor.com/Nbg6A9cVK4gAAAAC/cry-about-it-rickroll.gif"
var elements = document.getElementsByTagName("img");
for(let i = 0 ; i< elements.length;i++){
elements[i].src = imgurl;
}
}
bruhHtmlInput();
replaceArrTagsHTML();
rickHtmlImgs();
rickHtmlLinks();
bruhHtmlText("p");
bruhHtmlText("H1");








