(() => {

    // 1. Resolver usando un Array e .includes()
    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    // 2. Simplificar usando un Objeto Literal (Mapeo de tipos)
    // Definimos un tipo estricto para las llaves aceptadas
    type FruitColor = 'red' | 'yellow' | 'purple';

    function getFruitsByColor( color: string ): string[] {
        const fruitsByColor: Record<FruitColor, string[]> = {
            red:    ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        // Si el color no existe en nuestras llaves del objeto, disparamos el error
        if ( !Object.keys(fruitsByColor).includes(color) ) {
            throw Error('the color must be: red, yellow, purple');
        }

        return fruitsByColor[color as FruitColor];
    }

    // 3. Simplificar usando Cláusulas de Guarda (Invertir los IFs)
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps(): string {
        if ( !isFirstStepWorking )  return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking )  return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Fourth step broken.';
        
        return 'Working properly!';
    }


    // --- PRUEBAS ---
    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });     // false

    // getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') });       // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') });  // Lanza el error correctamente

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // "Working properly!"

})();



