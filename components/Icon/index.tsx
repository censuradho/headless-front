import { icons } from 'constants/icons'
import { useTheme } from 'context/theme'
import { IconProps } from './type'

export function Icon (props: IconProps) {
  const { name, color, customColor, size = 20 } = props

  const { theme }  = useTheme()

  const Svg = icons[name]

  const fill = ((color ? theme.colors[color].value : customColor) || theme.colors.title) as string

  return (
    <Svg fill={fill} size={size} />
  )
}