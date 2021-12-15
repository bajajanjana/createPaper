import React, { useState } from "react";
import { Box, Button, FormControl, Input, Stack, Textarea } from "@chakra-ui/react";

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
        <FormControl isRequired>
        <Input
          id="section_name"
          placeholder="Section Name"
          fontSize="2rem"
          variant="unstyled"
          color="#733D47"
          mb="-1rem"
          onChange={(e) => {
            setSectionName(e.target.value);
          }}
          value={sectionName}
          required
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
          type="submit"
          variant="outline"
          w="6rem"
          color="#F2D8D5"
          background="#733D47"
          onClick={() => {
            if(document.getElementById('section_name').value=='')
            {
              alert("Please Enter the Section Name...!!");
              return;
            }
            props.addSection(sectionName, description);
            props.handleIsNewSection(false);
          }}
        >
          Create
        </Button>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default SectionInput;
