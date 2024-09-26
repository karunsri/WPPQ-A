function isValid(s) {
    // Stack to keep track of opening brackets
    //     let stack = [];

    //     // Map to match opening and closing brackets
    //     let matchingBrackets = {
    //         ')': '(',
    //         '}': '{',
    //         ']': '['
    //     };

    //     // Iterate through each character in the string
    //     for (let char of s) {
    //         // If the character is a closing bracket
    //         if (matchingBrackets[char]) {
    //             // Pop from stack, if stack is not empty, else use a dummy value
    //             let topElement = stack.length === 0 ? '#' : stack.pop();

    //             // If the popped element does not match the corresponding opening bracket
    //             if (topElement !== matchingBrackets[char]) {
    //                 return false;
    //             }
    //         } else {
    //             // If it's an opening bracket, push it to the stack
    //             stack.push(char);
    //         }
    //     }

    //     // If the stack is empty, all brackets were properly closed
    //     return stack.length === 0;
    // }


    let st = [];

    for (let i = 0; i < st.length; i++) {
        let ch = st.charAt(i);
        // opening brakets 
        if (ch === '(') {
            st.push('(');
        }
        else if (ch === '[') {
            st.push('[');
        }
        else if (ch === '{') {
            st.push('{');
        }

        else if (ch === ')') {
            if (st.length == 0) {
                return false;
            }
            else if (st[st.length - 1] !== '(') {
                return false;
            }
            else {
                st.pop();
            }
        }
        else if (ch === ']') {
            if (st.length == 0) {
                return false;
            }
            else if (st[st.length - 1] !== '[') {
                return false;
            }
            else {
                st.pop();
            }
        }

        else if (ch === '}') {
            if (st.length == 0) {
                return false;
            }
            else if (st[st.length - 1] !== '{') {
                return false;
            }
            else {
                st.pop();
            }
        }
    }

    if (st.length > 0) {
        return false;
    }
    else {
        return true;
    }
};

// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
