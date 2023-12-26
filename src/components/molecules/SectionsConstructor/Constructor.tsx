import { useSelector } from 'react-redux';

import './Constructor.scss';

import ConstructorRowEl from '../ConstructorRowEl';

const Constructor = () => {
  const rows = Object.keys(useSelector((state) => state.sectionsManager.layoutDate)).length;

  // отображение рядов секции
  const rowEls = () => {
    const rowEls = [];
    for (let i = 1; i <= rows; i++) {
      rowEls.push(<ConstructorRowEl key={i} row={i} />);
    }
    return rowEls;
  };

  return <div className="constructor-container">{rowEls()}</div>;
};

export default Constructor;
