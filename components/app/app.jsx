import React from 'react'

import Notification from '../notification/notification'
import User from '../user/user'
import Contacts from '../contacts/contacts'
import Conversation from '../conversation/conversation'

import classes from './layout.scss'

const App = () => {
  
  return (
    <div className={classes.grid}>
      <Notification />
      <User />
      <Contacts />
      <Conversation />
    </div>
  )
}

export default App