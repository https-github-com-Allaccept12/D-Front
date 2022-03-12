import React from "react";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&response_type=code&state=security_token%3D138r5719ru3e1%26url%3Dhttps://oauth2.example.com/token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
// export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
