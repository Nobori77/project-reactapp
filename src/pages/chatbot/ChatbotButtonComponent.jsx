import React, { useState } from 'react';
import ChatbotModal from './ChatbotModalComponent';
import theme from '../../styles/theme';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          height: '56px',
          borderRadius: '28px',
          backgroundColor: isHovered ? theme.PALETTE.white : theme.PALETTE.primary.main,
          border: isHovered ? `2px solid ${theme.PALETTE.primary.main}` : '2px solid transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          padding: '0',
          zIndex: 1000,
          width: isHovered ? '180px' : '56px',   
          transition: 'width 0.3s ease, background-color 0.3s ease, border 0.3s ease',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: theme.PALETTE.primary.main,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ 
            justifyContent:'center', 
            alignItems: 'center',
            display:'flex' 
            }}>
            <img src='/assets/image/chatbot/chatbot.svg'
              style={{width:'20px',
              height:'25px',}}/>
          </span>
        </div>

        <span style={{
          color: theme.PALETTE.primary.main,
          fontSize: theme.FONT_SIZE.h8,
          fontWeight: theme.FONT_WEIGHT.medium,
          fontLine: theme.FONT_LINE.h8,
          padding: '0 20px 0 12px',
          opacity: isHovered ? 1 : 0, 
          transition: 'opacity 0.2s ease 0.1s', 
          
        }}>
          이음 도우미
        </span>
      </button>

      {isOpen && <ChatbotModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatbotButton;