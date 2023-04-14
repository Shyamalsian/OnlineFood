import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {

    const prise = `$${props.price}`
    return(
        <li className={classes.meal}>
            <div>
            
            <div >
                <h3>
                    {props.name}
                </h3>                
            </div>
            <div className={classes.description}>
                {props.description}
            </div>
            <div className={classes.price}>
                {prise}
            </div>
                
            </div>
            <div>
                <MealItemForm/>
            </div>
        </li>
    )
}

export default MealItem