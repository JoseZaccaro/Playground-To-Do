import { createReducer } from '@reduxjs/toolkit'
import toDoActions from '../actions/toDoActions'
import alertActions from './../actions/alertActions';


const { getToDos, doneToDo, addToDo } = toDoActions
const { alerta } = alertActions
const initialState = {
    toDos: [],
    alerta: {
        show: false,
        texto: ''
    }
}

const toDoReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(getToDos.fulfilled, (state, action) => {

                const todos = action.payload.map(todo => {
                    todo.done = false;
                    return todo;
                })
                return { toDos: todos }
            })
            .addCase(doneToDo, (state, action) => {


                const filteredToDos = state.toDos.filter(element => element._id !== action.payload.todo._id)

                let modifiedTodo = { ...action.payload.todo }

                modifiedTodo.done = modifiedTodo.done ? false : true;

                filteredToDos.push(modifiedTodo)

                return { toDos: filteredToDos }

            })
            .addCase(addToDo.fulfilled, (state, action) => {

                return { toDos: [...state.toDos, action.payload] }
            })

            .addCase(alerta, (state, action) => {
                console.log(action.payload)
                return { ...state, alerta: { show: true, texto: action.payload } }
            })

    })


export default toDoReducer;