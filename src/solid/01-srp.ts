(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // 1. Clase especializada en la persistencia y carga de datos (Data Access)
    class ProductService {
        getProduct( id: number ): Product {
            // Simulación de carga
            return { id, name: 'OLED Tv' };
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    // 2. Clase especializada en notificaciones
    class Mailer {
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }

    // 3. Clase especializada en la gestión del carrito
    class CartService {
        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }
    
    // 4. El BLOC ahora solo coordina las acciones delegando el trabajo pesado
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;
        private cartService: CartService;

        // Inyectamos las dependencias necesarias
        constructor(
            productService: ProductService,
            mailer: Mailer,
            cartService: CartService
        ) {
            this.productService = productService;
            this.mailer         = mailer;
            this.cartService    = cartService;
        }
    
        loadProduct( id: number ) {
            const product = this.productService.getProduct( id );
            console.log('Producto: ', product);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailer.notifyClients();
        }
    
        onAddToCart( productId: number ) {
            this.cartService.addToCart( productId );
        }
    }
    
    // --- Pruebas de ejecución ---

    // Creamos las instancias de los servicios (pueden ser compartidos por otras vistas/blocs)
    const productService = new ProductService();
    const mailer         = new Mailer();
    const cartService    = new CartService();

    // Inyectamos los servicios al instanciar el ProductBloc
    const productBloc = new ProductBloc( productService, mailer, cartService );

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);

})();