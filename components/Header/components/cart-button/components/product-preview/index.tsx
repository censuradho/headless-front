import { Box } from 'components'
import Image from 'next/image'
import imageFile from 'public/images/image16.png'

import * as Styles from './styles'

export function ProductPreview () {
  return (
    <Styles.Container>
      <Styles.ImagePreviewContainer>
        <Image src={imageFile} alt="images" layout="responsive" height={393} width={280} />
      </Styles.ImagePreviewContainer>
      <Box flexDirection="column" gap={1}>
        <Styles.Title>Conjunto Strappy Sensual com Aro – Isabel</Styles.Title>
        <Styles.Price>R$ 29,99</Styles.Price>
      </Box>
    </Styles.Container>
  )
}