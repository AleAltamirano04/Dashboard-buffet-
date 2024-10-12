class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <MainContent />
                </div>
                <RightSidebar />
            </div>
        );
    }
}

const Header = () => (
    <div className="header">
        <input type="text" placeholder="Buscar producto" />
        <div>
            <button>🔔</button>
            <button>👤</button>
        </div>
    </div>
);

const Sidebar = () => (
    <div className="sidebar">
        <img src="img/ImagenPrueba.jpg" alt="Logo" className="menu-logo" />
        <ul>
            <li className="active">Inicio</li>
            <li>Stock</li>
            <li>Ventas</li>
            <li>Configuración</li>
        </ul>
    </div>
);

const MainContent = () => (
    <div>
        <div className="products">
            <button className="btn btn-primary" onClick={toggleProductos}>Ver Productos</button>
            <div id="productos" style={{ display: 'block' }}>
                <h2 className="products-title">Productos</h2>
                <div className="product-list">
                    <div className="product">
                        <img src="img/ImagenPrueba.jpg" alt="Don Satur" />
                        <p>Don Satur</p>
                        <button className="btn btn-link">Controlar Stock</button>
                    </div>
                    <div className="product">
                        <img src="img/ImagenPrueba.jpg" alt="Maiz Inflado Dulce" />
                        <p>Maiz Inflado Dulce</p>
                        <button className="btn btn-link">Ver stock</button>
                    </div>
                    <div className="product">
                        <img src="img/ImagenPrueba.jpg" alt="Lata de coca cola" />
                        <p>Lata de coca cola</p>
                        <button className="btn btn-link">Ver stock</button>
                    </div>
                    <div className="product">
                        <img src="img/ImagenPrueba.jpg" alt="Alfajor Guaymallen" />
                        <p>Alfajor Guaymallen</p>
                        <button className="btn btn-link">Controlar Stock</button>
                    </div>
                    <div className="product">
                        <img src="img/ImagenPrueba.jpg" alt="Gatorade" />
                        <p>Gatorade</p>
                        <button className="btn btn-link">Ver stock</button>
                    </div>
                </div>
            </div>
        </div>
        <Payments />
    </div>
);

const Payments = () => (
    <div className="payments">
        <h2>Pagos ingresados</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Nro de Pedido</th>
                    <th>Pago</th>
                    <th>Horario <button className="btn btn-secondary btn-sm">Más reciente</button></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Juan Garcia</td>
                    <td>4</td>
                    <td>$1100</td>
                    <td>12:32</td>
                </tr>
                <tr>
                    <td>Leo Messi</td>
                    <td>3</td>
                    <td>$780</td>
                    <td>10:30</td>
                </tr>
                <tr>
                    <td>Esteban Martínez</td>
                    <td>2</td>
                    <td>$900</td>
                    <td>9:13</td>
                </tr>
                <tr>
                    <td>Sofía Barreira</td>
                    <td>1</td>
                    <td>$1000</td>
                    <td>6:40</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const RightSidebar = () => (
    <div className="right-sidebar">
        <h2>Todos los pedidos</h2>
        <div className="order">
            <img src="img/ImagenPrueba.jpg" alt="Producto" className="order-img" />
            <div>
                <p>Alumno 1</p>
                <p>1 café + 2 medialunas</p>
                <p className="text-success">Total: $1100</p>
            </div>
        </div>
        <div className="order">
            <img src="img/ImagenPrueba.jpg" alt="Producto" className="order-img" />
            <div>
                <p>Alumno 2</p>
                <p>Don Satur</p>
                <p className="text-success">Total: $700</p>
            </div>
        </div>
        <div className="order">
            <img src="img/ImagenPrueba.jpg" alt="Producto" className="order-img" />
            <div>
                <p>Alumno 3</p>
                <p>1 pepsi + Guaymallen</p>
                <p className="text-success">Total: $1300</p>
            </div>
        </div>
        <div className="order">
            <img src="img/ImagenPrueba.jpg" alt="Producto" className="order-img" />
            <div>
                <p>Alumno 4</p>
                <p>1 café + 2 medialunas</p>
                <p className="text-success">Total: $1100</p>
            </div>
        </div>
        <div className="order">
            <img src="img/ImagenPrueba.jpg" alt="Producto" className="order-img" />
            <div>
                <p>Alumno 5</p>
                <p>Galletita Opera</p>
                <p className="text-success">Total: $700</p>
            </div>
        </div>
        <div className="button-group">
            <button className="btn btn-warning">En Fila</button>
            <button className="btn btn-success">Retirados</button>
        </div>
        <div className="text-center mt-3">
            <button className="btn btn-info">Ver Todo</button>
        </div>
    </div>
);

function toggleProductos() {
    const productos = document.getElementById('productos');
    productos.style.display = productos.style.display === 'none' ? 'block' : 'none';
}

ReactDOM.render(<App />, document.getElementById('root'));
