import { useEffect, useRef } from "react";
import { setOpenedFilesAction } from "../../app/features/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {
  position: { x: number; y: number };
  setShowMenu: (val: boolean) => void;
}

const DropMenu = ({ position, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("click", (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    });
    const handelClickOutSide = () => {};

    return () => {
      window.removeEventListener("click", handelClickOutSide);
    };
  }, [setShowMenu]);

  const closeAll = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false);
  };
  const { openedFiles, tabIdRemove } = useSelector(
    (state: RootState) => state.tree
  );

  const onClose = () => {
    const filtered = openedFiles.filter((file) => file.id !== tabIdRemove);
    dispatch(setOpenedFilesAction(filtered));
    setShowMenu(false);
  };

  return (
    <div ref={menuRef}>
      <ul
        style={{
          top: position.y,
          left: position.x,
        }}
        className="w-32 absolute text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <li
          onClick={onClose}
          className="w-full px-4 py-2 border-b  rounded-t-lg dark:border-gray-600 cursor-pointer hover:bg-gray-800 duration-300"
        >
          Close
        </li>
        <li
          onClick={closeAll}
          className="w-full px-4 py-2   cursor-pointer hover:bg-gray-800 duration-300"
        >
          Close All
        </li>
      </ul>
    </div>
  );
};

export default DropMenu;
