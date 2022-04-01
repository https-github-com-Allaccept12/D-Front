import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Text } from "../../elements";
import tw from "tailwind-styled-components";

const List = tw.li`
 font-min1 text-base text-dgray-500 
 flex w-full max-w-xs sm:max-w-sm md:max-w-3xl justify-center
`;
function FileUploadDimo(props) {
    const [myFiles, setMyFiles] = useState([]);

    const onDrop = useCallback(
        (acceptedFiles) => {
            setMyFiles([...myFiles, ...acceptedFiles]);
        },
        [myFiles],
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
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
    const sandImageFiles = () => {
        dispatch(myFiles);
    };

    const files = myFiles.map((file) => (
        <List key={file.path}>
            <span className="truncate min-w-full w-1/2 md:w-2/3 md:max-w-xl lg:w-3/4 lg:max-w-2xl">{file.path}</span> -
            <span className="hidden">{file.size} bytes</span>
            <button onClick={removeFile(file)} className="pl-3 text-tiny animate-pulse shrink-0">
                삭제
            </button>
        </List>
    ));

    return (
        <>
            <div className="flex justify-center items-center flex-col">
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
                        <div
                            {...getRootProps({ className: "dropzone" })}
                            className="flex justify-center items-center flex-col pt-10 pb-7"
                        >
                            <Button size="2" color="4" icon name="Plus">
                                추가하기
                            </Button>
                            <input {...getInputProps()} />
                            <Text size="3" className="pt-10 pb-7">
                                파일추가 파일은 복수로 첨부가능하며 최대 100mb까지 업로드됩니다.
                            </Text>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default FileUploadDimo;
