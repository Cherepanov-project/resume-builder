import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { DevTool } from '@hookform/devtools';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import classes from './CvTemplate.module.scss';

import { validationSchema, msObj, methodsObj, transformedData } from './utils/index';
import { SideBarItem, CardForm, FinishResume, ChoosingResumeOption } from './components/index';
import { addAllPersonalInfo } from '@store/cvTemplate/allPersonaInfoSlice.ts';
import { StylesNameKeys } from '@pages/CvTemplatePDF/const';

interface IFormInputs extends yup.InferType<typeof validationSchema> {}

const CvTemplate = () => {
  const dispatch = useDispatch();
  const [showElement, setShowElement] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [nameTemplate, setNameTemplate] = useState<StylesNameKeys>('oslo');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const methods: UseFormReturn<IFormInputs> = useForm<IFormInputs>(methodsObj);
  const { control, handleSubmit } = methods;

  const handleChangeStep = (ms: string): void => {
    setActiveStep(msObj[ms]);
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(addAllPersonalInfo(transformedData(data)));
    handleChangeStep('plus');
  };

  const handleButtonClick = (nameResume: StylesNameKeys) => {
    setShowElement(!showElement);
    setNameTemplate(nameResume);
  };

  return (
    <Box>
      <Box className={classes.cvTemlpate__header}>
        <Typography sx={{ mt: 6, ml: 8, fontSize: 32 }}>Resumo Resume Builder</Typography>
      </Box>
      {activeStep !== 6 ? (
        showElement ? (
          <ChoosingResumeOption handleButtonClick={handleButtonClick} />
        ) : (
          <Box>
            <FormProvider {...methods}>
              <Box className={classes.cvTemlpate__stepper}>
                <SideBarItem activeStep={activeStep} setActiveStep={setActiveStep} />
                <CardForm
                  activeStep={activeStep}
                  setShowElement={setShowElement}
                  handleChangeStep={handleChangeStep}
                  onSubmit={handleSubmit(onSubmit)}
                  nameTemplate={nameTemplate}
                />
              </Box>
              <DevTool control={control} placement="top-left" />
            </FormProvider>
          </Box>
        )
      ) : (
        <FinishResume nameTemplate={nameTemplate} handleReset={() => handleChangeStep('reset')} />
      )}
    </Box>
  );
};

export default CvTemplate;
