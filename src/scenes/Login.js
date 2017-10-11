import React, { Component } from "react";
import { Formik } from "formik";

import { login } from "../helpers/auth";
import { Colors } from "../constants/theme";
import { Container, Title, Input, Flex, Button, Text } from "../components";

export default class Login extends Component {
  render() {
    return (
      <Container background={Colors.primary}>
        <Title color="light">Login</Title>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validate={values => {
            let errors = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 8) {
              errors.password = "Min chars: 8";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            login(values.email, values.password).then(user => {
              setSubmitting(false);
            });
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                name="email"
                type="email"
                id="email"
                icon="mail"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
              />
              {touched.email &&
                errors.email && <Text color="light">{errors.email}</Text>}

              <Input
                name="password"
                type="password"
                id="password"
                icon="lock"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
              />
              {touched.password &&
                errors.password && <Text color="light">{errors.password}</Text>}

              <Flex justify="flex-end" padding={16}>
                <Button type="submit" disabled={isSubmitting} mode="light">
                  Login
                </Button>
              </Flex>
            </form>
          )}
        />
      </Container>
    );
  }
}
