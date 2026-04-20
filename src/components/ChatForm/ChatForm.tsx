import {useState} from 'react';
import {TextField, Button} from '@mui/material';
import {axiosApi} from '../../axiosApi.ts';
import styles from './styles.module.css';

export const ChatForm = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (!author.trim() || !message.trim()) return;

    try {
      await axiosApi.post('/messages.json', {
        author,
        message,
      });

      setAuthor('');
      setMessage('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
};
