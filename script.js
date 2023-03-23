let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
tony = ()=>{
    a = new Date();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    date = a.toLocaleDateString(undefined, options); 
    document.getElementById('h1').innerHTML = time + "<br>on " + date;
};
clr = setInterval(tony,1000)