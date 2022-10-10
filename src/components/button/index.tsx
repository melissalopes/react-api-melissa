import React from "react";

class Botao extends React.Component {
    render() {
        const isItActive = false;
        const styles = {
            backgroundColor: isItActive ? "green" : "red"
        };
        return (
            //"inline style" mais simples porém menos recomendado
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Botao;