const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');

router.post(
    '/deposit',
    [
      body('title')
        .trim()
        .isLength({ min: 5 }),
      body('description')
        .trim()
        .isLength({ min: 10 })
    ],
    feedController.createPost
  );
  