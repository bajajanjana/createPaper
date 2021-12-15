import React, { useState } from "react";
import { Stack, Input, RadioGroup, Radio } from "@chakra-ui/react";
import OptionInput from "./OptionInput";

function SingleChoiceQues(props) {
  const [inputOptions, setInputOptions] = useState([]);
  const addOptionHandler = (event) => {
    if (event.target.value === "" && event.charCode === 13) {
      return (
        // <Alert status="warning">
        //   <AlertIcon />
        //   Seems your account is about expire, upgrade now
        // </Alert>
        alert("enter the option..!!!")
      );
    }
    if (event.charCode === 13) {
      inputOptions.push(event.target.value);
      const newOptions = inputOptions.map((item) => {
        return item;
      });
      setInputOptions(newOptions);
      document.getElementById("inputOption").value = "";
    }
  };
  return (
    <Stack>
      <Input
        variant="flushed"
        placeholder="Type your question here.."
        color="#733D47"
        fontSize="1.5rem"
      ></Input>
      <Stack direction="column" spacing="1rem">
        <RadioGroup>
          <Stack spacing="1rem">
            {inputOptions.map((item, i) => {
              return (
                <Radio value={item}>
                  <OptionInput
                    optionData={item}
                    optionNumber={String.fromCharCode(i + 65)}
                  />
                </Radio>
              );
            })}
          </Stack>
        </RadioGroup>
        <Input
          placeholder="Add Option..."
          onKeyPress={addOptionHandler}
          id="inputOption"
          display={inputOptions.length >= 4 ? "none" : "block"}
        ></Input>
      </Stack>
    </Stack>
  );
}

export default SingleChoiceQues;
