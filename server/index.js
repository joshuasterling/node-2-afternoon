const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3001;
const messages = require('./controllers/messages_controller');



app.post('/api/messages', messages.create);
app.get('/api/messages', messages.read);
app.put('/api/messages/:id', messages.update);
app.delete('/api/messages/:id', messages.delete);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})