import { createSlice } from '@reduxjs/toolkit'

export const personSlice = createSlice({
  name: 'people',
  initialState: {
    peopleList: [{id: new Date().toString(), name: 'XRW' }],
  },
  reducers: {
    addPeople: (state, action) => {
      console.log(state, action)
      state.peopleList.push({id: new Date().toString(), name: action.payload})
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPeople } = personSlice.actions

export default personSlice.reducer