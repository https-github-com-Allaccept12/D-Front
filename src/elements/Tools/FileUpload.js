import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { preview, forSend } from "../../redux/modules/image";
import Dropzone, { useDropzone } from "react-dropzone";
import { Profile } from "../../elements";
import profile_upload from "../../static/images/profile_upload.svg";

function FileUpload() {
  const profile = useSelector((state) => state.image.url);
  // console.log(profile);
  const dispatch = useDispatch();
  
  const onDrop = useCallback((acceptedFile) => {
    const reader = new FileReader();
    dispatch(forSend(acceptedFile[0]));

    reader.readAsDataURL(acceptedFile[0]);
    reader.onload = () => {
      dispatch(preview(reader.result));
    };
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Dropzone
      multiple={false}
      accept={"image/gif, image/jpg, image/jpeg, image/png"}
      onDrop={onDrop}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {profile !== "" ? (
              <Profile size="1" src={profile}></Profile>
            ) : (
              <>
                <img src={profile_upload} />
                <p className="text-[#A1ADC0] text-center">Click or Drag&Drop</p>
              </>
            )}
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default FileUpload;
