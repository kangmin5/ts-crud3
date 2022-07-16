import AddUser from 'components/user/AddUser'
import { NextPage } from 'next'
import React from 'react'

const AddUserPage:NextPage<{addUserHandler:any}> = ({addUserHandler}) => {
  return (
      <div>
          <AddUser addUserHandler={addUserHandler } />
    </div>
  )
}

export default AddUserPage