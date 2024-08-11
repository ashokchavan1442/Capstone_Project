import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

export default function App() {
  const [code, setCode] = useState(`function Test () { return "hello"}`);
  return (
    <div>
      <Editor
        value={code}
        onValueChange={value => setCode(value)}
        highlight={code => highlight(code, languages.js)}
        padding={20}
        placeholder={"WRITE YOUR CSS HERE"}
      />
    </div>
  );
}
