import React from "react";

class Botao extends React.Component {
    render() {
        const backgroundColor = 'red';
        return (
            //"inline style", mais simples porém menos recomendada
            <button style={{
                backgroundColor
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;