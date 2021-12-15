import React from "react";
import { Stack } from "@chakra-ui/react";
import QuestionCard from "./QuestionCard";
import VerticalBar from "./VerticalBar";

function CardLayout(props) {
  return (
    <Stack direction="row" spacing="2rem">
      <QuestionCard />
      <VerticalBar
        addSection={props.addSection}
        handleIsNewSection={props.handleIsNewSection}
        sectionIndex={props.sectionIndex}
        quesSet={props.quesSet}
        addQues={props.addQues}
        copyQues={props.copyQues}
        quesIndex={props.quesIndex}
        deleteQues={props.deleteQues}
        copyQues={props.copyQues}
      />
    </Stack>
  );
}

export default CardLayout;
