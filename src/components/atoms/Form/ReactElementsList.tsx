import {
    memo,
    useEffect, useRef } from "react"
import { Box } from "@mui/material"
import ReactElementsRow from "./ReactElementsRow"

let count = 0

function ReactElementsList ({ fields, elements, rows, columns, register,
                            // renderRef
                            }) {
    count ++

    const renderRef = useRef(true)
    // renderRef.current = true
    // const countFieldsRef1 = useRef(fields)
    // const countFieldsRef2 = useRef(fields)
    // console.log("count -- " + count)
    useEffect(() => {
        console.log("count useEffect -- " + count)
        // renderRef.current = false
        return () => {
            // renderRef.current = true
            // console.log("count useEffect return -- " + count)
        }
    }, [])
    const allItems: JSX.Element[] = []
    for (let row = 0; row < rows; row++ ) {
        const fieldsInRow = fields.filter((el) => el.grid.row === row + 1)
        console.log(fieldsInRow)
        // return (
            allItems.push(
            <Box display="grid"
            gridTemplateColumns={`repeat(1,
            ${columns[row].columnsSizes.map((el) => el + "fr").join(" ")})`}
            gap={1} key={row}>
                <ReactElementsRow fields = {fieldsInRow}
                elements = {elements} columns = {columns}
                row={row} key={row} register={register}
                renderRef={renderRef}
                />
            </Box>
            )
        // )
    }
    if (renderRef.current) {
    return allItems
    }
}
export default ReactElementsList

// export default memo(ReactElementsList, (prev, next) => {
//     console.log(prev.fields.length, next.fields.length)
//     // return true
// })
