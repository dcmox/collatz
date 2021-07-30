# Collatz Conjecture 3n + 1

The Collatz Conjecture or 3n+1 problem can be described as such:

1. Take any number (n), multiply it by 3 and add 1.
2. If n is even divide n by 2. If n is odd, multiply it by 3 and add 1.
3. Repeat the process and you will eventually always to get 1.

How can one prove that any large number will eventually get to 1 following these rules without iterating through? Is there a solution for pre-determining the number of steps required?

This repo contains methods that explores the Collatz Conjecture. It does not claim to solve or do anything other than explore the unique qualities of the problem.

## Use

```typescript
collatz(number)
discoverLargestCollatz(rangeStart, rangeEnd)
```

## Example Output

```typescript
{
  range: [ 260000000, 270000000 ],
  min: { number: 268435456, steps: 28 },
  max: { number: 268549803, steps: 964 }
}
```
