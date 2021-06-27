let a;
let date;
let time;
const options = { weekday:'long',year:'numeric',month:'long',day:'numeric'}
setInterval(()=>{
  a=new Date();
  date=a.toLocaleDateString(undefined,options);
  t=document.getElementsByClassName('Hr');
  m=document.getElementsByClassName('Min');
  s=document.getElementsByClassName('Sec');
  d=document.getElementsByClassName('date');
  t[0].innerHTML=a.getHours();
  t[1].innerHTML=a.getHours();
  m[0].innerHTML=a.getMinutes();
  m[1].innerHTML=a.getMinutes();
  s[0].innerHTML=a.getSeconds();
  s[1].innerHTML=a.getSeconds();
  d[0].innerHTML=date;
  d[1].innerHTML=date;
},1000)

function swapFunc(button) {
  if (button.value=='on') {
    document.getElementById('divId').style='display:none'
    document.getElementById('divIdDark').style='display:block'
    button.style='background-color:white;color:#ff5722'
    button.value='off'
  } 
  else {
    document.getElementById('divId').style='display:block'
    document.getElementById('divIdDark').style='display:none'
    button.style='background-color:#212529;color:#009688'
    button.value='on'

  }
}

