import './SectionsConstructor.scss';

import MemoizedConstructorRowEl from '../SectionsConstructorRowEl';
import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { memo } from 'react';

const SectionsConstructor: React.FC = () => {

  const rowsArr = Object.keys(useAppSellector(state => state.sectionsManager.layoutDate));
  // отображение рядов секции
  const rowEls = () => {
      return rowsArr.map(row => <MemoizedConstructorRowEl key = {row} row={Number(row)}/>)
  }

  return (
      <div className="constructor-container">
          {rowEls()}
      </div>
  );
}

export const MemoizedSectionsConstructor = memo(SectionsConstructor);