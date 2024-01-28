function task2(sentence) 
{
    const deletespace = sentence.trim();
    const words = deletespace.split(' ');
    const lastWord = words[words.length - 1];
    return `The last word is "${lastWord}" with length ${lastWord.length} `;
}

const sentence = "Hello World";
console.log(task2(sentence));
