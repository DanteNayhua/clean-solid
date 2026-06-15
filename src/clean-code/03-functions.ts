(() => {
    // 1. ESTRUCTURAS DE DATOS (Interfaces)
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    interface Actor {
        fullName: string;
        birthdate: Date;
    }

    // 2. FUNCIONES DE CONSULTA (GETTERS)
    
    // Obtiene una película específica por su ID
    function getMovieById(id: string): void {
        console.log({ id });
    }

    // Obtiene el elenco (actores) de una película específica
    function getMovieCastById(movieId: string): void {
        console.log({ movieId });
    }

    // Obtiene la biografía de un actor por su ID
    function getActorBioById(actorId: string): void {
        console.log({ actorId });
    }
    
    // 3. FUNCIONES DE CREACIÓN (POST)

    // Crea una nueva película utilizando la interfaz Movie
    function createMovie(movie: Movie): void {
        console.log({ movie });
    }

    // Crea un actor si este no existe previamente
    function createActor({ fullName, birthdate }: Actor): boolean {
        // Simulación de tarea asíncrona para verificar nombre
        if (fullName.toLowerCase() === 'fernando') {
            return false;
        }

        console.log('Crear actor:', { fullName, birthdate });
        return true;        
    }
     const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

})();




