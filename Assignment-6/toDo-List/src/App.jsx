import { useState } from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [input, setInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    function readInputValue(event) {
        setInput(event.target.value);
    }

    function addTodo() {
        if (!input.trim()) return alert("You can't submit empty items.");
        setTodoList([...todoList, input]);
        setInput("");
    }

    function deleteTodo(index) {
        const updatedList = todoList.filter((_, i) => i !== index);
        setTodoList(updatedList);
        // Cancel editing if the deleted item was being edited
        if (editingIndex === index) {
            setEditingIndex(null);
            setInput("");
        }
    }

    function startEditing(index) {
        setInput(todoList[index]);
        setEditingIndex(index);
    }

    function handleUpdate() {
        if (!input.trim()) return alert("You can't update with an empty item.");
        const updatedList = [...todoList];
        updatedList[editingIndex] = input;
        setTodoList(updatedList);
        setInput("");
        setEditingIndex(null);
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="Write something you want to do now or later." 
                value={input}
                onChange={readInputValue} 
            />

            <button onClick={editingIndex !== null ? handleUpdate : addTodo}>
                {editingIndex !== null ? "Update" : "Add"}
            </button>

            <h1>Todos</h1>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                        <button onClick={() => startEditing(index)}>Edit</button>
                    </li>
                ))}
            </ul>

            {editingIndex !== null && (
                <p>Editing item #{editingIndex + 1}</p>
            )}
        </>
    );
}

export default App;