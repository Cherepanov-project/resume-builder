import DotsColor from '../DotsColor/DotsColor.tsx';
import List from '@mui/material/List';
import { ListItem, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
import f1 from '@assets/images/templatesPageImage/f1.png';
import f2 from '@assets/images/templatesPageImage/f2.png';
import f3 from '@assets/images/templatesPageImage/f3.png';
import f4 from '@assets/images/templatesPageImage/f4.png';
import f5 from '@assets/images/templatesPageImage/f5.png';
import f6 from '@assets/images/templatesPageImage/f6.png';
import classes from './Specifications.module.scss';

const Specifications = () => {
  return (
    <div className="container-1200">
      <section className={classes['specifications']}>
        <DotsColor />
        <h2>Our Main Features</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut
          felis congue nisl hendrerit commodo.
        </p>
        <List classes={{ root: classes['specifications-list'] }}>
          <ListItem classes={{ root: classes['specifications-item'] }}>
            <div>
              <img src={f1} alt="" />
            </div>
            <ListItemText classes={{ root: classes['specifications-text'] }}>
              <h3>Proven CV Templates to increase Hiring Chance</h3>
              <Typography>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                accumsan ut, posuere sit Lorem ipsum adipiscing elit.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem classes={{ root: classes['specifications-item'] }}>
            <div>
              <img src={f2} alt="" />
            </div>
            <ListItemText classes={{ root: classes['specifications-text'] }}>
              <h3>Creative, Modern and Clean Templates Design</h3>
              <Typography>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                accumsan ut, posuere sit Lorem ipsum adipiscing elit.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem classes={{ root: classes['specifications-item'] }}>
            <div>
              <img src={f3} alt="" />
            </div>
            <ListItemText classes={{ root: classes['specifications-text'] }}>
              <h3>Easy and Intuitive Online CV and Resume Builder </h3>
              <Typography>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                accumsan ut, posuere sit Lorem ipsum adipiscing elit.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem classes={{ root: classes['specifications-item'] }}>
            <div>
              <img src={f4} alt="" />
            </div>
            <ListItemText classes={{ root: classes['specifications-text'] }}>
              <h3>Free to use. Developed by hiring professionals.</h3>
              <Typography>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                accumsan ut, posuere sit Lorem ipsum adipiscing elit.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem classes={{ root: classes['specifications-item'] }}>
            <div>
              <img src={f5} alt="" />
            </div>
            <ListItemText classes={{ root: classes['specifications-text'] }}>
              <h3>Recruiter Approved Phrases with Module Notification</h3>
              <Typography>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                accumsan ut, posuere sit Lorem ipsum adipiscing elit.
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem classes={{ root: classes['specifications-item'] }}>
            <div>
              <img src={f6} alt="" />
            </div>
            <ListItemText classes={{ root: classes['specifications-text'] }}>
              <h3>Fast Easy CV and Resume Formatting</h3>
              <Typography>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                accumsan ut, posuere sit Lorem ipsum adipiscing elit.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </section>
    </div>
  );
};

export default Specifications;
