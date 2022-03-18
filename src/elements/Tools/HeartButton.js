import React, { useState } from "react";
import { Text, Icon } from "../../elements";

const HeartButton = (props) => {

  const [like_cnt, setLikeCnt] = useState(props.like_cnt);
  const [like_ok, setLikeOk] = useState(props.like_ok);

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
            <Icon name="HeartF" iconSize="20" onClick={cancelLike} />
          ) : (
            <Icon name="HeartE" iconSize="20" onClick={addLike} />
          )}
        <Text size="1">{like_cnt}</Text>
    </div>
    );
  };


export default HeartButton;
