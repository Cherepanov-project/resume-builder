export interface TabIconProps {
  width: number
  height: number
  value: number
  id: number
  colorActive?: string
  colorPassive?: string
}

export const TabIconContent = ({ width, height, value, id, colorActive, colorPassive }: TabIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox={`0 0 ${width} ${height}`}><path fill={value === id ? colorActive : colorPassive} d="M9.566 9.22H.86V.516h8.705V9.22ZM2.803 7.291h4.834V2.457H2.803v4.834Zm8.691 1.929V.516H20.2V9.22h-8.705Zm1.942-1.929h4.834V2.457h-4.834v4.834Zm-3.87 12.562H.86v-8.704h8.705v8.704Zm-6.763-1.929h4.834V13.09H2.803v4.834Zm17.396 1.929h-8.705v-8.704H20.2v8.704Zm-6.763-1.929h4.834V13.09h-4.834v4.834Z"></path></svg>
  )
}

export const TabIconStrings = ({ width, height, value, id, colorActive, colorPassive }: TabIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox={`0 0 ${width} ${height}`}><path fill={value === id ? colorActive : colorPassive} d="M.154 9.181V.516h19.338V9.18H.154ZM1.93 7.253h15.814V2.444H1.929v4.809ZM4.5 4.14h11.057v1.415H4.5V4.14ZM.193 19.88v-8.666H19.53v8.666H.193Zm1.774-1.968h15.827v-4.847H1.967v4.847ZM4.36 14.84h11.057v1.414H4.359v-1.414Z"></path></svg>
  )
}

export const TabIconSettings = ({ width, height, value, id, colorActive, colorPassive }: TabIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox={`0 0 ${width} ${height}`}><path fill={value === id ? colorActive : colorPassive} d="M14.662 9.117H4.994v-.964h9.668v.964Zm0 1.942H4.994v.964h9.668v-.964Zm0 2.802H4.994v.965h9.668v-.965ZM19.394.516v19.337H.249V.516h19.145Zm-1.839 5.798H2.088v11.61h15.377V6.314h.09Zm0-3.96H2.088V5.35h15.377V2.354h.09Z"></path></svg>
  )
}