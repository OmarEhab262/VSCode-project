import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import { RootState } from "../app/store";
import OpenedFileBar from "./OpenedFileBar";

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.tree);
  return (
    <>
      <OpenedFileBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </>
  );
};

export default Preview;
