const AddColumnsSideBar = (props) => {
  const {
    display2,
    closed2,
    handleColumnStyleChange,
    disable,
    handleAddColumn,
    handleDelColumn,
    classes,
  } = props;
  return (
    <section style={{ display: display2 }} className={classes['landing-constructor']}>
      <ul className={classes.ulelem}>
        <button onClick={closed2} style={{ color: 'red' }}>
          close
        </button>
        <form>
          <label htmlFor="column-width">Ширина колонок:</label>
          <input
            type="range"
            id="column-width"
            name="column-width"
            min="50"
            max="900"
            // value={parseInt(columnStyle.width)}
            onChange={handleColumnStyleChange}
          />
        </form>
        {/* Кнопка для добавления новой колонки */}
        <button disabled={disable} onClick={handleAddColumn}>
          Добавить колонку
        </button>
        <button onClick={handleDelColumn}>Удалить колонку</button>
      </ul>
    </section>
  );
};

export default AddColumnsSideBar;
