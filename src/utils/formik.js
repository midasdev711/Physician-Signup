import * as Yup from 'yup'

export const triggerFormLevelValidation = (formik, callback = () => {}) => {
  formik.validateForm().then((errors) => {
    const errorKeys = Object.keys(errors)

    if (errorKeys.length > 0) {
      const touched = errorKeys.reduce((acc, key) => {
        acc[key] = !!errors[key]
        return acc
      }, {})
      formik.setTouched(touched)
    } else {
      callback()
    }
  })
}

export const AppSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short')
    .max(70, 'Too Long')
    .required('Please input your Full Name'),
  email: Yup.string()
    .email('This is not a valid Email Address')
    .required('Please input your Email Address'),
  phone: Yup.string()
    .required('Please provide your Mobile Number'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'Password must contain at least 8 characters, including UPPER/lowercase and numbers'
    )
    .required('Please input a Password'),
})

export const appInitialValues = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  medicalLicense: null,
  avatar: '',
  skills: [],
  educations: [],
  education: {
    qualification: '',
    school: '',
    graduatedAt: '',
  },

  // fullName: 'Ivan Pavlov',
  // email: 'ivan.pavlov@gmail.com',
  // phone: '0732216860',
  // password: '12345678Yt',
  // medicalLicense: null,
  // avatar: '',
  // skills: [
  //   'Spinal Cord Injury Specialist',
  //   'Occupational Medicine Specialist',
  //   'General Medicine',
  // ],
  // cityState: '',
  // gender: 'male',
  // educations: [
  //   {
  //     id: '1',
  //     qualification: 'Doctor of Surgery',
  //     school: 'Harvard Medical School',
  //     graduatedAt: '2009-06-06',
  //   },
  //   {
  //     id: '2',
  //     qualification: 'Doctor of Medicine',
  //     school: 'Duke-NUS Graduate Medical',
  //     graduatedAt: '2001-07-07',
  //   }
  // ],
  // education: {
  //   qualification: '',
  //   school: '',
  //   graduatedAt: '',
  // },
}
