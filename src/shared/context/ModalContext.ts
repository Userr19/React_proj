import React from "react";

export type award = {
  description: string,
  static_icon_url: string,
  key: string,
  name: string
}

export interface IModalContextData {
    key?: string,
    title?: string,
    selftext?: string,
    url?: string,
    onClose: () => void
    all_awardings?: award[]
  }
  

export const ModalContext = React.createContext<IModalContextData>({onClose: () => {}});
