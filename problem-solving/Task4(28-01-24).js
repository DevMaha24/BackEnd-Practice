function task4(digits) 
{

    let carry = 1; 

    for (let i = 0; i < digits.length; i++) 
    {
        if (digits[i] + carry > 9) 
        {
            digits[i] = 0; 
            carry = 1; 
        } else {
            digits[i] = digits[i] + carry; 
            carry = 0; 
        }
    }
    if (carry) 
    {
        const newdigits=[1];
        for (let i = 0; i < digits.length; i++) 
        {
                newdigits.push(digits[i]);
        }
            return newdigits;
    }
        return digits; 
}

const digits = [1, 2, 3];
console.log("result:", task4(digits)); 
