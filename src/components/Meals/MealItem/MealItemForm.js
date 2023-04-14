import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

function MealItemForm(props) {
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{
            id:'amount',
            type:'number',
            min:'0',
            max:'5',
            step:'1',
            default:'0'
        }}/>
        <button>+ADD</button>
    </form>
  )
}

export default MealItemForm