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

The runtime for the algorithm implemented is $O(n)$. The recurrence relation for $T(n)$ in this divide and conquer sum will be

$$
T(n) = \begin{cases} 
1 & \text{if } n \leq 2 \\
3T\left(\frac{n}{3}\right) + 1 & \text{if } n > 2 
\end{cases}
$$

Now that we have all this information it is time to solve this using substitution.  

The recurrence relation: 
$T(n) = 3T(\frac{n}{3}) + 1$

$T(n) = 3\left(3T\left(\frac{n}{9}\right) + 1\right) + 1$

$= 9T\left(\frac{n}{9}\right) + 3 + 1$

$= 9\left(3T\left(\frac{n}{27}\right) + 1\right) + (3 + 1)$

$= 27T\left(\frac{n}{27}\right) + 3^2 + (3 + 1)$

$= 27T\left(\frac{n}{27}\right) + 3^2 + 3^1 + 3^0$

$\vdots$

i-th expansion: 

$T(n) = 3^i \cdot T\left(\frac{n}{3^i}\right) + \left(3^{i-1} + 3^{i-2} + \cdots + 3^1 + 1\right)$

$T(n) = 3^i \cdot T\left(\frac{n}{3^i}\right) + \left(3^i - 1\right)$

$T(n) = 3^{\log_3(n)} \cdot T(1) + \sum_{i = 0}^{n} ar = a\left(\frac{1 - r^{n+1}}{1 - r}\right)$

$T(n) = n \cdot T(1) + \frac{(1 - 3^{\log_3(n) + 1})}{1 - 3} = \frac{(1 - 3^{\log_3(n) + 1})}{-2}$

**Note**: $3^{\log_3(n)} = n$

**NOTE**: The negative denominator does not imply negative work because the numerator is also negative which leads to an overall positive expression.

Therefore the total time complexity simplifies to $T(n) \in O(n)$ for this algorithm. The first reason behind this is that the array is divided into three separate parts at each recursive step. This division at each recursive step will result in three sub-problems (each size $\frac{n}{3}$ ), which will contribute to recurrence at the $3T(\frac{n}{3})$. The total would be $O(n)$, meaning, noting that the merge cost (summing) is a constant. The written part is a combination of all three parts and not linear. These results will contribute to the recurrence for the $+1$ term. Lastly at each level the depth of the recursion is ${\log_3(n)}$, this will lead to the total time complexity which was stated above, $T(n) \in O(n)$. 
