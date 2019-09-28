import React from 'react'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './styles/app.css'
import Layout from './layout/layout.jsx'
import SignUp from './auth/signUp.jsx'
import UploadMedicalLicense from './upload/uploadMedicalLicense.jsx'
import UpdateProfile from './profile/updateProfile.jsx'

const SignupSchema = Yup.object().shape({
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

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  medicalLicense: null,
  avatar: '',
  skills: [],

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
}

function App() {
  return (
    <div className="app">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        // validate={validate}
        render={(props) => {
          console.log('App formik props', props)
          return (
            <Form>
              <Layout>
                <BrowserRouter>
                  <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/upload/medical-license" component={UploadMedicalLicense} />
                    <Route path="/update/profile" component={UpdateProfile} />
                    <Redirect to="/signup" />
                  </Switch>
                </BrowserRouter>
              </Layout>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default App
