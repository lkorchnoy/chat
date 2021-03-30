import React, { Component } from 'react';
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import Map from '../Map';



 const MessageForm = (props) => { 
   
        const [value, setValue] = useState('');
        const { chatId, creds } = props;

        const handleSubmit = (event) => {
            event.preventDefault();

            const text = value.trim();

            if(text.length > 0) sendMessage(creds, chatId, { text });
            setValue('');

    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);

    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    }
    
    const handleUploadMap = (event) => {
        console.log("hello");
    }
    
    return (
       <form className="message-form" onSubmit={handleSubmit} >
           <input 
               className="message-input"
               placeholder="Send your message"
               value={value}
               onChange={handleChange} 
               onSubmit={handleSubmit}
               
               
               />
               <label htmlFor="upload-button">
                   <span className="image-button">
                       <PictureOutlined className="picture-icon" />
                   </span>
               </label>
               <label htmlFor="upload-button-map">
                   <span className="map-button">
                   
                   </span>
               </label>
               
               <input 
                   type="file"
                   multiple={false}
                   id="upload-button"
                   style={{ display: 'none' }}
                   onChange={handleUpload}
                   
                   />

                   <input 
                   type="text"
                   multiple={false}
                   id="upload-button-map"
                   style={{ display: 'none' }}
                   onSubmit={handleUploadMap}
                   
                   />  
                   

           <button type="submit" className="send-button">
               <SendOutlined className="send-icon" />
               

           </button>
           <button type="button" className="map-button">
           <SendOutlined className="map-icon" />
           </button>
       </form>
    );
}

export default MessageForm;
   
