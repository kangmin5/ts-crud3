import { UserList } from 'components'
import AddUser from 'components/user/AddUser'
import { fetchUsers, User } from 'modules'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styles from 'styles/user.module.css'

const UserPage: NextPage = () => {
  const [users, setUsers] = useState<Array<User>>([])

  const addUserHandler = (user:any) => {
    console.log('>>>>>user:', user)
    setUsers([...users,user])
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
      <AddUser addUserHandler={addUserHandler } />
      <UserList users={users} />
    </div>
  )
}

export default UserPage