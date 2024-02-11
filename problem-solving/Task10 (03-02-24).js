function task10(s, t) 
{    
    if (s.length !== t.length) 
    {
        return false;
    }

    const CountS = {};
    const CountT = {};

    for (let char of s) 
    {
        CountS[char] = (CountS[char] || 0)+ 1;
    }

    for (let char of t) 
    {
        CountT[char] = (CountT[char] || 0)+ 1;
    }

    for (let char in CountS) {
        if (CountS[char] !== CountT[char]) 
        {
            return false;
        }
    }

    return true;
}


const string1 = "anagram";
const string2 = "nagaram";
const result = task10(string1, string2);
console.log("output is:", result); 
