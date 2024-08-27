type IconProps = {
    color?: string,
    scale?: number,
}

export const IconHeader = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 30 26"><path fill={color ? color : "black"} d="m10.849 4.217-.051-.223a3.547 3.547 0 0 0-.288-.746c-.15-.307-.3-.58-.466-.851a5.165 5.165 0 0 0-.563-.707c-.197-.185-.35-.266-.477-.29a23.179 23.179 0 0 0-.703-.051 12.724 12.724 0 0 0-.793-.017H7.26v10.445c0 .184.03.313.09.405l.01.015.008.016c.047.096.14.182.321.275.019.01.075.03.194.058.112.027.257.057.438.092.375.073.618.118.773.118h.286V14H2.603v-1.216l.257-.027.287-.025c.146-.012.32-.027.507-.045.347-.034.558-.082.663-.121.165-.072.25-.145.315-.243.058-.089.091-.214.091-.458V1.315h-.249c-.19 0-.422 0-.688.016-.275.018-.55.035-.806.053-.102.01-.245.086-.46.289a5.287 5.287 0 0 0-1.024 1.563c-.138.316-.233.56-.278.745l-.053.219H0V0h12v4.217h-1.152ZM16 0h14v2H16zM16 6h14v2H16zM16 12h14v2H16zM0 18h30v2H0zM0 24h30v2H0z"></path></svg>
  )
}

export const IconParagraph = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 35 31"><path fill={color ? color : "black"} d="M34.4 21.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h33.8a.6.6 0 0 0 .6-.6v-1.134a.6.6 0 0 0-.6-.6ZM34.4 28.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h33.8a.6.6 0 0 0 .6-.6v-1.134a.6.6 0 0 0-.6-.6ZM15.733.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h15.133a.6.6 0 0 0 .6-.6V.933a.6.6 0 0 0-.6-.6ZM15.733 7.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h15.133a.6.6 0 0 0 .6-.6V7.933a.6.6 0 0 0-.6-.6ZM19.733 14.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h19.133a.6.6 0 0 0 .6-.6v-1.134a.6.6 0 0 0-.6-.6Z"></path><path fill={color ? color : "black"} fillRule="evenodd" d="M33.56 2.858V16.13a.488.488 0 0 1-.476.498H31.66a.489.489 0 0 1-.475-.498V2.858H28.56v13.271a.488.488 0 0 1-.475.498h-1.422a.489.489 0 0 1-.476-.498v-4.871l-.05-1C23.3 10.258 21 8.31 21 5.288c0-3.502 2.654-4.96 5.678-4.96h7.847c.26 0 .475.228.475.507v1.518c0 .278-.214.506-.475.506h-.966v-.001Z" clipRule="evenodd"></path></svg>
  )
}

export const IconList = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512"><path fill={color ? color : "black"} d="M80 48H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416-136H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16z"></path></svg>
  )
}

export const IconImages = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="36" height="36"><path fill={color ? color : "black"} d="M0 0v28h28V0Zm26 2v7.24l-10.86 8.67-5.79-3L2 20.34V2ZM2 26v-4.42l7.45-5.5 5.81 3L26 10.52V26Zm7.8-13.9A3.8 3.8 0 1 0 6 8.3a3.8 3.8 0 0 0 3.8 3.8Zm0-6.6a2.8 2.8 0 1 1 0 5.6A2.73 2.73 0 0 1 7 8.3a2.93 2.93 0 0 1 2.8-2.8Z"></path></svg>
  )
}

export const IconButton = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 30" width="36" height="36"><path fill={color ? color : "black"} d="m46.6 29.2 1.3-.7-2.1-4h3.6L40 15.1v13.3l2.7-2.7 2.3 4.4 1.6-.9ZM39 12.69l1.71 1.71 6.51 6.51h1A2.83 2.83 0 0 0 51 18.07V2.83A2.83 2.83 0 0 0 48.17 0H2.83A2.83 2.83 0 0 0 0 2.83v15.24a2.83 2.83 0 0 0 2.83 2.83H39v-8.21ZM8.33 9.22h34.34v2.45H8.33Z"></path></svg>
  )
}

export const IconTable = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 35 31"><path fill={color ? color : "black"} d="M2.188 10.938v7.656h14.218v-7.657H2.188Zm16.406 0v7.656h14.218v-7.657H18.595Zm-2.188 9.843H2.188v7.657h14.218V20.78Zm2.188 7.657h14.218V20.78H18.595v7.657ZM0 0h35v30.625H0V0Z"></path></svg>
  )
}

export const IconDivider = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 28" width="36" height="36"><path fill={color ? color : "black"} d="M36 13v2H0v-2Zm-4-3H4V0h28Zm-1-9H5v8h26ZM4 18h28v10H4Zm1 9h26v-8H5Z"></path></svg>
  )
}

export const IconSpacer = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 30"><path fill={color ? color : "black"} fillRule="evenodd" d="M32 8H3v20h29V8ZM3 7a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h29a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3Z" clipRule="evenodd"></path><path fill={color ? color : "black"} d="M16.68 10.427a.4.4 0 0 1 .64 0l2.2 2.933a.4.4 0 0 1-.32.64H18v8h1.2a.4.4 0 0 1 .32.64l-2.2 2.933a.4.4 0 0 1-.64 0l-2.2-2.933a.4.4 0 0 1 .32-.64H16v-8h-1.2a.4.4 0 0 1-.32-.64l2.2-2.933Z"></path></svg>
  )
}

export const IconSocialNetwork = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" width="36" height="36"><path fill={color ? color : "black"} d="M17.5 0A17.5 17.5 0 1 0 35 17.5 17.46 17.46 0 0 0 17.5 0Zm0 33A15.5 15.5 0 1 1 33 17.5 15.58 15.58 0 0 1 17.5 33Zm.5-16h9v1h-9v9h-1v-9H8v-1h9V8h1Z"></path></svg>
  )
}

