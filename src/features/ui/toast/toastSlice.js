import { createSlice } from "@reduxjs/toolkit";


const toastSlice = createSlice({
  name : "toast",
  initialState : {
    open : false ,
    message : "" ,
    severity : ""
  } ,

  reducers : {
    showToast (state , action) {
      if (!action.payload.message) {
        return;
      }
      state.open = true
      state.message = action.payload.message
      state.severity = action.payload.severity || "success"
    } ,

    hideToast (state) {
      state.open = false 
    },

    clearToast(state) {
      state.message = "";
      state.severity = "";
    }
  }
})

export const {
  showToast,
  hideToast,
  clearToast
} = toastSlice.actions;
export default toastSlice.reducer;