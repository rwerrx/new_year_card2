window.onload = function() {
  let arr = [];
  for(i = 0; i < 6; i++) {
    let image = document.createElement('img');
    image.src = 'images/'+i+'.jpg'; 
    arr.push(image);
  }
  let final = new Date(2025, 0, 1, 0, 0);
  function getRandomImage() {
    let index = Math.floor(Math.random() * 6);
    return arr[index].src;
  }
  setInterval(function() {
    let currentDate = new Date();
    let countDown = final - currentDate;
    let days = (new Date(countDown).getTime()/1000/60/60/24);
    days = days - (days % 1);
    let hours = (new Date(countDown).getTime()/1000/60/60) - days*24;
    hours = hours - (hours % 1);
    let minutes = (new Date(countDown).getTime()/1000/60) - (hours*60) - (days*24*60);
    minutes = minutes - (minutes%1);
    let seconds = (new Date(countDown).getTime()/1000) - (minutes*60) - (hours*60*60) - (days*24*60*60);
    seconds = seconds - (seconds%1);
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
  }, 1000);
  setInterval(function() {
    document.querySelector('body').style.backgroundImage = "url("+getRandomImage()+")";
  }, 6000);
}
 