export const IconHTML = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 38" width="36" height="36"><path fill={color ? color : "black"} d="M30 0H9.4a.91.91 0 0 0-.7.3L.3 7.9a.91.91 0 0 0-.3.7V37a.94.94 0 0 0 1 1h29a1 1 0 0 0 1-1V1a.94.94 0 0 0-1-1ZM7.7 3.91l.5-.46V8H3.7ZM29 36H2V10h7.2a.94.94 0 0 0 1-1V2H29Zm-15.2-6-1-.2L17 13.5l1 .2Zm-2.4-12.4-3.7 3.7 3.7 3.7-.7.9-4.1-4.1c-.1-.1-.1-.2-.1-.4s.1-.3.1-.4l4.1-4.1Zm8 7.6 3.7-3.7-3.7-3.7.7-.7 4.1 4.1c.1.1.1.2.1.4s-.1.3-.1.4l-4.1 3.9Z"></path></svg>
  )
}

export const IconVideo = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 44 34"><g fill={color ? color : "black"}><path d="m26.458 16.402-7.847-4.958a.721.721 0 0 0-.726-.024.71.71 0 0 0-.37.622v9.916a.708.708 0 0 0 .713.709.722.722 0 0 0 .383-.11l7.847-4.96a.709.709 0 0 0 0-1.195z"></path><path d="M42.527 0H.746A.742.742 0 0 0 0 .74v32.52c0 .41.334.74.746.74h41.78c.412 0 .747-.33.747-.74V.74a.742.742 0 0 0-.746-.74zM7.46 16.26H1.492V9.61h5.969v6.652zm-5.969 1.48H7.46v6.651H1.492V17.74zm7.461 7.39V1.478H34.32v31.044H8.953V25.13zm32.828-8.87h-5.97V9.61h5.97v6.652zm-5.97 1.48h5.97v6.651h-5.97V17.74zm5.97-16.262V8.13h-5.97V1.478h5.97zm-40.289 0H7.46V8.13H1.492V1.478zm0 31.044V25.87H7.46v6.652H1.492zm40.289 0h-5.97V25.87h5.97v6.652z"></path></g></svg>
  )
}

export const IconIcons = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 35 35"><path fill={color ? color : "black"} d="m31.955 12.487-9.243-1.337-4.09-8.483c-.509-.99-1.906-.784-2.243 0l-4.09 8.483-9.25 1.337c-1.041.064-1.372 1.343-.66 2.133l6.67 6.613-1.589 9.286c-.184 1.144 1.061 1.786 1.785 1.336l8.252-4.408 8.251 4.344c.864.45 1.893-.18 1.785-1.266l-1.588-9.292 6.67-6.613c.807-.867.229-2.024-.66-2.133Zm-8.188 7.345c-.267.334-.394.732-.33 1.137l1.25 7.48-6.6-3.54c-.425-.18-.825-.18-1.187 0l-6.6 3.54 1.251-7.48c.064-.469-.063-.867-.33-1.137l-5.342-5.276 7.394-1.067a1.21 1.21 0 0 0 .927-.668l3.303-6.748 3.303 6.748c.197.334.528.604.928.668l7.381 1.067-5.348 5.276Z"></path></svg>
  )
}

export const IconMenu = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="36" height="36"><path fill={color ? color : "black"} d="M16 150h416c8.8 0 16-7.2 16-16v-20c0-8.8-7.2-15-16-15H16c-8.8 0-16 6.2-16 15v20c0 8.8 7.2 16 16 16zm0 132h416c8.8 0 16-7.2 16-16v-20c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v20c0 8.8 7.2 16 16 16zm0 132h416c8.8 0 16-7.2 16-16v-20c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v20c0 8.8 7.2 16 16 16z"></path></svg>
  )
}

export const IconText = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="36" height="36"><path fill={color ? color : "black"} d="M27.5 8.4h-1.4a4.72 4.72 0 0 0-.7-1.7 11.78 11.78 0 0 0-1.1-1.9A11.22 11.22 0 0 0 23 3.2a2.54 2.54 0 0 0-1.4-.8 7.12 7.12 0 0 0-1.6-.1h-3v23a2.38 2.38 0 0 0 .3 1.2 1.79 1.79 0 0 0 1 .9c.2.1.8.2 1.5.4a8.2 8.2 0 0 0 1.8.3v1.4H8V28a14.92 14.92 0 0 0 1.7-.2 9.11 9.11 0 0 0 1.6-.3 2 2 0 0 0 1-.8 2.5 2.5 0 0 0 .3-1.3V2.2H9.8c-.6 0-1.2.1-1.8.1a2.92 2.92 0 0 0-1.4.8 10.1 10.1 0 0 0-1.3 1.6 18.56 18.56 0 0 0-1.1 1.9 8.8 8.8 0 0 0-.6 1.7H2.2V.5h25.1v7.9Z"></path></svg>
  )
}

export const IconCarousel = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} viewBox="0 0 36 22" width="36" height="36"><path fill={color ? color : "black"} d="m25.67 8.615-6.742 5.15-4.417-2.2-4.184 3.134v5.365H25.67V8.615Zm1.18 8.646h2.952V5.31H26.85v11.95ZM6.197 5.311v11.95h2.951V5.311h-2.95ZM25.67 1.18H10.327v12.57l4.104-3.072 4.407 2.195 6.832-5.214V1.18ZM2.233 9.278a.473.473 0 0 1 .056.572l-.056.073-1.203 1.29 1.203 1.29c.17.18.17.462 0 .644a.412.412 0 0 1-.582.02l-.02-.02-1.505-1.612a.47.47 0 0 1-.12-.236L0 11.212c0-.115.042-.231.127-.322l1.505-1.612.02-.02a.412.412 0 0 1 .582.02Zm31.531 0a.412.412 0 0 1 .582-.02l.02.02 1.506 1.612c.084.09.127.207.127.322l-.008.087a.47.47 0 0 1-.12.236l-1.505 1.612-.02.02a.412.412 0 0 1-.582-.02.472.472 0 0 1 0-.645l1.204-1.29-1.204-1.29-.055-.072a.473.473 0 0 1 .055-.572ZM15.344 3.54a2.656 2.656 0 1 1 0 5.31 2.656 2.656 0 0 1 0-5.31Zm0 .767a1.888 1.888 0 1 0 0 3.777 1.888 1.888 0 0 0 0-3.777ZM26.85 21.245H9.147V18.44h-4.13V4.131h4.13V0h17.704v4.13h4.13v14.311h-4.13v2.804Z"></path></svg>
  )
}

