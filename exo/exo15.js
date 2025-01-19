function reverseString(str) {
  let truc = "";
  for (let i = str.length - 1; i >= 0; i--) {
    truc += str[i];
  }
  return truc;
}

// Exemple de test
console.log(reverseString("hello")); // Output attendu : "olleh"
