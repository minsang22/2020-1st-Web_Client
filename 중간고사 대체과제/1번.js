var now = new Date();
var birthday = new Date(2000, 9, 5);
var AfterHundred = new Date(2000, 9, 5);
AfterHundred.setDate(birthday.getDate() + 100);
var nTime = now.getTime(); 
var bTime = birthday.getTime();
var dif = (nTime - bTime);
var res = dif / (24*60*60*1000);
var ans = Math.floor(res);

var Hmonth = AfterHundred.getMonth() + 1;
var Nmonth = now.getMonth() + 1;

document.querySelector('#answer').innerText = ans + "일";
document.querySelector('#Date100').innerHTML = AfterHundred.getFullYear() + "년 " + Hmonth + "월 "+ AfterHundred.getDate() + "일";
document.querySelector('#AfterAns').innerText = ans + "일 후";
document.querySelector('#NowDay').innerHTML = now.getFullYear() + "년 " + Nmonth + "월 "+ now.getDate() + "일";
