import React from "react";

const LoginFields = () => {
    return(
        <div className="fields-wrapper">
            <input type="text" placeholder="Username" className="input-field"/>
            <input type="submit" value="Login" className="input-field"/>
        </div>
    );
}

export default LoginFields;