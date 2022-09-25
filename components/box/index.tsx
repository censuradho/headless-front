import { CSSProperties, memo, ReactNode } from 'react'

type ViewStyle =  Pick<CSSProperties, 
  'alignItems' 
  | 'alignSelf'
  | 'alignContent'
  | 'justifyContent'
  | 'flex'
  | 'marginBottom'
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'flexDirection'
  | 'backgroundColor'
>


interface BoxProps extends ViewStyle {
  children: ReactNode;
  fullWidth?: boolean
}


export function Box (props: BoxProps) {
  const { children, fullWidth, ...otherProps} = props

	return (
		<div style={{
			...otherProps,
			width: fullWidth ? '100%' : 'auto'
		}}>
			{children}
		</div>
	)
}
