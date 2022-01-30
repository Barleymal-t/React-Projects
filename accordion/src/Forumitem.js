import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const Forumitem = ({question,answer}) => {
  const [readAnswer,setReadAnswer]= useState(false)
  return <article className='forumItem'>
  <header>
      <h4>{question}</h4>
      <button className='btn' onClick={()=>setReadAnswer(!readAnswer)}>{readAnswer ? <AiOutlineMinus/> : <AiOutlinePlus />}</button>
  </header>
      {readAnswer && <p>{answer}</p>}
  </article>;
};

export default Forumitem;
