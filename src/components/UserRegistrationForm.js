import React from "react";

const UserRegistrationForm = () => {
    return(
        <form className="registration-form">
            <input type="text" placeholder="Username" className="registration-form-filed" name="username"/>
            <input type="text" placeholder="Email" className="registration-form-filed" name="email"/>
            <input type="submit" placeholder="Register" className="registration-form-filed"/>
        </form>
    );
}

export default UserRegistrationForm;