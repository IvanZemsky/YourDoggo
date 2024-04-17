import { Container, Dialog } from "@mui/material";
import { PropsWithChildren } from "react";
import { Fade } from "../../Transitions/Fade";

// child components is described in instances folder

interface FullScreenDialogProps {
   isOpened: boolean
   handleClose?: () => void
}

const FullScreenDialog = ({isOpened = false, children}: PropsWithChildren<FullScreenDialogProps>) => {

   return (
      <Fade in={isOpened}>
         <Dialog open={isOpened} fullScreen>
            <Container sx={{height: '100%'}}>
               {children}
            </Container>
         </Dialog>
      </Fade>
   )
};

export default FullScreenDialog;
