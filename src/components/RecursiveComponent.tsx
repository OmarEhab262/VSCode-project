import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/function";
interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const onFileClicked = () => {
    const exists = doesFileObjectExist(openedFiles, id);
    dispatch(
      setClickedFileAction({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
    if (exists) return;
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  };
  return (
    <div className="mx-5 ">
      <div
        onClick={handleToggle}
        className="flex items-center mb-1 cursor-pointer"
      >
        <div>
          {isFolder ? (
            <div className="flex items-center gap-1  ">
              <ChevronRight
                size={18}
                strokeWidth={3}
                className={`${isOpen ? "rotate-90" : "rotate-0"} duration-300`}
              />
              <RenderFileIcon
                FileName={name}
                isFolder={isFolder}
                isOpen={isOpen}
              />
              <span>{name}</span>
            </div>
          ) : (
            <div
              className="flex items-center ml-6 gap-1"
              onClick={onFileClicked}
            >
              <RenderFileIcon FileName={name} />
              <span>{name}</span>
            </div>
          )}
        </div>
        <span className="mr-1"></span>
      </div>
      {isOpen &&
        isFolder &&
        children &&
        children.map((file, index) => (
          <RecursiveComponent key={index} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
