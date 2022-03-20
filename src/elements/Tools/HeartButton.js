import React, { useState } from "react";
import { Text, Icon } from "../../elements";

const HeartButton = (props) => {

  const { 
    nameF,
    nameE,
    iconSize,
  } = props

  const [like_cnt, setLikeCnt] = useState(props.like_cnt);
  const [like_ok, setLikeOk] = useState(props.is_like);

  const cancelLike = () => {
    setLikeOk(false);
    setLikeCnt(like_cnt - 1);
  };

  const addLike = () => {
    setLikeOk(true);
    setLikeCnt(like_cnt + 1);
  };
  

  return (
    <div className="cursor-pointer flex flex-row items-center justify-center -mt-1">
      
        {like_ok ? (
            <Icon name={nameF} iconSize={iconSize} onClick={cancelLike} />
          ) : (
            <Icon name={nameE} iconSize={iconSize} onClick={addLike} />
          )}
        <Text size="1" className="pl-2">{like_cnt}</Text>
    </div>
    );
  };

HeartButton.defaultProps = {
  like_cnt: "0", 
  nameF: "HeartF",
  nameE: "HeartE",
  iconSize: "20",
}

export default HeartButton;
