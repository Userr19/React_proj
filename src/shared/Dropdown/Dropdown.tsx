import React, { useEffect, useState } from 'react';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen : onClose, [isDropdownOpen]);

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
    isDropdownOpen ? onOpen : onClose;
  }

  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={() => { handleOpen() }}>
        {button}
      </div>
      <div className={styles.karma}>
        {karma}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => { setIsDropdownOpen(false) }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
