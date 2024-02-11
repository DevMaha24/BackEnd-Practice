function task8(needle, haystack) 
{
    if (needle === "") 
    {
        return 0;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++)
     {
        let result = true;
        for (let j = 0; j < needle.length; j++) 
        {
            if (haystack[i + j] !== needle[j]) 
            {
                result = false;
                break;
            }
        }
        if (result) {
            return i;
        }
    }

    return -1;
}

// const haystack = "leetcode";
// const needle = "leeto";

const haystack = "sadbutsad";
const needle = "but";

const index = task8(needle, haystack);

if (index !== -1) 
{
    console.log(`The needle string is found at index ${index}`);
} else {
    console.log(`The needle string is not found in the haystack`);
}
