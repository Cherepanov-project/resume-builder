import React from 'react';
import { useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from '@hookform/devtools';
import classes from './CvTemplate.module.scss';

import DemoCv from '../../components/organisms/DemoCv';
import { DemoCvModal } from '../../components/organisms/DemoCvModal';
import { CvTemplatePDF } from '../CvTemplatePDF';

import Box from '@mui/material/Box';
import PersonalInfo from '../../components/organisms/PersonalInfo';
import Education from '../../components/organisms/Education';
import Experience from '../../components/organisms/Experience';
import Social from '../../components/organisms/Social';
import Hobbies from '../../components/organisms/Hobbies';
import PersonalPhoto from '../../components/organisms/PersonalPhoto';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';

import { addAllPersonalInfo } from '../../store/cvTemplate/allPersonaInfoSlice';

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Is a required field').min(3).max(20),
  position: yup.string().required('Is a required field').min(3).max(20),
  address: yup.string().required('Is a required field').min(3).max(20),
  website: yup.string().required('Is a required field').url().nullable(),
  phone: yup
    .number()
    .typeError('Amount must be a number')
    .required('Please provide plan cost.')
    .min(0, 'Too little'),
  email: yup.string().required('Is a required field').email(),
  bio: yup.string().required('Is a required field'),

  educationData: yup
    .array()
    .of(
      yup.object().shape({
        study: yup.string().required('Is a required field'),
        degree: yup.string().required('Is a required field'),
        school: yup.string().required('Is a required field'),
        educationFromYear: yup.date().required('Is a required field'),
        'education-to-year': yup.date().required('Is a required field'),
      }),
    )
    .required(),

  experienceData: yup
    .array()
    .of(
      yup.object().shape({
        'work-title': yup.string().required('Is a required field'),
        company: yup.string().required('Is a required field'),
        'experience-from-year': yup.string().required('Is a required field'),
        'experience-to-year': yup.string().required('Is a required field'),
        'company-info': yup.string().required('Is a required field'),
      }),
    )
    .required(),

    socialData: yup.array().of(
      yup.object().shape({
        'social-name': yup.string().required('Is a required field'),
        'social-link': yup.string().required('Is a required field'),
      }),
    ),

    hobbyData: yup.array().of(
      yup.object().shape({
        label: yup.string().required('Is a required field'),
      }),
    ),
  
    photoData: yup.array().of(
      yup.object().shape({
        avatar: yup.string().required(""),
      }),
    ),
  });

interface IFormInputs extends yup.InferType<typeof validationSchema> {}

const stepTitle = (title: string) => {
  return <Typography variant="h5">{title}</Typography>;
};

const stepContent = (element: JSX.Element) => {
  return element;
};

const CvTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const methods = useForm<IFormInputs>({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: '',
      position: '',
      address: '',
      bio: '',
      email: '',
      phone: undefined,
      website: '',

      educationData: [
        {
          study: '',
          degree: '',
          school: '',
          educationFromYear: undefined,
          'education-to-year': undefined,
        },
      ],

      experienceData: [
        {
          'work-title': '',
          company: '',
          'experience-from-year': '',
          'experience-to-year': '',
          'company-info': '',
        },
      ],

      hobbyData: [
        {
          label: '',
        },
      ],
      socialData: [
        {
          'social-name': '',
          'social-link': '',
        },
      ],
      photoData: [
        {
          avatar: '',
        },
      ],
    },
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async () => {
    let isValid: boolean = false;

    switch (activeStep) {
      case 0:
        isValid = await methods.trigger([
          'fullName',
          'position',
          'address',
          'website',
          'phone',
          'email',
          'bio',
        ]);
        // isValid = true;
        break;

      case 1:
        isValid = await methods.trigger('educationData');
        break;

      case 2:
        isValid = await methods.trigger('experienceData');
        break;

      case 3:
        isValid = await methods.trigger('socialData');
        break;

      case 4:
        isValid = await methods.trigger(['hobbyData']);
        break;

      case 5:
        isValid = await methods.trigger(['photoData']);
        break;
    }

    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const steps = [
    {
      id: 1,
      label: stepTitle('Personal Info'),
      form: stepContent(<PersonalInfo />),
      state: 'active',
    },
    {
      id: 2,
      label: stepTitle('Education'),
      form: stepContent(<Education />),
      state: '',
    },
    {
      id: 3,
      label: stepTitle('Experience'),
      form: stepContent(<Experience />),
      state: '',
    },
    {
      id: 4,
      label: stepTitle('Social'),
      form: stepContent(<Social />),
      state: '',
    },
    {
      id: 5,
      label: stepTitle('Hobbies'),
      form: stepContent(<Hobbies />),
      state: '',
    },
    {
      id: 6,
      label: stepTitle('Photo'),
      form: stepContent(<PersonalPhoto />),
      state: '',
    },
  ];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const dispatch = useDispatch();

  
  const onSubmit = (data: IFormInputs) => {
    console.log(data);

    const transformedData = {
      personalData: {
        fullName: data.fullName,
        address: data.address,
        bio: data.bio,
        position: data.position,
        phone: data.phone,
        website: data.website,
        email: data.email,
      },

      educationData: data.educationData.map((education) => ({
        description: education.study,
        position: education.degree,
        fromYear: new Date(education.educationFromYear).getFullYear(),
        toYear: new Date(education['education-to-year']).getFullYear(),
        name: education.school,
      })),

      experienceData: data.experienceData.map((experience) => ({
        position: experience['work-title'],
        fromYear: new Date(experience['experience-from-year']).getFullYear(),
        toYear: new Date(experience['experience-to-year']).getFullYear(),
        name: experience.company,
        description: experience['company-info'],
      })),

      socialData: data.socialData?.map((social) => ({
        link: social['social-link'],
        name: social['social-name'],
      })),

      hobbyData: data.hobbyData?.map((hobby) => ({
        hobby: hobby.label,
      })),

      // photoData: data.photoData?.map((avatar) => ({
      //   avatar: 'photo-link',
      // })),
    };

    console.log('TRANSFORMED DATA', transformedData);
    dispatch(addAllPersonalInfo(transformedData));
    handleNext();
  };

  const getButtonStatus = (index: number) => {
    if (index === activeStep) {
      steps[index].state = 'active';
      return 'active';
    } else if (index < activeStep) {
      steps[index].state = 'done';
      return 'done';
    } else {
      steps[index].state = 'next';
      return 'next';
    }
  };
 

  const getButtonStyles = (index: number) => ({
    color: getButtonStatus(index) === 'active' ? '#462174' : getButtonStatus(index) === 'done' ? 'white' : getButtonStatus(index) === 'next' ? '#4E4D4D' : 'initial',
    backgroundColor: getButtonStatus(index) === 'active' ? 'white' : getButtonStatus(index) === 'done' ? '#462174' : getButtonStatus(index) === 'next' ? '#dddbdb' : 'initial',
    border: getButtonStatus(index) === 'active' ? '2px solid #462174' : getButtonStatus(index) === 'done' ? '#462174' : getButtonStatus(index) === 'next' ? '2px solid #4E4D4D' : 'initial',
  });

  return (
    <Box className={classes.cvTemlpate}>
      <Box className={classes.cvTemlpate__header}>
        <Typography variant="h3">Resumo Resume Builder</Typography>
      </Box>
      <Box className={classes.cvTemlpate__container}>
        <Box className={classes.cvTemlpate__content}>
          <Box className={classes.cvTemlpate__rightWrapper}>
            <Box className={classes.cvTemlpate__right}>
              <FormProvider {...methods}>
                <Box className={classes.cvTemlpate__stepper}>
                  <Box
                    className={classes.cvTemlpate__step}
                    onChange={async () => {
                      switch (activeStep) {
                        case 0:
                          await methods.trigger([
                            'fullName',
                            'position',
                            'address',
                            'website',
                            'phone',
                            'email',
                            'bio',
                          ]);
                          // isValid = true;
                          break;

                        case 1:
                          await methods.trigger('educationData');
                          break;

                        case 2:
                          await methods.trigger('experienceData');
                          break;

                        case 3:
                          await methods.trigger('socialData');
                          break;

                        case 4:
                          await methods.trigger(['hobbyData']);
                          break;

                        case 5:
                          await methods.trigger(['photoData']);
                          break;
                      }
                    }}
                  >
                    {steps.map((step, index) => (
                      <Button variant="contained" style={getButtonStyles(index)}  sx={{
                        mt: 1,
                        mr: 1, 
                        margin: '15px',
                        width: '322px',
                        height: '70px',
                      }}
                        key={step.id}
                      >
                        {' '}
                        {step.label}
                      </Button>
                    ))}
                  </Box>

                  {steps.map((step) => {
                    if (step.state === 'active') {
                      return (
                        <Box component="form" className={classes.cvTemlpate__stepContent} key={step.id}>
                          <Typography variant="h4" className={classes.cvTemlpate__stepContentLabel}>{step.label} </Typography>
                          {step.form}
                          {/* Кнопки ниже формы */}
                          <Box className={classes.cvTemlpate__stepContentButton}>
                            <Button
                              disabled={step.id === 1}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            ></Button>
                            <Button
                              onClick={step.id === 6 ? methods.handleSubmit(onSubmit) : handleNext}
                              variant="contained"
                              sx={{
                                mt: 1,
                                mr: 1,
                                backgroundColor: '#462174',
                                color: 'white',
                                ':hover': {
                                  backgroundColor: 'white',
                                  color: '#462174',
                                  border: '1px solid #462174',
                                },
                              }}
                            >
                              {step.id === 6 ? 'Finish' : 'Next session'}
                            </Button>
                            
                          </Box>
                          {step.id === 6 && <DemoCv />}
                        </Box>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Box>

                {/* ПАНЕЛЬ РАЗРАБОТЧИКА ХУКФОРМ */}

                <DevTool control={methods.control} placement="top-left" />
              </FormProvider>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>All steps completed - you&apos;re finished</Typography>

                  {/* КНОПКА ПРЕВЬЮ */}

                  <Button onClick={onToggleModal} sx={{ mt: 1, mr: 1 }}>
                    Preview
                  </Button>
                  <DemoCvModal
                    content={<CvTemplatePDF />}
                    isOpen={isOpen}
                    onClose={onToggleModal}
                  />

                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    AT FIRST
                  </Button>
                </Paper>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CvTemplate;
