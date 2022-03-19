import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";
import Card from "./Card";
import React from "react";

const ConfirmBuy = ({ isOpen, onClose, nft }) => {
  const cancelRef = React.useRef();

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>INFO</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Card confirm nft={nft} />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="red" ref={cancelRef} onClick={onClose}>
              CANCEL
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ConfirmBuy;
