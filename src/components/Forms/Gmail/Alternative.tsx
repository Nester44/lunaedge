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
      title='Don’t use Gmail?'
      body='Unfortunately, Chad Beta only integrates with Gmail. Let us know what email client you use to receive customer support emails and we’ll let you know when we add it as an integration.'
      buttonText='Submit'
      callback={onSubmit}
    >
      <FormControl fullWidth>
        <InputLabel disableAnimation id="demo-simple-select-label">Platform</InputLabel>
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