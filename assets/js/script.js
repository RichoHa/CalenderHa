

//Clear Button --> Revert Content and Clear Colour
document.getElementById("clear").addEventListener("click", function ()
 { localStorage.clear()
    document.getElementById("Task9").value = "Edit Me";
    document.getElementById("Task10").value = "Edit Me";
    document.getElementById("Task11").value = "Edit Me";
    document.getElementById("Task12").value = "Edit Me";
    document.getElementById("Task13").value = "Edit Me";
    document.getElementById("Task14").value = "Edit Me";
    document.getElementById("Task15").value = "Edit Me";
    document.getElementById("Task16").value = "Edit Me";
    document.getElementById("Task17").value = "Edit Me";
    document.getElementById("Task18").value = "Edit Me";
    document.getElementById("Task9").classList.remove("green");
    document.getElementById("Task10").classList.remove("green");
    document.getElementById("Task11").classList.remove("green");
    document.getElementById("Task12").classList.remove("green");
    document.getElementById("Task13").classList.remove("green");
    document.getElementById("Task14").classList.remove("green");
    document.getElementById("Task15").classList.remove("green");
    document.getElementById("Task16").classList.remove("green");
    document.getElementById("Task17").classList.remove("green");
    document.getElementById("Task18").classList.remove("green");
})

//Daily Task Functionality for 9.00

if(localStorage["Task9"]){
    var Task9 = localStorage["Task9"] ;
    document.getElementById("Task9").value = Task9 ;
}
document.getElementById("Submit9").addEventListener("click", function ()
{   var Task9 = document.getElementById("Task9").value ;
    localStorage.setItem("Task9", Task9);
    document.getElementById("Task9").classList.add("green");
} , false);
//Remove Green when changed
document.getElementById("Task9").addEventListener("change", function()
{
    document.getElementById("Task9").classList.remove("green");
})

//Daily Task Functionality for 10.00

if(localStorage["Task10"]){
    var Task10 = localStorage["Task10"] ;
    document.getElementById("Task10").value = Task10 ;
}
document.getElementById("Submit10").addEventListener("click", function ()
{   var Task10 = document.getElementById("Task10").value ;
    localStorage.setItem("Task10", Task10);
    document.getElementById("Task10").classList.add("green");
} , false);
//Remove Green when changed
document.getElementById("Task10").addEventListener("change", function()
{
    document.getElementById("Task10").classList.remove("green");
})

//Daily Task Functionality for 11.00

if(localStorage["Task11"]){
    var Task11 = localStorage["Task11"] ;
    document.getElementById("Task11").value = Task11 ;
}
document.getElementById("Submit11").addEventListener("click", function ()
{   var Task11 = document.getElementById("Task11").value ;
    localStorage.setItem("Task11", Task11);
    document.getElementById("Task11").classList.add("green");
} , false);
//Remove Green when changed
document.getElementById("Task11").addEventListener("change", function()
{
    document.getElementById("Task11").classList.remove("green");
})


//Daily Task Functionality for 12.00

if(localStorage["Task12"]){
    var Task12 = localStorage["Task12"] ;
    document.getElementById("Task12").value = Task12 ;
}
document.getElementById("Submit12").addEventListener("click", function ()
{   var Task12 = document.getElementById("Task12").value ;
    localStorage.setItem("Task12", Task12);
    document.getElementById("Task12").classList.add("green");
} , false);

//Remove Green when changed
document.getElementById("Task12").addEventListener("change", function()
{
    document.getElementById("Task12").classList.remove("green");
})

//Daily Task Functionality for 13.00

if(localStorage["Task13"]){
    var Task13 = localStorage["Task13"] ;
    document.getElementById("Task13").value = Task13 ;
}
document.getElementById("Submit13").addEventListener("click", function ()
{   var Task13 = document.getElementById("Task13").value ;
    localStorage.setItem("Task13", Task13);
    document.getElementById("Task13").classList.add("green");
} , false);

//Remove Green when changed
document.getElementById("Task13").addEventListener("change", function()
{
    document.getElementById("Task13").classList.remove("green");
})

//Daily Task Functionality for 14.00

if(localStorage["Task14"]){
    var Task14 = localStorage["Task14"] ;
    document.getElementById("Task14").value = Task14 ;
}
document.getElementById("Submit14").addEventListener("click", function ()
{   var Task14 = document.getElementById("Task14").value ;
    localStorage.setItem("Task14", Task14);
    document.getElementById("Task14").classList.add("green");
} , false);

//Remove Green when changed
document.getElementById("Task14").addEventListener("change", function()
{
    document.getElementById("Task14").classList.remove("green");
})

//Daily Task Functionality for 15.00

if(localStorage["Task15"]){
    var Task15 = localStorage["Task15"] ;
    document.getElementById("Task15").value = Task15 ;
}
document.getElementById("Submit15").addEventListener("click", function ()
{   var Task15 = document.getElementById("Task15").value ;
    localStorage.setItem("Task15", Task15);
    document.getElementById("Task15").classList.add("green");
} , false);

