import {
  Input,
  FormControl,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  Icon,
} from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import React, { useRef, useState } from "react";

const FileUpload = ({ setImage, setImagePreview }) => {
  const inputRef = useRef();

  const [file, setFile] = useState(null);

  const onChange = (e) => {
    var files = e.target.files;
    setFile(files[0].name);
    setImagePreview(URL.createObjectURL(files[0]));
    setImage(files[0]);
  };

  return (
    <FormControl isInvalid={false}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiFile} />}
        />
        <input
          accept="image/png, image/gif, image/jpeg"
          onChange={onChange}
          type="file"
          name={"NFT"}
          ref={inputRef}
          style={{ display: "none" }}
        ></input>
        <Input
          onChange={onChange}
          placeholder={file ? file : "Upload your NFT image"}
          onClick={() => inputRef.current.click()}
        />
      </InputGroup>
      <FormErrorMessage>{false}</FormErrorMessage>
    </FormControl>
  );
};

export default FileUpload;
