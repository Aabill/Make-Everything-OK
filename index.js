
/* var e = document.getElementById('button');

e.addEventListener('click', function(){
    document.getElementById('okays').style.display = 'flex';
    
    document.getElementById('bar').style.display = 'block';

    setTimeout(function(){
        document.getElementById('bar').style.display = 'none';
    },2000);

}); */
var E = document.getElementById('E').style;
var I = document.getElementById('I').style;
var O = document.getElementById('O').style;
var N = document.getElementById('N').style;
var okays = document.getElementById('okays').style;

document.addEventListener('load', Init());
var btn = document.getElementById('button');
btn.addEventListener('click',function(){

    var progbar = document.getElementById('bar');
    progbar.style.display="block";
    var inter = 1;
    var k = setInterval(() => {

        var barfill = document.getElementById('bar-fill');
        barfill.style.width = inter+'%';
        inter++;
    }, 30);
    setTimeout(() => {
        clearInterval(k);
        progbar.style.display='none';
    }, 3000);
    
    var ids = [E,I,O,N];
    for(var i=0; i<=3; i++){
        ids[i].top = 0;
        ids[i].left = 0;
        ids[i].transform = 'rotate(0)';
    }
    E.paddingTop='15px';
    E.paddingLeft='15px';
    I.paddingTop= '65px';
    I.paddingLeft= '120px';
    O.paddingTop= '115px';
    O.paddingLeft= '180px';
    N.paddingTop= '165px';
    N.paddingLeft= '280px';

    okays.top = '50%';
    okays.left = '50%';
    okays.position = 'absolute';
    okays.transform = 'translate(-50%,-50%)';
    okays.backgroundColor = '#837c7c';
    okays.height = '250px';
    okays.padding = '15px';
    okays.borderRadius = '25px';
    okays.width = '400px'; 
    okays.alignItems = 'center';
    okays.justifyContent = 'center';
    okays.textAlign = 'center';
    okays.boxShadow = '15px 15px 5px 0px rgba(0,0,0,0.75)';

    okays.transition = 'background-color 3s ease,box-shadow 3s ease';
    /* okays.transition = 'box-shadow 3s ease'; */
    

    /* setTimeout(function()) */
    clearInterval(t);
});

var t;



function Init() {

    var ids = [E,I,O,N];
    
    t =  setInterval(function(){

    
        /* var top = Math.floor(Math.random(0) * 90 + 1);
        var left = Math.floor(Math.random(0) * 80 + 1); */
        var top = [];
        var left = [];
        var rot = [];
        for(var i=0; i<=3;i++){
            top[i]= Math.floor(Math.random(0) * 80 + 1);
            left[i]= Math.floor(Math.random(0) * 70 + 1);
            rot[i]= Math.floor(Math.random(0) * 360 + 1);

            ids[i].top = top[i]+'vh';
            ids[i].left = left[i]+'vw';
            ids[i].transition = '1s ease-in';
            ids[i].transform = 'rotate('+rot[i]+'deg)';
            ids[i].color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        }
        
        
    },1000);

   /*  E.top='90vh';
    E.left='80vw'; */
}