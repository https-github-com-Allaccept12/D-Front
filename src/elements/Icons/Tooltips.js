import React from "react";
import tw from "tailwind-styled-components";

const Box = tw.div`
group
`;

const Tools = tw.div`
absolute top-24 lg:top-44 lg:left-44 opacity-0 peer-hover:opacity-90 mr-5 md:mr-3 xl:w-80
bg-dgray-400 text-white font-min2 p-3 text-[0.05rem] sm:text-xs rounded-md
`;

const MakeList = tw.ul`

`;
const Make = tw.p`
font-minB text-[0.05rem] sm:text-sm
`;

const La = tw.li`
hidden sm:contents text-[0.03rem]
`;

const Tooltips = (props) => {
    return (
        <Box>
            {props.children}
            <Tools>
                <MakeList>
                    <Make>판권 소유</Make>
                    <La>명시적인 허가 없이 다른 사용자들이 내 작품을 사용할 수 없습니다. </La>
                    <Make>저작자표시 </Make>
                    <La>저작자의 이름, 저작물의 제목, 출처 등 저작자에 관한 표시를 해주어야 합니다. </La>
                    <Make>저작자표시-비영리</Make>
                    <La>저작자를 밝히면 자유로운 이용이 가능하지만 영리목적으로 이용할 수 없습니다.</La>
                    <Make>저작자표시-변경금지</Make>
                    <La>저작자를 밝히면 자유로운 이용이 가능하지만, 변경 없이 그대로 이용해야 합니다.</La>
                    <Make>저작자표시-동일조건변경허락</Make>
                    <La>
                        저작자를 밝히면 자유로운 이용이 가능하고 저작물의 변경도 가능하지만, 2차적 저작물에는 원
                        저작물에 적용된 것과 동일한 라이선스를 적용해야 합니다.
                    </La>
                    <Make>저작자표시-비영리-동일조건변경허락</Make>
                    <La>
                        저작자를 밝히면 이용이 가능하며 저작물의 변경도 가능하지만, 영리목적으로 이용할 수 없고 2차적
                        저작물에는 원 저작물과 동일한 라이선스를 적용해야 합니다.
                    </La>
                    <Make>저작자표시-비영리-변경금지</Make>
                    <La>
                        저작자를 밝히면 자유로운 이용이 가능하지만, 영리목적으로 이용할 수 없고 변경 없이 그대로
                        이용해야 합니다.
                    </La>
                </MakeList>
            </Tools>
        </Box>
    );
};

export default Tooltips;
