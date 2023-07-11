import React, { memo } from 'react'
import styles from './ChartAnalytics.module.scss'
import classNames from 'classnames'
import { ValueOf } from '@/types/utils'

export const CHART_ANALITYC_COLOR = {
  NEON: 'neon',
}

export type Stack = {
  height: number
  label: string
  color?: ValueOf<typeof CHART_ANALITYC_COLOR>
}

export type ChartAnalyticsProps = {
  stacks: Stack[]
  color?: Stack['color']
}

const ChartAnalytics: React.FC<ChartAnalyticsProps> = memo(
  ({ stacks, color = CHART_ANALITYC_COLOR.NEON }): JSX.Element => {
    return (
      <div className={styles.chartAnalytics}>
        {stacks.map((stack) => (
          <React.Fragment key={stack.label}>
            <div
              className={classNames(
                styles.chartAnalytics__stack,
                styles['chartAnalytics__stack_color_' + (stack.color || color)],
              )}
              style={{ ['--chart-analytics-stack-height' as string]: `${stack.height}px` }}
            />
            <span className={styles.chartAnalytics__label}>{stack.label}</span>
          </React.Fragment>
        ))}
      </div>
    )
  },
)

export default ChartAnalytics
