import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFileBarTab";
import DropMenu from "./ui/DropMenu";
import { useState } from "react";

const OpenedFileBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div className="w-fit">
      <div
        className="flex items-center "
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFileBarTab key={file.id} file={file} />
        ))}
      </div>
      {showMenu && (
        <DropMenu position={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};

export default OpenedFileBar;
