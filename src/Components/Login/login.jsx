
import React from "react";
import { Field, reduxForm } from 'redux-form';
import { requiredField } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import st from "./login.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememderMe"} component={"input"} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form> 
    )
    
}  

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div className={st.login}>
        <h1>Login</h1>
        <div className={st.loginForm}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
        
    </div>
}    


export default Login;