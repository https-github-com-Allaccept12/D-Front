import React from "react";
import { Title } from "../elements";

import { useInput } from "../hooks";
import CreateProfile from "../components/Tendency/CreateProfile";
import SocialLogin from "../shared/SocialLogin";
import tw from "tailwind-styled-components";
import MyInterests from "../components/Tendency/MyInterests";

const LoginBox = tw.div`
flex flex-col p-3 justify-center items-center
`;

const Login = (props) => {
    const validMaxLen = (value) => value.length <= 10;
    const validNoInputString = (value) => !value.includes("#");
    const name = useInput("", [validMaxLen]);
    return (
        <>
            <LoginBox>
                {/* <SocialLogin /> */}
                <MyInterests />
                {/* <CreateProfile /> */}
            </LoginBox>
        </>
    );
};

export default Login;
