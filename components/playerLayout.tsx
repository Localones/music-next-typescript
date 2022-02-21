import {Box} from '@chakra-ui/layout';
import React from "react";
import Sidebar from "./sidebar";

const PlayerLayout = ({children}) => {
    return (
        <div style={{overflow: "hidden", minHeight: '100%'}}>
            <Box width='100vw' height='100vh'>
                <Box position='absolute' top={0} width='250px'>
                    <Sidebar />
                </Box>
                <Box marginLeft='250px'>
                    {children}
                </Box>
                <Box position='absolute' left={0} bottom={0}>
                    Player
                </Box>
            </Box>
        </div>
    )
}

export default PlayerLayout;



