// import { T_BlockElement } from '@/types/landingBuilder';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import classes from './Avatar.module.scss';
// import { nanoid } from 'nanoid';
// // import { useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { nanoid } from 'nanoid';
// // import { setProps } from '@/store/landingBuilder/layoutSlice';

// const Avatars = (avatar: T_BlockElement) => {
//   // const dispatch = useDispatch();
//   // console.log(Avatars, props)
//   // const currentList = avatar || [];

//   // useEffect(() => {
//   //   if (currentList.length === 0) {
//   //     const secondItem = {
//   //       id: layout.i,
//   //       values: [
//   //         {
//   //           id: nanoid(),
//   //           img: '',
//   //           title: '',
//   //         },
//   //       ],
//   //       size: 1,
//   //     };
//   //     dispatch(setProps(secondItem));
//   //   }
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);
//   return (
//     <Stack direction="row" spacing={2} className={classes.wrapper} sx={{flexDirection: 'column'}}>
//       {/* {currentList ? (
//         currentList.map((item) => ( */}
//           {avatar.props.url ? <>
//             <Avatar
//               className={classes.avatar}
//               key={avatar.layout.i || nanoid()}
//               src={`${avatar.props.url}?w=162&auto=format`}
//               sx={{width: '60%', height: '60%'}}
//               alt={String(avatar.title)}
//             />
//           </> :
//           <>
//             <Avatar className={classes.avatar} alt="avatar" src={'url'} sx={{width: '60%', height: '60%'}}/>
//           </>}
//           <div className={classes.nick}>{avatar.props.text || avatar.props.Avatars ? avatar.props.Avatars[0].title : 'Enter your name'}</div>
//     </Stack>
//   );
// };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack direction="row" spacing={2} className={classes.wrapper} sx={{ flexDirection: 'column' }}>
      {currentList ? (
        currentList.map((item) => (
          <>
            <Avatar
              className={classes.avatar}
              key={item.id}
              src={`${item.img}?w=162&auto=format`}
              alt={String(item.title)}
              sx={{ width: '60%', height: '60%' }}
            />
            <div key={`nick-${item.id}`} className={classes.nick}>
              {item.title || 'Enter name'}
            </div>
          </>
        ))
      ) : (
        <>
          <Avatar
            className={classes.avatar}
            alt="avatar"
            src={'url'}
            sx={{ width: '60%', height: '60%' }}
          />
          <div className={classes.nick}>Enter name</div>
        </>
      )}
    </Stack>
  );
};

export default Avatars;
