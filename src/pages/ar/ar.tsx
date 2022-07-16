import React from 'react'
import styles from 'styles/ar.module.css'
const ar = () => {
  return (
      <div className={styles.container}>
          <h3>ar</h3>
        <div className={styles.all}>
          <div className={styles.left}>왼쪽</div>  
          <div className={styles.right}>오른쪽</div>  
        </div>
    </div>
  )
}

export default ar