import dynamic from 'next/dynamic';
import NoSsrWrapper from '../../common/components/NoSsrWrapper';
import ActionProvider from './ActionProvider';
import config from './config';
import MessageParser from './MessageParser';
import 'react-chatbot-kit/build/main.css';

const ChatBot = () => {
  const Chatbot = dynamic(
    async () => import('react-chatbot-kit').then(m => m.Chatbot),
    {
      ssr: false,
    }
  );
  return (
    <NoSsrWrapper>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </NoSsrWrapper>
  );
};

export default ChatBot;
