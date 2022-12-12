import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import check from '../assets/check.png'

type Props = {
  items: Item[]
}

interface Item {
  title: string;
  body: string;
}


const List = ({ items }: Props) => {
  return (
    <Box
      sx={{
        background: { xs: '#F8F9FC', md: 'initial' },
        borderRadius: { xs: 2, md: 0 },
        padding: { xs: 2, md: 0 },
      }}
    >
      <ul
        style={{
          listStyleImage: `url(${check})`,
          paddingLeft: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          margin: 0,
        }}
      >
        {items.map((item: Item, i) =>
          <li key={i}>
            <Stack spacing={0.5}>
              <Typography variant="body2" color="#134267" sx={{ fontWeight: '600' }}>{item.title}</Typography>
              <Typography variant="caption" >{item.body}</Typography>
            </Stack>
          </li>
        )}
      </ul>
    </Box>
  )
}

export default List