$(document).ready(function(){
    $("button").click(function(){
        $("div").fadeIn(100);
        $("aside").width("100%");
 let i = $("aside").width();
 let u = 3;
 let x;
let y;
 x = setInterval(() => {
     --u
     y = $("aside").width();
   if(y <= 1){
    $("aside").animate({
        width : 0
   },1000);
   $("div").fadeOut();
        clearInterval(x);
       

   }else{
       $("aside").animate({
            width : y - (y / (3))
       },130);
   }
}, 150);

    });
    /*
let i = 9;
let x;
let y;
 x = setInterval(() => {
     if(i <= 0){
         clearInterval(x);
     }else{
    y = i--;
    console.log(y)
     }
}, 1000);
*/
});









