import React from "react";
import tw from "tailwind-styled-components";
import Title from "./Title"

import A1 from "../../static/skillLogo/Adobe.png";
import A2 from "../../static/skillLogo/Animate.png";
import A3 from "../../static/skillLogo/fireworks.png";
import A4 from "../../static/skillLogo/xd.svg";
import A5 from "../../static/skillLogo/premiere.png";
import A6 from "../../static/skillLogo/indesign.png";
import A7 from "../../static/skillLogo/photoshop.png";
import A8 from "../../static/skillLogo/illustrator.png";
import A9 from "../../static/skillLogo/Aftereffect.png";
import A10 from "../../static/skillLogo/dreamweaver.svg"
import A11 from "../../static/skillLogo/lightroom.png";


import Au1 from "../../static/skillLogo/Autocad.png";
import Au2 from "../../static/skillLogo/Axure.png";


import B1 from "../../static/skillLogo/Balsamiq.png";
import B2 from "../../static/skillLogo/blender.png";

import C1 from "../../static/skillLogo/cinema4D.png";
import F1 from "../../static/skillLogo/figma.png";
import F2 from "../../static/skillLogo/framer.png";
import I1 from "../../static/skillLogo/invision.png";

import M1 from "../../static/skillLogo/marvelapp.png";
import M2 from "../../static/skillLogo/miro.png";
import P1 from "../../static/skillLogo/protoio.png";

import R1 from "../../static/skillLogo/rhino.png";
import S1 from "../../static/skillLogo/sketch.png";
import S2 from "../../static/skillLogo/sketchup.png";

import P2 from "../../static/skillLogo/protopie.png";

import W1 from "../../static/skillLogo/whimsical.png";
import Z1 from "../../static/skillLogo/zepline.png";
import D1 from "../../static/skillLogo/3DMAX.png";




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
        <Title size="6">Animate</Title>
        </Box>
        </>
        );
    if(skill === "A3") return (
        <>
        <Box>
        <ArtWorkImage src={A3} />
        <Title size="6">Fireworks</Title>
        </Box>
        </>
        );
    if(skill === "A4") return (
        <>
        <Box>
        <ArtWorkImage src={A4} />
        <Title size="6">XD</Title>
        </Box>
        </>
        );
    if(skill === "A5") return (
        <>
        <Box>
        <ArtWorkImage src={A5} />
        <Title size="6">Premiere</Title>
        </Box>
        </>
        );
    if(skill === "A6") return (
        <>
        <Box>
        <ArtWorkImage src={A6} />
        <Title size="6">Indesign</Title>
        </Box>
        </>
        );
    if(skill === "A7") return (
        <>
        <Box>
        <ArtWorkImage src={A7} />
        <Title size="6">Photoshop</Title>
        </Box>
        </>
        );
    if(skill === "A8") return (
        <>
        <Box>
        <ArtWorkImage src={A8} />
        <Title size="6">Illustrator</Title>
        </Box>
        </>
        );
    if(skill === "A9") return (
        <>
        <Box>
        <ArtWorkImage src={A9} />
        <Title size="6">After Effect</Title>
        </Box>
        </>
        );
    if(skill === "A10") return (
        <>
        <Box>
        <ArtWorkImage src={A10} />
        <Title size="6">Dreamweaver</Title>
        </Box>
        </>
        );
    if(skill === "A11") return (
        <>
        <Box>
        <ArtWorkImage src={A11} />
        <Title size="6">Lightroom</Title>
        </Box>
        </>
        );
    if(skill === "Au1") return (
        <>
        <Box>
        <ArtWorkImage src={Au1} />
        <Title size="6">Auto CAD</Title>
        </Box>
        </>
        );
    if(skill === "Au2") return (
        <>
        <Box>
        <ArtWorkImage src={Au2} />
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
        <Title size="6">Blender</Title>
        </Box>
        </>
        );
    if(skill === "C1") return (
        <>
        <Box>
        <ArtWorkImage src={C1} />
        <Title size="6">Cinema4D</Title>
        </Box>
        </>
        );
    if(skill === "F1") return (
        <>
        <Box>
        <ArtWorkImage src={F1} />
        <Title size="6">Figma</Title>
        </Box>
        </>
        );
    if(skill === "F2") return (
        <>
        <Box>
        <ArtWorkImage src={F2} />
        <Title size="6">Framer</Title>
        </Box>
        </>
        );
    if(skill === "I1") return (
        <>
        <Box>
        <ArtWorkImage src={I1} />
        <Title size="6">Invision</Title>
        </Box>
        </>
        );
    if(skill === "M1") return (
        <>
        <Box>
        <ArtWorkImage src={M1} />
        <Title size="6">Marvel App</Title>
        </Box>
        </>
        );
    if(skill === "M2") return (
        <>
        <Box>
        <ArtWorkImage src={M2} />
        <Title size="6">Miro</Title>
        </Box>
        </>
        );
    if(skill === "P1") return (
        <>
        <Box>
        <ArtWorkImage src={P1} />
        <Title size="6">Proto.io</Title>
        </Box>
        </>
        );
    if(skill === "R1") return (
        <>
        <Box>
        <ArtWorkImage src={R1} />
        <Title size="6">Rhino</Title>
        </Box>
        </>
        );
    if(skill === "S1") return (
    <>
    <Box>
    <ArtWorkImage src={S1} />
    <Title size="6">Sketch</Title>
    </Box>
    </>
    );
    if(skill === "S2") return (
    <>
    <Box>
    <ArtWorkImage src={S2} />
    <Title size="6">Sketch Up</Title>
    </Box>
    </>
    );
    if(skill === "P2") return (
        <>
        <Box>
        <ArtWorkImage src={P2} />
        <Title size="6">Protopie</Title>
        </Box>
        </>
        );
    if(skill === "W1") return (
        <>
        <Box>
        <ArtWorkImage src={W1} />
        <Title size="6">Whimsical</Title>
        </Box>
        </>
        );

    if(skill === "Z1") return (
        <>
        <Box>
        <ArtWorkImage src={Z1} />
        <Title size="6">Zepline</Title>
        </Box>
        </>
        );
    if(skill === "D1") return (
        <>
        <Box>
        <ArtWorkImage src={D1} />
        <Title size="6">3D Max</Title>
        </Box>
        </>
        );

}

SkillThumbnail.defaultProps = {
  src: {A1},
};
 





export default SkillThumbnail;
