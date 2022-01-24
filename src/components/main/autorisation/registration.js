import React from "react";

import { Form, Field } from 'react-final-form';
import Styles from './Styles';

import AuthService from "../../services/auth.service";

export default function Registration (props) {

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    AuthService.register(values).then(
      () => {
        props.history.push("/job-page");
        window.location.reload();
      }
    );
  };

  let formData = {};

  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Registration</h2>
            </div>
        </div>
      </section>
      <Styles>
        <Form
          onSubmit={onSubmit}
          initialValues={formData}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.confirm) {
              errors.confirm = "Required";
            } else if (values.confirm !== values.password) {
              errors.confirm = "Must match";
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div className="autorisation-img">
                <img
                  src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  alt="profile-img"
                  className="profile-img-card"
                />
              </div>
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input {...input} type="text" placeholder="Username" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
              <Field name="confirm">
                {({ input, meta }) => (
                  <div>
                    <label>Confirm </label>
                    <input {...input} type="password" placeholder="Confirm" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
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
  );
}
