let h = document.getElementById("hour");
let m = document.getElementById("min");
let s = document.getElementById("sec");

const Time = () => {
   let a = new Date();
   hour.innerHTML = a.getHours();
   min.innerHTML = a.getMinutes();
   sec.innerHTML  = a.getSeconds();
   setInterval(() => {
    Time();
   },1000);
};
Time();




