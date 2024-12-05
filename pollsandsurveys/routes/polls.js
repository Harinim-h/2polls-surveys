const express = require('express');
const Poll = require('../models/Poll');
const router = express.Router();

// Create a new poll
router.post('/', async (req, res) => {
  const { question, options } = req.body;
  const poll = new Poll({ question, options });
  await poll.save();
  res.status(201).json(poll);
});

// Get all polls
router.get('/', async (req, res) => {
  const polls = await Poll.find();
  res.json(polls);
});

// Vote on a poll
router.post('/:id/vote', async (req, res) => {
  const { optionIndex } = req.body;
  const poll = await Poll.findById(req.params.id);
  if (!poll) return res.status(404).send('Poll not found');
  poll.votes[optionIndex]++;
  await poll.save();
  res.json(poll);
});

module.exports = router;