export const IconGIFS = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 2500 2643.34"><path fill={color ? color : "black"} d="M2315,2612.91H185V22.91H1732.13V308.66h291.5V594.29H2315Zm-2040-90H2225V684.29H1933.63V398.66h-291.5V112.91H275Zm1748.63-195.75H476.38V308.66h964.37V880h582.88Zm-1457.25-90H1933.63V970H1350.75V398.66H566.38Z"></path></svg>
  )
}

export const IconStickers = ({color, scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512"><path fill={color ? color : "black"} d="M511.65,195.54h0c-11.44-45.6-34-86.16-68-119.27v-.09C394.9,27.1,329.3,0,259.89,0A259.84,259.84,0,0,0,0,259.83c0,69.41,27.47,134.66,76.55,183.74a258.41,258.41,0,0,0,120,68.09v0c0,.22,1.29.34,2.16.34a10.07,10.07,0,0,0,7.27-3.11L509,205.71A10.89,10.89,0,0,0,511.65,195.54ZM180,439.1l0-.05a193.8,193.8,0,0,1-58.85-40.48c-76.5-76.5-76.5-201,0-277.49a196.25,196.25,0,0,1,318,58.86l.07,0A259.89,259.89,0,0,0,180,439.1Zm24.61,41a238.72,238.72,0,0,1,235.2-278.92c4.79,0,9.61.14,14.43.43a241.58,241.58,0,0,1,25.87,3ZM462.43,180.93a215,215,0,0,0-48.85-74.85c-84.77-84.77-222.71-84.77-307.48,0s-84.77,222.71,0,307.48A214.75,214.75,0,0,0,181,462.41q1,11.94,3.17,23.73a238.63,238.63,0,1,1,302-302C478.31,182.68,470.38,181.62,462.43,180.93Z"></path></svg>
  )
}

export const IconTimer = ({scale}: IconProps) => {
  return (
    <img style={{transform: `scale(${scale ? scale : 1})`}} height="36" src="data:image/png;base64,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" alt=""></img>
  )
}

