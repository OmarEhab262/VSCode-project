import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import WelcomeTab from "./components/WelcomeTab";
import { fileTree } from "./data/fileTree";
function App() {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);

  return (
    <div className="">
      <div className="flex h-screen ">
        <ResizablePanel
          leftPanel={
            <div className="">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
}

export default App;
