import './Form.css'
import React from 'react'
import { useFormik } from 'formik'
import userSchema from './Validation'
function Form() {


    const { handleSubmit, values, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: userSchema
    })
    return (


        <form onSubmit={handleSubmit}>

            <br />
            <input
                className='input'
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
                className='input'
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

            <input
                className='input'
                name='confirmPassword'
                placeholder='Confirmpassword'
                value={values.confirmPassword}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                type={'password'}
            />

            <br />
            {errors.confirmPassword && touched.confirmPassword && <div className='errors'>{errors.confirmPassword}</div>}
            <br />

            <button type='submit' >SignUp</button>




        </form>

    )
}

export default Form