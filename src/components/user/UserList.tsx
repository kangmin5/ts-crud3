import { User } from 'modules/types'
import { ColorLine } from 'components'
import React, { FC } from 'react'
import styles from 'styles/user.module.css'

const UserList: FC<{users:User[]}> = ({users}) => {

    const renderUserList = users.map((user: User) => {
        return(
        <ul className={styles.ul2} key={user.id}>
            <li className={styles.li} >{user.id }</li>
            <li className={styles.li}>{user.name }</li>
            <li className={styles.li}>{user.phone }</li>
            <li className={styles.li}>{user.email }</li>
        </ul>
        )}
    )

  return (
      <div className={styles.container}>
          <h3>사용자 목록</h3>
        <div className={styles.userList} >
            <ul className={styles.ul1}>
                <li>ID</li>
                <li>이름</li>
                <li>휴대번호</li>
                <li>이메일</li>
            </ul>
            <ColorLine border={'1px solid '} width={'42vw'} />
            {renderUserList}
        </div>  
    </div>
  )
}

export default UserList