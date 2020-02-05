const express = require('express');
const app = express();
const messages = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', messages.create);
app.get('/api/messages', messages.read);
app.put('/api/messages/:id', messages.update);
app.delete('/api/messages/:id', messages.delete);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})