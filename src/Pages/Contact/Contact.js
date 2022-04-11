import React from 'react';
import { Formik, Field, Form } from 'formik';
import Slide from 'react-reveal/Slide';

import { GoogleMapComponent } from '../../component/GoogleMapComponent/GoogleMapComponent';
import { Button } from '../../component/Button/Button';
import { ReactComponent as PhoneIcon } from '../../assets/images/contactPhone.svg';
import { ReactComponent as EmailIcon } from '../../assets/images/contactEmail.svg';

import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <Slide left>
      <div className={styles.contact_us}>
        <div className={styles.contact_map}>
          <GoogleMapComponent isMarkerShown />
        </div>
        <div className={styles.contact_form}>
          <div className={styles.contact_title}>Contact Us</div>
          <div className={styles.contact_info}>
            <div className={styles.contact_item}>
              <div className={styles.contact__itemIcon}>
                <PhoneIcon />
              </div>
              <p>+374(41) 00-00-25</p>
            </div>
            <div className={styles.contact_item}>
              <div className={styles.contact__itemIcon}>
                <EmailIcon />
              </div>
              <p>info@serious.am</p>
            </div>
          </div>
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
              phone: '',
            }}
            onSubmit={(data) => console.log(data)}
          >
            {({ errors, touched, dirty }) => (
              <Form>
                <div>
                  <Field name="name" placeholder="Name*" className={styles.form_input} />
                  {errors.Name && touched.name ? <p>{errors.name}</p> : null}
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className={styles.form_input}
                  />
                  {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </div>
                <div>
                  <Field name="message" placeholder="Message*" className={styles.form_input} />
                  {errors.message && touched.message ? <p>{errors.message}</p> : null}
                </div>
                <div>
                  <Field name="phone" placeholder="Phone*" className={styles.form_input} />
                  {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
                </div>

                <Button disabled={!dirty} className={styles.form_btn}>
                  Send
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Slide>
  );
};
