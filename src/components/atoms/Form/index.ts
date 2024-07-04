// import { title } from "process";
import Form from "./Form"
import { nanoid } from "nanoid";

export const props = {
    name: 'Form',
    type: "Form",
    source: 'atoms',
    props: {
        // Form: {[
            // title: "title",
            // value: "123"
        // ]},
        // props={{ Form: [{id: nanoid(), img: props.url, title: props.text}]}}
        
            // Form: [{i: nanoid(), title: "Title", grid: {rows: 4, columns: 3}, fields: []}]
            Form: [{i: nanoid(), title: "Title",
            // grid:{rows: 4, columns: [{id: "", columnsCount: 1, columnsSizes: []}]},
            // grid:{rows: {i: "123", rowsCount: 1}, columns: [{id: "123", columnsCount: 1, columnsSizes: []}]},
            // grid:{rows: 0, columns: [{id: "123", columnsCount: 1, columnsSizes: [1]}]},
            grid:{rows: 0, columns: []},
            fields: []}]
    },
    children: [],
    layout: { i: nanoid(), x: 0, y: 0, w: 3, h: 6 },
}

export default Form