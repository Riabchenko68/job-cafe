import React from "react";
import { Form, Field } from 'react-final-form';
import Styles from './Styles';

import AuthService from "../../services/auth.service";

export default function Login (props) {

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    AuthService.login(values).then(
      () => {
        props.history.push("/job-page");
        window.location.reload();
      }
    );
  }

  return(
    <div>
      <section className="breadcrumbs">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Log In</h2>
            </div>
        </div>
      </section>
      <Styles>
        <Form
          onSubmit={onSubmit}
          validate={values => {
            const errors = {};
            if (!values.username) {
              errors.username = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          render={({ submitError, handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              />
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input {...input} type="text" placeholder="Username" />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span>{meta.error || meta.submitError}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              {submitError && <div className="error">{submitError}</div>}
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Log In
                </button>
                <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                  Reset
                </button>
              </div>
            </form>
          )}
      />
      </Styles> 
    </div>
  )
}
