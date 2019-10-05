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
  name: Yup.string()
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
