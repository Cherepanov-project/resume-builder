import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { DevTool } from '@hookform/devtools';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import classes from './CvTemplate.module.scss';

import { validationSchema, msObj, transformedData } from './utils/index';
import { SideBarItem, CardForm, FinishResume, ChoosingResumeOption } from './components/index';
import { addAllPersonalInfo } from '@store/cvTemplate/allPersonaInfoSlice.ts';
import { StylesNameKeys } from '@pages/CvTemplatePDF/const';

type IMSObj = typeof msObj;

interface IFormInputs extends yup.InferType<typeof validationSchema> {}

const CvTemplate = () => {
  const dispatch = useDispatch();
  const [showElement, setShowElement] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [nameTemplate, setNameTemplate] = useState<StylesNameKeys>('oslo');
  
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  
  const { control, handleSubmit } = methods;

  const handleChangeStep = (ms: keyof IMSObj): void => {
    setActiveStep(msObj[ms]);
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const formData = data as unknown as Parameters<typeof transformedData>[0];
    dispatch(addAllPersonalInfo(transformedData(formData)));
    handleChangeStep('plus' as keyof IMSObj);
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
        <FinishResume 
          nameTemplate={nameTemplate} 
          handleReset={() => handleChangeStep('reset' as keyof IMSObj)} 
        />
      )}
    </Box>
  );
};

export default CvTemplate;