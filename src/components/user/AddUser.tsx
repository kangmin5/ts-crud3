import React, { FC, SetStateAction, useState } from 'react'
import { User, userActions } from 'modules';
import { useDispatch } from 'react-redux';
import nextId, { setPrefix } from "react-id-generator";

export const AddUser: FC<{ addUserHandler: any }> = ({ addUserHandler }) => {
  let idx = nextId();
  setPrefix("a-")

  const dispatch = useDispatch();
  const [input, setInput] = useState<User>({id:idx, name:"", phone:"", email:"" })
  
  const onChange = (e: { preventDefault: () => void; target: { name: string; value: string } }) =>{
      e.preventDefault()
      const { name, value } = e.target;
      setInput({...input, [name]: value})
  }


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.name === "" || input.phone === "" || input.email === "") {
      alert('모든필드가 채워져야함')
      return;
    }

    addUserHandler(input)
    dispatch(userActions.addUserRequest(input))
    setInput({id:idx+1 ,name:"",phone:"",email:""})
  }

  return (
    <div>
          <h3>사용자추가</h3> 
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="name" onChange={onChange} />
                <label htmlFor="phone">mobile</label>
                <input type="text" name="phone" id="phone" placeholder="phone" onChange={onChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="email" onChange={onChange} />
              
                <button >추가</button>
            </form>
        </div>
  )
}

export default AddUser