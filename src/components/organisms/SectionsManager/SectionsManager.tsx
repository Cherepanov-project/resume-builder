import { FC, useState } from "react";

import { useDispatch } from 'react-redux';
import { handleSettingsMenu, setLayoutDate } from "../../../store/landingBuilder/sectionsManagerSlice";

import "./SectionsManager.scss";

import { PlusCircleOutlined, MinusOutlined } from '@ant-design/icons'
import SettingsMenu from "../../molecules/SettingsMenu";
import { Select } from "antd";
import MemoizedSectionsConstructor from "../../molecules/SectionsConstructor";
import { useAppSellector } from "@/hooks/cvTemplateHooks";
import { T_SectionElements } from "@/types/landingBuilder";

const SectionsManager: FC = () => {

    const dispatch = useDispatch();
    
    const settingsMenuOpened = useAppSellector(state => state.sectionsManager.settingsMenuOpened); // состояние меню параметров
    const layoutDate = useAppSellector(state => state.sectionsManager.layoutDate); 
    const rows = Object.keys(layoutDate).length;

    const [ name, setName ] = useState('');
    const [ type, setType ] = useState('Headers');

    const selectOptions = [
      {
        value: 'Headers',
        label: 'Headers',
      },
      {
          value: 'Intros',
          label: 'Intros',
      },
      {
        value: 'Features',
        label: 'Features',
      },
      {
        value: 'Content',
        label: 'Content',
      },
    ]

    // Сохранение необходимых параметров для отображения секции в конструкторе
    const sectionData = () => {
        const arr = [];
        const data = Object.values(layoutDate);
        for (let i = 0; i < data.length; i++) {
            arr.push(...data[i]);
        }

        // сохранение только координат блоков, у которых выбраны элементы из Select options
        const filteredArr = arr.filter(el => el.name);

        const elements = filteredArr.map(el => ({
            name: el.name,
            source: 'atoms',
            layout: {
                i: String(el.layout.i),
                x: calcX(Number(String(el.layout.i).slice(0,1)), Number(String(el.layout.i).slice(1))), 
                y: calcY(Number(String(el.layout.i).slice(0,1))),// el.y,
                w: el.layout.w,
                h: el.layout.h
            },
            props: el.props
        }))

        const section: T_SectionElements = {
            name: 'ContainerDIV', // указание имени элмента-обертки (molecules)
            title: name, // имя секции из input
            type: type, // вид секции
            columns: 6,
            source: 'atoms', // ресурс обертки
            children: elements, // массив из объектов с параметрами basic LayoutBlock elements
            layout: { i: '', x: 0, y: 0, w: 6, h: calcSectionH() + 1 } // разметка родительского ConteinerDIV элемента
        };
        if (name) {
          console.log(section) // логгер добавленной секции
          postNewSection(section);
          console.log('Section created')
        } else {
          console.log('Type Section Name')
        }
    }

    // добавление секции в localStorage (!! Добавить проверку на имя)
    const postNewSection = (newSection: T_SectionElements) => {
      const ls = localStorage.getItem('sections');
      if (ls) {
        const prevLs: Storage = JSON.parse(ls);
        const newStore = JSON.parse(JSON.stringify(prevLs))
        for (const module of Object.values(prevLs)) {
          if (module.name === type) {
            const lastList = module.list;
            const newList = [...lastList, newSection];
            const idx = newStore.findIndex((el: { name: string; }) => el.name === type);
            newStore[idx].list = newList;
            localStorage.setItem('sections', JSON.stringify(newStore));
            return;
          }
        }
        newStore.push({name: type, list: [newSection]})
        localStorage.setItem('sections', JSON.stringify(newStore));
      } else {
        const newStore = [{name: type, list: [newSection]}];
        localStorage.setItem('sections', JSON.stringify(newStore));
      }
    }

    // расчет координаты x элемента ( зависит от суммы w предыдущих в ряду )
    const calcX = (row: number, col: number) => {
      console.log(row, col)
      if (col !== 1) {
        let sum = 0;
        for (let i = 1; i < col; i++ ) {
          console.log(layoutDate[row][i].layout.w)
          sum += layoutDate[row][i - 1].layout.w;
        }
        return sum;
      } else {
        console.log(layoutDate[row][col - 1].layout.w)
        return 0;
        //return layoutDate[row][col - 1].layout.w
      }
    }

    // расчет координаты y элемента ( зависит от суммы max h предыдущих строк )
    const calcY = (row: number) => {
      if (row > 1) {
        let x = 1;
        for (let i = 0; i < layoutDate[row - 1].length; i++) {
          if(layoutDate[row - 1][i].layout.h > x) {
            x = layoutDate[row - 1][i].layout.h;
          }
        }
        return x;
      } else {
        return 0;
      }
    }

    // расчет H родительского элемента
    const calcSectionH = () => {
      let h = 0;
      for (let i = 1; i <= rows; i++) {
        let max = 1;
        for (let n = 0; n < layoutDate[i].length; n ++) {
          if (layoutDate[i][n].layout.h > max) {
            max = layoutDate[i][n].layout.h;
          }
        }
        h += max;
      }
      return h;
    }

    // имя секции
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    // тип секции
    const handleTypeName = (label: {[key: string]: string}) => {
      setType(label.label);
    }

    // Добавление ряда 
    const addRow = () => {
        if (rows < 5) {
            const id = String(rows + 1) + 1;
            dispatch(handleSettingsMenu(''))
            const newRow = [{
              name: '',
              type: '',
              source: 'atoms',
              props: {
                key: '',
                wrapperStyle: { display: 'block' },
                textStyle: { display: 'block' }
              },
              layout: {i: id, x: 0, y: 0, w: 1, h: 1},
            }]
            dispatch(setLayoutDate({...layoutDate, [rows+1]: newRow}))
        }
    }

    // удаление ряда
    const removeRow = () => {
        if (rows > 1) {
            const newLayoutDate = JSON.parse(JSON.stringify(layoutDate));
            delete newLayoutDate[rows]
            dispatch(handleSettingsMenu(''));
            dispatch(setLayoutDate(newLayoutDate));
        }
    }

    return (
            <div className="manager-container">
                <div className="manager-container__tools-menu">
                    <span className="manager-container__tools-menu__title">Tools bar</span>
                    <label 
                        className="manager-container__tools-menu__btn"
                        onClick={() => addRow()}>
                        <PlusCircleOutlined />
                        <span>Add row</span>
                    </label>
                    <label 
                        className="manager-container__tools-menu__btn"
                        onClick={() => removeRow()}>
                        <MinusOutlined />
                        <span>Remove</span>
                    </label>
                    {settingsMenuOpened && <SettingsMenu />}
                </div>
                <div className="manager-container__workspace">
                  <div className="manager-container__workspace__inputs">
                    <div className="manager-container__workspace__inputs__type">
                        Choose section type:
                      <Select
                          labelInValue
                          defaultValue={{ value: 'Headers', label: 'Headers' }}
                          style={{ width: 160 }}
                          onChange={(label) => handleTypeName(label)}
                          options={selectOptions}
                      />
                    </div>
                    <input
                        id='manager-container__workspace__title-input' 
                        className="manager-container__workspace__title-input" 
                        onChange={(e) => handleName(e)}
                        value={name}
                        placeholder="Section Name">  
                    </input>
                    <span className="manager-container__workspace__inputs__intro">section max w = 6</span>
                  </div>
                  <MemoizedSectionsConstructor />
                  <button 
                    className="manager-container__workspace__btn"
                    onClick={() => sectionData()}
                  >
                      Save section
                  </button>
                </div>
            </div>
    );
};


export default SectionsManager;