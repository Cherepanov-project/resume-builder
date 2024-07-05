import React from 'react';
import { useAppDispatch, useTypedSelector } from '@/hooks/cvTemplateHooks';
import { setSectionStyle } from '@/store/landingBuilder/layoutSlice';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import './BasicToolTipSettings.scss';

const MAX = 20;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export interface IPropsToolTip {
  elSize: unknown;
  setElSize: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
}

const BasicToolTipSettings: React.FC<IPropsToolTip> = ({ setElSize }) => {
  const dispatch = useAppDispatch();

  const [val, setVal] = React.useState<number>(MIN);

  const { gridContainers } = useTypedSelector((state) => state.layout);
  console.log(gridContainers);
  const elements = gridContainers.find((el) =>
    el.elements.activeElements.find((el) => el.name === 'RatingSystem'),
  );
  const layout = elements?.layout.i;

  useEffect(() => {
    // вывести в отдельную функцию
    setElSize({ width: val });
    dispatch(setSectionStyle({ i: layout, style: { size: val } }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };

  return (
    <>
      <span className="title">set size</span>
      <Box className="wrapper" sx={{ width: 250 }}>
        <Slider
          marks={marks}
          step={5}
          value={val}
          valueLabelDisplay="auto"
          min={MIN}
          max={MAX}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" onClick={() => setVal(MIN)} sx={{ cursor: 'pointer' }}>
            {MIN} min
          </Typography>
          <Typography variant="body2" onClick={() => setVal(MAX)} sx={{ cursor: 'pointer' }}>
            {MAX} max
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BasicToolTipSettings;
