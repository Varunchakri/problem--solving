//1. whether the year is leaf year or not from 2000 to 2500

//     /* conditions for leap year -- 

//             1. divisible by 4 && not divisible by 100
//                        or
//             2. divisible by 400 */
 


 let year=Number(prompt("enter the year"))
if((year % 4 == 0 && year %100 !==0) || (year % 400 ==0))
{
    console.log("it is a leaf year")
}
else{
    console.log("it is not a leaf year")
}

// // -----------------------------------------------------------



// // 2. check whether the characters are vowels or not
// //vowels = a,e,i,o,u.


 let alphabets= prompt("enter the alphabet");
if(alphabets=='a' ||alphabets=='e' ||alphabets=='i' ||alphabets=='o' || alphabets== 'u'){
    console.log("this is a vowel")
}
else{
    console.log(`${alphabets} is not a vowel`)
    }


// // ------------------------------------------------------



// // 3. checking  whether based on temperature

let temp= Number(prompt("enter the temperature"))
if(temp>=40){
    console.log("The temp is hot")
}
else if(temp>=10 && temp<=39){
    console.log("The temperature is moderate")
}
else{
    console.log("the temperature is cool")
}

// // -------------------------------------------------------



//4. checking whether it is a weekday or weekend

let day=prompt("enter the day")
if(day=='monday' || day=='tuesday' || day=='wedneday' ||  day=='thrusday' ||  day=='friday'){
    console.log("Weekday")
}
else if(day=='saturday' || day=='sunday'){
    console.log("Weekend")
}
else{
    console.log("This is not a day")
}

// // -----------------------------------------------------------



// //5.even or odd

let num=prompt("enter the number")
if(num%2==0){
    console.log("the number is even")
}
else{
    console.log("the number is odd number")
}

// ---------------------------------------------------------



//6. check whichtype of tringle it is
// a) equilateral -- 3 sides equal
// b) isosceles   -- 2 sides are equal and other side is smaller or larger 
// c) scalene     ---all 3 sides should be different

let side1= Number(prompt('Enter the triangle side1 number'));
let side2= Number(prompt('Enter the triangle side2 number'));
let side3= Number(prompt('Enter the triangle side3 number'));

if((side1+side2<=side3) || (side1+side3<=side2) || (side2+side3<=side1))
{
    console.log('It is not a triangle');
}

else if(side1===side2 && side2===side3){
    console.log('It is an equilateral triangle');
}

else if((side1===side2 && side1!==side3) || 
         (side2===side3 && side2!==side1) || 
         (side3===side1 && side1!==side2)){
    console.log('it is an Isosceles Triangle');
}

else if(side1!==side2 && side1!==side3)
{
    console.log('Scalene Triangle');
}

else {
    console.log("Enter valid values");
}