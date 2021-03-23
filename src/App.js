import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine
        height="100vh"
        projectID="a21489bf-cff6-441d-8ac6-f98e1f817552"
        userName="admin"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
  );
}

export default App;
