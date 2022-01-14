import React, { useState } from 'react'

const Tour = ({id,image,info,price,name,removeTour}) => {
  const [readMore,setReadMore] = useState(false)
  return (
    <article className='tour'>
    <img src={image} alt={name} />
      
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <div>
          <p>{readMore ? info: `${info.substring(0,200)}...`}
          <button className='read-more' onClick={()=> setReadMore(!readMore)}>{readMore ? 'show less':'read more'}</button>
          </p>
          <button className="delete-btn" onClick={()=>removeTour(id)}>not interested</button>
        </div>
      </footer>
    </article>
  )
}

export default Tour