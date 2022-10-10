import React from "react";

class Botao extends React.Component {
    render() {
        return (
            //"inline style", mais simples porém menos recomendada
            <button style={{
                backgroundColor: 'blue'
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;