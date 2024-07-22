import { SubtitlePDF } from '../../atoms';

import { HobbyDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';
import { Box } from '@mui/material';

interface IHobbiesProps {
  data: HobbyDataType[];
  style: StyleOptionType;
}

const hobbiesContent = (data: HobbyDataType[] | undefined, style: StyleOptionType) => {
  if (!data) {
    return null;
  }
  const children = data.map((hobby) => {
    const { Hobbie, HobbieBullets } = style;
    const hobbyTitle = hobby.hobby;

    return (
      <Box key={uniqueKey()} style={Hobbie} display="flex">
        <li style={HobbieBullets} >{`${hobbyTitle}`}</li>
      </Box>
    );
  });

  return children;
};

export const HobbiesPDF = (props: IHobbiesProps) => {
  const { data, style } = props;
  if (!data) {
    return null;
  }
  const { Hobbies, Hobbie, HobbieBullets, Subtitle, Text } = style;

  const propsTitle = { str: 'Hobbies', style: Subtitle };
  const currStyle = { Hobbie, HobbieBullets, Text };

  return (
    <Box style={Hobbies}>
      <SubtitlePDF {...propsTitle} />
      {hobbiesContent(data, currStyle)}
    </Box>
  );
};
