import React from 'react';
import './Button.css';

export default props => {
    
    return (
        <button
            
            className=(`botao ${props.espaço ? 'espaco':''} ${props.laranja ? 'laranja':''}`)>
            {props.label}
        </button>
    )
}
