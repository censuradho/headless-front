import dynamic from 'next/dynamic'

export const icons = {
  logo: dynamic(() => import('public/icons/logo.svg'))
}