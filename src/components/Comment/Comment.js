import React from "react";
import { Button, Profile, Text, Subtitle, Icon, HeartButton } from "../../elements";

const Comment = (props) => {
    return (
        <>
            <div className="flex justify-between items-center gap-2">
                <div className="justify-start flex flex-row">
                    <Profile size="5" className="hidden sm:flex" />
                    <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3 mt-1">
                            <Subtitle size="1" className="">
                                닉네임
                            </Subtitle>

                            <Text size="4">2022.03.22</Text>
                        </div>

                        <Text size="2" className="m-1">
                            댓글 댓글 댓글댓글 댓글댓글댓글댓글 댓글댓글 댓글댓글댓글댓글 댓글댓글
                        </Text>
                    </div>
                </div>

                <HeartButton like_cnt="4" is_like="" />
            </div>
        </>
    );
};

export default Comment;
