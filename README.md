# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


### Runtime Analysis, Maxie M:

The runtime for the algorithm implemented is O(n log n). The recurrence relation for T(n) in this divide and conquer sum will be

T(n) = { 
1                if n ≤ 1  

3T(n3) + n     if n > 1

Now that we have all this information it is time to solve this using substitution.  

The recurrence relation: T(n) = 3T(n/3)+n

T(n) = 3(3T(n/9)+n/3) + 3 * n/3 + n

= 9T(n/9) + 2n

= 9(3T(n/27) + n/9) + 2n

= 27T(n/27) + 9 * n/9 + 2n

= 27T(n/27) + 3n

= 27T(3T(n/81) + n/27) + 3n

= 81T(n/81) + 27 * n/27 + 3n

= 81T(n/81) + 4n

︙

T(n) = (3^i)T(n/(3^i))+in

for i = lg n 
 T(n) = n + (n)log(n) ∈ Θ((n)log(n))
 
Therefore the total time complexity simplifies to T(n)=O(n log n) for this algorithm. The first reason behind this is that the array is divided into three separate parts at each recursive step. This division at each recursive step will result in three sub-problems (each size n3), which will contribute to recurrence at the 3T(n3). The second reason is that, O(n) time will be spent merging the sub-arrays to form the results. Meaning the amount of work needed to combine the partial results will be O(1). These results will contribute to the recurrence for the +n term. Lastly at each level the depth of the recursion is log3(n), this will perform the linear work which will lead to the total time complexity which was stated above, (T(n)=O(n log n)). 
