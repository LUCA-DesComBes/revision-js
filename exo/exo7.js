function checkAge(age) {
  if (age >= 18) {
    return "Majeur";
  } else {
    return "Mineur";
  }
}
// Exemple de test
console.log(checkAge(20)); // Output attendu : "Majeur"
