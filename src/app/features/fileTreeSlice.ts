import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  activeTabId: string | null;
  fileName: string;
  fileContent: string | undefined;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdRemove: string | null;
}
const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    fileName: "",
    fileContent: "",
  },
  tabIdRemove: null,
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },

    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setTabIdRemove: (state, action: PayloadAction<string | null>) => {
      state.tabIdRemove = action.payload;
    },
  },
});
export const { setOpenedFilesAction, setClickedFileAction, setTabIdRemove } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
