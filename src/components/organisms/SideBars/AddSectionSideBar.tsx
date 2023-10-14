const AddSectionSideBar = (props) => {
  const { addsection, display1, closed1, classes } = props;

  return (
    <section style={{ display: display1 }} className={classes['landing-constructor']}>
      <ul className={classes.ulelem}>
        <button onClick={closed1} style={{ color: 'red' }}>
          close
        </button>
        <li>
          <button name="empty" onClick={addsection} className={classes.btnelem}>
            пустой блок
          </button>
        </li>
        <li>
          <button name="header" onClick={addsection} className={classes.btnelem}>
            заголовок
          </button>
        </li>
        <li>
          <button name="textblock" onClick={addsection} className={classes.btnelem}>
            текстовый блок
          </button>
        </li>
        <li>
          <button name="img" onClick={addsection} className={classes.btnelem}>
            блок с изображением{' '}
          </button>
        </li>
        <li>
          <button name="form" onClick={addsection} className={classes.btnelem}>
            блок с формой
          </button>
        </li>
        <li>
          <button name="botton" onClick={addsection} className={classes.btnelem}>
            блок с кнопками
          </button>
        </li>
      </ul>
    </section>
  );
};

export default AddSectionSideBar;
