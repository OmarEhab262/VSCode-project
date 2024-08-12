import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface IProps {
  content: string | undefined;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript typescript html css json"
      style={atomOneDark}
      customStyle={{
        background: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
        fontSize: "1.2rem",
      }}
      showLineNumbers={content ? true : false}
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
