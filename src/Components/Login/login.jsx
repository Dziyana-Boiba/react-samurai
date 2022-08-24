
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { requiredField } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import st from "./login.module.css";
import userLogin from "../../Redux/auth-reducer"
//import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name={"email"}
                    component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder="Password" name={"password"} type="password"
                    component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"}
                    component={Input} />remember me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form> 
    )
    
}  

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    let onSubmit = (formData) => {
        props.userLogin(formData.email, formData.password, formData.rememberMe);
    }

    /*if(props.isAuth){
        return <Navigate to={"profile"} />
    }*/

    return <div className={st.login}>
        <h1>Login</h1>
        <div className={st.loginForm}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
        
    </div>
}    


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {userLogin} )(Login);