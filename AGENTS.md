# AGENTS.md — Directives for Creating LeetCode Challenges

This file provides instructions for AI agents to create new LeetCode challenges following the established project conventions.

---

## Project Structure Convention

Each challenge lives in its own directory under `easy/`, `medium/`, or `hard/`:

```
<difficulty>/
  <nn>-<kebab-case-title>/
    README.md        — challenge description
    index.ts         — stub (DO NOT implement)
    index.test.ts    — unit tests (must fail until solved)
```

Directories are zero-padded and numbered sequentially within their difficulty (e.g., `05-`, `06-`).

---

## Rules for index.ts

- Export the primary function(s) using named TypeScript exports.
- The stub must return `null` — **never implement the solution**.
- Include a JSDoc comment describing parameters and return value.
- Include helper classes (e.g., `ListNode`, `TreeNode`) when the problem requires them.
- Use `// TODO: implement` as the only comment inside the function body.
- Add explicit TypeScript types for parameters, helpers, and return values.
- If a stub returns `null`, the return type must allow `null` until the challenge is solved.

```ts
/**
 * @param value - Input value.
 * @returns Expected output for the challenge.
 */
function solveProblem(value: number): number | null {
  void value;
  // TODO: implement
  return null;
}

export { solveProblem };
```

---

## Rules for index.test.ts

- Import from `'./index'` using TypeScript `import` syntax.
- Use `describe('<Challenge Name>', () => { ... })` as the top-level block.
- Write **at least 5 test cases** per challenge.
- Cover: provided examples, edge cases (empty input, single element, negative numbers, zero).
- All tests must **run and fail** with the stub — do NOT use `.skip` or `.todo`.
- Use `expect(...).toBe(...)` for primitives, `expect(...).toEqual(...)` for arrays/objects.
- For linked list / tree problems, include typed `arrayToList` / `listToArray` helper functions inside the test file.

---

## Rules for README.md

Each README must contain these sections in order:

1. **Title** — `# <LeetCode Number>. <Title> <Emoji Badge>`
   - 🟢 Easy | 🟡 Medium | 🔴 Hard
2. **Problem** — full problem statement, faithfully reproduced
3. **Examples** — at least 2, with Input / Output / Explanation
4. **Constraints** — all constraints listed
5. **Follow-up** (optional) — if the problem includes a follow-up question
6. **Expected Complexity** — Time and Space
7. **Function Signature** — code block with the empty function

---

## Rules for package.json

When adding a new challenge, add two scripts to `package.json`:

```json
"watch:<difficulty>:<nn>": "jest --watch <difficulty>/<nn>-<slug>"
```

Example for `easy/05-best-time-to-buy-and-sell-stock/`:
```json
"watch:easy:05": "jest --watch easy/05-best-time-to-buy-and-sell-stock"
```

Keep these development dependencies installed:

```json
"@types/jest"
"@types/node"
"jest"
"ts-jest"
"typescript"
```

---

## Difficulty Guidelines

| Difficulty | Typical Concepts |
|------------|-----------------|
| 🟢 Easy    | Arrays, strings, hash maps, basic math, simple linked lists |
| 🟡 Medium  | Two pointers, sliding window, binary search, DFS/BFS, DP (basic) |
| 🔴 Hard    | Advanced DP, divide & conquer, complex graph algorithms, segment trees |

---

## Naming Conventions

- Directory: `<nn>-<kebab-case-slug>` (e.g., `05-climbing-stairs`)
- Function: camelCase matching the LeetCode function name (e.g., `climbStairs`)
- Test describe block: title-cased challenge name (e.g., `'Climbing Stairs'`)
- Source file names: `index.ts` and `index.test.ts`

---

## Suggested Next Challenges

### Easy
- `10-reverse-string` — LeetCode #344
- `11-valid-anagram` — LeetCode #242
- `12-first-bad-version` — LeetCode #278
- `13-symmetric-tree` — LeetCode #101
- `14-linked-list-cycle` — LeetCode #141

### Medium
- `04-product-of-array-except-self` — LeetCode #238
- `05-maximum-product-subarray` — LeetCode #152
- `06-find-minimum-in-rotated-sorted-array` — LeetCode #153
- `07-combination-sum` — LeetCode #39
- `08-coin-change` — LeetCode #322

### Hard
- `04-n-queens` — LeetCode #51
- `05-merge-k-sorted-lists` — LeetCode #23
- `06-serialize-deserialize-binary-tree` — LeetCode #297
- `07-word-ladder` — LeetCode #127

---

## Running Tests

```bash
# Run all tests
npm test

# Run type-checking
npm run typecheck

# Run by difficulty
npm run test:easy
npm run test:medium
npm run test:hard

# Watch all tests
npm run test:watch

# Watch specific challenge
npm run watch:easy:01
npm run watch:medium:02
npm run watch:hard:03
```
