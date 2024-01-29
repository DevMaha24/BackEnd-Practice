let number = [3, 0, 1];
let total = (3 / 2) * (3 + 1); //(n * (n + 1)) / 2) //6
let n = 0; //4
for (num of number) {
    n = n + num;//array of 3+0+1=4
}
console.log("missing value is:", (total - n)); //6 - 4 =2