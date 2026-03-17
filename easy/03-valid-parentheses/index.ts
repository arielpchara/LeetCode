/**
 * @param s - Parentheses string.
 * @returns Whether the input is valid.
 */

const closers: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
};

function isValid(s: string): boolean {
    if (s.length === 0) return true;

    const stack: string[] = [];

    for (const char of s) {
        if (!closers[char]) {
            stack.push(char);
        } else {
            if (stack.pop() !== closers[char]) return false;
        }
    }
    
    return stack.length === 0;
}

export { isValid };