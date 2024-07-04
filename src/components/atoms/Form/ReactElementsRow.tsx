import {
    memo,useRef,
    useEffect } from "react"
// import { Box } from "@mui/material"
import ReactElement from "./ImportReactElement"
import forms from "./Form.module.scss"

let count = 0
function ReactElementsRow ({fields, elements, columns, row, register,
    renderRef
}) {
    // const renderFieldsRef = useRef(false)

    // function func (render) {
    //     console.log(render)
    // }


    const oneSection: JSX.Element[] = []
    // count ++
    // console.log("count -- " + count)
    // console.log(elements)
    // console.log(fields)

    useEffect(() => {
        console.log("count useEffect -- " + count)
        console.log("useEffect -- " + renderRef.current)
        renderRef.current = false
        return () => {
            // console.log("count useEffect return -- " + count)
            console.log("useEffect return -- " + renderRef.current)
            renderRef.current = true
        }
    }, [])

    // console.log(row)
    for (let column = 0; column < columns[row].columnsSizes.length; column++ ) {
        const field = fields.find((el) => el.grid.row === row + 1 && el.grid.column === column + 1)
        // console.log(field)
        if (field) {
            if (field.type === "reactEl") {
                // console.log(field)
                const reactField = elements.find((el) => el.layout.i === field.i)
                // console.log(reactField)
                // console.log(field.i)
                // if (!renderFieldsRef.current) {
                    // console.log(reactField)
                // return (
                    oneSection.push(
                    <ReactElement reactField = {reactField}
                    key={field.i} register={register}
                    // renderRef={renderRef}
                    // renderFieldsRef={renderFieldsRef}
                    // onRederFields = {(render) => func(render)}
                    />
                )
                    // <ImportReactElement field = {field} elements = {elements} />
                // )
            // }
            }
            else
            // return (
            oneSection.push (
                <div key={column}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <div className={forms.buttonContainer} key={field.i}>
                        {/* <input type={`${field.type}`} id={field.id} key={field.id} defaultValue="" className={forms.input} {...register(`inputs.${index}.text` as const)} /> */}
                        {/* <input type={`${field.type}`} id={field.id} key={field.id} defaultValue="" className={forms.input} {...register(`inputs.${column}.${row}` as const)}/> */}
                        <input type={`${field.type}`} id={field.id} key={field.id} defaultValue="" className={forms.input} {...register(`inputs.${field.i}.text` as const)}/>
                    </div>
                </div>
            )
        }
        else
        // return (
        oneSection.push(
            <div style={{minHeight: 49}}></div>
        )
    }
    return oneSection
}

export default ReactElementsRow
    
// export default memo(ReactElementsRow, (prev, next) => {
//     console.log(prev, next)
//     // return true
//     // return false
// })
