const UserMessage = ({ lastMessage, message }) => {
    const FirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username; 
    return (
        <div className="message-row">
            {FirstMessageByUser && (
                <div 
                className="message-avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                  />
                )}
                {message?.attachments?.length > 0
                ? (
                    <img 
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{ marginLeft: FirstMessageByUser ? '4px' : '48px' }}
                    />
                 ) : (
                    <div className="message" style={{ float: 'left', background: '#CABCDC', marginLeft: FirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                 )
            }
        </div>
        ); 
    }

export default UserMessage;