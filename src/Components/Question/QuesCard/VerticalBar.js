import React from "react";
import { Box, Center, Circle, Stack } from "@chakra-ui/react";
import add from "../../Assets/Group 244.svg";
import add_section from "../../Assets/Group 245.svg";
import copy from "../../Assets/image-multiple 34.svg";
import image from "../../Assets/Vector (1).svg";
import deleteIcon from "../../Assets/Vector (2).svg";
import styles from "./VerticalBar.module.css";
import SectionCard from "../SectionCard/SectionCard";
import SectionInput from "../SectionCard/SectionInput";
import CardLayout from "./CardLayout";

function VerticalBar(props) {
  return (
    <Box h="20rem" w="3rem" bg="#733D47" rounded={10}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap="2.5rem"
        pt="1rem"
        pb="1rem"
      >
        <Box>
          <Center>
            <img src={add}
            onClick={()=>{
              props.addQues(props.quesIndex,props.sectionIndex);
            }}
            ></img>
          </Center>
        </Box>
        <Box>
          <Center>
            <img src={image}></img>
          </Center>
        </Box>
        <Box>
          <Center>
            <img src={copy}
            ></img>
          </Center>
        </Box>
        <Box>
          <Center>
            <img src={deleteIcon}
            onClick={()=>{
              props.deleteQues(props.sectionIndex,props.quesIndex);
            }}
            ></img>
          </Center>
        </Box>
        <Box>
          <Center>
            <img
              src={add_section}
              onClick={() => {
                props.handleIsNewSection(true);
              }}
            ></img>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default VerticalBar;
