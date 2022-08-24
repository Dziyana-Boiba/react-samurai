import React, {useState, useEffect} from 'react';

import st from './MyProfileInfo.module.css';

function ProfileStatusWithHooks (props) {

    
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
        
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    /*componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
        
    }*/

   
        return(
           <div className={st.profileStatus}>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>Status: {props.status}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} 
                            autoFocus={true} 
                            onBlur={deactivateEditMode} 
                            value={status}/>
                    </div>
                }
                
                
            </div> 
        )
    
        
 
}

export default ProfileStatusWithHooks