const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://northernlion.io'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 3
});
app.use('/api/send-email', limiter);

// AWS configuration
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-1'
});

// Add this for debugging
console.log('AWS Config:', {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID ? '***' : 'undefined',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ? '***' : 'undefined',
  region: process.env.AWS_REGION || 'us-east-1'
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

const validateEmail = [
  body('firstName').trim().isLength({ min: 1 }).withMessage('First name is required').escape(),
  body('lastName').trim().isLength({ min: 1 }).withMessage('Last name is required').escape(),
  body('email').isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long').escape(),
];

app.post('/api/send-email', validateEmail, async (req, res) => {
  console.log('Received email request:', req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, message } = req.body;

  const params = {
    Destination: {
      ToAddresses: ['info@northernlion.io']
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New Contact Form Submission'
      }
    },
    Source: 'info@northernlion.io'
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('Email sent successfully:', result);
    res.status(200).json({ message: 'Email sent successfully', result });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working correctly' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