//Remove Green when changed
document.getElementById("Task15").addEventListener("change", function()
{
    document.getElementById("Task15").classList.remove("green");
})

//Daily Task Functionality for 16.00

if(localStorage["Task16"]){
    var Task16 = localStorage["Task16"] ;
    document.getElementById("Task16").value = Task16 ;
}
document.getElementById("Submit16").addEventListener("click", function ()
{   var Task16 = document.getElementById("Task16").value ;
    localStorage.setItem("Task16", Task16);
    document.getElementById("Task16").classList.add("green");
} , false);


//Remove Green when changed
document.getElementById("Task16").addEventListener("change", function()
{
    document.getElementById("Task16").classList.remove("green");
})

//Daily Task Functionality for 17.00

if(localStorage["Task17"]){
    var Task17 = localStorage["Task17"] ;
    document.getElementById("Task17").value = Task17 ;
}
document.getElementById("Submit17").addEventListener("click", function ()
{   var Task17 = document.getElementById("Task17").value ;
    localStorage.setItem("Task17", Task17);
    document.getElementById("Task17").classList.add("green");
} , false);


//Remove Green when changed
document.getElementById("Task17").addEventListener("change", function()
{
    document.getElementById("Task17").classList.remove("green");
})

//Daily Task Functionality for 18.00

if(localStorage["Task18"]){
    var Task18 = localStorage["Task18"] ;
    document.getElementById("Task18").value = Task18 ;
}
document.getElementById("Submit18").addEventListener("click", function ()
{   var Task18 = document.getElementById("Task18").value ;
    localStorage.setItem("Task18", Task18);
    document.getElementById("Task18").classList.add("green");
} , false);


//Remove Green when changed
document.getElementById("Task18").addEventListener("change", function()
{
    document.getElementById("Task18").classList.remove("green");
})

//Date Functionality
var fullDate= new Date()
document.getElementById("date").innerText = fullDate.toDateString();
var hourOfDay = fullDate.getHours();

if(hourOfDay<9){
    document.getElementById("time9").classList.add("greenFont");
    document.getElementById("time10").classList.add("greenFont");
    document.getElementById("time11").classList.add("greenFont");
    document.getElementById("time12").classList.add("greenFont");
    document.getElementById("time13").classList.add("greenFont");
    document.getElementById("time14").classList.add("greenFont");
    document.getElementById("time15").classList.add("greenFont");
    document.getElementById("time16").classList.add("greenFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
}

if(hourOfDay===9){
    document.getElementById("time9").classList.add("redFont");
    document.getElementById("time10").classList.add("greenFont");
    document.getElementById("time11").classList.add("greenFont");
    document.getElementById("time12").classList.add("greenFont");
    document.getElementById("time13").classList.add("greenFont");
    document.getElementById("time14").classList.add("greenFont");
    document.getElementById("time15").classList.add("greenFont");
    document.getElementById("time16").classList.add("greenFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===10){
    document.getElementById("time10").classList.add("redFont");
    document.getElementById("time11").classList.add("greenFont");
    document.getElementById("time12").classList.add("greenFont");
    document.getElementById("time13").classList.add("greenFont");
    document.getElementById("time14").classList.add("greenFont");
    document.getElementById("time15").classList.add("greenFont");
    document.getElementById("time16").classList.add("greenFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===11){
    document.getElementById("time11").classList.add("redFont");
    document.getElementById("time12").classList.add("greenFont");
    document.getElementById("time13").classList.add("greenFont");
    document.getElementById("time14").classList.add("greenFont");
    document.getElementById("time15").classList.add("greenFont");
    document.getElementById("time16").classList.add("greenFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===12){
    document.getElementById("time12").classList.add("redFont");
    document.getElementById("time13").classList.add("greenFont");
    document.getElementById("time14").classList.add("greenFont");
    document.getElementById("time15").classList.add("greenFont");
    document.getElementById("time16").classList.add("greenFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===13){
    document.getElementById("time13").classList.add("redFont");
    document.getElementById("time14").classList.add("greenFont");
    document.getElementById("time15").classList.add("greenFont");
    document.getElementById("time16").classList.add("greenFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===14){
    document.getElementById("time14").classList.add("redFont");
    document.getElementById("time15").classList.add("greenFont");
    document.getElementById("time16").classList.add("greenFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===15){
    document.getElementById("time15").classList.add("redFont");
    document.getElementById("time16").classList.add("greenFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===16){
    document.getElementById("time16").classList.add("redFont");
    document.getElementById("time17").classList.add("greenFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===17){
    document.getElementById("time17").classList.add("redFont");
    document.getElementById("time18").classList.add("greenFont");
} 

if(hourOfDay===18){
    document.getElementById("time18").classList.add("redFont");
}