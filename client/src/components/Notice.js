import React from "react";
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogBody,
  Button,
  AlertDialogHeader,
} from "@chakra-ui/react";

const Notice = ({ onClose, isOpen }) => {
  return (
    <>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Connect
            </AlertDialogHeader>

            <AlertDialogBody>
              Please connect your wallet to Rinkeby Test Network
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="green" onClick={onClose} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Notice;
