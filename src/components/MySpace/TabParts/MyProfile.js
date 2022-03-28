import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCookie } from "../../../shared/cookie";
import { myPageLoad } from "../../../redux/modules/myPage";
import { useHistory,  Link } from "react-router-dom";
import { useToggle } from "../../../hooks";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine, MyIntro } from "..";



// 한번에 다 보여주기
const MyProfile = (props) => {
  const dispatch = useDispatch();
  let account_id = 0;
  const id_cookie = getCookie("account_id");
  if (id_cookie) {
      account_id = id_cookie;
      console.log("account_id: ", account_id);
  }
  const owner_account_id = account_id;
  useEffect(() => {
    console.log('오냐');
    dispatch(myPageLoad({ account_id, owner_account_id, dispatch }))
  }, [dispatch, account_id, owner_account_id]);
  
  
  const info = useSelector(state => state.myPage.myPage);

  return (
<>


<MyIntro info={info} />
<MyExp />
<MyPortfolio />
<MySkill />
<MyTimeLine />



</>


  );
};

export default MyProfile;