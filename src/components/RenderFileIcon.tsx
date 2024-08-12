import IconImg from "./IconImg";

interface IProps {
  FileName: string;
  isOpen?: boolean;
  isFolder?: boolean;
}

const extensionIconPath: Record<string, string> = {
  node_modules: "/icons/folder-node",
  public: "/icons/folder-public",
  src: "/icons/folder-src",
  components: "/icons/folder-components",
  styles: "/icons/folder-css",
};

const RenderFileIcon = ({
  FileName,
  isFolder = false,
  isOpen = false,
}: IProps) => {
  const extension = FileName.split(".").pop();

  // Check if extension matches a specific case and determine the icon path
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPath, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPath[extension]}-open.svg`
        : `${extensionIconPath[extension]}.svg`
      : `${extensionIconPath[extension]}.svg`;

    return <IconImg src={iconPath} />;
  }

  if (isFolder && isOpen) {
    return <IconImg src="/icons/default-open.svg" />;
  }
  if (isFolder && !isOpen) {
    return <IconImg src="/icons/default.svg" />;
  }
  return <IconImg src={`/icons/${extension}.svg`} />;
};

export default RenderFileIcon;
