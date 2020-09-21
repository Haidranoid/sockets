import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    const [desktop, setDesktop] = useState('');

    return (
        <div className="container">
            <h1>Programa de Colas</h1>

            <div className="row">
                <div className="col-6">
                    <button className="btn btn-primary">
                        <Link to={'/viewer'} style={{color: 'white'}}>
                            Pantalla publica
                        </Link>

                    </button>
                    <button className="btn btn-secondary">
                        <Link to={'/generate-ticket'} style={{color: 'white'}}>
                            Crear Tickets
                        </Link>

                    </button>

                </div>

                <div className="col-6">

                    <input value={desktop} onChange={e => setDesktop(e.target.value)} type="number"
                           className="form-control" placeholder="Escritorio"
                           autoFocus required/>

                    <br/>
                    <button type="submit" className="btn btn-primary">
                        <Link to={`/desktop?desktop=${desktop}`} style={{color:'white'}}>
                            Ingresar
                        </Link>
                    </button>
                </div>
            </div>

        </div>
    );
};


export default Home;
