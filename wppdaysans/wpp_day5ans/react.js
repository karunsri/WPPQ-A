//-- Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removeCharacterAt(str, position) {
    if (position < 0 || position >= str.length) {
        return str;
    }
    return str.substring(0, position) + str.substring(position + 1);
}

const originalString = "hello world";
const positionToRemove = 7;
const modifiedString = removeCharacterAt(originalString, positionToRemove);

console.log(modifiedString); 
