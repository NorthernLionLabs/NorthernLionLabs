import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PrivacySection = ({ title, description }) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography component={'p'} color={'textSecondary'}>
        {description}
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  const data = [
    {
      title: '1. Introduction',
      description:
        'Welcome to Northern Lion Labs llc ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.',
    },
    {
      title: '2. The Data We Collect About You',
      description:
        'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:\n' +
        '\n' +
        'Identity Data includes first name, last name.\n' +
        'Contact Data includes email address.\n' +
        'Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.\n' +
        'Usage Data includes information about how you use our website and services.',
    },
    {
      title: '3. How We Use Your Personal Data',
      description:
        'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:\n' +
        '\n' +
        'To respond to your inquiries.\n' +
        'To provide you with information, products, or services that you request from us.\n' +
        'To notify you about changes to our service.\n' +
        'To administer and protect our business and this website.\n',
    },
    {
      title: '4. Data Security',
      description:
        'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.',
    },
    {
      title: '5. Data Retention',
      description:
        'We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.',
    },
    {
      title: '6. Your Rights',
      description:
        'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:\n' +
        '\n' +
        'Request access to your personal data.\n' +
        'Request correction of your personal data.\n' +
        'Request erasure of your personal data.\n' +
        'Opt out of the processing of your personal data.\n' +
        'Request restriction of processing your personal data.\n' +
        'Right to withdraw consent.\n' +
        '\n' +
        'If you wish to exercise any of these rights, please contact us.',
    },
  ];
  return (
    <Box>
      {data.map((item, i) => (
        <Box key={i} marginBottom={i < data.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
