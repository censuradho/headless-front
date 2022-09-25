import { styled, keyframes  } from "stitches.config";
import * as TooltipPrimitive from '@radix-ui/react-tooltip';


export const Container = styled('div', {
  position: 'relative'
})

export const Count = styled('div', {
  fontSize: '0.8rem',
  fontWeight: 600,
  width: '1.2rem',
  height: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: '15%',
  right: '15%',
  color: '#fff',
  background: '$primary',
  borderRadius: '50%',
  position: 'absolute'
})


const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});



export const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  lineHeight: 1,
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  '@laptops-max': {
    display: 'none'
  }
});

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'white',
});

export const TooltipPortal = TooltipPrimitive.Portal
export const TooltipTrigger = styled(TooltipPrimitive.Trigger, {
  width: '3.375rem',
  height: '3.375rem',
  borderRadius: '50%',
  background: '$primaryLight',
  position: 'relative',
});

export const TooltipProvider = TooltipPrimitive.Provider;

export const TooltipRoot = TooltipPrimitive.Root;


