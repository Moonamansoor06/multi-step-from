import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "450px",
      display: "block",
      margin: "0 auto",
    },
    textField: {
      "& > *": {
        width: "100%",
        margin: "1rem",
        border: "solid grey .05rem",
        padding: "1 rem",
      },
    },
    submitButton: {
      marginTop: "24px",
    },
    title: { textAlign: "center" },
    successMessage: { color: "green" },
    errorMessage: { color: "red" },
  })
);

interface ISignoutForm {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  province: string;
  country: string;
}

const CheckoutFrom: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          city: "",
          province: "",
          country: "",
        }}
        onSubmit={(values: ISignoutForm, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("Please enter first name"),
          lastName: Yup.string().required("Please enter last name"),
          email: Yup.string().email().required("Enter valid email-id"),
          address: Yup.string().required("please enter complete address"),
          city: Yup.string().required("city required"),
          country: Yup.string().required("country required"),
        })}
      >
        {(props: FormikProps<ISignoutForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props;
          return (
            <Form>
              <h1 className={classes.title}>Checkout-Personal Details</h1>
              <Grid container justify="space-around" direction="row">
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    value={values.firstName}
                    type="text"
                    helperText={
                      errors.firstName && touched.firstName
                        ? "Enter your first name."
                        : ""
                    }
                    error={errors.firstName && touched.firstName ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="lastName"
                    id="lastName"
                    label="Last Name"
                    value={values.lastName}
                    type="text"
                    helperText={
                      errors.lastName && touched.lastName
                        ? "please enter last name"
                        : ""
                    }
                    error={errors.lastName && touched.lastName ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="email"
                    id="email"
                    label="Email"
                    value={values.email}
                    type="email"
                    helperText={
                      errors.email && touched.email
                        ? "Please enter valid email"
                        : ""
                    }
                    error={errors.email && touched.email ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="address"
                    id="address"
                    label="Address"
                    value={values.address}
                    type="text"
                    helperText={
                      errors.address && touched.address
                        ? "Enter complete address"
                        : ""
                    }
                    error={errors.address && touched.address ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="city"
                    id="city"
                    label="City"
                    value={values.city}
                    type="text"
                    helperText={
                      errors.city && touched.city ? "Enter city name" : ""
                    }
                    error={errors.city && touched.city ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="province"
                    id="province"
                    label="Province"
                    value={values.province}
                    type="text"
                    helperText={
                      errors.province && touched.province
                        ? "Enter Province"
                        : ""
                    }
                    error={errors.province && touched.province ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="country"
                    id="country"
                    label="Country"
                    value={values.country}
                    type="text"
                    helperText={
                      errors.country && touched.country ? "Enter country" : ""
                    }
                    error={errors.country && touched.country ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CheckoutFrom;