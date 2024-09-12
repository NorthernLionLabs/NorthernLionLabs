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
      title: '1. Agreement to Terms',
      description:
        'By accessing our website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws.',
    },
    {
      title: '2. Use License',
      description:
        'Upon purchase of an API license when available, permission in line with the terms of the license purchased is granted to temporarily access the materials (information or software) on Northern Lion Labs llc\'s website, and the websites the company controls, for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n' +
        '\n' +
        'modify or copy the materials;\n' +
        'use the materials for any commercial purpose, or for any public display (commercial or non-commercial);\n' +
        'attempt to decompile or reverse engineer any software contained on Northern Lion Labs llc\'s website;\n' +
        'remove any copyright or other proprietary notations from the materials; or\n' +
        'transfer the materials to another person or "mirror" the materials on any other server.',
    },
    {
      title: '3. Disclaimer',
      description:
        'The materials on Northern Lion Labs llc\'s website are provided on an \'as is\' basis. Northern Lion Labs llc makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
    },
    {
      title: '4. Limitations',
      description:
        'In no event shall Northern Lion Labs llc or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Northern Lion Labs\'s website, even if Northern Lion Labs llc or a Northern Lion Labs llc authorized representative has been notified orally or in writing of the possibility of such damage.',
    },
    {
      title: '5. Accuracy of Materials',
      description:
        'The materials appearing on Northern Lion Labs\'s website could include technical, typographical, or photographic errors. Northern Lion Labs llc does not warrant that any of the materials on its website are accurate, complete or current. Northern Lion Labs llc may make changes to the materials contained on its website at any time without notice.',
    },
    {
      title: '6. Links',
      description:
        'Northern Lion Labs llc has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Northern Lion Labs llc of the site. Use of any such linked website is at the user\'s own risk.',
    },
    {
      title: '7. Modifications',
      description:
        'Northern Lion Labs llc may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.',
    },
    {
      title:
        '8. Indemnification',
      description:
        'You agree to indemnify, defend, and hold harmless Northern Lion Labs llc, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages and costs, including reasonable attorneys\' fees, resulting from any violation of these Terms of Service or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the service using your account.',
    },
    {
      title:
        '8. Termination',
      description:
        'We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.',
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
