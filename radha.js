let btn = document.getElementById("btn");
let show = document.getElementById("main_content");
let tit = document.getElementById("tit");
let lod = document.getElementById("Loder");

window.addEventListener("load", function(){
  lod.style.display = "none";
});

btn.addEventListener("click", function(){
  let text = document.getElementById("textbar").value; 
  let uper = text.toUpperCase();
  console.log(uper);
 
 if(uper == "ARUN KUMAR" || uper === "ARUN KUMAR " || uper == "ARUN RAJPUT" || uper == "ARUN RAJPUT " || uper == "ARUN RAJPOOT" || uper == "ARUN RAJPOOT " || uper == "ARUN" || uper == "ARUN "){
   show.classList.remove("hiden");
   tit.innerHTML = uper;
 }else{
   alert("Please Type The Birthday's Boy Name. 🙏🙏🙏")
 }
});

function myTime(){
  let date = new Date();
  let H = date.getHours();
  let M = date.getMinutes();
  let S = date.getSeconds();
  
  
  let h = (H < 10) ? "0" + H : H;
  let m = (M < 10) ? "0" + M : M
  let s = (S < 10) ? "0" + S : S;

  
  let hrs = document.getElementById("hrs");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let section = document.getElementById("section");
  
  if(h <= 12){
    section.innerHTML = 'PM';
  }else{
    section.innerHTML = 'AM';
  };
  
  if(h > 12){
    h = h - 12;
    h = "0" + h;
  }
  
  hrs.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  
  
};

setInterval(myTime, 1000);



