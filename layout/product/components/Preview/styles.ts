import { ButtonIcon } from "components";
import { styled } from "stitches.config";

export const Container = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  '@laptops-min': {
    display: 'flex',
  }
})


export const Thumb = styled('div', {
  position: 'relative',
  maxHeight: '34.375rem',

  '.keen-slider': {
    height: '100%',

    '&__slide': {
      height: '100%'
    }
  },
  '@laptops-min': {
    width: '80%',
    display: 'flex',
    maxHeight: 'unset',
  
    '.keen-slider': {
      '&__slide': {
        width: '100%',
        height: '100%'
      }
    },
  }
})

export const Preview = styled('div', {
  display: 'none',
  '@laptops-min': {
    display: 'block',
    flex: 1,
    marginRight: '1rem',
    '.keen-slider': {
      height: '100%',
    },
  }
})

export const PreviewImageItem = styled('div', {
  variants: {
    selected: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0.6
      }
    }
  }
})

export const PreviewIconBottom = styled(ButtonIcon, {
  position: 'absolute',
  bottom: 0,
})

export const DotContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  position: 'absolute',
  bottom: '1.5rem',

  '@laptops-min': {
    display: 'none'
  }
})

export const Dot = styled('button', {
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary'
      },
      false: {
        backgroundColor: '$primaryLight'
      }
    }
  }
})

export const LikeMobile = styled('div', {
  position: 'absolute',
  right: '2rem',
  top: '2rem',
  zIndex: 9
})