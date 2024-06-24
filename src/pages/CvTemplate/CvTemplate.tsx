import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { DevTool } from '@hookform/devtools';
import { Box, Typography } from '@mui/material';
import { useState, MouseEventHandler } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import classes from './CvTemplate.module.scss';

import { validationSchema, msObj, methodsObj, transformedData } from './utils/index';
import { SideBarItem, CardForm, FinishResume, EditResumeTemplate } from './components/index';
import { addAllPersonalInfo } from '@store/cvTemplate/allPersonaInfoSlice.ts';

interface IFormInputs extends yup.InferType<typeof validationSchema> {}

const CvTemplate = () => {
  const dispatch = useDispatch();
  const [showElement, setShowElement] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowElement(!showElement);
  };

  return (
    <Box>
      <Box className={classes.cvTemlpate__header}>
        <Typography sx={{ mt: 6, ml: 8, fontSize: 32 }}>Resumo Resume Builder</Typography>
      </Box>
      {showElement ? (
        <EditResumeTemplate handleButtonClick={handleButtonClick} />
      ) : activeStep === 6 ? (
        <FinishResume
          handleReset={() => handleChangeStep('reset')}
          handleButtonClick={handleButtonClick}
        />
      ) : (
        <Box>
          <FormProvider {...methods}>
            <Box className={classes.cvTemlpate__stepper}>
              <SideBarItem activeStep={activeStep} setActiveStep={setActiveStep} />
              <CardForm
                activeStep={activeStep}
                handleChangeStep={handleChangeStep}
                onSubmit={handleSubmit(onSubmit)}
              />
            </Box>
            <DevTool control={control} placement="top-left" />
          </FormProvider>
        </Box>
      )}
    </Box>
  );
};

export default CvTemplate;
