import * as React from 'react'
import { Card, Checkbox, Slider, FormControlLabel, Typography } from '@material-ui/core'
import styled from 'styled-components'
import ColorPicker from './ColorPicker'
import useStore from '../useStore'

const Container = styled(Card)`
  grid-column: 1 / 3;
  display: grid;
  overflow: auto;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));;
  grid-gap: 4rem;
  padding: 2rem;
`


const EmailStyles: React.FC = () => {
  const { styles, setStyle } = useStore()
  return (
    <Container>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={styles.isBorder}
              onChange={(e) => setStyle({ isBorder: e.target.checked })}
              name="Border"
              color="primary"
            />
          }
          label="Border"
        />
      </div>
      <div>
        <Typography id="fontSize-slider" gutterBottom>
          Font Size
        </Typography>

        <Slider min={1} max={100} value={styles.fontSize} onChange={(_e, value) => setStyle({ fontSize: value as number })} aria-labelledby="fontSize-slider" />
      </div>
      <div>
        <Typography id="imgSize-slider" gutterBottom>
          Image Size
        </Typography>

        <Slider min={1} max={1000} value={styles.imageSize} onChange={(_e, value) => setStyle({ imageSize: value as number })} aria-labelledby="imgSize-slider" />
      </div>
      <div>
        <Typography id="colorPicker" gutterBottom>
          Font Color
        </Typography>

        <ColorPicker color={styles.fontColor} onChange={(value) => setStyle({ fontColor: value.hex })} />
      </div>
    </Container>
  )
}

export default EmailStyles