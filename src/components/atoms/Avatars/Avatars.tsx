import { IElementsProps } from '@/types/landingBuilder';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import classes from './Avatar.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';

const Avatars = ({ props, layout }: IElementsProps) => {

  const data = useSelector(state => state.layout.activeElements)
  console.log(data)

  const dispatch = useDispatch();
  const { Avatars } = props;
  const currentList = Avatars || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const secondItem = {
        id: layout.i,
        values: [
          {
            id: nanoid(),
            img: '',
            title: '',
          },
        ],
        size: 1,
      };
      dispatch(setProps(secondItem));
    }
  }, []);

  return (
    <Stack direction="row" spacing={2}
      className={classes.wrapper}>
      {currentList?  currentList.map((item) => (
                <>
                  <Avatar
                    className={classes.avatar}
                    key={item.id}
                    src={`${item.img}?w=162&auto=format`}
                    alt={String(item.title)}
                  />
                  <div className={classes.nick}>{item.title}</div>
                </>
              ))  : <Avatar className={classes.avatar} alt="avatar" src={'url'} />}
      <div className={classes.nick}></div>
    </Stack>
  );
}

export default Avatars;