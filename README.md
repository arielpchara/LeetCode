# LeetCode Practice

A structured LeetCode practice repo using **Node.js**, **TypeScript**, and **Jest**. Each challenge lives in its own directory with a problem description, a stub to implement, and a full test suite that fails until you solve it.

---

## Structure

```
leetcode/
├── easy/
│   ├── 01-two-sum/
│   ├── 02-palindrome-number/
│   ├── 03-valid-parentheses/
│   └── 04-merge-two-sorted-lists/
├── medium/
│   ├── 01-longest-substring/
│   ├── 02-three-sum/
│   └── 03-container-with-most-water/
├── hard/
│   ├── 01-median-two-sorted-arrays/
│   ├── 02-trapping-rain-water/
│   └── 03-regular-expression-matching/
├── AGENTS.md      ← directives for adding new challenges
└── README.md
```

Each challenge folder contains:

| File | Purpose |
|---|---|
| `README.md` | Full problem statement, examples, constraints, complexity hints |
| `index.ts` | **Your solution goes here** — starts as a stub returning `null` |
| `index.test.ts` | Jest tests — all fail until the solution is correct |

---

## Challenges

### 🟢 Easy

| # | Challenge | LeetCode |
|---|---|---|
| 01 | [Two Sum](easy/01-two-sum/README.md) | [#1](https://leetcode.com/problems/two-sum/) |
| 02 | [Palindrome Number](easy/02-palindrome-number/README.md) | [#9](https://leetcode.com/problems/palindrome-number/) |
| 03 | [Valid Parentheses](easy/03-valid-parentheses/README.md) | [#20](https://leetcode.com/problems/valid-parentheses/) |
| 04 | [Merge Two Sorted Lists](easy/04-merge-two-sorted-lists/README.md) | [#21](https://leetcode.com/problems/merge-two-sorted-lists/) |

### 🟡 Medium

| # | Challenge | LeetCode |
|---|---|---|
| 01 | [Longest Substring Without Repeating Characters](medium/01-longest-substring/README.md) | [#3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 02 | [3Sum](medium/02-three-sum/README.md) | [#15](https://leetcode.com/problems/3sum/) |
| 03 | [Container With Most Water](medium/03-container-with-most-water/README.md) | [#11](https://leetcode.com/problems/container-with-most-water/) |

### 🔴 Hard

| # | Challenge | LeetCode |
|---|---|---|
| 01 | [Median of Two Sorted Arrays](hard/01-median-two-sorted-arrays/README.md) | [#4](https://leetcode.com/problems/median-of-two-sorted-arrays/) |
| 02 | [Trapping Rain Water](hard/02-trapping-rain-water/README.md) | [#42](https://leetcode.com/problems/trapping-rain-water/) |
| 03 | [Regular Expression Matching](hard/03-regular-expression-matching/README.md) | [#10](https://leetcode.com/problems/regular-expression-matching/) |

---

## Workflow

### 1. Pick a challenge and start the watcher

```bash
npm run watch:easy:01      # Two Sum
npm run watch:easy:02      # Palindrome Number
npm run watch:easy:03      # Valid Parentheses
npm run watch:easy:04      # Merge Two Sorted Lists

npm run watch:medium:01    # Longest Substring
npm run watch:medium:02    # 3Sum
npm run watch:medium:03    # Container With Most Water

npm run watch:hard:01      # Median of Two Sorted Arrays
npm run watch:hard:02      # Trapping Rain Water
npm run watch:hard:03      # Regular Expression Matching
```

### 2. Read the problem

Open `README.md` inside the challenge folder.

### 3. Implement the solution

Edit `index.ts` — replace the stub with your solution. Tests re-run automatically on save.

### 4. All tests green? Move to the next one 🎉

---

## Other Scripts

```bash
npm test              # run all 54 tests once
npm run test:watch    # watch all tests

npm run test:easy     # run only easy tests
npm run test:medium   # run only medium tests
npm run test:hard     # run only hard tests
npm run typecheck     # run TypeScript type-checking
```

---

## Adding New Challenges

See [`AGENTS.md`](AGENTS.md) for the full conventions — naming, stub format, test rules, README structure, and a list of suggested next challenges.
