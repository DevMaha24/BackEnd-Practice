function task7(array) 
{
    let nonZero = 0;

    for (let i = 0; i < array.length; i++) 
    {
        if (array[i] !== 0) 
        {
            let temp = array[nonZero];
            array[nonZero] = array[i];
            array[i] = temp;
            nonZero++;
        }
    }

    return array;
}
let array = [0, 1, 0, 4, 0, 3, 12];
console.log(task7(array)); 
