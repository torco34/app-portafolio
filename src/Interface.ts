export interface IPropsTexto {
  subtitles: string;
  text: string;
  title: string;
  additionalText: string;
  text1: string;
  text2: string;
  text3: string;
}

export interface IPropsAnimation {
  subtitle: string;
  title: string;
  text: string;
}
export interface IPropsClipPath {
  title: string;
  text: string;
}

export interface IPropsImg {
  src: string;
  title: string;
  text: string;
}
export interface IPropsModal {
  text: string;
 onClick: (() => void) | undefined
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleClose: React.Dispatch<React.SetStateAction<string>>;
  onHide?: (() => void) | undefined;
  setQuery: any;
  query: string;
}