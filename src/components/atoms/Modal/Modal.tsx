import React, { ReactNode, useCallback, useEffect } from 'react';
import { useState, useRef } from 'react';

import { Portal } from '../Portal/Portal';

import classes from './Modal.module.scss';

interface ModalProps {
  name?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { name, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const modalStyle = isOpen ? `${classes.Modal} ${classes['Modal--opened']}` : classes.Modal;

  const modalContentConditionStyle =
    isClosing && isOpen
      ? `${classes.Modal__content} ${classes['Modal__content--opened']} ${classes['Modal__content--isClosing']}`
      : !isClosing && isOpen
      ? `${classes.Modal__content} ${classes['Modal__content--opened']}`
      : classes.Modal__content;

  const modalContentStyle =
    name === 'DemoCv'
      ? `${modalContentConditionStyle} ${classes['Modal__content--demoCv']}`
      : modalContentConditionStyle;

  return (
    <Portal>
      <div className={modalStyle}>
        <div className={classes.Modal__overlay} onClick={closeHandler}>
          <div className={modalContentStyle} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
