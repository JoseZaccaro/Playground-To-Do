import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


const getToDos = createAsyncThunk('getToDos', async (data) => {
    try {
        const res = await axios.get("https://lista-productos-playground.herokuapp.com/api/productos")
        return res.data.respuesta

    } catch (error) {
        console.log(error);
        return {
            payload: 'Error'
        }
    }

})

const doneToDo = createAction('doneToDo', (todo) => {

    return {
        payload: {
            todo
        }
    }
})

const addToDo = createAsyncThunk('addToDo', async (data) => {
    try {
        const res = await axios.post('https://lista-productos-playground.herokuapp.com/api/productos', data , {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log(res);

        const toDo = res.data.respuesta;

        return toDo;
        // const res = await axios.post("https://lista-productos-playground.herokuapp.com/api/productos", {
        //     ...data
        // },
        //     {
        //         headers: {
        //             "Authorization": "Bearer " + localStorage.getItem('token')
        //         }
        //     })
        // const todos = res.data.respuesta.map(todo => {
        //     todo.done = false;
        //     return todo;
        // })

        // return todos

    } catch (error) {
        console.log(error);
        return {
            payload: 'Error'
        }
    }
})

const toDoActions = {
    getToDos,
    doneToDo,
    addToDo
}




export default toDoActions;