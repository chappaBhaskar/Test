function test(value){
    var t= "56" % 2;
    console.log(typeof(t));

    if(t === 0){
        console.log(value + " Number is a Even");
    }


}

test("56")