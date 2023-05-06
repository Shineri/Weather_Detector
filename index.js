var setday="";
if (typeof document !== 'undefined') {
 setday = document.getElementById("date");
}
let weathercon = document.getElementById("weathercon");

const tempStatus = "{%tempstatus%}";

//condition to check sunny or cloudy
if (tempStatus == "Sunny") {
    weathercon.innerHTML =
      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
  } else if (tempStatus == "Clouds") {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
  } else if (tempStatus == "Rainy") {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
  } else {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
  }


const curDay =()=>{
let currDate = new Date();
 var weekDay = new Array(7);
 weekDay[0]="Sun";
 weekDay[1]="Mon";
 weekDay[2]="Tue";
 weekDay[3]="Wed";
 weekDay[4]="Thurs";
 weekDay[5]="Fri";
 weekDay[6]="Sat";
 const date = weekDay[currDate.getDay()];
 
 return date;
};
//curDay();

const getTime= ()=>{
    let currTime = new Date();
    const month =[
        "Jan","Feb","Mar","Apr","May","June",
        "July","Aug","Sep","Oct","Nov","Dec"
];
var curMonth=month[currTime.getMonth()+1];
var TodayDate=currTime.getDate();

let hours = currTime.getHours();
let mins = currTime.getMinutes();
let Timezone ="AM";

if(hours>=12){
    Timezone="PM";
    if(hours>12)
    hours=hours-12;
}
if(mins<10){
    mins='0'+mins;
}
return curMonth+" "+TodayDate+" | "+hours+":"+mins+" "+Timezone;
};
//getTime();

setday.innerHTML = curDay()+" | "+getTime();






