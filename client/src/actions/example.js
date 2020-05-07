import axios from 'axios';
import {SET_EXAMPLE} from './types'

// Get example todo
export const getExample = (id) => async dispatch => {
  console.log('action')
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);  
      dispatch({
        type: SET_EXAMPLE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err)
    }
  };