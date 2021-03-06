import { UserList } from 'components'
import AddUser from 'components/user/AddUser'
import { fetchUsers, User } from 'modules'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styles from 'styles/user.module.css'
import AddUserPage from './addUser'

const UserPage: NextPage = () => {
  const [users, setUsers] = useState<Array<User>>([])

  const addUserHandler = (user:any) => {
    console.log('>>>>>user:', user)
    setUsers([user,...users])
  }
  useEffect(() => {
      fetchUsers()
      .then((response:any) => {
          console.log(response.data)
          setUsers(response.data)
      })
  }, [])


  return (
    <div className={styles.container}>
      <AddUserPage addUserHandler={addUserHandler } />
      <UserList users={users} />
    </div>
  )
}

export default UserPage