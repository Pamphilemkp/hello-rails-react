
import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// create action
const GET_MESSAGE = 'hello-rails-react/message/GET_MESSAGE'
const url = 'http://localhost:3000/api/v1/messages';
const initialState = 'hello world';

//reducers
const messageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload

    default: 
    return state;
  }
}

// create action types
const addGreeting = (greeting) => ({type: GET_MESSAGE, payload: greeting});

// fetch api data
export const messageInfo = () => async (dispatch) => {
  const response = await fetch(url);
    const data = await response.json();
    // console.log(data.name)
    dispatch(addGreeting(data.name))
    return data;
};

export default messageReducer;

