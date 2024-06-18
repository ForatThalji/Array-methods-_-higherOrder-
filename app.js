// // ---------------------------- Example #1 ----------------------------

// const numbers = [1,2,3,4];
// console.log("result of raising 2 to the power of the original input element using for loop");
// function power (numbers){
//     for(let i=0;i<numbers.length;i++){
//         console.log(Math.pow(2,(numbers[i])));
//     }
// }
// power(numbers);

// console.log("result of raising 2 to the power of the original input element using for each");
// const pow_foreach = (numbers.forEach(function (num){
//     console.log (Math.pow(2,(num)));
// }
// ));


// console.log("result of raising 2 to the power of the original input element using Map");
// const pow_Map = (numbers.map(function (num){
// return (Math.pow(2,(num)));
// }

// ));
// console.log(pow_Map);



// // ---------------------------- Example #2 ----------------------------


// const even_odd  = [1,2,3,4,4,"Forat",4,4,5,6,7,8,9,"Forat"];
// var res ;
// const Even_Odd = even_odd.map(function(num){
//     if(typeof even_odd[num] !== 'number')
//         return "N/A";
//     else
//     if(even_odd[num] %2 === 0)
//         return "Even";
//     else
//     if(even_odd[num] %2 !== 0)
//         return "Odd";

  
    
// } )
// console.log(Even_Odd);

// ---------------------------- Example #3 ----------------------------


// const names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

// names.forEach(n => console.log(n));

// ---------------------------- Example #4 ----------------------------

const numbers_4 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
function fizz_buzz(numbers_4){
    let res = [];
 numbers_4.forEach(function(n){
        if(n %3 === 0 && n %5 === 0)
        res.push("Fizz Buzz");
    else
         if(n %3 === 0)
          res.push("Fizz");
    else
        if(n %5 === 0)
          res.push("Buzz"); 
        else
        res.push(n);

});
return res;
}

console.log(fizz_buzz(numbers_4));
