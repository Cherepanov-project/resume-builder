import { nanoid } from 'nanoid/non-secure';
import { useAppDispatch, useAppSellector } from '../../../hooks/cvTemplateHooks';
import { addColumn, changeColumnStyle } from '../../../store/LandigBuilder/landingBuilder';

const AddColumnsSideBar = () => {
  const dispatch = useAppDispatch();
  const [, sectionId] = useAppSellector((state) => state.landigBuilder.sideBar);
  const columnWidth = useAppSellector((state) => {
    const section = state.landigBuilder.workSpace.find((el) => el.i === sectionId);
    return section?.columnStyle.width.slice(0, -2);
  });

  const addCol = (): void => {
    const col = {
      id: sectionId + 'col' + nanoid(4),
      elements: [],
    };
    dispatch(addColumn([sectionId, col]));
  };

  const handleColumnStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeColumnStyle([sectionId, { width: event.target.value + 'px' }]));
  };

  return (
    <>
      <form>
        <label htmlFor="column-width">Ширина колонок:</label>
        <input
          type="range"
          id="column-width"
          name="column-width"
          min="50"
          max="900"
          value={columnWidth}
          onChange={handleColumnStyleChange}
        />
      </form>
      <button disabled={false} onClick={addCol}>
        Добавить колонку
      </button>
    </>
  );
};

export default AddColumnsSideBar;
