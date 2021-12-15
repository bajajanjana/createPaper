import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Select,
  Stack,
  Text,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

import SingleChoiceQues from "../QuestionType/SingleChoiceQues";
import ParagraphQues from "../QuestionType/ParagraphQues";
import UploadFileQues from "../QuestionType/UploadFileQues";
import MultipleChoiceQues from "../QuestionType/MultipleChoiceQues";
function QuestionCard(props) {
  const [quesType, setQuesType] = useState();
  return (
    <Box
      p="2rem"
      width="60vw"
      h="20rem"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
      borderRadius={10}
    >
      <Center>
        <Flex direction="row" h="100%" justifyContent="space-between" w="100%">
          <Box pl="1rem" pr="1rem" flex="1">
            <Stack spacing="1rem">
              <Select
                placeholder="Ques Type"
                background="#F2D8D5"
                color="rgba(115, 61, 71, 1)"
                size="md"
                onChange={(e) => {
                  setQuesType(e.target.value);
                }}
              >
                <option value="Single Choice">Single Choice</option>
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="Paragraph">Paragraph</option>
                <option value="Upload File">Upload File</option>
              </Select>
              <Box>
                <Text mb="0.5rem" fontSize="sm" color="#733D47">
                  Total Marks
                </Text>
                <InputGroup>
                  <Input borderColor="#BF9B9B" p="0.2rem" type="number" />
                  <InputRightElement
                    children={
                      <Box as="span" color="#BF9B9B" mr="1rem">
                        Marks
                      </Box>
                    }
                  ></InputRightElement>
                </InputGroup>
              </Box>
              <Box>
                <Text mb="0.5rem" fontSize="sm" color="#733D47">
                  Negative Marks
                </Text>
                <InputGroup>
                  <Input borderColor="#BF9B9B" p="0.2rem" type="number" />
                  <InputRightElement
                    children={
                      <Box as="span" color="#BF9B9B" mr="1rem">
                        Marks
                      </Box>
                    }
                  ></InputRightElement>
                </InputGroup>
              </Box>
            </Stack>
          </Box>
          <Box
            pl="1rem"
            pr="1rem"
            flex="2"
            borderLeft="1.5px solid #733D47"
            display="flex"
            flexDirection="column"
          >
            {quesType === "Single Choice" && (
              <SingleChoiceQues/>
            )}
            {quesType === "Paragraph" && <ParagraphQues />}
            {quesType === "Upload File" && <UploadFileQues />}
            {quesType === "Multiple Choice" && (
              <MultipleChoiceQues/>
            )}
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}

export default QuestionCard;