export const IconLinesFirst  = ({scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="320" height="55" viewBox="0 0 320 55">
     <path
        fill="#E0E0E0"
        d="M0 0h320v55H0z"
        className="icon--color-light"
        data-name="one-column-text"
      ></path>
      <path
        fill="#D3D3D3"
        d="M18 13h284v29H18z"
        className="icon--color-base"
      ></path>
      <path
        fill="#BDBDBD"
        d="M302 42.5h-1v-1h.5V41h1v1a.5.5 0 01-.5.5zm-3 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-1a.5.5 0 01-.5-.5v-1h1v.5h.5zM302.5 39h-1v-2h1zm-284 0h-1v-2h1zm284-4h-1v-2h1zm-284 0h-1v-2h1zm284-4h-1v-2h1zm-284 0h-1v-2h1zm0-4h-1v-2h1zm284 0h-1v-2h1zm-284-4h-1v-2h1zm284 0h-1v-2h1zm-284-4h-1v-2h1zm284 0h-1v-2h1zm-284-4h-1v-2a.5.5 0 01.5-.5h2v1h-1.5zm284 0h-1v-2h1zm-2.5-1.5h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2z"
        className="icon--color-dark"
      ></path>
    </svg>
  )
}
export const IconLinesSecond  = ({scale}: IconProps) => {
  return (
<svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="320" height="55" viewBox="0 0 320 55">
<path
        fill="#E0E0E0"
        fillRule="evenodd"
        d="M82.5 0h238v55h-238V0z"
        className="icon--color-light"
        clipRule="evenodd"
      ></path>
      <path
        fill="#E0E0E0"
        d="M74.36 0H0v55h74.36V0z"
        className="icon--color-light"
      ></path>
      <path
        fill="#D3D3D3"
        d="M18 13h39v29H18zm82.5 0h203v29h-203z"
        className="icon--color-base"
      ></path>
      <path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M100 13a.5.5 0 01.5-.5h.995v1H101v.536h-1V13zm3.486-.5h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h.995a.5.5 0 01.5.5v1.036h-1V13.5h-.495v-1zM100 18.179v-2.072h1v2.072h-1zm204-2.072v2.072h-1v-2.072h1zm-204 6.214V20.25h1v2.071h-1zm204-2.071v2.071h-1V20.25h1zm-204 6.214v-2.071h1v2.071h-1zm204-2.071v2.071h-1v-2.071h1zm-204 6.214v-2.071h1v2.071h-1zm204-2.071v2.071h-1v-2.071h1zM100 34.75v-2.071h1v2.071h-1zm204-2.071v2.071h-1v-2.071h1zm-204 6.214V36.82h1v2.072h-1zm204-2.072v2.072h-1V36.82h1zM100 42v-1.036h1v.536h.495v1h-.995a.5.5 0 01-.5-.5zm204-1.036V42a.5.5 0 01-.5.5h-.995v-1H303v-.536h1zM105.475 42.5h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zM17.5 13a.5.5 0 01.5-.5h.975v1H18.5v.536h-1V13zm3.425-.5h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0H57a.5.5 0 01.5.5v1.036h-1V13.5h-.475v-1zM17.5 18.179v-2.072h1v2.072h-1zm40-2.072v2.072h-1v-2.072h1zm-40 6.214V20.25h1v2.071h-1zm40-2.071v2.071h-1V20.25h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214V36.82h1v2.072h-1zm40-2.072v2.072h-1V36.82h1zM17.5 42v-1.036h1v.536h.475v1H18a.5.5 0 01-.5-.5zm40-1.036V42a.5.5 0 01-.5.5h-.975v-1h.475v-.536h1zM22.875 42.5h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1z"
        className="icon--color-dark"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
export const IconLinesThird  = ({scale}: IconProps) => {
  return (
<svg style={{transform: `scale(${scale ? scale : 1})`}} xmlns="http://www.w3.org/2000/svg" width="320" height="55" viewBox="0 0 320 55">
<path
        fill="#E0E0E0"
        d="M0 0h108v55H0z"
        className="icon--color-light"
      ></path>
      <path
        fill="#E0E0E0"
        d="M116 0h204v55H116z"
        className="icon--color-light"
        data-name="Rectangle-61"
      ></path>
      <path
        fill="#D3D3D3"
        d="M134 13h168v29H134z"
        className="icon--color-base"
      ></path>
      <path
        fill="#D3D3D3"
        d="M18 13h74v29H18z"
        className="icon--color-base"
        data-name="Rectangle-79"
      ></path>
      <path
        fill="#BDBDBD"
        d="M302 42.5h-1v-1h.5V41h1v1a.5.5 0 01-.5.5zm-3 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-1a.5.5 0 01-.5-.5v-1h1v.5h.5zm-.5-3.5h-1v-2h1zm168 0h-1v-2h1zm-168-4h-1v-2h1zm168 0h-1v-2h1zm-168-4h-1v-2h1zm168 0h-1v-2h1zm-168-4h-1v-2h1zm168 0h-1v-2h1zm-168-4h-1v-2h1zm168 0h-1v-2h1zm-168-4h-1v-2h1zm168 0h-1v-2h1zm-168-4h-1v-2h1zm168 0h-1v-1.5H300v-1h2a.5.5 0 01.5.5zm-4.5-1.5h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-46 29h-1v-1h.5V41h1v1a.5.5 0 01-.5.5zm-3 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zM18.5 41h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-1.5H90v-1h2a.5.5 0 01.5.5zM88 13.5h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2z"
        className="icon--color-dark"
      ></path>
    </svg>
  )
}
export const IconLinesFourth = ({scale}: IconProps) => {
  return (
    <svg style={{transform: `scale(${scale ? scale : 1})`}}
      xmlns="http://www.w3.org/2000/svg" 
      width="320" 
      height="55" 
      viewBox="0 0 320 55"
      >
        <path
        fill="#E0E0E0"
        d="M164 0h156v55H164zM0 0h156v55H0z"
        className="icon--color-light"
      ></path>
      <path
        fill="#D3D3D3"
        d="M18 13h120v29H18zm164 0h120v29H182z"
        className="icon--color-base"
      ></path>
      <path
        fill="#BDBDBD"
        d="M97 41.5h2v1h-2zm-3-29h2v1h-2zm15 29h2v1h-2zm-16 0h2v1h-2zm12 0h2v1h-2zm1-29h2v1h-2zm-5 29h2v1h-2zm1-29h2v1h-2zm-4 0h2v1h-2zm-20 0h2v1h-2zm3 29h2v1h-2zm1-29h2v1h-2zm-5 29h2v1h-2zm9-29h2v1h-2zm3 29h2v1h-2zm-4 0h2v1h-2zm5-29h2v1h-2zm20 0h2v1h-2zm23 29h2v1h-2zm1-29h2v1h-2zm-4 0h2v1h-2zm7.5 29h-.5v1h1a.5.5 0 00.5-.5v-1h-1zm-8.5 0h2v1h-2zm8.5-4.5h1v2h-1zm0-8h1v2h-1zm0 4h1v2h-1zM125 41.5h2v1h-2zm1-29h2v1h-2zm-9 29h2v1h-2zm-4 0h2v1h-2zm1-29h2v1h-2zm-40 0h2v1h-2zm47 29h2v1h-2zm-3-29h2v1h-2zm-96 0h2v1h-2zm15 29h2v1h-2zm-12 0h2v1h-2zM137.5 25h1v2h-1zM29 41.5h2v1h-2zm4 0h2v1h-2zm-3-29h2v1h-2zm4 0h2v1h-2zm-13 29h2v1h-2zm5-29h2v1h-2zM17.5 29h1v2h-1zm0-8h1v2h-1zm0 4h1v2h-1zm0-8h1v2h-1zm0 16h1v2h-1zm0-20v2h1v-1.5H20v-1h-2a.5.5 0 00-.5.5zM73 41.5h2v1h-2zM17.5 37h1v2h-1zm1 4h-1v1a.5.5 0 00.5.5h1v-1h-.5zm46.5.5h2v1h-2zm-3-29h2v1h-2zm-5 29h2v1h-2zm1-29h2v1h-2zm3 29h2v1h-2zm9-29h2v1h-2zm-4 0h2v1h-2zm-28 0h2v1h-2zm31 29h2v1h-2zm-27-29h2v1h-2zm12 0h2v1h-2zm-9 29h2v1h-2zm-4 0h2v1h-2zm5-29h2v1h-2zm7 29h2v1h-2zm-4 0h2v1h-2zm1-29h2v1h-2zm72 0h2v1h-2zm15.5 8.5h1v2h-1zm0-8h1v2h-1zm0 4h1v2h-1zM277 41.5h2v1h-2zm4 0h2v1h-2zm-3-29h2v1h-2zm4 0h2v1h-2zm7 29h2v1h-2zm-3-29h2v1h-2zm4 0h2v1h-2zm-16 0h2v1h-2zm11 29h2v1h-2zm-23-29h2v1h-2zm-4 0h2v1h-2zm15 29h2v1h-2zm-16 0h2v1h-2zm4 0h2v1h-2zm9-29h2v1h-2zm-1 29h2v1h-2zm-4 0h2v1h-2zm36.5-4.5h1v2h-1zm0-16h1v2h-1zm-120 12h1v2h-1zm120-20h1v2h-1zm0 4h1v2h-1zm-120 20h1v2h-1zm0-16h1v2h-1zm0-4h1v2h-1zm0 12h1v2h-1zM293 41.5h2v1h-2zM181.5 25h1v2h-1zM298 12.5h2v1h-2zm-1 29h2v1h-2zm-3-29h2v1h-2zm7.5 29h-.5v1h1a.5.5 0 00.5-.5v-1h-1zm0-16.5h1v2h-1zm0 4h1v2h-1zM254 12.5h2v1h-2zM301.5 33h1v2h-1zM266 12.5h2v1h-2zm-65 29h2v1h-2zm1-29h2v1h-2zm-4 0h2v1h-2zm7 29h2v1h-2zm-8 0h2v1h-2zm16 0h2v1h-2zm-7-29h2v1h-2zm4 0h2v1h-2zm4 0h2v1h-2zm-5 29h2v1h-2zM181.5 13v2h1v-1.5h1.5v-1h-2a.5.5 0 00-.5.5zm3.5 28.5h2v1h-2zm-2.5-.5h-1v1a.5.5 0 00.5.5h1v-1h-.5zm3.5-28.5h2v1h-2zm3 29h2v1h-2zm4 0h2v1h-2zm1-29h2v1h-2zm-4 0h2v1h-2zm48 0h2v1h-2zm15 29h2v1h-2zm-12 0h2v1h-2zm-4 0h2v1h-2zm-20 0h2v1h-2zm17-29h2v1h-2zm16 0h2v1h-2zm-5 29h2v1h-2zm4 0h2v1h-2zm-3-29h2v1h-2zm-4 0h2v1h-2zm-21 29h2v1h-2zm12 0h2v1h-2zm-15-29h2v1h-2zm7 29h2v1h-2zm-3-29h2v1h-2zm4 0h2v1h-2zm4 0h2v1h-2zm-1 29h2v1h-2z"
        className="icon--color-dark"
      ></path>
    </svg>
  )
}
export const IconLinesFive= ({ scale }: IconProps) => {
  return (
    <svg
      style={{ transform: `scale(${scale ? scale : 1})` }}
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="55"
      viewBox="0 0 320 55"
    >
<path
        fill="#E0E0E0"
        d="M212 0h108v55H212z"
        className="icon--color-light"
      ></path>
      <path
        fill="#E0E0E0"
        d="M0 0h204v55H0z"
        className="icon--color-light"
        data-name="Rectangle-61"
      ></path>
      <path
        fill="#D3D3D3"
        d="M18 13h168v29H18z"
        className="icon--color-base"
      ></path>
      <path
        fill="#D3D3D3"
        d="M228 13h74v29h-74z"
        className="icon--color-base"
        data-name="Rectangle-79"
      ></path>
      <path
        fill="#BDBDBD"
        d="M186 42.5h-1v-1h.5V41h1v1a.5.5 0 01-.5.5zm-3 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-1a.5.5 0 01-.5-.5v-1h1v.5h.5zM186.5 39h-1v-2h1zm-168 0h-1v-2h1zm168-4h-1v-2h1zm-168 0h-1v-2h1zm168-4h-1v-2h1zm-168 0h-1v-2h1zm168-4h-1v-2h1zm-168 0h-1v-2h1zm168-4h-1v-2h1zm-168 0h-1v-2h1zm168-4h-1v-2h1zm-168 0h-1v-2h1zm168-4h-1v-2h1zm-168 0h-1v-2a.5.5 0 01.5-.5h2v1h-1.5zM184 13.5h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm277 29h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-1a.5.5 0 01-.5-.5v-1h1v.5h.5zm73.5-1.5h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2h1zm74-2h-1v-2h1zm-74-2h-1v-2a.5.5 0 01.5-.5h2v1h-1.5zm73.5-1.5h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2z"
        className="icon--color-dark"
      ></path>
    </svg>
  )
}
export const IconLinesSix= ({ scale }: IconProps) => {
      return (
        <svg
          style={{ transform: `scale(${scale ? scale : 1})` }}
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="55"
          viewBox="0 0 321 55"
        ><path
        fill="#E0E0E0"
        fillRule="evenodd"
        d="M0 0h238v55H0V0z"
        className="icon--color-light"
        clipRule="evenodd"
      ></path>
      <path
        fill="#E0E0E0"
        d="M320.36 0H246v55h74.36V0z"
        className="icon--color-light"
      ></path>
      <path
        fill="#D3D3D3"
        d="M18 13h203v29H18zm246 0h39v29h-39z"
        className="icon--color-base"
      ></path>
      <path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M17.5 13a.5.5 0 01.5-.5h.995v1H18.5v.536h-1V13zm3.486-.5h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.98 0h1.991v1h-1.991v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0h1.99v1h-1.99v-1zm3.981 0h1.99v1h-1.99v-1zm3.98 0H221a.5.5 0 01.5.5v1.036h-1V13.5h-.495v-1zM17.5 18.179v-2.072h1v2.072h-1zm204-2.072v2.072h-1v-2.072h1zm-204 6.214V20.25h1v2.071h-1zm204-2.071v2.071h-1V20.25h1zm-204 6.214v-2.071h1v2.071h-1zm204-2.071v2.071h-1v-2.071h1zm-204 6.214v-2.071h1v2.071h-1zm204-2.071v2.071h-1v-2.071h1zm-204 6.214v-2.071h1v2.071h-1zm204-2.071v2.071h-1v-2.071h1zm-204 6.214V36.82h1v2.072h-1zm204-2.072v2.072h-1V36.82h1zM17.5 42v-1.036h1v.536h.495v1H18a.5.5 0 01-.5-.5zm204-1.036V42a.5.5 0 01-.5.5h-.995v-1h.495v-.536h1zM22.976 42.5h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zm3.981 0h-1.991v-1h1.991v1zm3.98 0h-1.99v-1h1.99v1zm3.98 0h-1.99v-1h1.99v1zM263.5 13a.5.5 0 01.5-.5h.975v1h-.475v.536h-1V13zm3.425-.5h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0H303a.5.5 0 01.5.5v1.036h-1V13.5h-.475v-1zM263.5 18.179v-2.072h1v2.072h-1zm40-2.072v2.072h-1v-2.072h1zm-40 6.214V20.25h1v2.071h-1zm40-2.071v2.071h-1V20.25h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214V36.82h1v2.072h-1zm40-2.072v2.072h-1V36.82h1zM263.5 42v-1.036h1v.536h.475v1H264a.5.5 0 01-.5-.5zm40-1.036V42a.5.5 0 01-.5.5h-.975v-1h.475v-.536h1zM268.875 42.5h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1z"
        className="icon--color-dark"
        clipRule="evenodd"
      ></path>
    </svg>
      );
}
export const IconLinesSeven = ({scale}: IconProps) => {
  return (
    <svg
    style={{ transform: `scale(${scale ? scale : 1})` }}
    xmlns="http://www.w3.org/2000/svg"
    width="320"
    height="55"
    viewBox="0 0 321 55"
  >
  <path
        fill="#E0E0E0"
        d="M0 0h101.1v54.6H0z"
        className="icon--color-light"
      ></path>
      <path
        fill="#E0E0E0"
        d="M109 0h101v54.6H109zm108 0h101.2v54.6H217z"
        className="icon--color-light"
        data-name="Rectangle-61"
      ></path>
      <path
        fill="#D3D3D3"
        d="M19 13h64v29H19z"
        className="icon--color-base"
      ></path>
      <path
        fill="#D3D3D3"
        d="M127 13h64v29h-64zm109 0h64v29h-64z"
        className="icon--color-base"
        data-name="Rectangle-79"
      ></path>
      <path
        fill="#BDBDBD"
        d="M83 42.5h-1v-1h.5V41h1v1a.47.47 0 01-.5.5zm-3 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-1a.47.47 0 01-.5-.5v-1h1v.5h.5zM83.5 39h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2a.47.47 0 01.5-.5h2v1h-1.5zM81 13.5h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm166 29h-1v-1h.5V41h1v1a.47.47 0 01-.5.5zm-3 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-1a.47.47 0 01-.5-.5v-1h1v.5h.5zm63.5-3.5h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2a.47.47 0 01.5-.5h2v1h-1.5zm61.5-1.5h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm167 29h-1v-1h.5V41h1v1a.47.47 0 01-.5.5zm-3 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-1a.47.47 0 01-.5-.5v-1h1v.5h.5zm63.5-3.5h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2h1zm64-4h-1v-2h1zm-64 0h-1v-2a.47.47 0 01.5-.5h2v1h-1.5zm61.5-1.5h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2zm-4 0h-2v-1h2z"
        className="icon--color-dark"
      ></path>
    </svg>
  )
}
export const IconLinesEight = ({scale}: IconProps) => {
  return (
    <svg
    style={{ transform: `scale(${scale ? scale : 1})` }}
    xmlns="http://www.w3.org/2000/svg"
    width="320"
    height="55"
    viewBox="0 0 321 55"
  >
  <path
        fill="#E0E0E0"
        d="M156.36 0H82v55h74.36V0zM251 0h-87v55h87V0z"
        className="icon--color-light"
      ></path>
      <path
        fill="#E0E0E0"
        d="M320.36 0H246v55h74.36V0zm-246 0H0v55h74.36V0z"
        className="icon--color-light"
      ></path>
      <path
        fill="#D3D3D3"
        d="M18 13h39v29H18zm82 0h39v29h-39zm82 0h121v29H182z"
        className="icon--color-base"
      ></path>
      <path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M99.5 13a.5.5 0 01.5-.5h.975v1h-.475v.536h-1V13zm3.425-.5h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0H139a.5.5 0 01.5.5v1.036h-1V13.5h-.475v-1zM99.5 18.179v-2.072h1v2.072h-1zm40-2.072v2.072h-1v-2.072h1zm-40 6.214V20.25h1v2.071h-1zm40-2.071v2.071h-1V20.25h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214V36.82h1v2.072h-1zm40-2.072v2.072h-1V36.82h1zM99.5 42v-1.036h1v.536h.475v1H100a.5.5 0 01-.5-.5zm40-1.036V42a.5.5 0 01-.5.5h-.975v-1h.475v-.536h1zM104.875 42.5h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zM181.5 13a.5.5 0 01.5-.5h1.008v1h-.508v.536h-1V13zm3.525-.5h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0H303a.5.5 0 01.5.5v1.036h-1V13.5h-.508v-1zM181.5 18.179v-2.072h1v2.072h-1zm122-2.072v2.072h-1v-2.072h1zm-122 6.214V20.25h1v2.071h-1zm122-2.071v2.071h-1V20.25h1zm-122 6.214v-2.071h1v2.071h-1zm122-2.071v2.071h-1v-2.071h1zm-122 6.214v-2.071h1v2.071h-1zm122-2.071v2.071h-1v-2.071h1zm-122 6.214v-2.071h1v2.071h-1zm122-2.071v2.071h-1v-2.071h1zm-122 6.214V36.82h1v2.072h-1zm122-2.072v2.072h-1V36.82h1zM181.5 42v-1.036h1v.536h.508v1H182a.5.5 0 01-.5-.5zm122-1.036V42a.5.5 0 01-.5.5h-1.008v-1h.508v-.536h1zM187.042 42.5h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zM17.5 13a.5.5 0 01.5-.5h.975v1H18.5v.536h-1V13zm3.425-.5h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0H57a.5.5 0 01.5.5v1.036h-1V13.5h-.475v-1zM17.5 18.179v-2.072h1v2.072h-1zm40-2.072v2.072h-1v-2.072h1zm-40 6.214V20.25h1v2.071h-1zm40-2.071v2.071h-1V20.25h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214V36.82h1v2.072h-1zm40-2.072v2.072h-1V36.82h1zM17.5 42v-1.036h1v.536h.475v1H18a.5.5 0 01-.5-.5zm40-1.036V42a.5.5 0 01-.5.5h-.975v-1h.475v-.536h1zM22.875 42.5h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1z"
        className="icon--color-dark"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
export const IconLinesNine = ({scale}: IconProps) => {
  return (
    <svg
    style={{ transform: `scale(${scale ? scale : 1})` }}
    xmlns="http://www.w3.org/2000/svg"
    width="320"
    height="55"
    viewBox="0 0 321 55"
  >
  <path
    fill="#E0E0E0"
    fillRule="evenodd"
    d="M82 0h156.36v55H82V0Z"
    className="icon--color-light"
    clipRule="evenodd"
  />
  <path
    fill="#D3D3D3"
    stroke="#BDBDBD"
    strokeDasharray="2 2"
    strokeLinejoin="round"
    d="M221 13H100v29h121V13Z"
    className="icon--color-base"
  />
  <path
    fill="#E0E0E0"
    d="M320.36 0H246v55h74.36V0Z"
    className="icon--color-light"
  />
  <path
    fill="#D3D3D3"
    stroke="#BDBDBD"
    strokeDasharray="2 2"
    strokeLinejoin="round"
    d="M303 13h-39v29h39V13Z"
    className="icon--color-base"
  />
  <path
    fill="#E0E0E0"
    d="M74.36 0H0v55h74.36V0Z"
    className="icon--color-light"
  />
  <path
    fill="#D3D3D3"
    stroke="#BDBDBD"
    strokeDasharray="2 2"
    strokeLinejoin="round"
    d="M57 13H18v29h39V13Z"
    className="icon--color-base"
  />
</svg>
  )
}
export const IconLinesTen = ({scale}: IconProps) => {
  return (
    <svg
      style={{ transform: `scale(${scale ? scale : 1})` }}
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="55"
      viewBox="0 0 321 55"
    >
      <path
        fill="#E0E0E0"
        fillRule="evenodd"
        d="M0 0h156.36v55H0V0z"
        className="icon--color-light"
        clipRule="evenodd"
      ></path>
      <path
        fill="#E0E0E0"
        d="M320.36 0H246v55h74.36V0zm-82 0H164v55h74.36V0z"
        className="icon--color-light"
      ></path>
      <path
        fill="#D3D3D3"
        d="M18 13h121v29H18zm164 0h39v29h-39zm82 0h39v29h-39z"
        className="icon--color-base"
      ></path>
      <path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M17.5 13a.5.5 0 01.5-.5h1.008v1H18.5v.536h-1V13zm3.525-.5h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0h2.016v1h-2.016v-1zm4.033 0h2.017v1h-2.017v-1zm4.033 0h2.017v1h-2.017v-1zm4.034 0H139a.5.5 0 01.5.5v1.036h-1V13.5h-.508v-1zM17.5 18.179v-2.072h1v2.072h-1zm122-2.072v2.072h-1v-2.072h1zm-122 6.214V20.25h1v2.071h-1zm122-2.071v2.071h-1V20.25h1zm-122 6.214v-2.071h1v2.071h-1zm122-2.071v2.071h-1v-2.071h1zm-122 6.214v-2.071h1v2.071h-1zm122-2.071v2.071h-1v-2.071h1zm-122 6.214v-2.071h1v2.071h-1zm122-2.071v2.071h-1v-2.071h1zm-122 6.214V36.82h1v2.072h-1zm122-2.072v2.072h-1V36.82h1zM17.5 42v-1.036h1v.536h.508v1H18a.5.5 0 01-.5-.5zm122-1.036V42a.5.5 0 01-.5.5h-1.008v-1h.508v-.536h1zM23.042 42.5h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zm4.033 0h-2.016v-1h2.016v1zm4.034 0h-2.017v-1h2.017v1zm4.033 0h-2.017v-1h2.017v1zM263.5 13a.5.5 0 01.5-.5h.975v1h-.475v.536h-1V13zm3.425-.5h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0H303a.5.5 0 01.5.5v1.036h-1V13.5h-.475v-1zM263.5 18.179v-2.072h1v2.072h-1zm40-2.072v2.072h-1v-2.072h1zm-40 6.214V20.25h1v2.071h-1zm40-2.071v2.071h-1V20.25h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214V36.82h1v2.072h-1zm40-2.072v2.072h-1V36.82h1zM263.5 42v-1.036h1v.536h.475v1H264a.5.5 0 01-.5-.5zm40-1.036V42a.5.5 0 01-.5.5h-.975v-1h.475v-.536h1zM268.875 42.5h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zM181.5 13a.5.5 0 01.5-.5h.975v1h-.475v.536h-1V13zm3.425-.5h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0h1.95v1h-1.95v-1zm3.9 0H221a.5.5 0 01.5.5v1.036h-1V13.5h-.475v-1zM181.5 18.179v-2.072h1v2.072h-1zm40-2.072v2.072h-1v-2.072h1zm-40 6.214V20.25h1v2.071h-1zm40-2.071v2.071h-1V20.25h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214v-2.071h1v2.071h-1zm40-2.071v2.071h-1v-2.071h1zm-40 6.214V36.82h1v2.072h-1zm40-2.072v2.072h-1V36.82h1zM181.5 42v-1.036h1v.536h.475v1H182a.5.5 0 01-.5-.5zm40-1.036V42a.5.5 0 01-.5.5h-.975v-1h.475v-.536h1zM186.875 42.5h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1zm3.9 0h-1.95v-1h1.95v1z"
        className="icon--color-dark"
        clipRule="evenodd"
      ></path>
    </svg>

  )
}
export const IconLinesEleven = ({ scale }: IconProps) => {
  return (
    <svg
      style={{ transform: `scale(${scale ? scale : 1})` }}
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="55"
      viewBox="0 0 321 55"
    >
    <path
      d="M0 0h74.36v55H0z"
      className="icon--color-light"
      style={{ fill: 'rgb(224, 224, 224)' }}
    />
    <g data-name="Rectangle-61-+-Rectangle-69-+-Path-91-+-Oval-1">
      <g data-name="Rectangle-61">
        <path
          d="M82 0h74.36v55H82z"
          className="icon--color-light"
          style={{ fill: 'rgb(224, 224, 224)' }}
        />
      </g>
    </g>
    <g data-name="Rectangle-61-+-Rectangle-69-+-Path-91-+-Oval-1">
      <g data-name="Rectangle-61-+-Rectangle-78">
        <g data-name="Rectangle-61">
          <path
            d="M246 0h74.36v55H246z"
            className="icon--color-light"
            style={{ fill: 'rgb(224, 224, 224)' }}
          />
        </g>
      </g>
      <g data-name="Rectangle-61-+-Rectangle-78">
        <g data-name="Rectangle-61">
          <path
            d="M164 0h74.36v55H164z"
            className="icon--color-light"
            style={{ fill: 'rgb(224, 224, 224)' }}
          />
        </g>
      </g>
    </g>
    <path
      d="M100 13h39v29h-39z"
      className="icon--color-base"
      style={{ fill: 'rgb(211, 211, 211)' }}
    />
    <path
      d="M139 42.5h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-2.5-1.5h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-1.5-2.5h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Z"
      className="icon--color-dark"
      style={{ fill: 'rgb(189, 189, 189)' }}
    />
    <path
      d="M182 13h39v29h-39z"
      className="icon--color-base"
      style={{ fill: 'rgb(211, 211, 211)' }}
    />
    <path
      d="M221 42.5h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-2.5-1.5h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-1.5-2.5h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Z"
      className="icon--color-dark"
      style={{ fill: 'rgb(189, 189, 189)' }}
    />
    <path
      d="M264 13h39v29h-39z"
      className="icon--color-base"
      style={{
        fill: 'rgb(211, 211, 211)',
        stroke: 'rgb(189, 189, 189)',
        strokeLinejoin: 'round',
        strokeDasharray: '2'
      }}
    />
    <path
      d="M303 42.5h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-2.5-1.5h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-1.5-2.5h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Z"
      className="icon--color-dark"
      style={{ fill: 'rgb(189, 189, 189)' }}
    />
    <path
      d="M18 13h39v29H18z"
      className="icon--color-base"
      style={{ fill: 'rgb(211, 211, 211)' }}
    />
    <path
      d="M57 42.5h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-2.5-1.5h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-39-3h-1v-2h1Zm39-1h-1v-2h1Zm-1.5-2.5h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Zm-4 0h-2v-1h2Z"
      className="icon--color-dark"
      style={{ fill: 'rgb(189, 189, 189)' }}
    />
  </svg>
  );
};
export const IconLinesTwelve = ({ scale }: IconProps) => {
  return (
<svg
      style={{ transform: `scale(${scale ? scale : 1})` }}
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="55"
      viewBox="0 0 321 55"
    >
    <path
        d="M46.726 0H0v55h46.726V0Z"
        className="icon--color-light"
        style={{ fill: 'rgb(224, 224, 224)' }}
      />
      <path
        d="M29 13H18v29h11V13Z"
        className="icon--color-base icon--color-stroke"
        style={{
          fill: 'rgb(211, 211, 211)',
          stroke: 'rgb(189, 189, 189)',
          strokeLinejoin: 'round',
          strokeDasharray: '2'
        }}
      />
      <path
        d="M101.726 0H55v55h46.726V0Z"
        className="icon--color-light"
        style={{ fill: 'rgb(224, 224, 224)' }}
      />
      <path
        d="M84 13H73v29h11V13Z"
        className="icon--color-base icon--color-stroke"
        style={{
          fill: 'rgb(211, 211, 211)',
          stroke: 'rgb(189, 189, 189)',
          strokeLinejoin: 'round',
          strokeDasharray: '2'
        }}
      />
      <path
        d="M156.726 0H110v55h46.726V0Z"
        className="icon--color-light"
        style={{ fill: 'rgb(224, 224, 224)' }}
      />
      <path
        d="M139 13h-11v29h11V13Z"
        className="icon--color-base icon--color-stroke"
        style={{
          fill: 'rgb(211, 211, 211)',
          stroke: 'rgb(189, 189, 189)',
          strokeLinejoin: 'round',
          strokeDasharray: '2'
        }}
      />
      <path
        d="M211.726 0H165v55h46.726V0Z"
        className="icon--color-light"
        style={{ fill: 'rgb(224, 224, 224)' }}
      />
      <path
        d="M194 13h-11v29h11V13Z"
        className="icon--color-base icon--color-stroke"
        style={{
          fill: 'rgb(211, 211, 211)',
          stroke: 'rgb(189, 189, 189)',
          strokeLinejoin: 'round',
          strokeDasharray: '2'
        }}
      />
      <path
        d="M266.726 0H220v55h46.726V0Z"
        className="icon--color-light"
        style={{ fill: 'rgb(224, 224, 224)' }}
      />
      <path
        d="M249 13h-11v29h11V13Z"
        className="icon--color-base icon--color-stroke"
        style={{
          fill: 'rgb(211, 211, 211)',
          stroke: 'rgb(189, 189, 189)',
          strokeLinejoin: 'round',
          strokeDasharray: '2'
        }}
      />
      <path
        d="M321.726 0H275v55h46.726V0Z"
        className="icon--color-light"
        style={{ fill: 'rgb(224, 224, 224)' }}
      />
      <path
        d="M304 13h-11v29h11V13Z"
        className="icon--color-base icon--color-stroke"
        style={{
          fill: 'rgb(211, 211, 211)',
          stroke: 'rgb(189, 189, 189)',
          strokeLinejoin: 'round',
          strokeDasharray: '2'
        }}
      />
    </svg>
  );
}