import React, {useEffect, useState} from 'react';
import { FaHeartbeat, FaBrain, FaGhost } from "react-icons/fa";

const Icon = () => {
    const icons = [<FaBrain />, <FaHeartbeat />, <FaGhost />];
    const [index,setIndex] =useState(0)
    
    useEffect(()=>{
            const interval = setInterval(()=>{
                if ( index < icons.length-1){
                    setIndex(index+1)
                }else {
            setIndex(0)
        }
            },3000);
            return ()=> clearInterval(interval)
        })
    
  return <section id="icon">
    {icons[index]}
  </section>;
};

export default Icon;
