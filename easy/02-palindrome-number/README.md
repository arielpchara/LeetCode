# 9. Palindrome Number 🟢 Easy

## Problem

Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.

An integer is a palindrome when it reads the same forward and backward.

## Examples

**Example 1:**
```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Not a palindrome.
```

**Example 3:**
```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Not a palindrome.
```

## Constraints

- `-2^31 <= x <= 2^31 - 1`

## Follow-up

Could you solve it without converting the integer to a string?

## Expected Complexity

- **Time:** O(log n) — where n is the number of digits
- **Space:** O(1)

## Function Signature

```ts
function isPalindrome(x: number): boolean {}
```
