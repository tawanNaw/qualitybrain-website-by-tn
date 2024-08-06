import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const chatMessagesRef = useRef(null);

  const sendMessage = async () => {
    if (searchQuery) {
      addMessage('user', searchQuery);
      try {
        const response = await fetch('http://127.0.0.1:5000/search-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ search_query: searchQuery })
        });
        if (response.ok) {
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            addMessage('bot', `<p>${data.response}</p>`);
          } else {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            addMessage('bot', `<img src="${url}" alt="Image" />`);
          }
        } else {
          const error = await response.json();
          addMessage('bot', `<p style="color:red;">${error.error}</p>`);
        }
      } catch (error) {
        addMessage('bot', `<p style="color:red;">Error: ${error.message}</p>`);
      }
      setSearchQuery('');
    }
  };

  const addMessage = (sender, message) => {
    setMessages(prevMessages => [...prevMessages, { sender, message }]);
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
      <div className="chat-header">
        Chatbot Web App
        <button className="minimize-button" onClick={toggleMinimize}>
          {isMinimized ? '▲' : '▼'}
        </button>
      </div>
      {!isMinimized && (
        <>
          <div className="chat-messages" id="chatMessages" ref={chatMessagesRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <div className="chat-message-content" dangerouslySetInnerHTML={{ __html: msg.message }}></div>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              id="search_query" 
              placeholder="Type your message here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button id="sendButton" onClick={sendMessage}>Send</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
