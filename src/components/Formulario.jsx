import React,{ useState } from 'react';
import Error from './Error';

const Formulario = () => {

    // definir State
    const [ nombregasto, guardarNombreGasto] = useState('');
    const [ cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad) 
        || nombregasto.trim() === ''  ) {
            guardarError(true);
            return;
        }
        guardarError(false);
        // construir el gasto

        // pasar el gasto al componente principal

        // resetear el form

    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar tus gastos aquí</h2>
            
            {error 
            ? 
                <Error
                    mensaje="Ambos campos son obligatorios o Presupuesto incorrecto"
                /> 
            : null
            }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombregasto}
                    onChange={e => guardarNombreGasto(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad( parseInt( e.target.value) ) }
                />
            </div>
            
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
     );
}
 
export default Formulario;