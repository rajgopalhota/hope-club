const express = require('express');
const MessageModel = require('./../models/message');

const router = express.Router();

// Route to handle user messages
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new MessageModel({ name, email, message });
    console.log(newMessage)
    await newMessage.save();

    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
