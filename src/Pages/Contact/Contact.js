import React from "react";
import { Formik, Field, Form } from "formik";
import Slide from "react-reveal/Slide";

// import { useDispatch } from "react-redux";
// import { AddUser } from "../../../redux/user/actions";
import { GoogleMapComponent } from "../../component/GoogleMapComponent/GoogleMapComponent";
import { userValidationSchema } from "./userValidation";
import { ReactComponent as PhoneIcon } from "../../Img/contactPhone.svg";
import { ReactComponent as EmailIcon } from "../../Img/contactEmail.svg";

import "./Contact.css";

export const Contact = () => {
  //   const dispatch = useDispatch();
  return (
    <Slide left>
      <div className="contact_us">
        <div className="contact_map">
          <GoogleMapComponent isMarkerShown />
        </div>
        <div className="contact_form">
          <div className="contact_title">Contact Us</div>
          <div className="contact_info">
            <div className="contact_phone">
              <div className="contact__phone-icon">
                <PhoneIcon />
              </div>
              <span>+374(41) 00-00-25</span>
            </div>
            <div className="contact_email">
              <div className="contact__phone-icon">
                <EmailIcon />
              </div>
              <span>info@serious.am</span>
            </div>
          </div>
          <Formik
            initialValues={{
              Name: "",
              email: "",
              message: "",
              phone: "",
            }}
            validationSchema={userValidationSchema}
            onSubmit={() => {
              // const userInfo = [
              //   values.Name,
              //   values.email,
              //   values.message,
              //   values.phone,
              // ];
              //   localStorage.setItem("user", JSON.stringify(values));
              //   dispatch(AddUser(userInfo));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {console.log(errors)}
                <div>
                  {/* <span> Name* </span> */}
                  <Field
                    name="Name"
                    placeholder="Name*"
                    className="form_input"
                  />
                  {errors.Name && touched.Name ? (
                    <div>{errors.Name}</div>
                  ) : null}
                </div>
                <div>
                  {/* <span> Email* </span> */}
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className="form_input"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  {/* <span> Message* </span> */}
                  <Field
                    name="message"
                    placeholder="Message*"
                    className="form_input"
                  />
                  {errors.message && touched.message ? (
                    <div>{errors.message}</div>
                  ) : null}
                </div>
                <div>
                  {/* <span> Message* </span> */}
                  <Field
                    name="Phone"
                    placeholder="Phone*"
                    className="form_input"
                  />
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}
                </div>
                {/* <CustomInput
                type="number"
                title="Phone"
                placeholder="Phone"
                name="phone"
                errors={errors}
                touched={touched}
              /> */}
                <button type="submit" className="form_btn">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Slide>
  );
};
