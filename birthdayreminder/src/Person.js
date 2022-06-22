// import React from "react"
const Person = ({img,name,age})=> {
   return <article className="person">
    <img src={img} alt={name} />
    <div>
    <h4>{name}</h4>
    <p>{age} years</p>
    </div>
   </article>
}
export default Person

// Person component takes in a person object and tells us how it should look
// Each person has a name image and age