import React from 'react';

const GenerateTicket = () => {
    return (
        <div>
            <table>
                <tr>
                    <td>
                <span id="lblNuevoTicket">
                    Cargando...
                </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="btn btn-secondary btn-lg">
                            Generar nuevo ticket
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
};


export default GenerateTicket;
