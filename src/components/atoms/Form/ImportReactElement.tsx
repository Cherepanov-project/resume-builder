import { memo, useEffect,
    // useRef
} from "react"
import { lazy } from "react"
import { Suspense } from "react"
// import ElementToolsPanel from "@/components/organisms/ElementToolsPanel"


let count = 0
// let reactField

// const ImportReactElement = ({reactField, register}) => {
//     const ChildEl = lazy(() => import(`../${reactField.name}`))
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <ChildEl props={reactField.props} layout={reactField.layout} {...register(`inputs.${reactField.i}` as const)} />
//         </Suspense>
//     )
//     // return ChildEl
//     // console.log("reactField -- " + reactField)
//     // return lazy(() => import(`../${reactField.name}`))
// }
// const ChildEl = lazy(() => import(`../${"TitleH1"}`))


function ReactElement({reactField, register,
    // renderRef,
    // renderFieldsRef,
    // onRederFields
}) {
    count ++
    console.log("count -- " + count)
    
    // const importRef = useRef(false)
    // console.log(importRef.current)

    useEffect(() => {
        console.log("count import useEffect -- " + count)
        // console.log(importRef.current)
        // renderRef.current = true
        return () => {
            console.log("count import useEffect return -- " + count)
        }
    }, [])

    // console.log(reactField)
    // console.log(elements)

    // const ChildEl = lazy(() => import(`../${reactField.name}`).then(module => {
    //     console.log(module)
    //     return { default: module.ChildEl }
    // }))

    // const ChildEl = lazy(() => import(`../${reactField.name}`).then(module => ({default: module.ChildEl})))
    // const ChildEl = lazy(() => import(`../${reactField.name}`).then(() => console.log(1)))
    // const ChildEl = lazy(() => import(`../${reactField.name}`))

    // const ChildEl = lazy(() => import(`../${reactField.name}`), 'default');
    // console.log(importRef.current)
    const ChildEl = lazy(() => delay(import(`../${reactField.name}`)))
    // const ChildEl = lazy(() => import(`../${reactField.name}`))

    
    // console.log(ChildEl)
    // console.log(reactField.name)
    if (reactField) {
    // console.log(importRef.current)
    // if (!importRef.current) {
        return (
            // <>
            <Suspense fallback={<div>Loading...</div>}>
                <ChildEl props={reactField.props} layout={reactField.layout} {...register(`inputs.${reactField.i}` as const)} />
                {/* <ImportReactElement reactField={reactField} register={register}/> */}
            </Suspense>
            // </>
        )
    }

    function delay(promise) {
        return new Promise(resolve => {
            // console.log(promise)
            // console.log(count)
        //   console.log(resolve);
        //   setTimeout(resolve, 400)
        resolve(promise)
        }).then(() => {
            console.log(promise)
            // importRef.current = true
            // renderFieldsRef.current = true
            // onRederFields(123)
            return promise
        });
        // }).then(() => promise);
        // }).then(() => console.log(promise));
      }
}

export default ReactElement

// export default memo(ReactElement, (prev, next) => {
//     console.log(prev.renderFieldsRef, next.renderFieldsRef)
//     // console.log(prev.reactField.name, next.reactField.name)
//     // console.log(prev.reactField.layout.i === next.reactField.layout.i)
//     // console.log()
//     // return true
//     // if (prev.reactField.layout.i === next.reactField.layout.i) return true
//     // return false
// })
