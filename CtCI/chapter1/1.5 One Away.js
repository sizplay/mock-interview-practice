//There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit(or zero edits) away.

/*
  pale, ple -> true (remove a character)
  pales, pale -> true (remove a character)
  pale, bale -> true (replace a character)
  pale, bake -> false
 */

//1. insert -> has total characters and one more length
//2. remove, replace -> has total characters - 1

const str1 = 'pale', str2 = 'pal';

const oneAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++ , j++) {
    if (str1[i] !== str2[j]) {
      if (isEdited) return false; //if there is a second edition
      if (str1.length > str2.length) j--;
      if (str1.length < str2.length) i--;
      isEdited = true;
    }
  }
  return true;
}

console.log(oneAway(str1, str2));
