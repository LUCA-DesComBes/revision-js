function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const truc = str[i];
    if (
      truc === "a" ||
      truc === "e" ||
      truc === "i" ||
      truc === "o" ||
      truc === "u" ||
      truc === "y"
    ) {
      count++;
    }
  }

  return count;
}

// Exemple de test
console.log(countVowels("javascript")); // Output attendu : 3
