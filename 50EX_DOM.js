
const cl = console.log

/* 31) Get element with ID "container" from the page
 */
function getContainerElement(){
cl(document.getElementById("container"));

}


/* 32) Get every "td" from the page
 */
function allTd(){
cl(document.querySelectorAll("td"));

//document.getElementsByTagName('td')
}

/* 33) Create a cycle that prints the text inside every td of the page */

function TextInsideTd(){
var tbl = document.getElementById("tbl1");
var numRows = tbl.rows.length;

for (var i = 1; i < numRows; i++) {
    var ID = tbl.rows[i].id;
    var cells = tbl.rows[i].getElementsByTagName('td');
    for (var ic=0,it=cells.length;ic<it;ic++) {
        // alert the table cell contents
        // you probably do not want to do this, but let's just make
        // it SUPER-obvious  that it works :)
        alert(cells[ic].innerHTML);
    }
}
}

/* 34) Write a function to change the heading of the page
 */
function HeadingChange(){
 cl(document.title = "This is new title")
}
/* 35) Write a function to add an extra row to the table
 */
function addExtraRow(){
 var table = document.getElementById("tbl1")
 cl(table.insertRow(0));
}

/* 36) Write a function to add the class "test" to reach row in the table
 */
function addClassTest(){
var rows = document.getElementsByTagName('tr')

for(var i=1; i<rows.length; i++) {
  rows[i].classList.add("test");
}
cl(document.getElementsByClassName("test"));
}

/* 37) Write a function to add a red background to every link in the page
 */
function addBackgroundToLink(){
 var x = document.getElementsByTagName('a');
 for (var i = 0; i < x.length; i++) {
            x[i].style.color = 'red';
        }
        cl(document.querySelectorAll('a').style.color);
}

/* 38) Console log "Page loaded" when the page is correctly loaded
 */
 window.onload=function(){ 
     console.log("page loaded")
}

/* 39) Write a function to add new items to a UL
 */
function addNewItemsUL(){
 var Ul1 = document.querySelector("ul")
 var li = document.createElement("li")
 var textNode = document.createTextNode("New Item")

 li.appendChild(textNode)
 Ul1.appendChild(li)
 cl(document.querySelector("ul").innerHTML);
}

/* 40) Write a function to empty a list
 */
function emptyTheList(){
 var Item1 = document.getElementsByTagName("ul")[1];
 lItems.innerText = "" ;
 cl(document.getElementsByTagName("ul")[1]);
}

    