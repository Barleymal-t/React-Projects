import React from 'react';
import Forum from './Forum';
import Forumtitle from './Forumtitle';



const App = () => {
  return (
    <main className='container'>
      <div className="row">
        <Forumtitle />
        <Forum/>
      </div>
    </main>
  );
};

export default App;