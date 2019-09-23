import React from 'react'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'
import './styles/app.css'
import Layout from './layout/layout.jsx'
import SignUp from './auth/signUp.jsx'
import UploadMedicalLicense from './upload/uploadMedicalLicense.jsx'

function App() {
  return (
    <div className="app">
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/upload/medical-license" component={UploadMedicalLicense} />
            <Redirect to="/signup" />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  )
}

export default App
