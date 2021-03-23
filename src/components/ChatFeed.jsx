import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import UserMessage from './UserMessage';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, message } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        
    }

    console.log(chat, userName, message);

    return (
        <div>
            ChatFeed

        </div>
    );
}

export default ChatFeed;