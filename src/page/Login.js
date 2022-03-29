import React from "react";
import { Title } from "../elements";
import { useHistory } from "react-router-dom";
import { useInput } from "../hooks";
import SocialLogin from "../shared/SocialLogin";

const Login = (props) => {
    let history = useHistory();

    const validMaxLen = (value) => value.length <= 10;
    const validNoInputString = (value) => !value.includes("#");
    const name = useInput("", [validMaxLen]);
    return (
        <>
            <div className="flex flex-col p-3 justify-center items-center">
                <SocialLogin />
            </div>
        </>
    );
};

export default Login;
