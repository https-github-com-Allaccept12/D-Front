import React, { useState, useCallback, useEffect } from "react";
import { dimoFiles } from "../../redux/modules/image";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, Text } from "../../elements";
import tw from "tailwind-styled-components";
import { useSelector, useDispatch } from "react-redux";

const List = tw.li`
 font-min1 text-base text-dgray-500 
 flex w-full max-w-xs sm:max-w-sm md:max-w-3xl justify-center
`;
function FileUploadDimo(props) {
    const [myFiles, setMyFiles] = useState([]);
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
    });

    const removeFile = (file) => () => {
        const newFiles = [...myFiles];
        newFiles.splice(newFiles.indexOf(file), 1);
        setMyFiles(newFiles);
    };

    const removeAll = () => {
        setMyFiles([]);
    };

    // console.log(myFiles);
    // const sandImageFiles = () => {
    // };

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

export default FileUploadDimo;
