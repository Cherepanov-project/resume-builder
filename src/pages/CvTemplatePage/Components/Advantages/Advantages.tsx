import List from '@mui/material/List';
import { ListItem, ListItemText } from '@mui/material';
import d1 from '../../../../assets/images/templatesPageImage/d1.png';
import Typography from '@mui/material/Typography';
import d2 from '../../../../assets/images/templatesPageImage/d2.png';
import d3 from '../../../../assets/images/templatesPageImage/d3.png';
import Button from '@mui/material/Button';
import classes from './Advantages.module.scss';
import DotsColor from '../DotsColor/DotsColor.tsx';

const Advantages = () => {
  return (
    <div className={classes['bg-wrapper']}>
      <div className="container-1200">
        <section className={classes.advantages}>
          <List classes={{ root: classes['advantages-list'] }}>
            <ListItem classes={{ root: classes['advantages-item'] }}>
              <div>
                <img src={d1} alt="" />
              </div>
              <ListItemText classes={{ root: classes['advantages-text'] }}>
                <h3>Easy Online Resume Builder</h3>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi
                  assumenda.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem classes={{ root: classes['advantages-item'] }}>
              <div>
                <img src={d2} alt="" />
              </div>
              <ListItemText classes={{ root: classes['advantages-text'] }}>
                <h3>Easy Online Resume Builder</h3>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit skaj gjska consectetur
                  adipisicing elit
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem classes={{ root: classes['advantages-item'] }}>
              <div>
                <img src={d3} alt="" />
              </div>
              <ListItemText classes={{ root: classes['advantages-text'] }}>
                <h3>Easy Online Resume Builder</h3>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi
                  assumenda.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>

          <div className={classes['advantages-wrapper__text']}>
            <DotsColor />
            <h2>Why Choose Our Platform?</h2>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non
              suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non
              suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
            </Typography>
            <Button variant="contained" color="primary">
              lets build your CV
            </Button>
          </div>
          {/*</div>*/}
        </section>
      </div>
    </div>
  );
};

export default Advantages;
