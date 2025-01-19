function sumNumbers(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
  }
  
  // Exemple de test
  console.log(sumNumbers(5)); // Output attendu : 15