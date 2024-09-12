import React from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import {LinkedIn} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Leadership
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            name: 'Kevin Downey',
            title: 'Founder',
            avatar: 'https://gravatar.com/downeykp',
            about:
              "Engineer + app developer, veteran. Virtuoso Slash-clone. Surprisingly poor at the last one 'iiii]; )\\'" +
              "Education: Master of Software Engineering from Penn State University",
          },
        ].map((item, i) => (
          <Grid item xs={1} sm={1} md={3} key={i} alignItems={"center"}>
            <Box
              component={Card}
              borderRadius={3}
              boxShadow={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={item.avatar}
                  height={80}
                  width={80}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.name} secondary={item.title} />
                  <Typography variant={'subtitle2'} color={'textSecondary'}>
                    {item.about}
                  </Typography>
                  <Box marginTop={4}>
                    <IconButton
                      size={'small'}
                      sx={{
                        marginRight: 1,
                        color: colors.blueGrey[200],
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      size={'small'}
                      sx={{
                        color: colors.blueGrey[200],
                      }}
                    >
                      <LinkedIn/>
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
