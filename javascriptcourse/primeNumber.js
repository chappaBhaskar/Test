


function prime(value1){
var value=value1
var a=0
if(value == 1){
    console.log( value +"  NOT A PRIME NUMBER")
    
}

else if(value < 1){
    console.log( " Enter Positive  Number")
}else{

    if(value > 1 && value != 1){
        for(var i=2; i<value ;i++){
            if(value % 2 ==0){
              a=1;
              break;
            }

        }
    }

}

if( a== 1){
    console.log(value +" is Prime Number");
}else{
    console.log(value +" not a Prime Number");
}


}



prime(1)
