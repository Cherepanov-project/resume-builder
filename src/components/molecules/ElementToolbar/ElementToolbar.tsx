// Для небольших контейнеров панель должна быть над ними.
// Для контейнеров, занимающих всю ширину рабочей области - сбоку.
import { IconButton } from '@mui/material';
import {
  RemoveCircle,
  ContentCopy,
  OpenWith,
  AddCircle,
  Delete,
  Settings,
} from '@mui/icons-material';

import './ElementToolbar.module.scss';

const ElementToolbar: React.FC = () => {
  // Перенести состояние в редакс
  // const [isDragging, setIsDragging] = useState(false);

  // const handleDragStart = () => {
  //   setIsDragging(true);
  // };

  // const handleDragStop = () => {
  //   setIsDragging(false);
  // };

  // const handleIncreaseSize = (id: string) => {
  //   setState((prev) => ({
  //     ...prev,
  //     items: prev.items.map((item) => {
  //       if (item.i === id) {
  //         return {
  //           ...item,
  //           w: item.w + 1,
  //         };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // const handleDecreaseSize = (id: string) => {
  //   setState((prev) => ({
  //     ...prev,
  //     items: prev.items.map((item) => {
  //       if (item.i === id && item.w > 1) {
  //         return {
  //           ...item,
  //           w: item.w - 1,
  //         };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // *********************************************** \\
  return (
    <div className="header">
      <IconButton
        aria-label="Move Item"
        color="primary"
        // Только одна функция отрабатывает за раз, пофиксить.
        // onMouseDown={handleDragStart}
        // onMouseUp={handleDragStop}
      >
        <OpenWith />
      </IconButton>
      <IconButton
        aria-label="Decrease Size"
        color="primary"
        // Уменьшаем ширину контейнера
        // onClick={() => handleDecreaseSize(el.i)}
      >
        <RemoveCircle />
      </IconButton>
      <IconButton
        aria-label="Increase Size"
        color="primary"
        // Увеличиваем ширину контейнера
        // onClick={() => handleIncreaseSize(el.i)}
      >
        <AddCircle />
      </IconButton>
      <IconButton aria-label="Configure Item" color="primary">
        <Settings />
      </IconButton>
      <IconButton
        aria-label="Copy Item"
        color="primary"
        // Копируем элемент и вставляем в конец рабочей области
        // onClick={onAddItem}
      >
        <ContentCopy />
      </IconButton>
      <IconButton
        aria-label="Remove Item"
        color="primary"
        // Удаляем элемент из рабочей области
        // onClick={() => onRemoveItem(el.i)}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

export default ElementToolbar;
