import { ChatEngine   } from 'react-chat-engine';
import './App.css';
import { ChatFeed } from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <h4>james</h4>
      <ChatEngine 
        height='100vh'
        projectID='81e294cb-1065-4a75-81d8-1dc9c3f980a7'
        userName="jamesnju"
        userSecret="12345"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </div>
  );
}

export default App;
