import { useState } from "react";

const Progress = ({ paid,total }) => {
  const [style, setStyle] = useState({});
  
  console.log(paid,total)
  setTimeout(() => {
    let ratio = (paid/total) * 100;
    const newStyle = { opacity: 1, width: `${ratio}%` };
    setStyle(newStyle);
  }, 1000);
  return (
    <>
      <div id="progressBar">
        <div id="progress" style={style}>
        
          {paid}/{total}
        </div>
      </div>
      {/* <button onClick={change}>increase</button> */}
    </>
  );
};

export default Progress;
