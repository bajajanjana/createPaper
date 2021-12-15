import React from "react";
import {
  Stack,
  Input,
  Textarea
} from "@chakra-ui/react";

function ParagraphQues() {
  return (
    <Stack direction="column" spacing="2rem">
      <Input
        variant="flushed"
        placeholder="Type your question here.."
        color="#733D47"
        fontSize="1.5rem"
      ></Input>
      <Textarea
        size='sm'
        background="rgba(242, 216, 213, 0.63)"
        rounded={5}
        placeholder="Paragraph.."
        h='8rem'
      />
    </Stack>
  );
}

export default ParagraphQues;
