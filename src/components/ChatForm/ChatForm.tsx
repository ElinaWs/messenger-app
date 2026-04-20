import {useState} from 'react';
import {TextField, Button} from '@mui/material';
import {axiosApi} from '../../axiosApi.ts';
import styles from './styles.module.css';

export const ChatForm = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (!author.trim() || !message.trim()) return;

    await axiosApi.post('/messages.json', {
      author,
      message,
    });

    setAuthor('');
    setMessage('');
  };

  return (
    <div className={styles.formContainer}>
      <TextField
        label="Author"
        variant="outlined"
        size="small"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className={styles.input}
      />

      <TextField
        label="Message"
        variant="outlined"
        size="small"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.input}
      />

      <Button
        variant="contained"
        onClick={sendMessage}
        className={styles.button}
      >
        Send
      </Button>
    </div>
  );
};
