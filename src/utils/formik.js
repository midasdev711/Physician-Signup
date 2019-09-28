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
