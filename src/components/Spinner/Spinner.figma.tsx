import React from "react"
import { Spinner } from "./Spinner"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from your code props to Figma properties.
 * You should check this is correct, and update the `example` function
 * to return the code example you'd like to see in Figma
 */

figma.connect(
  Spinner,
  "https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr?node-id=12252%3A39779",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      as: figma.enum("use case", {
        loading: "g",
        default: "defs",
      }),
      // No matching props could be found for these Figma properties:
      // "state": figma.enum('state', {
      //   "1": "1",
      //   "2": "2",
      //   "3": "3",
      //   "4": "4"
      // })
    },
    example: (props) => <Spinner as={props.as} />,
  },
)