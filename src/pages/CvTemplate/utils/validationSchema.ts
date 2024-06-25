import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  fullName: yup.string().required('Is a required field').min(3).max(20),
  position: yup.string().required('Is a required field').min(3).max(20),
  address: yup.string().required('Is a required field').min(3),
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
});

export default validationSchema;
