(() => {

    // arreglo de temperaturas celsius
    const celsiusTemperatures: number[] = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIpAddress: string = '123.123.123.123';  

    // Listado de usuarios
    const users = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' }
    ];

    // Listado de emails de los usuarios
    const userEmails: string[] = users.map(user => user.email);

    // Variables booleanas de un video juego
   const isJumping: boolean = false;
    const isRunning: boolean = true;
    const hasNoItems: boolean = true; 
    const isLoading: boolean = false;
    // Otros ejercicios
    // tiempo inicial
    const startTimeInMs: number = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const elapsedTimeInMs: number = new Date().getTime() - startTimeInMs;


    // Funciones
    // Obtiene los libros
    function getBooks(): void {
        throw new Error('Function not implemented.');
    }
    // obtiene libros desde un URL
    function getBooksFromUrl(url: string): void {
        throw new Error('Function not implemented.');
    }
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea(sideLength: number): void {
        throw new Error('Function not implemented.');
    }
    // imprime el trabajo
    function printJob(): void {
        throw new Error('Function not implemented.');
    }
    
    
})();

