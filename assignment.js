function feetToMile(feet){
    var mile= feet/5280;
    return mile;
}
var result=feetToMile();
console.log(result);


function woodCalculator(chair,table,bed){
    var chairneed=chair*1;
    var tableneed=table*3;
    var bedneed=bed*5;
   var total= chairneed+tableneed+bedneed;
   return total;
   
   }
   var result2=woodCalculator(3,7,8);
   console.log(result2);

   
   
   
   function tinyFriend(names){
    largest=names[0];
    for (let i = 0; i < names.length; i++) {
        var currentName=names[i].length;
            if(currentName>largest){
                largest=currentName;
            }
        
    }
    return largest;
   }
   var requiredName=tinyFriend(['Asa','moin','shilpa']);
   console.log(requiredName);



   function brickCalculator(floor){
     var bricks;
     if(floor<=10){
        bricks= (floor*15)*1000;
     }
     else if(floor<=20){
        bricks= ((10*15)+ ((floor-10)*12))*1000;
     }
     else if(floor >=21){
         bricks=((10*15)+(10*12)+((floor-20)*10))*1000;
     }
     return bricks;
   }

   var result3=brickCalculator(29);
   console.log(result3);
