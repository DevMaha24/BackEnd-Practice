function find(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return { string: target, position: i };
        }
    }
    return null; 
}
const Array = ["arun", "bala", "raja", "maha"];
const target = "arun";
const result = find(Array, target);

if (result) {
    console.log(`The string "${result.string}" was found at position${result.position}`);
} else {
    console.log(`The string "${target}"was not fount`);
}
