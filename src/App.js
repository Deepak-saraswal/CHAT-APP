
import './App.css';

import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import chatpage from './pages/chatpage';
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage}  exact/>
      <Route path="/chats" component={ chatpage} />
      
      
    </div>
  );
}

export default App;
