import React from 'react';

const Links = () => {
  return (
    <section id="links">
        <button onClick={()=> {document.getElementById("about").classList.toggle("hide")
        document.getElementById("app").classList.toggle("hide")}}>about</button>
        <button onClick={()=> {document.getElementById("article").classList.toggle("hide")
        document.getElementById("app").classList.toggle("hide")}}>article</button>
        <button onClick={()=> {document.getElementById("project").classList.toggle("hide")
        document.getElementById("app").classList.toggle("hide")}}>project</button>
        <button onClick={()=> {document.getElementById("contact").classList.toggle("hide")
        document.getElementById("app").classList.toggle("hide")}}>contact</button>
    </section>
  );
};

export default Links;
