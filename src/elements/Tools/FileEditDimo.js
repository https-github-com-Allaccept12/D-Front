import React, { useState, useCallback, useEffect, useRef } from "react";
import { dimoFiles } from "../../redux/modules/image";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, Text } from "../../elements";
import tw from "tailwind-styled-components";
import { useSelector, useDispatch } from "react-redux";
import { dimoDeletes } from "../../redux/modules/image";

const List = tw.li`
 font-min1 text-base text-dgray-500 
 flex w-full max-w-xs sm:max-w-sm md:max-w-3xl justify-center
`;

const Files = tw.p`
${(props) => (props.active === true ? `hidden` : "")};
`;
function FileEditDimo(props) {
    const { imgs } = props;
    // console.log(imgs);
    const imageRef = useRef();

    const [myEdits, setMyEdits] = useState([...imgs]);
    const [myFiles, setMyFiles] = useState([]);
    const [deleteFiles, setDeleteFiles] = useState([]);
    const [mirror, setMirror] = useState([]);
    console.log(deleteFiles);
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();
    const onDrop = useCallback((acceptedFiles) => {
        for (let file of acceptedFiles) {
            setMyFiles((zz) => [...zz, file]);
        }
        const reader = new FileReader();
        reader.readAsDataURL(myFiles);
        reader.onloadend = () => {
            SetPreviews((temp) => [...temp, reader.result]);
        };
    }, []);

    useEffect(() => {
        dispatch(dimoFiles(myFiles));
        dispatch(dimoDeletes(deleteFiles));
    });

    const removeFile = (file) => () => {
        const newFiles = [...myFiles];
        newFiles.splice(newFiles.indexOf(file), 1);
        setMyFiles(newFiles);
    };

    const removeAll = (file) => () => {
        setMyFiles([]);
    };

    const removeEditAll = () => {
        setMyEdits([]);
    };
    // console.log(imageRef.current);
    const saveUrl = (img, idx) => () => {
        // const delete_img = [];
        const newFiles = [...myEdits];
        newFiles.splice(newFiles[idx], idx);

        const nextData = newFiles.filter((n) => console.log(n));
        console.log(nextData);
        // setMirror(img);
        setDeleteFiles(img);

        const delete_img = [img, ...deleteFiles];
        setDeleteFiles(delete_img);

        // newFiles.filter((v) => img !== img);
        console.log(newFiles);
        setMyEdits(newFiles);
    };

    const files = myFiles.map((file) => (
        <List key={file.path}>
            <span className="w-1/2 min-w-full truncate md:w-2/3 md:max-w-xl lg:w-3/4 lg:max-w-2xl">{file.path}</span> -
            <span className="hidden">{file.size} bytes</span>
            <button onClick={removeFile(file)} className="pl-3 text-tiny animate-pulse shrink-0">
                삭제
            </button>
        </List>
    ));

    return (
        <>
            <>
                {myEdits.length > 0 &&
                    myEdits.map((value, idx) => {
                        console.log(value, idx);
                        return (
                            <>
                                <p key={idx} ref={imageRef}>
                                    {value?.img_url}
                                </p>

                                <button onClick={saveUrl(value.img_url, idx)} value={value.img_url}>
                                    삭제
                                </button>
                            </>
                        );
                    })}
            </>

            <>
                <Button size="3" color="4" onClick={removeEditAll}>
                    전체삭제
                </Button>
            </>

            <div className="flex flex-col items-center justify-center">
                {files.length > 0 ? (
                    <>
                        <div className="">
                            <ul>{files}</ul>
                        </div>
                        {files.length > 0 && (
                            <Button size="3" onClick={removeAll} className="mt-2">
                                전체삭제
                            </Button>
                        )}
                    </>
                ) : (
                    <>
                        <div className="w-full">
                            <Dropzone
                                maxFiles={10}
                                accept={"image/gif, image/jpg, image/jpeg, image/png"}
                                onDrop={onDrop}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div
                                            className="flex flex-col items-center justify-center p-5"
                                            {...getRootProps()}
                                        >
                                            <input {...getInputProps()} />
                                            <>
                                                <Text size="1" className="text-[#A1ADC0] text-center animate-pulse">
                                                    Click or Drag & Drop here
                                                </Text>
                                                <Text size="3">
                                                    파일은 복수로 첨부 가능하며, 최대 20MB까지 업로드 됩니다.
                                                </Text>
                                            </>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default FileEditDimo;
