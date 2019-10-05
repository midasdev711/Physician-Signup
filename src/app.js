import React from 'react'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'
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
      name, email, phonePrefix, phone, password,
    } = values
    
    // const url = 'https://hooks.slack.com/services/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'
    const url = 'https://alemhealthapi.azure-api.net/physiciansignupbe/signup'

    const payload = {
      // channel: '#physicianlanding',
      // username: 'Physician SIgnup Bot',
      // text: `A physician named ${name} signed up to view patient records. The user info is as follows: "Name: ${name}, Email: ${email}, Phone: +${phonePrefix}${phone}, Password: ${password}"`, 
      // icon_emoji: ':trophy:'
      guid: '752a09bd-0491-4b3a-4444-73e37d7dbc3e',
      name,
      email,
      phone: `+${phonePrefix}${phone}`,
      password,
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          'Postman-Token': '2de7f76b-aca2-4b85-8054-f74a0fa359da',
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
          render={({ match, history }) => {
            const {
              params: {
                name = 'Ivan Pavlov',
                email = 'ivan.pavlov@gmail.com',
              },
            } = match

            const initialValues = {
              name,
              email,
              phonePrefix: '234',
              phone: '',
              password: '',
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
                  console.log('App formik props', props)
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
