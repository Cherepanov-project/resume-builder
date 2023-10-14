import classes from './LandingBuilder.module.scss';
import { useState, useEffect, useRef } from 'react';
import icon from './create-svgrepo-com.svg';
import ResponsiveGridLayout from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import AddColumnsSideBar from '../../components/organisms/SideBars/AddColumsSideBar';
import AddSectionSideBar from '../../components/organisms/SideBars/AddSectionSideBar';
const LandingBuilder = () => {
  interface EventTarget {
    value: unknown;
    name: string;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      useCapture?: boolean,
    ): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      useCapture?: boolean,
    ): void;
  }

  interface SyntheticEvent {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: EventTarget;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: Event;
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget;
    timeStamp: Date;
    type: string;
  }
  const [section, setsection] = useState(['null']);
  const [colorbtn, setcolorbtn] = useState('black');
  const [display1, setdisplay1] = useState('none');
  const [display2, setdisplay2] = useState('none');
  const [isHovering, setIsHovering] = useState([]);
  const [layout, setlayout] = useState([]);
  const [lasti, setlasti] = useState('0');
  const [secpos, setsecpos] = useState('bottom');
  const [selected, setselected] = useState(null);
  const ref = useRef(null);

  const selectsection = (e: SyntheticEvent) => {
    console.log(e.target.name, 'selectsection');
    setsecpos(e.target.name);
    setdisplay1('grid');
    setcolorbtn('green');
  };

  const addsection = (event: SyntheticEvent) => {
    console.log(event);
    const newarr = layout.slice();
    if (section[0] === 'null') {
      setsection([event.target.name]);

      newarr.push({
        i: '1',
        x: 0,
        y: 0,
        w: 10,
        h: 3,
        minW: 1,
        maxW: 15,
        type: event.target.name,
        numColumns: 1,
        columnStyle: { width: '100px' },
      });
      setIsHovering([false]);
      setlayout(newarr);
      setdisplay1('none');
      setlasti('1');
    } else if (section[0] !== 'null') {
      const arr = section.slice();

      const newbool: boolean[] = isHovering.slice();
      newbool.push(false);
      if (secpos == 'top') {
        newarr.unshift({
          i: String(Number(lasti) + 1),
          x: 0,
          y: 0,
          w: 10,
          h: 3,
          minW: 1,
          maxW: 15,
          type: event.target.name,
          numColumns: 1,
          columnStyle: { width: '100px' },
        });
        setlasti(String(Number(lasti) + 1));
      } else if (secpos == 'bottom') {
        newarr.push({
          i: String(Number(lasti) + 1),
          x: 0,
          y: 0,
          w: 10,
          h: 3,
          minW: 1,
          maxW: 15,
          type: event.target.name,
          numColumns: 1,
          columnStyle: { width: '100px' },
        });
        setlasti(String(Number(lasti) + 1));
      }

      setIsHovering(newbool);
      setlayout(newarr);
      setsection([...arr, event.target.name]);
      setdisplay1('none');
    }
  };
  const handleMouseOver = (indx: number) => {
    const newbool: boolean[] = isHovering.slice();
    newbool[indx] = !newbool[indx];
    setIsHovering(newbool);
  };

  const handleMouseOut = (indx: number) => {
    const newbool: boolean[] = isHovering.slice();
    newbool[indx] = !newbool[indx];
    setIsHovering(newbool);
  };
  const addsecinto = (e: SyntheticEvent) => {
    setdisplay2('flex');
    const indx = e.currentTarget.name;
    setdisplay1('none');
    setselected(indx);
  };

  const [width, setWidth] = useState(1200);
  const [, setHeight2] = useState(0);

  // Создаем state для хранения стиля колонок
  const [columnStyle, setColumnStyle] = useState({ width: '100px' });

  // Создаем state для хранения количества колонок
  const [numColumns] = useState(1);

  // Функция для обновления стиля колонок
  const handleColumnStyleChange = (event: SyntheticEvent) => {
    console.log(selected, 'selected');
    const wid = Number(columnStyle.width.replace('px', ''));
    if ((wid + 10) * numColumns + 120 < width) {
      setColumnStyle({ width: `${event.target.value}px` });
    } else if ((wid + 10) * numColumns + 120 > width && event.target.value < wid) {
      setColumnStyle({ width: `${event.target.value}px` });
    }
  };
  const [disable, setdisable] = useState(false);
  useEffect(() => {
    if (selected !== null) {
      const wid = Number(columnStyle.width.replace('px', ''));
      if ((wid + 10) * layout[selected].numColumns + 100 > width && width !== 0) {
        setdisable(true);
      } else if ((wid + 10) * layout[selected].numColumns + 100 + wid + 20 < width && width !== 0) {
        setdisable(false);
      }
    }
  }, [columnStyle.width, layout, selected, width]);
  useEffect(() => {
    if (selected !== null) {
      const wid = Number(columnStyle.width.replace('px', ''));
      if ((wid + 10) * layout[selected].numColumns + 100 + wid + 20 > width && width !== 0) {
        console.log('too much', (wid + 10) * numColumns + 100);
        setdisable(true);
      } else if ((wid + 10) * layout[selected].numColumns + 100 + wid + 20 < width && width !== 0) {
        setdisable(false);
      }
    }
  }, [layout]);
  // Функция для добавления новой колонки
  const handleAddColumn = () => {
    console.log(selected, layout, 'addNew');
    const wid = Number(columnStyle.width.replace('px', ''));
    setTimeout(() => {
      console.log((wid + 10) * numColumns + 100 + wid + 20, width);
    }, 1000);

    if ((wid + 10) * numColumns + 100 + wid + 20 > width && width !== 0) {
      console.log('зашел диз');
      setdisable(true);
    } else if ((wid + 10) * numColumns + 100 + wid + 20 < width && width !== 0) {
      console.log('зашел в добавление');
      const newarr = layout.slice();
      newarr[selected].numColumns++;
      setlayout(newarr);
      setdisable(false);
    }
  };
  const handleDelColumn = () => {
    const newarr = layout.slice();
    newarr[selected].numColumns--;
    setlayout(newarr);
  };
  useEffect(() => {
    setHeight2(ref.current.clientHeight);
    const availableScreenWidth = window.innerWidth;
    setWidth(availableScreenWidth);
  }, [layout]);
  const closed2 = () => {
    setdisplay2('none');
  };
  const closed1 = () => {
    setdisplay1('none');
  };
  return (
    <main className={classes.landing}>
      <AddSectionSideBar
        addsection={addsection}
        display1={display1}
        closed1={closed1}
        classes={classes}
      />

      <AddColumnsSideBar
        display2={display2}
        closed2={closed2}
        handleColumnStyleChange={handleColumnStyleChange}
        disable={disable}
        handleAddColumn={handleAddColumn}
        handleDelColumn={handleDelColumn}
        classes={classes}
      />

      <section ref={ref} className={classes['landing-preview']}>
        {layout[0] && (
          <button
            name="top"
            style={{ backgroundColor: colorbtn }}
            onClick={selectsection}
            className={classes.addbtn}
          >
            +
          </button>
        )}

        <ResponsiveGridLayout
          className="layout"
          layout={layout}
          cols={10}
          rowHeight={220}
          width={width - 100}
        >
          {layout.map((elem, index) => {
            if (selected == index) {
              return (
                <div
                  onMouseEnter={() => handleMouseOver(index)}
                  onMouseLeave={() => handleMouseOut(index)}
                  style={{ display: 'flex', backgroundColor: 'white', border: '1px solid black' }}
                  key={elem.i}
                >
                  <p style={{ color: 'black' }}>{elem.i}</p>
                  <div style={{ display: display2 }} className={classes.grid}>
                    {/* Создаем колонки */}
                    {[...Array(elem.numColumns)].map((_, index) => (
                      <div key={index} className={classes.column} style={columnStyle}>
                        <button
                          name={String(index)}
                          style={{ backgroundColor: 'green', width: '45px', height: '45px' }}
                        >
                          +
                        </button>
                      </div>
                    ))}
                  </div>

                  {isHovering[index] && display2 === 'none' && (
                    <div>
                      <button
                        name={String(index)}
                        onClick={addsecinto}
                        style={{ backgroundColor: 'green', width: '45px', height: '45px' }}
                      >
                        +
                      </button>
                      <button
                        name={elem.i}
                        style={{ backgroundColor: 'blue', width: '45px', height: '45px' }}
                      >
                        <img style={{ width: '20px', height: '20px' }} src={icon}></img>
                      </button>
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <div
                  onMouseEnter={() => handleMouseOver(index)}
                  onMouseLeave={() => handleMouseOut(index)}
                  style={{ display: 'flex', backgroundColor: 'white', border: '1px solid black' }}
                  key={elem.i}
                >
                  <p style={{ color: 'black' }}>{elem.i}</p>
                  <div style={{ display: display2 }} className={classes.grid}>
                    {/* Создаем колонки */}
                    {[...Array(elem.numColumns)].map((_, index) => (
                      <div key={index} className={classes.column} style={elem.columnStyle}>
                        <button
                          name={String(index)}
                          style={{ backgroundColor: 'green', width: '45px', height: '45px' }}
                        >
                          +
                        </button>
                      </div>
                    ))}
                  </div>

                  {isHovering[index] && display2 === 'none' && (
                    <div>
                      <button
                        name={String(index)}
                        onClick={addsecinto}
                        style={{ backgroundColor: 'green', width: '45px', height: '45px' }}
                      >
                        +
                      </button>
                      <button
                        name={elem.i}
                        style={{ backgroundColor: 'blue', width: '45px', height: '45px' }}
                      >
                        <img style={{ width: '20px', height: '20px' }} src={icon}></img>
                      </button>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </ResponsiveGridLayout>
        <button
          name="bottom"
          style={{ backgroundColor: colorbtn }}
          onClick={selectsection}
          className={classes.addbtn}
        >
          +
        </button>
      </section>
    </main>
  );
};

export default LandingBuilder;
