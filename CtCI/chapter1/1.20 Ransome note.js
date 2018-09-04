const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const sample = 'sitaaaaa ad est sintqqqqq';

const ransome = (str, magazine) => {
  const obj = {};
  for (let char of magazine) obj[char] = obj[char] + 1 || 1;
  for (let ch of str) obj[ch] = obj[ch] - 1 || -1;

  for (let c in obj) {
    if (obj[c] < 0) return false;
  }
  return true;
}

console.log('ransome(sample, magazine) :', ransome(sample, magazine));
