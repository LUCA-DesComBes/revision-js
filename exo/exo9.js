function numberType(num) {
  if (num > 0) {
    return "Positif";
  } else if (num < 0) {
    return "Negatif"
  } else {
    return "Nul"
  }
}

// Exemple de test
console.log(numberType(-5)); // Output attendu : "Négatif"
