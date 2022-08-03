import './SignIn.css'
import React from 'react'
import { useFormik } from 'formik'
import { userSchema2 } from '../SignUp/Form/Validation'


function SignIn() {
    const { handleSubmit, values, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: userSchema2
    })
    return (
        <div>

            <form className='SignIn' onSubmit={handleSubmit}>

                <br />
                <input
                    className='txtInput'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                />

                <br />
                {errors.email && touched.email && <div className='errors'>{errors.email}</div>}
                <br />

                <input
                    className='txtInput'
                    name='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    type={'password'}
                />

                <br />
                {errors.password && touched.password && <div className='errors'> {errors.password}</div>}
                <br />



                <button type='submit' >SignIn</button>




            </form>

        </div>
    )
}

export default SignIn