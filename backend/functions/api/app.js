const AWS = require('aws-sdk');
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

exports.handler = async (event) => {
  console.log('New handler function started - version 3');
  console.log('Received event:', JSON.stringify(event, null, 2));

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "OPTIONS,POST"
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: JSON.stringify({}) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    console.error('Error parsing request body:', error);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Invalid request body' })
    };
  }

  const { firstName, lastName, email } = body;

  if (!firstName || !lastName || !email) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Missing required fields' })
    };
  }

  const params = {
    Destination: { ToAddresses: ['info@northernlion.io'] },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Name: ${firstName} ${lastName}\nEmail: ${email}`
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
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully', messageId: result.MessageId })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message })
    };
  }
};
