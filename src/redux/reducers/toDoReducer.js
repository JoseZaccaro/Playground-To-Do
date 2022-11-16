import { createReducer, current  } from '@reduxjs/toolkit'
import toDoActions from '../actions/toDoActions'

const {getToDos, doneToDo} = toDoActions

const initialState = {
    toDos: []
}

const toDoReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(getToDos.fulfilled, (state, action)=>{
            console.log(action.payload)
            console.log("Fulfilled")
            
            return {toDos: action.payload}
        })
        .addCase(doneToDo, (state, action)=>{
            

            const filteredToDos = state.toDos.filter(element => element._id !== action.payload.todo._id)

            let modifiedTodo = {...action.payload.todo}

            modifiedTodo.done = modifiedTodo.done ? false : true;
            
            filteredToDos.push(modifiedTodo)
    
            return {toDos: filteredToDos}

        })
   
})


export default toDoReducer;