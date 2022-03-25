import React from "react";
import tw from "tailwind-styled-components";
import Title from "./Title"

import A1 from "../../static/skillLogo/Adobe.png";
import A2 from "../../static/skillLogo/Aftereffect.png";
import A3 from "../../static/skillLogo/Autocad.png";
import A4 from "../../static/skillLogo/Axure.png";
import B1 from "../../static/skillLogo/Balsamiq.png";
import B2 from "../../static/skillLogo/blender.png";
import C1 from "../../static/skillLogo/cinema4D.png";
import F1 from "../../static/skillLogo/fireworks.png";
import F2 from "../../static/skillLogo/framer.png";
import I1 from "../../static/skillLogo/illustrator.png";
import I2 from "../../static/skillLogo/indesign.png";
import I3 from "../../static/skillLogo/invision.png";
import L1 from "../../static/skillLogo/lightroom.png";
import M1 from "../../static/skillLogo/marvelapp.png";
import M2 from "../../static/skillLogo/miro.png";
import P1 from "../../static/skillLogo/photoshop.png";
import P2 from "../../static/skillLogo/premiere.png";
import P3 from "../../static/skillLogo/protopie.png";
import R1 from "../../static/skillLogo/rhino.png";
import S1 from "../../static/skillLogo/sketch.png";
import S2 from "../../static/skillLogo/sketchup.png";
import W1 from "../../static/skillLogo/whimsical.png";
import Z1 from "../../static/skillLogo/zepline.png";
import DMAX from "../../static/skillLogo/3DMAX.png";




const ArtWorkImage = tw.img`
overflow-hidden object-cover object-center rounded-md
shadow-lg
`;

const Box = tw.div`
flex justify-center items-center flex-col gap-6
w-[11.875rem] h-[11.875rem] bg-dgray-200 rounded-xl
`



const SkillThumbnail = (props) => {
  const { skill } = props;
    if(skill === "A1") return (
    <>
    <Box>
    <ArtWorkImage src={A1} />
    <Title size="6">Adobe</Title>
    </Box>
    </>
    );

    if(skill === "A2") return (
        <>
        <Box>
        <ArtWorkImage src={A2} />
        <Title size="6">Aftereffect</Title>
        </Box>
        </>
        );
    if(skill === "A3") return (
        <>
        <Box>
        <ArtWorkImage src={A3} />
        <Title size="6">Autocad</Title>
        </Box>
        </>
        );
    if(skill === "A4") return (
        <>
        <Box>
        <ArtWorkImage src={A4} />
        <Title size="6">Axure</Title>
        </Box>
        </>
        );
    if(skill === "B1") return (
        <>
        <Box>
        <ArtWorkImage src={B1} />
        <Title size="6">Balsamiq</Title>
        </Box>
        </>
        );
    if(skill === "B2") return (
        <>
        <Box>
        <ArtWorkImage src={B2} />
        <Title size="6">blender</Title>
        </Box>
        </>
        );
    if(skill === "C1") return (
        <>
        <Box>
        <ArtWorkImage src={C1} />
        <Title size="6">cinema4D</Title>
        </Box>
        </>
        );
    if(skill === "F1") return (
        <>
        <Box>
        <ArtWorkImage src={F1} />
        <Title size="6">fireworks</Title>
        </Box>
        </>
        );
    if(skill === "F2") return (
        <>
        <Box>
        <ArtWorkImage src={F2} />
        <Title size="6">framer</Title>
        </Box>
        </>
        );
    if(skill === "I1") return (
        <>
        <Box>
        <ArtWorkImage src={I1} />
        <Title size="6">illustrator</Title>
        </Box>
        </>
        );
    if(skill === "I2") return (
        <>
        <Box>
        <ArtWorkImage src={I2} />
        <Title size="6">indesign</Title>
        </Box>
        </>
        );
    if(skill === "I3") return (
        <>
        <Box>
        <ArtWorkImage src={I3} />
        <Title size="6">invision</Title>
        </Box>
        </>
        );
    if(skill === "L1") return (
        <>
        <Box>
        <ArtWorkImage src={L1} />
        <Title size="6">lightroom</Title>
        </Box>
        </>
        );
    if(skill === "M1") return (
        <>
        <Box>
        <ArtWorkImage src={M1} />
        <Title size="6">marvelap</Title>
        </Box>
        </>
        );
    if(skill === "M2") return (
        <>
        <Box>
        <ArtWorkImage src={M2} />
        <Title size="6">miro</Title>
        </Box>
        </>
        );
    if(skill === "P1") return (
        <>
        <Box>
        <ArtWorkImage src={P1} />
        <Title size="6">photoshop</Title>
        </Box>
        </>
        );
    if(skill === "P2") return (
        <>
        <Box>
        <ArtWorkImage src={P2} />
        <Title size="6">premiere</Title>
        </Box>
        </>
        );
    if(skill === "P3") return (
        <>
        <Box>
        <ArtWorkImage src={P3} />
        <Title size="6">protopie</Title>
        </Box>
        </>
        );
    if(skill === "R1") return (
        <>
        <Box>
        <ArtWorkImage src={R1} />
        <Title size="6">rhino</Title>
        </Box>
        </>
        );
    if(skill === "S1") return (
        <>
        <Box>
        <ArtWorkImage src={S1} />
        <Title size="6">sketch</Title>
        </Box>
        </>
        );
    if(skill === "S2") return (
        <>
        <Box>
        <ArtWorkImage src={S2} />
        <Title size="6">sketchup</Title>
        </Box>
        </>
        );
    if(skill === "W1") return (
        <>
        <Box>
        <ArtWorkImage src={W1} />
        <Title size="6">whimsical</Title>
        </Box>
        </>
        );
    if(skill === "Z1") return (
        <>
        <Box>
        <ArtWorkImage src={Z1} />
        <Title size="6">zepline</Title>
        </Box>
        </>
        );
    if(skill === "DMAX") return (
        <>
        <Box>
        <ArtWorkImage src={DMAX} />
        <Title size="6">3DMAX</Title>
        </Box>
        </>
        );

}

SkillThumbnail.defaultProps = {
  src: {A1},
};
 





export default SkillThumbnail;
