import React from 'react'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'
import { Formik, Form } from 'formik'
import {
  AppSchema, appInitialValues,
} from './utils/formik'
import './styles/app.css'
import Layout from './layout/layout.jsx'
import SignUp from './auth/signUp.jsx'
import UploadMedicalLicense from './upload/uploadMedicalLicense.jsx'
import UpdateProfile from './profile/updateProfile.jsx'
import SuccessResult from './results/successResult.jsx'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route
          render={({ history }) => (
            <Formik
              initialValues={appInitialValues}
              validationSchema={AppSchema}
              // validate={validate}
              onSubmit={(values, { setSubmitting }) => {
                console.log('onSubmit values', values)
                // const { education, ...restValues } = values
                history.push('/result/success')
                // JSON.stringify(values, null, 2)
                // setSubmitting(false)
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
          )}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
