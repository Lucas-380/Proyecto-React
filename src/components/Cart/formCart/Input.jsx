import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Input = ({tipo, name, label, estado, setEstado, expresionRegular, funcion}) => {
    const onChange = (e) =>{
        setEstado({...estado, campo: e.target.value});
    }
    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                setEstado({...estado, valido: 'true' });
            }else{
                setEstado({...estado, valido: 'false' });
            }
        }
        if(funcion){
            funcion()
        }
    }

    return (
        <div className="mb-3">
            <label  className="form-label" style={{display:"block"}}>{label}</label>
            
            
            <input className="form-control mx-1" required  style={{display:"inline", width:"90%"}}
                type={tipo} 
                id={name}  
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
                />
                <FontAwesomeIcon style={{}}
                    icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                    valido={estado.valido}
                />
                
        </div>
    )
}

export default Input
