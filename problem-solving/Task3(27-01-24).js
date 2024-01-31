function task3(array, target) 
{
    let index = 0;
    while (index <array.length && array[index]< target) {
        index++;
    }
    
    return index;
}

const array = [1, 4, 5, 7, 9, 0, 2, 3, 6];
const target = 8;

const index = task3(array, target);

array.splice(index, 0, target);

console.log(`The target index value is ${index} `);
console.log("Add the target value to the array:", array );
