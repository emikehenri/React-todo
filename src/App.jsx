import React from 'react';
import react from './assets/react.svg';
import Todobar from './component/todobar';
import Todoform from './component/todoform';

function App() {

  return (
    <main>  
      <Todobar image = {react} />
      <Todoform textlist={'write a Todo...'} />
    </main>
  )
}

export default App  