
import {FormControlLabel, Checkbox} from '@material-ui/core'

const Filter = ({checked, onChange}) =>{
    return(
        <div className='users-container' >
        <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} name="checkedA" color="primary"/>}
        label="Sort Posts By Date"
      />
        </div>
    )
}

export default Filter;