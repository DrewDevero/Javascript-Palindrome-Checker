const PALIN_SUBMIT = document.getElementById("palinSubmit");
let showResult = document.getElementById("showResult").innerHTML;
let testWord = ["b", "b", "o", "o", "b", "b"];

// Palindrome function. Checks if any string, array, or number is a palindrome:

function palin (possiblePalin) {    
    'use strict';
    if (Array.isArray(possiblePalin)) {
        let word = possiblePalin;
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();
        console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result.
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word} IS a palindrome.`);
                showResult = `${word} IS a palindrome.`;               
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word} IS a palindrome.`);
                    showResult = `${word} IS a palindrome.`;                   
                    } else {
                    console.log(`${word} is NOT a palindrome.`);
                    showResult = `${word} is NOT a palindrome.`;                    
                    }
            }
    } else if (!Array.isArray(possiblePalin) && typeof possiblePalin !== "number") {
        possiblePalin.trim();
        let word = Array.from(possiblePalin);
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();  
            console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result.
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word} IS a palindrome.`);
                showResult = `${word} IS a palindrome.`;               
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word} IS a palindrome.`);
                    showResult = `${word} IS a palindrome.`;                   
                    } else {
                    console.log(`${word} is NOT a palindrome.`);
                    showResult = `${word} is NOT a palindrome.`;                   
                    }
            }
    } else if (typeof possiblePalin === "number") {
        let toString = possiblePalin.toString()
        let word = Array.from(toString);
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();  
            console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result.
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word} IS a palindrome.`);
                showResult = `${word} IS a palindrome.`;                
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word} IS a palindrome.`);
                    showResult = `${word} IS a palindrome.`;                   
                    } else {
                    console.log(`${word} is NOT a palindrome.`);
                    showResult = `${word} is NOT a palindrome.`;
                    }
            }
    } else {
        throw "Please try again with an array, string, or numbers." 
    }
}

palin(testWord);
palin(["e","e", "r", "e", "e"]);
palin(["g","k", "w", "i", "u","y", "t"]);
palin("baaaabr");
palin([0,3,4,4,3,0]);
palin(34,555,67,2112,34355);
palin(7778889888777);
palin(54546546666677);
palin("049355");