const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    // El metodo no se ejecuta sobre elementos vacios y no cambia el array original. Retorna true si el elemento cumple con la 
    //condicion dada
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

    console.table(fifteen);

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    // map() creates a new array from calling a function for every array element.
    // map() calls a function once for each element in an array.
    // map() does not execute the function for empty elements.
    // map() does not change the original array.
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es 
    // necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.
    // pero se puede proveer una funcion de comparacion que defina como se ordenan los elementos
     // const ordered = inventors.sort(function(a, b) {
    //   if(a.year > b.year) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });

    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    // El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

    // arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
    // acumulador
    // El acumulador acumula el valor devuelto por la función callback. Es el valor acumulado devuelto en la última invocación de callback, o el valorInicial, si se proveyó
    // valorActual
    // El elemento actual que está siendo procesado en el array.
    // índice Opcional
    // El índice del elemento actual que está siendo procesado en el array. Empieza desde el índice 0 si se provee valorInicial. En caso contrario, comienza desde el índice 1.


    // El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
    // El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, 
    // en última instancia, se convierte en el valor final, único y resultante.    

    // 5. Sort the inventors by years lived

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
