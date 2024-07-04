import {useForm,
    // SubmitHandler,
    useFieldArray,
    // FieldValues
} from "react-hook-form"
import { useEffect, useRef, useState } from "react"
import { deleteElement } from "@/store/landingBuilder/layoutSlice"
import forms from "./FormSettings.module.scss"
import { useAppDispatch, useAppSellector } from "@/hooks/cvTemplateHooks"
// import { useDispatch } from "react-redux"
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
// import { useAppSellector } from "@/hooks/cvTemplateHooks"
// import { ISettingsInputUpdateProps } from '@/types/landingBuilder';
import { setProps } from '@/store/landingBuilder/layoutSlice';
import { nanoid } from "nanoid"
import { importFiles,
    // insertChild
} from '@/utils';
import { Box, IconButton} from "@mui/material"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import classes from "../../molecules/NestedList/NestedList.module.scss"
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem';

import { initPanel } from "@/store/landingBuilder/settingsPanelSlice"
import {
    Settings,
    Close,
    Delete,
  } from '@mui/icons-material';
// import NestedList from '@molecules/NestedList';
import FormList from './FormList';

const FormSettings = ({ itemsList,
    // setItemsList,
    props }) => {

    const dispatch = useAppDispatch()
    // const dispatch = useDispatch()

    const elementRef = useRef<any>()
    const appendFields = useRef<boolean>(false)
    const changeFields = useRef<boolean>(false)
    const pressKey = useRef<boolean>(true)
    // const gridContainersId = useRef<number>()
    const deleteElementRef = useRef< {} | boolean>(false)

    // const [pressKey, setPressKey] = useState(true)
    const [isOpen, setOpen] = useState(false);

    const [sidebarMenuList, setSidebarMenuList] = useState({});

    // const elements = useAppSellector(state => state.layout.gridContainers[0].elements.activeElements)
    // const elementId = useAppSellector(state => state.layout.gridContainers[0].id)
    const elementId = useRef<number>(0)
    const { gridContainers } = useAppSellector(state => state.layout)

    const inputArr = ["text", "password", "file", "email", "number"]

    useEffect(() => {
        importFiles().then((data) => {
          setSidebarMenuList({ ...sidebarMenuList, ...data });
        });
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    // appendFields.current = false

    const  { currentContainer }  = useAppSellector(state => state.layout)
    console.log(gridContainers)
    // console.log(elementId)

    type FormValues =  {
        // isEdit: boolean,
        // fields: Array<field>
        title: string,
        // rowCount: number,
        // columnCount: number,
        grid: {
            rows: number,
            columns: []
        },
        fields: {
            text: string,
            label: string,
            // isEdit: boolean,
            grid: {row: number, column: number},
            i: string,
            layout?: {any},
            // id: string,
            type?: string,
            name?: string
        }[]
    }
    
    const formSettingsRef = useRef<FormValues>({title: "", fields: [], grid: {rows: 1, columns: []}})
    // const formSettingsRef = useRef<FormValues>()

    type FormValuesGrid =  {
        fieldsGrid: {
            columnsCount: number,
            columnsSizes: number[],
            i: string,
            // id: string
        }[]
    }

    // const {register, unregister, setValue, getValues, reset, watch, handleSubmit, control} = useForm<FormValues>({mode: "onBlur"})
    const {register, unregister, watch, handleSubmit, control} = useForm({mode: "onBlur"})

    const {fields, append, update, remove} = useFieldArray<FormValues>({
        control,
        name: 'inputs',
    } as never)

    const {fields: fieldsGrid, append: appendGrid, update: updateGrid, remove: removeGrid} = useFieldArray<FormValuesGrid>({
    // const {fields: fieldsGrid, replace: replaceGrid, append: appendGrid, update: updateGrid, remove: removeGrid} = useFieldArray({  
        control,
        name: 'grid',
        // shouldUnregister: true
    } as never)

    // const {fields: fieldsElements, replace: replaceElements, append: appendElements, update: updateElements, remove: removeElements} = useFieldArray({
    //     // const {fields: fieldsGrid, replace: replaceGrid, append: appendGrid, update: updateGrid, remove: removeGrid} = useFieldArray({  
    //         control,
    //         name: 'elements',
    //         // shouldUnregister: true
    //     } as never)

    useEffect(() => {
        dispatch(setProps({values: [{...itemsList[0], title: watch("title")}], id: itemsList[0].i}))
    }, [watch("title")])

    // useEffect(() => {
    //     for (let i = 0; i < gridContainers.length; i++) {
    //         elementRef.current = gridContainers[i].elements.activeElements.find((item) => {
    //             console.log(i)
    //             if (item.props.Form) return i
    //         })
    //         console.log(elementRef.current)
    //         break
    //     }
    //     elementId.current = elementRef.current
    // }, [gridContainers])
    // console.log(gridContainers[elementId.current])
   
    useEffect(() => {
        for (let i = 0; i < gridContainers.length; i++) {
                elementRef.current = gridContainers[i].elements.activeElements.find((item) => {
                    if (item.props.Form) return item.props.Form[0]["i"] === itemsList[0].i
                })
                if (elementRef.current) {
                    elementId.current = i

                    console.log(elementRef.current)
                    console.log({...elementRef.current.children})
                    console.log({...elementRef.current.props.Form![0]})

                    formSettingsRef.current = {...elementRef.current.props.Form![0]}
                    console.log(fields)
                    console.log(elementRef.current.children.length, formSettingsRef.current["fields"].filter((el) => el.type === "reactEl").length, fields.length)
                    // if (elementRef.current.children.length > formSettingsRef.current["fields"].filter((el) => el.type === "reactEl").length) {
                    //     console.log(deleteElementRef.current)
                    //     // dispatch(deleteElement(deleteElementRef.current))
                    //     // deleteElementRef.current = {}
                    // }
                    if (deleteElementRef.current) {
                        // Сначала удаление элемента из поля fields
                        // Удаление элемента провоцирует ререндер
                        // После ререндера удаление дочерного react элемента
                        console.log(deleteElementRef.current)
                        dispatch(deleteElement(deleteElementRef.current))
                        deleteElementRef.current = false
                    }
                    
                    else {
                    elementRef.current.children.forEach((el) => {
                        console.log(el)
                        
                        // const newElementProps = {grid: {row: 1, column: 1}, label: props.label ? props.label : el.name, type: "reactEl", i: el.layout.i}
                        // if (el.props[el.name]) {
                        //     // const props = el.props[el.name][0]
                        //     el.props[el.name].forEach((item, index) => {
                        //         const newElementProps = {grid: {row: 1, column: 1}, label: props.label ? props.label : el.name, type: "reactEl", i: item.id, name: el.name}
                        //         // const fieldProps = el.props[el.name][index]
                        //         // console.log(el.props[el.name][index])
                        //         console.log(item)
                        //         // const elementProps = {...props, ...newElementProps}
                                
                        //         // // console.log(element)
                        //         const element = formSettingsRef.current["fields"].find((oldItem) => oldItem.i === item.id)
                        //         const elementProps = {...item, ...newElementProps}

                        //         if (!element) {
                        //             // formSettingsRef.current["fields"] = [...formSettingsRef.current["fields"], elementProps]
                        //         }
                        //         if (!appendFields.current) {
                        //             // console.log([elementProps])
                        //             // dispatch(setProps({values: [{...elementProps}], id: el.layout.i}))
                        //         }
                        // // console.log(formSettingsRef.current["fields"])
                        //     })
                        // }
                        
                        // else if (!appendFields.current) {
                        // else {
                            console.log(el)
                            const element = formSettingsRef.current["fields"].find((oldItem) => {
                                console.log(oldItem)
                                return oldItem.i === el.layout.i
                            })

                            // Если элемента нет, то добавление нового элемента
                            if (!element) {
                                const newElementProps = {grid: {row: 1, column: 1}, label: props.label ? props.label : el.name, type: "reactEl", i: el.layout.i, name: el.name, layout: el.layout}
                                const elementProps = {...el.props, ...newElementProps}
                                console.log(elementProps)
                                formSettingsRef.current["fields"] = [...formSettingsRef.current["fields"], elementProps]
                                append(elementProps)
                                changeFields.current = true
                                // dispatch(setProps({values: [{...props, ...newElementProps}], id: el.layout.i}))
                            }
                        // }
                    })
                    }
                    break
                }
            }
            // })
        // })
        // console.log(formSettingsRef.current["fields"])
    }, [gridContainers])

    useEffect(() => {
        console.log(appendFields.current)
        if (appendFields.current && formSettingsRef.current["fields"].length === elementRef.current.children.length) {
        console.log(formSettingsRef.current["fields"])
        formSettingsRef.current["fields"].forEach((el) => {
            console.log(el)
            // append(el)
        })
        }
    }, [elementRef.current?.children])
    
    // console.log(elementRef.current?.children.length)

    useEffect(() => {
        // Добавление элементов в useFieldArray после обновления страницы
        if (formSettingsRef.current["fields"].length > 0 && appendFields.current === false) {
            formSettingsRef.current["fields"].forEach((el) => {
                // console.log(el)
                append(el)
            })
        }
        if (formSettingsRef.current.grid.columns.length > 0 &&  appendFields.current === false) {
            formSettingsRef.current.grid.columns.forEach((el) => {
                // console.log(el)
                appendGrid(el)
            })
        }
        appendFields.current = true
    // }, [gridContainers])
}, [])

    useEffect(() => {
        const rows = Number(watch("rowCount"))
        // const columns = watch("columnCount")
        console.log(formSettingsRef.current)
        const changeRows = rows - (fieldsGrid.length === 0 ? formSettingsRef.current.grid.columns.length : fieldsGrid.length)
        // const changeRows = rows - (formSettingsRef.current.grid.columns.length === 0 ? fieldsGrid.length : formSettingsRef.current.grid.columns.length) 
        if (pressKey.current === true) {
            // console.log(changeRows)  
            Array.from(Array(Math.abs(changeRows))).forEach((_, index) => {
                const indGrid = fieldsGrid.length - 1 - index
                if (changeRows > 0) {
                    console.log(changeRows)
                    appendGrid({i: nanoid(), columnsCount: Number(2), columnsSizes: [Number(1), Number(1)]})
                }
                else if (changeRows < 0) {  
                    fieldsGrid[indGrid]?.columnsSizes.forEach(() => {
                    // fieldsGrid[indGrid]?.columnsSizes.forEach((item, ind) => {
                        // console.log(`grid.${indGrid}.columnsSizes.${ind}`)
                        // unregister(`grid.${indGrid}.columnsSizes.${ind}`)
                    })
                    unregister(`grid.${indGrid}.columnsCount`)
                    removeGrid(indGrid)
                }
            })
            pressKey.current = false
        }
        // dispatch(setProps({values: [{...itemsList[0], grid: {rows: rows, columns: columns}, title: title}], id: itemsList[0].i}))
    }, [watch("rowCount")])
    

    useEffect(() => {
        console.log(fields)
        if (appendFields.current && formSettingsRef.current["fields"].length === fields.length && changeFields.current) {
        // if (appendFields.current && changeFields.current) {
            // console.log(itemsList[0])
            // appendFields.current = true
            changeFields.current = false
            // dispatch(setProps({values: [{...itemsList[0], fields: fields.length !== 0 ? fields : []}], id: itemsList[0].i}))
            dispatch(setProps({values: [{...itemsList[0], fields: fields}], id: itemsList[0].i}))
        }
    }, [fields])

    useEffect(() => {
        if (appendFields.current) {
            console.log(fieldsGrid)
            console.log(fields)
            // appendFields.current = true
            // changeFields.current = false
            dispatch(setProps({values: [{...itemsList[0], grid: {... itemsList[0].grid, columns: fieldsGrid, rows: watch("rowCount")}}], id: itemsList[0].i}))
        }
    }, [fieldsGrid])


    // const {rows, columns} = itemsList[0].grid

    const {rows} = itemsList[0].grid
    const {title} = itemsList[0]

    // const findChild = (field) => {

    //     // return elementRef.current.children.forEach((el) => {
    //     //     console.log(el)
    //     //     el.find((item) => item.layout.i === field.i)
    //     // })
    //     return elementRef.current.children.find((el) => el.layout.i === field.i)
    //     // return 
    // }

    const changeLabel = (e, field, index) => {
        // const child = findChild(field)
        // if (field.type === "reactEl") {
        //     console.log({...field, label: e.target.value})
        //     dispatch(setProps({values: [{...field, label: e.target.value}], id: field.i}))
        // }
        // else {
        //     console.log(field)
            update(index, {...field, label: e.target.value})
            changeFields.current = true
        // }
    }

    const changeGrid = (e, field, index, type) => {
        changeFields.current = true
        if (type === "row") update(index, {...field, grid: {...field.grid, row: Number(e.target.value)}})
        else if (type === "column") update(index, {...field, grid: {...field.grid, column: Number(e.target.value)}})
    }


    const addField = (type) => {
        console.log(type.target.value)
        const id = nanoid()
        if (formSettingsRef.current["fields"] === undefined) formSettingsRef.current = {...formSettingsRef.current, fields: []}
        formSettingsRef.current["fields"] = [...formSettingsRef.current["fields"],
        // {label: "Label", text: "", isEdit: false, type: type.target.value, i: id, grid: {row: 1, column: 1}}]
        // append({label: "Label", text: "", isEdit: false, type: type.target.value, i: id, grid: {row: 1, column: 1}})
        {label: "Label", text: "", type: type.target.value, i: id, grid: {row: 1, column: 1}}]
        append({label: "Label", text: "", type: type.target.value, i: id, grid: {row: 1, column: 1}})
        changeFields.current = true
    }

    const deleteField = (index) => {
        formSettingsRef.current["fields"] = formSettingsRef.current["fields"].filter((item, ind) => {
            return ind !== index
        })
        console.log(formSettingsRef.current["fields"])
        changeFields.current = true
        unregister(`inputs.${index}.i`)
        remove(index)
    }

    const updateColumnsCount = (e, field, index) => {
        // updateGrid(index, {...field, columnsCount: Number(e.target.value), columnsSizes: field.columnsSizes.map((el) => Number(el))})
        const changeRows =  e.target.value - fieldsGrid[index].columnsCount
        // const changeRows = rows - (formSettingsRef.current.grid.columns.length === 0 ? fieldsGrid.length : formSettingsRef.current.grid.columns.length)
        if (changeRows > 0) {
            const editFieldColumnsSizes = [...field.columnsSizes]
            // Array.from(Array(changeRows)).forEach((_, i) => editFieldColumnsSizes.push(Number(1)))
            Array.from(Array(changeRows)).forEach(() => editFieldColumnsSizes.push(Number(1)))
            updateGrid(index, {...fieldsGrid[index], columnsCount: Number(e.target.value), columnsSizes: editFieldColumnsSizes})
        }
        else if (changeRows < 0) {
            const editFieldColumnsSizes = [...field.columnsSizes]
            Array.from(Array(Math.abs(changeRows))).forEach(() => {
            // Array.from(Array(Math.abs(changeRows))).forEach((_, indexChangeRows) => {
                // const indGrid = fieldsGrid[index].columnsSizes.length - 1 - indexChangeRows
                editFieldColumnsSizes.pop()
                // unregister(`grid.${index}.columnsSizes.${indGrid}`)
            })
            updateGrid(index, {...fieldsGrid[index], columnsCount: Number(e.target.value), columnsSizes: editFieldColumnsSizes}) 
        }
    }
    
    const updateSizes = (e, field, index, ind) => {
        const editColumnsSizes = [...field.columnsSizes]
        editColumnsSizes.splice(ind, 1, Number(e.target.value))
        // updateGrid(index, {...field, columnsCount: Number(e.target.value), columnsSizes: field.columnsSizes.map((el) => Number(el))})
        // updateGrid(index, {...field, columnsSizes: [...field.columnsSizes.splice(ind, ind + 1, field.columnsSizes[ind])] })
        updateGrid(index, {...field, columnsSizes: editColumnsSizes})
    }

    // console.log(fields)

    let columnsSizesArr: JSX.Element[] = []

    const onSubmit = (data) => {
        console.log(data)
        console.log("submit")
    }

    return (
        <form className={forms.form} onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="text" defaultValue={formSettingsRef.current.title} {...register("title")} onChange={(e) => {changeTitle(e)}}/> */}
            <div>
            <label htmlFor="title">Title - </label>
                <input type="text" id="title" defaultValue={title} {...register("title")}/>
            </div>
            <div>
                <label htmlFor="rowCount">Row count - </label>
                <input type="number" id="rowCount" defaultValue={rows} {...register("rowCount")} onKeyDown={() => pressKey.current = true}/>
            </div>
            {/* <input type="number" defaultValue={rows} {...register("rowCount")} onKeyUp={() => setPressKey(() => true)}/> */}
            {/* <input type="number" defaultValue={columns} {...register("columnCount")}/> */}
            {fieldsGrid.map((field, index) => {
                columnsSizesArr = []
                // Array(field.columnsSizes).forEach((item) => {
                field.columnsSizes?.forEach((item, ind) => {
                    // Array.from(Array(field.columnsCount)).forEach((item, ind) => {
                    columnsSizesArr.push(
                        // <input type="number" style={{width: 20}} defaultValue={item} {...register(`grid.${ind}.columnsSizes` as const)} />
                        // <input type="number" style={{width: 20}} defaultValue={item} {...register(`grid.${ind}.${index}.columnsSizes` )} />
                        <input type="number" style={{width: 30}} defaultValue={Number(item)}
                        {...register(`grid.${index}.columnsSizes.${ind}` as const, {valueAsNumber: true})} onChange={(e) => updateSizes(e, field, index, ind)}/>
                        // <input type="number" style={{width: 20}} defaultValue={Number(item)} />
                    )
                })
                return (
                    <div key={field.i}>
                        <label htmlFor="rowCount">Row {index + 1} - </label>
                        <input type="number" style={{width: 50}} defaultValue={field.columnsCount}
                        {...register(`grid.${index}.columnsCount` as const, {valueAsNumber: true})} onChange={(e) => updateColumnsCount(e, field, index)}/>
                        {columnsSizesArr}
                    </div>
                )
            })}
            {fields.map((field, index) => {
                console.log(field)
                const layout = field.layout
                const id = currentContainer
                return (
                    <div key={field.i}>
                        <input type="text" style={{width: 70}} defaultValue={field.label} {...register(`inputs.${index}.label` as const)} onChange={(e) => {changeLabel(e, field, index)}}/>
                        <input type="number" style={{width: 30}} defaultValue={field.grid.row} {...register(`inputs.${index}.grid.row` as const)} onChange={(e) => {changeGrid(e, field, index, "row")}}/>
                        <input type="number" style={{width: 30}} defaultValue={field.grid.column} {...register(`inputs.${index}.grid.column` as const)} onChange={(e) => {changeGrid(e, field, index, "column")}}/>
                        {field.type === "reactEl" &&
                        <>
                            <IconButton
                              aria-label="Configure Item"
                              title="Дополнительные настройки"
                            //   color="primary"
                              onClick={() => dispatch(initPanel({ type: 'section', sectionID: field.i, moduleID: '0' }))}
                            ><Settings /></IconButton>
                            <IconButton
                              aria-label="Delete Item"
                              title="Удалить"
                            //   color="primary"
                              onClick={() => {
                                deleteField(index)
                                deleteElementRef.current = {layout, id}
                                // dispatch(deleteElement({layout, id}))
                            }}
                            ><Delete /></IconButton>
                         </>
                        }
                        {field.type !== "reactEl" &&
                              <IconButton
                              aria-label="Delete Item"
                              title="Удалить"
                            //   color="primary"
                              onClick={() => deleteField(index)}
                            ><Close /></IconButton>
                        }
                    </div>
                )
            })}
            <Box>

    <List className={classes['list']} component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={() => {setOpen((expand) => !expand)}}>
          <ListItemText primary={"Add field"} />
          {isOpen ? (
            <ExpandLess className={classes['icon__expand']} />
          ) : (
            <ExpandMore className={classes['icon__expand']} />
          )}
        </ListItemButton>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List className={classes['list']} component="div" disablePadding>
            {inputArr.map((input) => {
            //   console.log(input)
              return (
                <ListItemButton onClick={(type) => addField(type)}>
                  <ListItemText primary={input} />
                </ListItemButton>
              )})}
              </List>
        </Collapse>
    </List>
            </Box>
            {Object.entries(sidebarMenuList).map(([, items], ) => {
                console.log(items)
                return (
                    items.map((item) => {
                        if (item.name !== "Form") {
                        return <FormList key={item.name} name={item.name}
                        // items={item.list} element={elementRef.current} elements={elements} elementId={elementId}></FormList>;
                        // items={item.list} element={elementRef.current} elementId={elementId}></FormList>
                        items={item.list} element={elementRef.current} elementId={gridContainers[elementId.current].id}></FormList>
                        }
                    })
                )
            })}
            <button type="submit">Submit</button>
        </form>
       
    )
}

export default FormSettings
