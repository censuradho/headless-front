import { createStitches } from '@stitches/react'
import { colors } from 'constants/colors'

const { styled, globalCss: GlobalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      primary: colors.RAZZMATAZZ,
      primaryDark: colors.ROSE_BUD_CHERRY,
      primaryLight: colors.CHERUB,
			foreground: colors.CATSKILL_WHITE,
      title: colors.RIVER_BED,
      background: colors.WHITE,
      highlight: colors.CATSKILL_WHITE,
      green: colors.SEA_GREEN,
			greenLight: colors.BLUE_ROMANCE,
			error: colors.CINNABAR,
			overlay: colors.OVERLAY
    },
    space: {
      xs: '0.75rem',
			sm: '1rem',
			md: '1.37500',
			lg: '1.5rem',
    },
		fonts: {
			text: 'Inter, sans-serif'
		},
		radii: {
			'sm': '0.375rem',
		},
		lineHeights: {
			caption2: '0.8125rem',
			caption1: '1rem',
			footnote: '1.12500rem',
			subHeadline: '1.25rem',
			callout: '1.3125rem',
			body: '1.37500rem',
			title1: '1.5625rem',
			title2: '1.75rem',
			largeTitle: '2.5625rem'
		},
    fontSizes: {
			caption2: '0.6875rem',
			caption1: '0.75rem',
			footnote: '0.8125rem',
			subHeadline: '0.9375rem',
			callout: '1rem',
			body: '1.0625rem',
			title1: '1.25rem',
			title2: '1.37500rem',
			largeTitle: '2.12500rem'
		},
  },
	media: {
		'smartphone': '(min-width: 480px)',
		'tablet': '(min-width: 768px)',
		'laptops': '(min-width: 1024px)',
		'desktop': '(min-width: 1200px)',
		'tv': '(min-width: 1420px)',
	},
})

const globalStyle =  GlobalCss({
	'*': {
		padding: '0',
		margin: '0',
		boxSizing: 'border-box',
		fontFamily: '$text',
		color: '$title'
	},
	body: {
		backgroundColor: '$background',
		width: '100%',
		height: '100%'
	},
	button: {
		background: 'none',
		border: 'none',
		cursor: 'pointer'
	},
	h1: {
		fontWeight: '500',
		fontFamily: '$text',
		lineHeight: '3.5rem'
	},
	h2: {
		fontFamily: '$text',
		fontWeight: '500',
		lineHeight: '4.3rem'
	},
	li: {
		listStyle: 'none'
	},
	a: {
    fontWeight: 500,
    textDecoration: 'none',
		cursor: 'pointer'
   },
})

export {
  styled, 
  getCssText, 
  theme, 
  css, 
  keyframes, 
  createTheme,
  globalStyle
}