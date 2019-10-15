import React from 'react'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'
import queryString from 'query-string'
import  uuidv4 from 'uuid/v4'
import { Formik, Form } from 'formik'
import { AppSchema } from './utils/formik'
import './styles/app.css'
import Layout from './layout/layout.jsx'
import SignUp from './auth/signUp.jsx'
import UploadMedicalLicense from './upload/uploadMedicalLicense.jsx'
import UpdateProfile from './profile/updateProfile.jsx'
import SuccessResult from './results/successResult.jsx'

function App() {
  const onSubmit = async (values, callback) => {
    // console.log('onSubmit', values)
    const {
      name, email, phonePrefix, phone, ...restValues
    } = values

    const url = 'https://physiciansignupbe.azurewebsites.net/signup'

    // guid: '752a09bd-0491-4b3a-4444-73e37d7dbc3e',
    const payload = {
      guid: uuidv4(),
      name,
      email,
      phone: `+${phonePrefix}${phone}`,
      ...restValues,
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        }
      })
      // const json = await response.json()
      // console.log('Success:', json)
      console.log('Success')
      callback(response)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Route
          render={({ location, history }) => {
            // console.log('location.search', location.search)
            // console.log(queryString.parse(location.search))
            const {
              Name: name = 'insert name here',
              email = 'insert email here',
              facility: facilityName = 'A radiology group using AlemHealth Connect',
              CC: phonePrefix = '65',
            } = queryString.parse(location.search)

            const initialValues = {
              name,
              email,
              phonePrefix,
              phone: '',
              password: '',
              facilityName,
              medicalLicense: null,
              profilePhoto: '',
              speciality: {
                name: '',
              },
              specialities: [],
              cityState: '',
              // address: {
              //   country: '',
              //   state: '',
              //   city: '',
              //   street: '',
              // },
              gender: 'male',
              educations: [],
              education: {
                qualification: '',
                school: '',
                year: '',
              },
            }

            return (
              <Formik
                initialValues={initialValues}
                validationSchema={AppSchema}
                // validate={validate}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  // console.log('onSubmit values', values)
                  const {
                    education, speciality, ...restValues
                  } = values

                  onSubmit(restValues, (response) => {
                    // console.log('response', response)
                    // JSON.stringify(values, null, 2)
                    // setSubmitting(false)
                    resetForm()
                    history.push('/result/success')
                  })
                }}
                render={(props) => {
                  // console.log('App formik props', props)
                  return (
                    <Form>
                      <Layout>
                        <Switch>
                          <Route path="/signup" component={SignUp} />
                          <Route path="/upload/medical-license" component={UploadMedicalLicense} />
                          <Route path="/update/profile" component={UpdateProfile} />
                          <Route path="/result/success" component={SuccessResult} />
                          <Redirect to="/signup" />
                        </Switch>
                      </Layout>
                    </Form>
                  )
                }}
              />
            )
          }}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
