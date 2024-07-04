import {useForm,
  // SubmitHandler,
  useFieldArray,
  // FieldValues
} from "react-hook-form"
import React, {useEffect, useRef,
  // memo,
  useState } from "react"
import { useAppDispatch } from "@/hooks/cvTemplateHooks";
// import { useEffect } from "react";
// import { ILayoutBlock } from '@/types/landingBuilder';
import forms from "./Form.module.scss"
import { useAppSellector } from "@/hooks/cvTemplateHooks";
import { setProps,
  //  moveDownGridContainer, increaseElementColumns, decreaseElementColumns
  }from "@/store/landingBuilder/layoutSlice";
import { Box } from "@mui/material";
// import ImportReactElement from "./ImportReactElement";
import ReactElementsList from "./ReactElementsList";
// import ElementToolsPanel from '@/components/organisms/ElementToolsPanel';
// import { addGridContainer } from "@/store/landingBuilder/layoutSlice";
// import { nanoid } from "nanoid";

// import { T_BlockElement } from "@/types/landingBuilder";
// interface IFormProps {
//     props: number;
// }
// let count = 0
// const Form: FC<ILayoutBlock> = ({props, layout}) => {
const Form = ({props, layout}) => {
  // count++
  // console.log("count -- " + count)
    const dispatch = useAppDispatch();
    const elementRef = useRef<any>()
    const formRef = useRef(null)
    const gridRef = useRef(null)
    // const widthRef = useRef(0)
    const indexRef = useRef<number>(0)
    // const contanerIdRef = useRef<string>()

    const [titleState, setTitleState] = useState("")

  type FormValues =  {
    title: string,
    grid: {
        rows: number,
        columns: []
    },
    i: string,
    fields: {
        text: string,
        label: string,
        grid: {row: number, column: number},
        i: string,
        layout?: {any},
        type?: string,
        name?: string
    }[]
}
          
  // const {rows, columns} = props.Form.grid
 
  // const {register, unregister, setValue, reset, getValues, watch, handleSubmit, control} = useForm<FormValues>({
  const {register, reset, handleSubmit, control} = useForm({
    mode: "onBlur",
  })

  // const {fields, replace, append, update, remove} = useFieldArray<FormValues>({
  const {fields, append, update, remove} = useFieldArray<FormValues>({
      control,
      name: 'inputs',
  } as never)

    // const formSettingsRef = useRef<{fields: []}>({fields: []})
    const formSettingsRef = useRef<FormValues>({fields: [], title: "", i: "", grid: {rows: 0, columns: []}})
    // const formSettingsRef = useRef<FormValues>()

    // const elId = useAppSellector(state => state.layout.gridContainers)
    const grid = useAppSellector(state => state.layout.gridContainers)
    console.log(grid)
    const elements = useAppSellector(state => state.layout.gridContainers[0]?.elements?.activeElements)
    const { gridContainers } = useAppSellector(state => state.layout)
    // const { currentContainer } = useAppSellector(state => state.layout)


    useEffect(() => {
        const value = props.Form[0]
        const valueEdit = {...value, i: layout.i}
        const firstItem = { id: layout.i, values: [valueEdit] } 
        dispatch(setProps(firstItem))
        reset()
    }, [])


    useEffect(() => {
      for (let i = 0; i < gridContainers.length; i++) {
        const element = gridContainers[i].elements.activeElements.find((item) => {
            if (item.props.Form) {
              console.log(item)
              return item.props.Form[0]["i"] === layout.i
            }
        })
        console.log(elementRef.current)
        if (element) {
          elementRef.current = element
          break
        }
      }
    }, [gridContainers])

    console.log(gridContainers)
    console.log(elementRef.current)

    useEffect(() => {
      // if (formSettingsRef.current.length === 0) {

        // console.log(elementRef.current)
        // const element = elements.find((el) => {
        //   if (el.props.Form) return el.props.Form[0]["i"] === layout.i
        // })
        // if (element) {
        //   formSettingsRef.current = element.props.Form![0]
        //   console.log(formSettingsRef.current.fields.length, fields.length)
        //   setTitleState(formSettingsRef.current.title)
        // }

        // console.log(formSettingsRef.current)
        // console.log(element.props.Form![0])

      if (elementRef.current) {
        formSettingsRef.current = elementRef.current.props.Form![0]
        setTitleState(formSettingsRef.current.title)
      }
      // console.log(formSettingsRef.current.fields.length, fields.length)
      if (formSettingsRef.current.fields.length >= fields.length) {
        formSettingsRef.current.fields.forEach((el) => {
          // const itemInput = formSettingsRef.current["fields"].find((item) => item.id === el.id)
          const itemInput = fields.find((item, index) => {
            // console.log(item)
            indexRef.current = index
            return item.i === el.i
          })
          // else update(el)
          if (!itemInput) {
            append(el)
            // changeHeight(element)
          } else {
            update(indexRef.current, el) 
          }
        })
      }
      // else if (formSettingsRef.current.fields.length !== 0) {
      else if (formSettingsRef.current.fields.length < fields.length) {
        // formSettingsRef.current.fields.forEach((el) => {
        //   const itemInput = fields.findIndex((item, index) => el.i === item.i)
        //   if (!itemInput) remove(index)
        // })
        fields.forEach((el, index) => {
          const itemInput = formSettingsRef.current.fields.findIndex((item) => {
            // console.log(el, item)
            return el.i === item.i
        })
          if (itemInput === -1) {
            // unregister(`inputs.${index}`)
            remove(index)
          }
        })
      }
    // }, [elements])
  }, [gridContainers])

    // const onSubmit: SubmitHandler<Inputs> = (data) => {
      const onSubmit = (data) => {
        console.log(data)
        console.log("submit")

      //  fields.map((field, index) => {
      //       // data.inputs[index].text = getValues(`fields.${index}.text` as const)
      //       data.inputs[index].text = getValues(`inputs.${index}.text` as const)
      //   })
        // console.log(data.inputs)
      }

const {rows} = props.Form[0].grid
const {columns} = props.Form[0].grid

const renderRef = useRef(true)

console.log(formSettingsRef.current)
console.log(renderRef.current)
console.log(fields)
console.log(elementRef.current?.children)

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className={forms.form} ref={formRef}>
            <h5 className={forms.title}>{titleState}</h5>
            <Box display="grid" gridTemplateRows={`repeat(${rows})`} gap={1}>
              {/* <Suspense fallback={<div>Loading...</div>}> */}
              {/* {fields.length !==0 && */}
                {renderRef.current &&
                <ReactElementsList fields={fields} rows={rows}
                columns={columns}
                // elements={elements[0].children}
                elements={elementRef.current?.children}
                register={register}
                // renderRef={renderRef}
                />
                }
                {/* </Suspense> */}
              {/* {allItems} */}
            </Box>

  <input type="submit" className={forms.button} value="Send"/>

  </form>


</>
    )
  // }}
}


export default Form

// export default memo(Form, (prev, next) => {
//   console.log(prev, next)
// })