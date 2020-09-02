import React from 'react';
import ContextA from './Components/ContextA';
import './App.css';
export  const UserContext = React.createContext();
export  const ConsumerContext = React.createContext();
function App() {

  return (
  	<UserContext.Provider value = {'Anoop'}>
       <ConsumerContext.Provider value = {'Aaj Tak'}>
           <div className="App">
                      <h1>useContext Hooks</h1>
                      <ContextA/>
           
            </div>
       </ConsumerContext.Provider>
      
    </UserContext.Provider>
  );
}

export default App;
