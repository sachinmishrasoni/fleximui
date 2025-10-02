import CodeBlock from '@/components/common/CodeBlock'
import { Box, Typography } from '@mui/material'
import React from 'react'
import ButtonRow from '@/components/ui/Button/index.tsx?raw';

const Components: React.FC = () => {
  return (
    <Box component={'section'} >

      <Box mb={1}>
        <Typography variant="caption" lineHeight={1}>Home/Components</Typography>
        <Typography variant="h5" fontWeight={600}>Components</Typography>
      </Box>

      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere dignissimos consequatur porro maxime? Ab aspernatur earum ad doloremque praesentium.</Typography>

       <CodeBlock code={ButtonRow} />
       
       <Typography variant="body1" mt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere dignissimos consequatur porro maxime? Ab aspernatur earum ad doloremque praesentium.</Typography>

    </Box>
  )
}

export default Components