import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { myPageLoad } from "../../../redux/modules/myPage";

const AtProfile = (props) => {
    const dispatch = useDispatch();
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id")
    if (id_cookie) {
        account_id = id_cookie;
        console.log("account_id: ", account_id);
    }
    const owner_account_id = account_id;
    console.log(account_id, owner_account_id);
    useEffect(() => {
    dispatch(myPageLoad({ account_id, owner_account_id, dispatch }))
    }, [dispatch, account_id, owner_account_id]);
  
  
    const information = useSelector(state => state.myPage.myPage);
    return information;
}

export default AtProfile;