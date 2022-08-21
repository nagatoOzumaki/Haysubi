import { Container } from '@mui/material';
import NoSsrWrapper from '../common/components/NoSsrWrapper';
import Chatbot from '../modules/chatbot';

const chatbot = () => (
  <NoSsrWrapper>
    <Container>
      <Chatbot />
    </Container>
  </NoSsrWrapper>
);
export default chatbot;
