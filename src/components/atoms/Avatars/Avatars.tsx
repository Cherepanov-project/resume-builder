
import { IElementsProps } from '@/types/landingBuilder';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import classes from './Avatar.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setProps } from '@/store/landingBuilder/layoutSlice';

const Avatars = ({ props, layout }: IElementsProps) => {
  const dispatch = useDispatch();
  const { Avatars } = props;
  const currentList = Avatars || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const secondItem = {
        id: layout.i || nanoid(),
        values: [
          {
            id: nanoid(),
            img: '',
            title: '',
          },
        ],
        size: 1,
      };
      console.log('ava', secondItem)
      dispatch(setProps(secondItem));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Stack key={nanoid()} direction="row" spacing={2}  className={classes.wrapper} sx={{ flexDirection: 'column' }}>
      {currentList ? (
        currentList.map((item) => (
          <div key={item.id}  className={classes.wrap}>
            <Avatar
              className={classes.avatar}
              src={`${item.img}?w=162&auto=format`}
              alt={String(item.title)}
              sx={{ width: '60%', height: '60%' }}
            />
            <div className={classes.nick}>
              {item.title || 'Enter name'}
            </div>
          </div>
        ))
      ) : (
        <>
          <Avatar
            className={classes.avatar}
            alt="avatar"
            src={'url'}
            sx={{ width: '60%', height: '60%' }}
          />
          <div key={nanoid()} className={classes.nick}>Enter name</div>
        </>
      )}
    </Stack>
  );
};

export default Avatars;
