import * as React from 'react'
import { Button, Card, TextField } from '@mui/material'
import styled from 'styled-components'
import useStore from '../useStore'
import { fileToBase64 } from '../imageUtils'

const Container = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: auto;
`


const EmailInputs: React.FC = () => {
  const { name, phone, role, website, setValue } = useStore()
  return (
    <Container>
      <form>
        <TextField variant="standard"  fullWidth label='name' name='name' onChange={(e) => setValue('name', e.target.value)} value={name} />
        <TextField variant="standard"  fullWidth label='phone' name='phone' onChange={(e) => setValue('phone', e.target.value)} value={phone} />
        <TextField variant="standard"  fullWidth label='role' name='role' onChange={(e) => setValue('role', e.target.value)} value={role} />
        <TextField variant="standard"  fullWidth label='website' name='website' onChange={(e) => setValue('website', e.target.value)} value={website} />
        <Button
          variant="contained"
          component="label"
        >
          Upload Logo
          <input
            onChange={async (event) => {
              const fileUploaded = event.target.files?.length
                ? event.target.files[0]
                : undefined
              if (fileUploaded) {
                setValue('logo', await fileToBase64(fileUploaded))
              }


            }}
            type="file"
            hidden
          />
        </Button>

      </form>
    </Container>
  )
}

export default EmailInputs