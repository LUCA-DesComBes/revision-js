function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  // Exemple de test
  console.log(factorial(5)); // Output attendu : 120