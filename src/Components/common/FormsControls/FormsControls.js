import React from "react";
import st from "./FormsControls.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export const Textarea = ({input, meta, ...props}) => {

    const hasError =  meta.touched && meta.error;

    return (
        <div className={st.formControl + " " + (hasError ? st.error : "") }>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div className={st.errorBlock}>
                { hasError && <span><span className={st.iconExcl}><FontAwesomeIcon icon={faCircleExclamation} /></span>{meta.error}</span>}
            </div>
        </div>
        
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError =  meta.touched && meta.error;

    return (
        <div className={st.formControl + " " + (hasError ? st.error : "") + " " +  st.inputFormControl}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && 
                <div className={st.errorInputBlock}>
                    <span><span className={st.iconExcl}><FontAwesomeIcon icon={faCircleExclamation} /></span>{meta.error}</span>
                </div>
            }
        </div>
        
    )
}