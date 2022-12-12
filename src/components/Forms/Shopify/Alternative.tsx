import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'
import Card from '../../Card'

type Props = {
  onSubmit: () => void;
}

const Alternative = ({ onSubmit }: Props) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Card
      logo
      title='Don’t use Shopify?'
      body='Unfortunately, Chad Beta is currently only available on Shopify. Let us know what platform you use and we’ll let you know when Chad becomes available there.'
      buttonText='Submit'
      callback={onSubmit}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Platform</InputLabel>
        <Select
          variant='filled'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}

        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Card>
  )
}

export default Alternative