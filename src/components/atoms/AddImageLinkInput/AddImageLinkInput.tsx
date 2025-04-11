import { useState } from 'react';
import classes from './AddImageLinkInput.module.scss';
import { nanoid } from 'nanoid';

interface ImageItem {
  id: string;
  value: string;
}

interface AddImageLinkInputProps {
  itemlist: ImageItem[];
  setItemList: (items: ImageItem[]) => void;
}

const AddImageLinkInput: React.FC<AddImageLinkInputProps> = ({ itemlist, setItemList }) => {
  const [inputLink, setInputLink] = useState('');
  const clickHandler = (): void => {
    setInputLink('');
  };

  const addImageLinkHandler = (): void => {
    const RegExpLink: RegExp = /(^https?:\/\/)?([a-z0-9~_\-.]+)\.([a-z]{2,9})(\/|:|\?[!-~]*)?/;
    if (RegExpLink.test(inputLink)) {
      setItemList([...itemlist, { id: nanoid(), value: inputLink }]);
    }
    setInputLink('');
  };
  return (
    <div className={classes['input-container']}>
      <input
        className={classes['image-link-input']}
        placeholder="or paste your image link here"
        onClick={clickHandler}
        onChange={({ target }) => {
          setInputLink(target.value);
        }}
        value={inputLink}
      />
      <button className={classes['add-button']} onClick={addImageLinkHandler}>
        Add
      </button>
    </div>
  );
};

export default AddImageLinkInput;
