import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import CardPrint from "../print/ComponentPrint";
import Component2 from "./Component2";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { submitAction } from "../actions";
import { connect } from "react-redux";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", count: 0, childCount: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.childrenClick = this.childrenClick.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
    document.getElementById("testId").style.display = "";
  }
  childrenClick() {
    this.setState({ childCount: this.state.childCount + 1 });
    document.getElementById("testId").style.display = "";
  }
  componentDidUpdate(PrevState) {
    console.log("Component Updated");
  }
  componentWillMount() {
    console.log("Component will mount");
  }
  componentDidMount() {
    console.log("Component did Mount");
  }

  render() {
    const {
      email,
      password,
      submitAction,
      phoneno,
      address,
      pincode,
    } = this.props;

    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <button
              style={{
                textAlign: "center",
                marginLeft: "50%",
                backgroundColor: "lemonchiffon",
                width: "62px",
              }}
            >
              Print
            </button>
          )}
          content={() => this.componentRef}
        />
        <div style={{ display: "none" }}>
          <CardPrint
            email={email}
            password={password}
            phoneno={phoneno}
            address={address}
            pincode={pincode}
            ref={(el) => (this.componentRef = el)}
          />
        </div>
        <div>
          {" "}
          <div id="testId">{this.state.childCount}</div>
          <div id="testOnClick" onClick={this.handleClick}>
            Total Count
          </div>
        </div>
        <Component2 count={this.state.count} action={this.childrenClick} />
        <div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              pincode: "",
              address: "",
              phoneno: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .matches(/[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/i, "invalid Password")
                .required("Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
              pincode: Yup.string()
                // .max(6,'Pincode must be of 6 characters')
                .matches(/^[0-9]{6}$/, "Should be a number of length 6")
                .required("Pincode is required"),
              phoneno: Yup.string()
                // .max(6,'Pincode must be of 6 characters')
                .matches(/^[0-9]{10}$/, "Should be a number of length 10")
                .required("Contact Number is required"),
              address: Yup.string().required("Address is Required"),
            })}
            onSubmit={(fields) => {
              // console.log(fields)
              submitAction(fields);
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="text"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <Field
                    name="address"
                    type="address"
                    className={
                      "form-control" +
                      (errors.address && touched.address ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pincode">Pincode</label>
                  <Field
                    name="pincode"
                    type="pincode"
                    className={
                      "form-control" +
                      (errors.pincode && touched.pincode ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="pincode"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneno">Contact Number</label>
                  <Field
                    name="phoneno"
                    type="phoneno"
                    className={
                      "form-control" +
                      (errors.phoneno && touched.phoneno ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="phoneno"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    style={{ marginLeft: "50%" }}
                    className="btn btn-primary mr-2"
                  >
                    Register
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  address: state.address,
  pincode: state.pincode,
  phoneno: state.phoneno,
});

export const mapDispatchToProps = (dispatch) => ({
  submitAction: (data) => dispatch(submitAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Card);
