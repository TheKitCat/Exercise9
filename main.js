/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fs = require('fs');
/**
 * 1.1) Returns if numb is even or odd
 * Assumes that numb is an Integer
 * @param {Integer} numb
 * @returns {String}
 */
function even_odd(numb) {

    if (numb % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

/**
 * 1.2 a) Returns the sum of every third number. Starts with 2.
 * @returns {Number}
 */
function sum_thrd_for() {
    var sum = 0;

    for (var i = 2; i < 100; i+=3) {
        sum += i;
    }

    return sum;
}

/**
 * 1.2 b) Returns the sum of every third number. Starts with 2.
 * @returns {Number}
 */
function sum_thrd_while() {
    var sum = 0;
    var i = 2;

    while (i < 100) {
        sum += i;
        i += 3;
    }

    return sum;

}

/**
 * 1.3) Writes a text into a file.
 * @returns {void}
 */
function write_into_file() {

    var logger = fs.createWriteStream('log.txt', {
        flags: 'a' // appending
        })
        
    logger.write("Welcome to our class on Middleware!\n");
    
    logger.end();


}

/**
 * 1.4) Maps Celsius into Fahrenheit
 * @param {Number} celsius
 * @returns {Number}
 */
function c_into_f(celsius){
    return (celsius*1.8)+32;
    
}
// Test
console.log("Numb 2 is: "+even_odd(2));
console.log("Numb 3 is: "+even_odd(3));

console.log("Sum (for-loop) is: "+sum_thrd_for());
console.log("Sum (while-loop) is: "+sum_thrd_while());

write_into_file();

console.log("0°Celsius equals: "+c_into_f(0)+" ° Fahrenheit!");