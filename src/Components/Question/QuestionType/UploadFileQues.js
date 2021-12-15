import React from "react";
import { Stack, Input, Textarea } from "@chakra-ui/react";
import styles from "./UploadFileQues.module.css";

function UploadFileQues() {
  return (
    <Stack direction="column" spacing="2rem">
      <Input
        variant="flushed"
        placeholder="Type your question here.."
        color="#733D47"
        fontSize="1.5rem"
      ></Input>
      <input type="file" id="actual-btn"  hidden/>
      <label for="actual-btn" className={styles.upload_id}>File Upload</label>
    </Stack>
  );
}

export default UploadFileQues;
