import { useState } from 'react'
import styles from './todo.module.css'
const Todo = ({ item, onSave, onDelete }) => {

    const [singleTodo, setSingleTodo] = useState(item)
    const [isEditMode, setIsEditMode] = useState(false)

    const updateTodoText = (text) => {

        setSingleTodo({ ...singleTodo, text })
    }

    const toggleTask = (event) => {
        const isChecked = event.target.checked
        const newTodo = { ...singleTodo, done: isChecked }
        setSingleTodo(newTodo)
        onSave(newTodo)
    }

    const onSaveHandler = () => {
        onSave(singleTodo)
        setIsEditMode(false)
    }
    // variable === true        variable
    return (
        <div className={styles.todo_container} >
            <div className={styles.todo_text_container}>
                {
                    isEditMode
                        ? (<input type="text" className={styles.edit_text_container} value={singleTodo.text} onChange={(ev) => updateTodoText(ev.target.value)} />)
                        : (<span >{singleTodo.text}</span>)
                }
            </div>
            <input type="checkbox" className={styles.check} checked={singleTodo.done} onChange={() => toggleTask(singleTodo.id)} />
            <div className={styles.todo_actions}>
                {isEditMode === false && <button className={styles.button} onClick={() => setIsEditMode(true)}> Edit</button>}
                <button className={styles.button} onClick={() => onSaveHandler()} > Save </button>
                <button className={styles.button} onClick={() => onDelete(item)}>Delete</button>
            </div>

        </div>
    )
}

export default Todo