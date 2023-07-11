import { memo } from 'react'
import styles from './Arrow.module.scss'
import classNames from 'classnames'
import { ValueOf } from '@/types/utils'

export const ARROW_SIZE = {
  DEFAULT: 'default',
} as const

export const ARROW_ROTATE = {
  TOP: 'top',
  BOTTON: 'botton',
} as const

export const ARROW_COLOR = {
  WHITE: 'white',
} as const

export type ArrowProps = {
  rotate: ValueOf<typeof ARROW_ROTATE>
  size?: ValueOf<typeof ARROW_SIZE>
  color?: ValueOf<typeof ARROW_COLOR>
}

const Arrow: React.FC<ArrowProps> = memo(
  ({ rotate, size = ARROW_SIZE.DEFAULT, color = ARROW_COLOR.WHITE }): JSX.Element => {
    return (
      <span
        className={classNames(
          styles.arrow,
          styles['arrow_size_' + size],
          styles['arrow_color_' + color],
          styles['arrow_rotate_' + rotate],
        )}
      />
    )
  },
)

export default Arrow
