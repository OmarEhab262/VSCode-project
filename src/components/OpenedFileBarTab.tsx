import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFileAction,
  setOpenedFilesAction,
  setTabIdRemove,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
interface IProps {
  file: IFile;
}
const OpenedFileBarTab = ({ file }: IProps) => {
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);

  const dispatch = useDispatch();

  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFileAction({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
  };

  const onRemove = (selectedID: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedID);

    if (filtered.length > 0) {
      // There are still files left
      const { name, content, id } = filtered[filtered.length - 1];

      dispatch(setOpenedFilesAction(filtered));
      dispatch(
        setClickedFileAction({
          fileName: name,
          fileContent: content,
          activeTabId: id,
        })
      );
    } else {
      // No files left
      dispatch(setOpenedFilesAction(filtered));
      dispatch(
        setClickedFileAction({
          fileName: "",
          fileContent: "",
          activeTabId: "",
        })
      );
    }
  };

  //   const onRemove = (selectedID: string) => {
  //     const filtered = openedFiles.filter((file) => file.id !== selectedID);
  //     const { name, content, id } = filtered[filtered.length - 1];

  //     dispatch(setOpenedFilesAction(filtered));
  //     dispatch(
  //       setClickedFileAction({
  //         fileName: name,
  //         fileContent: content,
  //         activeTabId: id,
  //       })
  //     );
  //   };

  return (
    <div
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabIdRemove(file.id));
      }}
      style={{
        borderBottom: file.id === activeTabId ? "2px solid blue" : "",
      }}
      className="m-2  gap-1 hover:bg-[#64646473] duration-300 cursor-pointer  flex justify-center items-center w-fit p-1 "
    >
      <span>
        <RenderFileIcon FileName={file.name} />
      </span>
      <div className="mr-2">{file.name}</div>
      <X
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
        size={17}
        strokeWidth={3}
        className="mt-1 cursor-pointer hover:text-red-500 duration-300"
      />
    </div>
  );
};

export default OpenedFileBarTab;
