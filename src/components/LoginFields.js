import React from "react";

const LoginFields = () => {
    return(
        <div>
            <input type="text" placeholder="Username" className="login-textbox"/>
            <input type="submit" className="submit-login"/>
        </div>
    );
}

export default LoginFields;