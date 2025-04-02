import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import { handleSettingsMenu } from '@/store/landingBuilder/sectionsManagerSlice';
import { ArrowBackIosNewSharp, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  setToggleMenu: (value: string) => void;
}

const RowSpecificSettings: React.FC<Props> = ({ setToggleMenu }) => {
  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const id = useTypedSelector((state) => state.sectionsManager.curId).split('')[0];
  const curId = useTypedSelector((state) => state.sectionsManager.curId);

  useEffect(() => {
    setShowMore(false);
  }, [curId]);

  if (!layoutDate) {
    return null;
  }
  let layoutObjects = Object.values(layoutDate);
  const currentActiveRow = layoutObjects.filter((row, index) => {
    if (index + 1 === Number(id)) {
      return row;
    }
  });
  if (!showMore) {
    layoutObjects = currentActiveRow;
  }
  return (
    <Box>
      <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
        {showMore ? null : <h3>Current row: {id}</h3>}
        <Button
          endIcon={<ArrowBackIosNewSharp />}
          onClick={() => {
            setShowMore((showMore) => !showMore);
          }}
          sx={{ display: showMore ? 'none' : 'initial' }}
        ></Button>
      </Box>
      {layoutObjects.map((row, i1) => {
        const index = showMore ? i1 + 1 : id;
        if (!showMore) {
          return row.map((element, i2) => (
            <div
              key={`row-${index}-col-${i2 + 1}`}
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <span>Element {i2 + 1}:</span>
              <Button
                onClick={() => {
                  dispatch(
                    handleSettingsMenu({
                      type: 'UPDATE_ID',
                      value: `${index}${i2 + 1}`,
                    }),
                  );
                  setToggleMenu('ELEMENTS_SETTINGS');
                }}
              >
                {element.name || 'Empty element'}
              </Button>
            </div>
          ));
        }
        return (
          <Accordion key={`row-${index}`}>
            <AccordionSummary key={`summary-row-${index}`} expandIcon={<ExpandMore />}>
              Elements of row {index}:
            </AccordionSummary>
            <AccordionDetails
              key={`details-row-${index}`}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              {row.map((element, i2) => (
                <div
                  key={`row-${index}-col-${i2 + 1}`}
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <span>Element {i2 + 1}:</span>
                  <Button
                    onClick={() => {
                      dispatch(
                        handleSettingsMenu({
                          type: 'UPDATE_ID',
                          value: `${index}${i2 + 1}`,
                        }),
                      );
                      setToggleMenu('ELEMENTS_SETTINGS');
                    }}
                  >
                    {element.name || 'Empty element'}
                  </Button>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default RowSpecificSettings;
