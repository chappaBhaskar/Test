


// function countVowles(name){
// let count=0;
//     for(const char of name){
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
//             count++;
//         }

//     }
// return count;

// }


// //let count=countVowles("hello")
// console.log(countVowles("hello"));



const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
            count++;
        }

    }
return count;
}

console.log(countVow("bhaskararao"));