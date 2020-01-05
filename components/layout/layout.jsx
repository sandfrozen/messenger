import React from 'react'
import classes from './layout.scss'

const layout = () => (
  <div className={classes.grid}>
    <div className={classes.notification}></div>
    <div className={classes.user}></div>
    <div className={classes.contacts}></div>
    <div className={classes.conversation}></div>
  </div>
)

export default layout;