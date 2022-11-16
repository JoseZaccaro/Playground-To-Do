import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


const getToDos = createAsyncThunk('getToDos', async (dispatch, getState) => {
    try {
        const res = await axios.get("https://lista-productos-playground.herokuapp.com/api/productos")
        const todos = res.data.respuesta.map(todo => {
            todo.done = false;
            return todo;
        })

        return todos

    } catch (error) {
        console.log(error);
        return {
            payload: 'Error'
        }
    }

})

const doneToDo = createAction('doneToDo',(todo)=>{

        
    return {
        payload:{
            todo
        }
    }
})

const toDoActions = {
    getToDos,
    doneToDo
}




export default toDoActions;