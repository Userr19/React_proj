import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode,
  karma: React.ReactNode,
  children: React.ReactNode,
  isOpen: boolean,
  onOpen?: () => void,
  onClose?: () => void,
}

const NOOP = () => {

}

export function Dropdown({ button, karma, children, isOpen = false, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen : onClose, [isDropdownOpen]);
  const ref = useRef<HTMLDivElement>(null);
  
  const [coord, setCoord] = useState({top: null, left: null});

  const handleOpen = (event: any) => {
    setCoord({top: event.target.getBoundingClientRect().top, left: event.target.getBoundingClientRect().left})
    setIsDropdownOpen(!isDropdownOpen);
    isDropdownOpen ? onOpen : onClose;
  }

  const node = document.getElementById("modal_root");
  if(!node) {
      return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={(event) => { 
        handleOpen(event);
        }} ref={ref}>
        {button}
      </div>
      <div className={styles.karma}>
        {karma}
      </div>
      {isDropdownOpen && (
        ReactDOM.createPortal(
          (<div className={styles.listContainer} style={{position: "absolute", top: `${coord.top && coord.top - 20}px`, left: `${coord.left && coord.left - 67}px`}}>
          <div className={styles.list} onClick={() => { setIsDropdownOpen(false) }}>
            {children}
          </div>
        </div>), node)
      )}
    </div>
  );
}
