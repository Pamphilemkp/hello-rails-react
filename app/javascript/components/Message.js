import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { messageInfo } from '../redux/store/message/message';


export const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messageReducer);
  
  useEffect(() => {
    dispatch(messageInfo());
    
  }, []);

  return (
    <div>
      <h1>
          {message} 
      </h1>

      <button onClick={()=> {dispatch(messageInfo())}}> Click to see a random salutation </button>
    </div>
  )
}