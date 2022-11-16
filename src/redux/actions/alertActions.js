import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

const alerta = createAction('alerta', (data) => {
    // alert(data)

    return {
        payload: data
    }
})

const alertActions = {
    alerta
}




export default alertActions;