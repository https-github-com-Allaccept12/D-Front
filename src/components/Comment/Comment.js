import React from "react";
import { Button, Profile, Text, Subtitle } from "../../elements";

import { useHistory } from "react-router-dom";

const Comment = (props) => {
    let history = useHistory();
    return (
        <>
            <div className="flex justify-start items-center gap-2">
                <Profile size="5" />
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-3 mt-1">
                        <Subtitle size="1" className="">
                            닉네임
                        </Subtitle>

                        <Text size="4">2022.03.22</Text>
                    </div>

                    <Text size="2" className="m-1">
                        댓글 댓글 댓글
                    </Text>
                </div>
            </div>
        </>
    );
};

export default Comment;
