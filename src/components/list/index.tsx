import React from "react";
import './style.scss';

function Lista() {
    const tasks = [
        {tarefa: "React", tempo: "02:00:00"}, 
        {tarefa: "JavaScript", tempo: "01:00:00"}, 
        {tarefa: "TypeScript", tempo: "01:00:00"}
    ];
    return (
        <aside className="listaTarefas"> 
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="item">
                        <h3>{task.tarefa}</h3>
                        <span>{task.tempo}</span>
                    </li>
                ))}
            </ul>

        </aside>
    )
}

export default Lista;