import React,{useState} from 'react'
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
    Divider,
    RadioGroup,
    Radio,
    InputLeftElement,
    Square,
  } from "@chakra-ui/react";

function OptionInput(props) {
    const [optionValue,setOptionValue]=useState(props.optionData);
    return (
        <Stack direction="row" spacing="1rem">
                    <InputGroup w="25rem">
                      <InputLeftElement
                        children={
                          <Square
                            as="span"
                            background="#733D47"
                            color="#F2D8D5"
                            size="1.5rem"
                            rounded={3}
                          >
                              <Center>
                            {props.optionNumber}
                            </Center>
                          </Square>
                        }
                      ></InputLeftElement>
                      <Input  value={optionValue}></Input>
                    </InputGroup>
                    
                  </Stack>
                  
    )
}

export default OptionInput
