import React, { useState } from "react";
import "./App.css";
import { Box, Center, ChakraProvider, Stack } from "@chakra-ui/react";
import SectionInput from "./Components/Question/SectionCard/SectionInput";
import QuestionCard from "./Components/Question/QuesCard/QuestionCard";
import VerticalBar from "./Components/Question/QuesCard/VerticalBar";
import CardLayout from "./Components/Question/QuesCard/CardLayout";
import SectionCard from "./Components/Question/SectionCard/SectionCard";

function App() {
  const [sectionList, setSectionList] = useState([]);
  const [isNewSection, setIsNewSection] = useState(true);

  const addQues = (quesIndex,i) => {
    sectionList[i].quesSet.push({id:'1'});
    const sectList = sectionList.map((item) => {
      return item;
    });
    setSectionList(sectList);
  };

  const deleteQues = (sectionIndex,quesIndex) => {
    console.log("deletequesIndex");
    console.log(quesIndex);
    // sectionList[sectionIndex].quesSet.splice(quesIndex,1);
    delete sectionList[sectionIndex].quesSet[quesIndex];
    console.log("quesSetLength");
    console.log(sectionList[sectionIndex].quesSet.length);
    if(sectionList[sectionIndex].quesSet.length===1)
    {
      delete sectionList[sectionIndex];
      setIsNewSection(true);
    }
    const sectList = sectionList.map((item) =>item);
    setSectionList(sectList);
  };

  const handleIsNewSection = (value) => {
    setIsNewSection(value);
  };

  const addSection = (sectionName, desc) => {
    const sect = {
      sectionName: sectionName,
      description: desc,
      quesSet:[{id:'1'}],
    };
    sectionList.push(sect);
    const newList = sectionList.map((item) => {
      return item;
    });
    setSectionList(newList);
  };
  return (
    <ChakraProvider>
      <Box p="3rem">
        <Box fontSize="1.5rem" mb="0.5rem">
          Create Question
        </Box>
        <Box borderBottom="1px solid #733D47" transform="rotate(-180deg)"></Box>
        <Box p="1rem">
          <Center>
            <Stack spacing="2rem">
              {sectionList.map((item, i) => {
                return (
                  <SectionCard
                    key={i}
                    sectionName={item.sectionName}
                    description={item.description}
                    quesSet={item.quesSet}
                    addSection={addSection}
                    handleIsNewSection={handleIsNewSection}
                    sectionIndex={i}
                    addQues={addQues}
                    deleteQues={deleteQues}

                  />
                )
              })}
              {isNewSection && (
                <SectionInput
                  addSection={addSection}
                  handleIsNewSection={handleIsNewSection}
                />
              )}
            </Stack>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
