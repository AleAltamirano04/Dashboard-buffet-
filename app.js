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
        <ul>
            <li>Inicio</li>
            <li>Stock</li>
            <li>Ventas</li>
            <li>Configuración</li>
        </ul>
    </div>
);

const MainContent = () => (
    <div>
        <div className="products">
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
        <Payments />
    </div>
);

const Payments = () => (
    <div className="payments">
        <h2>Pagos ingresados</h2>
        <div className="payment">
            <span>Juan Garcia</span>
            <span>Nro de Pedido: 4</span>
            <span>$1100</span>
            <span>12:32</span>
        </div>
        <div className="payment">
            <span>Leo Messi</span>
            <span>Nro de Pedido: 3</span>
            <span>$780</span>
            <span>10:30</span>
        </div>
        <div className="payment">
            <span>Esteban Martínez</span>
            <span>Nro de Pedido: 2</span>
            <span>$900</span>
            <span>9:13</span>
        </div>
        <div className="payment">
            <span>Sofía Barreira</span>
            <span>Nro de Pedido: 1</span>
            <span>$1000</span>
            <span>6:40</span>
        </div>
    </div>
);

const RightSidebar = () => (
    <div className="right-sidebar">
        <h2>Todos los pedidos</h2>
        <div className="order">
            <div>
                <p>Alumno 1</p>
                <p>1 cafe + 2 medialunas</p>
            </div>
            <p>$1100</p>
        </div>
        <div className="order">
            <div>
                <p>Alumno 2</p>
                <p>Don Satur</p>
            </div>
            <p>$700</p>
        </div>
        <div className="order">
            <div>
                <p>Alumno 3</p>
                <p>1 pepsi + Guaymallen</p>
            </div>
            <p>$1300</p>
        </div>
        <div className="order">
            <div>
                <p>Alumno 4</p>
                <p>1 cafe + 2 medialunas</p>
            </div>
            <p>$1100</p>
        </div>
        <div className="order">
            <div>
                <p>Alumno 5</p>
                <p>Galletita Opera</p>
            </div>
            <p>$700</p>
        </div>
        <div className="button-group">
            <button className="btn btn-warning btn-custom">En Fila</button>
            <button className="btn btn-warning btn-custom">Preparando</button>
        </div>
        <div className="button-group">
            <button className="btn btn-warning btn-custom">Preparado</button>
            <button className="btn btn-warning btn-custom">Entregado</button>
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
