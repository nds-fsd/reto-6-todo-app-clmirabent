import { useState } from "react";
import styles from './todoSection.module.css'
import Todo from '../todo/todo'

const TodoSection = ({ todos, removeByID, updateTodo }) => {
    // const todoTemplate = {
    //     text: "",
    //     id: -1,
    //     done: false,
    //     fecha: ""
    // }


    const deleteById = (item) => {
        removeByID(item.id)
    }

    // const toggleTask = (todoID) => { //this function receive an ID aand change the done state
    //     const todoToUpdate = todos.find((todo) => todo.id === todoID); //here will find the todo
    //     const text = todoToUpdate.text // get the text of the todo by definining a variable
    //     const date = todoToUpdate.fecha // get the date of the todo by definining a variable
    //     const isDone = !todoToUpdate.done // set the done state with the opposite value
    //     updateTodo(todoID, text, date, isDone) //call the updateTodo Function from the component parameters
    // }





    const onClickSave = (item) => { //this function update the TODO with the todoEdit variable
        updateTodo(item.id, item.text, item.fecha, item.done); //call the updatetodo function from the component using the information stored in the todoEdit variable
        // setTodoEdit(todoTemplate) //this is to set the clean state for the todo edit
    }

    return (
        <div className={styles.todos_section}>
            {
                todos.map((e) =>
                    <Todo key={e.id} item={e} onSave={onClickSave} onDelete={deleteById} />
                )
            }
        </div >
    );
};

export default TodoSection;

