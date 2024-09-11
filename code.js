//Resources:
// https://alchemical-bytes.medium.com/how-to-use-recursion-to-divide-and-conquer-6d9a0488abc3
// Looked at past repositories from this course, specifically divide-and-conquer-sum-ClaytonBrown4741 for help 
//code.js
//Maxie Machado 
//Algorithms: Divide and Conquer Sum 
// Plagiarism Statement: I certify that I have listed all sources used to complete this exercise, 
// including the use of any Large Language Models. All of the work is my own, except where 
// stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
// suspected, charges may be filed against me without prior notice.

function divideAndConquerSum(a)
{
    if (a.length === 0)
    {
        return 0;
    }
    
    if (a.length === 1)
    {
        return a[0];
        return a;
    }
    
    let third = Math.floor(a.length / 3);
    let left = a.slice(0, third);
    let middle = a.slice(third, 2 * third);
    let right = a.slice(2 * third);
    
    return divideAndConquerSum(left) + divideAndConquerSum(middle) + divideAndConquerSum(right);
}

