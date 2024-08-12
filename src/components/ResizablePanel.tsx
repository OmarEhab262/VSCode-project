import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

const ResizablePanel = ({
  defaultLayout = [33, 67],
  leftPanel,
  rightPanel,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="conditions"
    >
      <Panel defaultSize={defaultLayout[0]} collapsible>
        {leftPanel}
      </Panel>
      <PanelResizeHandle className="w-[.5px] bg-[#ffffff1f]" />
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};

export default ResizablePanel;
