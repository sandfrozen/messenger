import React from 'react'
import classes from '../app/layout.scss'
import {useRouter} from 'next/router'

const Contacts = () => {
  
  const router = useRouter()
  const { conversation: contact } = router.query
  
  return (
    <div className={classes.contacts}>contacts {contact || 'no'}</div>
  )
}

export default Contacts;