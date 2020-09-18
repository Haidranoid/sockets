import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <h1>Programa de Colas</h1>

            <div className="row">
                <div className="col-6">

                    <a className="btn btn-primary" href="publico.html">Pantalla publica</a>
                    <a className="btn btn-secondary" href="nuevo-ticket.html">Crear Tickets</a>

                </div>

                <div className="col-6">
                    <form action="escritorio.html">
                        <input name="escritorio" type="number" className="form-control" placeholder="Escritorio"
                               autoFocus required/>

                        <br/>
                        <button type="submit" className="btn btn-primary">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};


export default Home;
