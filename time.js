function gettiming (){
  const time = new Date();
  const date = time.getDate();
 const month = time.getMonth();
 const year = time.getFullYear();
 const day = time.getDay();
 const monthsarray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("month").innerHTML=monthsarray[month];
document.getElementById("date").innerHTML=date;
document.getElementById("date").style.fontSize="70px";
document.getElementById("month").style.fontSize="25px";
document.getElementById("year").style.fontSize="25px";
document.getElementById("day").style.fontSize="40px";

document.getElementById("year").innerHTML=year;
const dayarray=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
document.getElementById("day").innerHTML=dayarray[day];
}
gettiming();
