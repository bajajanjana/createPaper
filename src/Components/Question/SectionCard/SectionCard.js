import React, { useState } from "react";
import { Box, Button, Input, Stack, Textarea } from "@chakra-ui/react";
import QuestionCard from "../QuesCard/QuestionCard";
import CardLayout from "../QuesCard/CardLayout";
import VerticalBar from "../QuesCard/VerticalBar";

function SectionCard(props) {
  return (
    <>
      <Box
        width="60vw"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
        borderRadius={10}
        p="2rem"
      >
        <Stack spacing={3}>
          <Input
            placeholder="Section Name"
            fontSize="2rem"
            variant="unstyled"
            color="#733D47"
            mb="-1rem"
            value={props.sectionName}
          />
          <Textarea
            placeholder="Description(Optional)"
            fontSize="1rem"
            variant="unstyled"
            color="#733D47"
            value={props.description}
          />
        </Stack>
      </Box>
      {/* {props.quesSet.length === 0 && (
        <CardLayout
          addSection={props.addSection}
          handleIsNewSection={props.handleIsNewSection}
          sectionIndex={props.sectionIndex}
          quesSet={props.quesSet}
          addQues={props.addQues}
          quesIndex={0}
          deleteQues={props.deleteQues}
        />
      )} */}
      {props.quesSet.map((ques,i) => {
        return <CardLayout
          key={props.sectionName}
          addSection={props.addSection}
          handleIsNewSection={props.handleIsNewSection}
          sectionIndex={props.sectionIndex}
          quesSet={props.quesSet}
          addQues={props.addQues}
          copyQues={props.copyQues}
          quesIndex={i}
          deleteQues={props.deleteQues}
        />
      })}
    </>
  );
}

export default SectionCard;
