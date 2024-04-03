import React, {useState} from "react";


const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);

    // Función para manejar el cambio en el input
    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Actualiza el estado inputValue con el valor del input
    };

    // Función para manejar la tecla presionada en el input 
    const handleKeyDown = (e) => {
        // Verifica si la tecla presionada es "Enter" y si el valor del input no está vacío
        if (e.key === "Enter" && inputValue.trim() !== "") { 
            // Agrega el valor del input al array de tareas y limpia el input
            setTasks([...tasks, inputValue.trim()]);
            setInputValue("");
        }
    };

    // Función eliminar una tarea
    const handleDeleteTask = (index) => {
        // Crea una nueva copia del array de tareas
        const newTasks = [...tasks];
        // Elimina la tarea en la posición indicada por el índice
        newTasks.splice(index, 1);
        // Actualiza el estado de las tareas con la nueva copia
        setTasks(newTasks);
    };

    return (
        <>
            <h1>ToDoS</h1>
            
                <div className="container">
                    
                    <input 
                        type="text" 
                        placeholder="What needs to be done?"
                        value={inputValue} 
                        onChange={handleInputChange} 
                        onKeyDown={handleKeyDown} 
                    />
                    
                    <ul>
                        {tasks.map((task, index) => (
                        <li key={index}>
                            {task}{" "}
                            <button onClick={() => handleDeleteTask(index)}>X</button>
                        </li>
                        ))}
                    </ul>
                    <p>{tasks.length} item left</p>
                    
                </div>
                <div className="container hoja1"></div>
                <div className="container hoja2"></div>
                <footer>
                    Designed by Cris Machuca for <span className="footer-span"> 4Geeks Academy</span>
                </footer>
        </>
    );
};

export default TodoList;