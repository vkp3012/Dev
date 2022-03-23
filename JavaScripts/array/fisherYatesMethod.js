/*.......................The Fisher Yates Method......................*/
// The above example, array.sort(), is not accurate, it will favor some numbers over the others.

// The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

// In JavaScript the method can be translated to this:

// Example
console.log("------------The Fisher Yates Method----------------------------");
const points15 = [40, 100, 1, 5, 25, 10];

for (let i = points15.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points15[i]
  points15[i] = points15[j]
  points15[j] = k
}

console.log(points15);
console.log("-------------------------------");

//Find the Highest (or Lowest) Array Value
const points16 = [40, 100, 1, 5, 25, 10];
points16.sort(function(a, b){   
        return a - b
    });
console.log("The Lowest value is " + points16[0]);
console.log("--------------------------------------");
