import * as React from "react"
const SvgComponent = (props) => (
  <svg
    id="twitch"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={512}
    height={512}
    style={{
      enableBackground: "new 0 0 24 24",
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 0 1.714 4.286v15.429h5.143V24l4.286-4.286h3.429L22.286 12V0H6zm14.571 11.143-3.429 3.429h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z" />
    <path d="M16.286 4.714H18v5.143h-1.714zM11.571 4.714h1.714v5.143h-1.714z" />
  </svg>
)
export default SvgComponent