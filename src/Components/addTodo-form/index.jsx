import styles from '../addTodo-form/addtodo.module.css'

const AddTodo = ({ input, addTask, setInput }) => {

    //when the user write on the input and click on the bottom, then, will be added to the task section
    // if click on button and the input is with a text (full) then add the task to the taskSection
    // When you pass value, you must also pass an onChange handler that updates the passed value.If you pass value without onChange, it will be impossible to type into the text area.


    return (
        <div className={styles.inputField}>
            <input type="text" className={styles.input} placeholder='Add Your To-Do' onChange={e => setInput(e.target.value)}></input>
            <button type="submit" className={styles.button} onClick={() => addTask(input)}>Add ToDo</button>
        </div>
    )

}

export default AddTodo;