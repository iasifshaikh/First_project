import { useState } from 'react'
import classes from './user.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModule'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState('')

  const AddUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        Message: 'Please entere valid name and age (non-empty value)',
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        Message: 'please entered valid age (greater than zero)',
      })
      return;
    }

    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }
  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          Message={error.Message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">AddTask</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={enteredUsernameHandler}
          ></input>
          <label htmlFor="age">Description</label>
          <input
            id="age"
            type="text "
            value={enteredAge}
            onChange={enteredAgeHandler}
          ></input>
          <Button type="submit">AddUser</Button>
          <br />
          <br />
        </form>
      </Card>
    </div>
  )
}
export default AddUser
