import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ModifyArtWork } from "../../redux/modules/artWork";
import { getMaster, removeMaster, updateScope, postScope, deleteArtwork } from "../../redux/modules/artWork";
import CircleBtn from "../Icons/CircleBtn";
import tw from "tailwind-styled-components";

const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center rounded-md
xl:w-t01 xl:h-t01 relative w-t03 h-t03
${(props) => (props.size === "1" ? `` : "")};
`;

const Hover = tw.div`
rounded-md xl:w-t01 xl:h-t01 relative w-t03 h-t03 
${(props) => (props.size === "1" ? `` : "")};
`;

const Actives = tw.div`
absolute xl:w-t01 xl:h-t01 z-10 bg-dgray-600 top-0 rounded-md
opacity-0 hover:opacity-80 h-t03 w-t03 
`;
const Constan = tw.div`
absolute xl:w-t01 w-t03 h-20 z-10 top-0 rounded-md

`;

const Edit = tw.div`
absolute top-24 left-6 xl:top-44 xl:left-28
`;
const FlexBox = tw.div`
 w-full gap-4 flex flex-row
`;

const BadgeBox = tw.div`
w-full flex flex-row justify-end items-end gap-3 p-5
`;

const EditMyArtWork = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { src, size, isMaster, scope, artwork_id, category } = props;
    const [is_master, setMaster] = useState(isMaster);
    const [is_public, setPublic] = useState(scope);
    // console.log("in here, ", artwork_id);
    // console.log(isMaster, scope);

    const from = location.pathname.split('/')[2]
    console.log(from);

    const ClickMaster = () => {
        setMaster(!is_master);
        is_master ? dispatch(getMaster(artwork_id)) : dispatch(removeMaster(artwork_id));
    };
    const ClickPublic = () => {
        setPublic(!is_public);
        is_public ? dispatch(updateScope(artwork_id)) : dispatch(postScope(artwork_id));
    };
    const ClickDelete = () => {
        console.log('click delete');
        const data = {artwork_id: artwork_id};
        dispatch(deleteArtwork({ data, category }));
    };
    const ClickEdit = () => {
        // console.log("click, ", artwork_id);
        const visitor_account_id = sessionStorage.getItem("account_id");
        dispatch(ModifyArtWork({ artwork_id, visitor_account_id, dispatch }));
        // navigate.push(`/createart?key=edit&artwork_id=${artwork_id}`);
        navigate("/createart", {
            state: {
                isedit: true,
                artwork_id: artwork_id,
            },
        });
    };
    console.log(artwork_id);
    const ClickDetail = () => {
        navigate(`/detailart/${artwork_id}`);
    }

    return (
        <>
            <Hover>
                <ArtWorkImage src={src} size={size} />
                <Actives>
                    <Edit>
                        {from !== 'mypic'&& 
                        <FlexBox>
                            <CircleBtn name="Edit" onClick={ClickEdit}></CircleBtn>
                            <CircleBtn name="Delete" onClick={ClickDelete}></CircleBtn>
                            <CircleBtn name="MyStar" onClick={ClickMaster}></CircleBtn>
                            <CircleBtn name="Private" onClick={ClickPublic}></CircleBtn>
                        </FlexBox>
                        }
                        <div>
                            <CircleBtn name="Detail" onClick={ClickDetail}></CircleBtn>
                        </div>
                    </Edit>
                </Actives>
                <Constan>
                    <BadgeBox>
                        <CircleBtn name="MyStarMini" states={is_master} />
                        <CircleBtn name="PrivateMini" states={is_public} />
                    </BadgeBox>
                </Constan>
            </Hover>
        </>
    );
};

EditMyArtWork.defaultProps = {
    src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
    size: "1",
};

export default EditMyArtWork;
