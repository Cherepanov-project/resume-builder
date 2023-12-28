import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import classes from './AboutUs.module.scss';
import DotsColor from '../DotsColor/DotsColor.tsx';

const AboutUs = () => {
  return (
    <div className="container-1200">
      <section className={classes['about-us']}>
        <DotsColor />
        <h2 className={classes.title}>We Deliver The Best</h2>
        <List classes={{ root: classes['about-list'] }}>
          <ListItem>
            <CheckIcon
              sx={{
                color: 'white',
                backgroundColor: '#57cda4',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
              }}
            />
            <Typography>Proven CV Templates to increase Hiring Chance</Typography>
          </ListItem>
          <ListItem>
            <CheckIcon
              fontSize="large"
              sx={{
                color: 'white',
                backgroundColor: '#57cda4',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
              }}
            />
            <Typography>Creative and Clean Templates Design</Typography>
          </ListItem>
          <ListItem>
            <CheckIcon
              fontSize="large"
              sx={{
                color: 'white',
                backgroundColor: '#57cda4',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
              }}
            />
            <Typography>Easy and Intuitive Online CV Builder</Typography>
          </ListItem>
          <ListItem>
            <CheckIcon
              fontSize="large"
              sx={{
                color: 'white',
                backgroundColor: '#57cda4',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
              }}
            />
            <Typography>Free to use. Developed by hiring professionals.</Typography>
          </ListItem>
          <ListItem>
            <CheckIcon
              fontSize="large"
              sx={{
                color: 'white',
                backgroundColor: '#57cda4',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
              }}
            />
            <Typography>Fast Easy CV and Resume Formatting</Typography>
          </ListItem>
          <ListItem>
            <CheckIcon
              fontSize="large"
              sx={{
                color: 'white',
                backgroundColor: '#57cda4',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
              }}
            />
            <Typography>Recruiter Approved Phrases.</Typography>
          </ListItem>
        </List>
      </section>
    </div>
  );
};

export default AboutUs;
