import React from 'react'
import { Link } from 'react-router-dom'

export const HamLink = (props) => {
  return (
  <Link className={`px-6 py-3 bg-primary/0 hover:bg-primary/20 font-medium rounded-full transition-all duration-400 ease-in-out`} to={props.to}>{props.name}</Link>
    )
    }
    
    export const DrawerLink = (props) => {
      return (
        <Link className={`px-6 py-3 bg-primary/0 hover:bg-primary/20 font-medium rounded-full transition-all duration-400 ease-in-out`} to={props.to}>{props.name}</Link>
  )
}


HamLink.defaultProps={
  name:"Link",
  to:"#"
}
DrawerLink.defaultProps={
  name:"Link",
  to:"#"
}