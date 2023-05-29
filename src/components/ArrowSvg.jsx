import * as React from "react"
const SvgComponent = (props) => (
  <svg
  className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 12A12 12 0 1 0 12 0 12.013 12.013 0 0 0 0 12Zm17.414-1.414a2 2 0 0 1 0 2.828l-4.243 4.243-1.414-1.414L15 13H6v-2h9l-3.243-3.243 1.414-1.414Z" />
  </svg>
)
export default SvgComponent