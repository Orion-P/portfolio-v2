/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
// import AnimatedCursor from "react-animated-cursor"

export default function App() {
  return <div className="App"></div>
}

//    //   <AnimatedCursor />
export const wrapRootElement = ({ element }) => {
  return <div>{element}</div>
}
// <AnimatedCursor
// innerSize={10}
// outerSize={10}
// color="28, 238, 28"
// outerAlpha={0.3}
// innerScale={1}
// outerScale={7}
// />
