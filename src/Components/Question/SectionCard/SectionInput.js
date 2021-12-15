import React, { useState } from "react";
import { Box, Button, Input, Stack, Textarea } from "@chakra-ui/react";

function SectionInput(props) {
  const [sectionName, setSectionName] = useState();
  const [description, setDescription] = useState();
  return (
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
          onChange={(e) => {
            setSectionName(e.target.value);
          }}
          value={sectionName}
        />
        <Textarea
          placeholder="Description(Optional)"
          fontSize="1rem"
          variant="unstyled"
          color="#733D47"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <Button
          variant="outline"
          w="6rem"
          color="#F2D8D5"
          background="#733D47"
          onClick={() => {
            props.addSection(sectionName, description);
            props.handleIsNewSection(false);
          }}
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
}

export default SectionInput;
