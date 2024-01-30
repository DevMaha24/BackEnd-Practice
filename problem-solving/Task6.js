var task6 = function(x)
{
    if(x <= 1)
    {
        return x;
    }
    for(let i=2; i<= x; i++)
    {
        if(i * i ===x)
        {
            return i;
        }
        if(i * i > x)
        {
            return i-1;
        }
    }
};
x=4;
console.log("result:", task6(x) );
x=8;
console.log("result:", task6(x) );
x=9;
console.log("result:", task6(x) );