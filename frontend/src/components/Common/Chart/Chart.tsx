import { ValueOf } from '@/types/utils'
import styles from './Chart.module.scss'
import classNames from 'classnames'
import ChartBackground from './ChartBackground'
import ChartAnalytics, { type Stack } from './ChartAnalytics'
import { memo, useEffect, useMemo, useState } from 'react'

const CHART_ANALITYC_COLOR = {
  NEON: 'neon',
}

export type YAxisItem = {
  label: string
}

export type YAxis = {
  items: YAxisItem[]
  max: number
  pattern?: `${string}{{num}}${string}`
}

export type XAxisItem = {
  label: string
  rate: number
  color?: Stack['color']
}

export type XAxis = {
  items: XAxisItem[]
}

export type ChartProps = {
  title: string
  valueName: string
  color?: ValueOf<typeof CHART_ANALITYC_COLOR>
  yAxis: YAxis
  xAxis: XAxis
}

const Chart: React.FC<ChartProps> = memo(
  ({ title, valueName, yAxis, xAxis, color = CHART_ANALITYC_COLOR.NEON }): JSX.Element => {
    const [backgroundHeight, setBackgroundHeight] = useState(0)
    const [stacks, setStacks] = useState<Stack[]>([])

    useEffect(() => {
      const newStocks = xAxis.items.map((item) => {
        const percent = 1 - (yAxis.max - item.rate) / yAxis.max

        return {
          height: Math.ceil(percent * backgroundHeight),
          label: item.label,
          color: item.color,
        }
      })

      setStacks(newStocks)
    }, [backgroundHeight, yAxis, xAxis])

    const totals = useMemo(() => {
      const pattern = yAxis.pattern || '{{num}}'

      return yAxis.items.map((item) => pattern.replace('{{num}}', item.label)).reverse()
    }, [yAxis])

    return (
      <div className={styles.chart}>
        <div className={styles.chart__header}>
          <h3 className={styles.chart__title}>{title}</h3>
          <div
            className={classNames(
              styles.chart__valueName,
              styles['chart__valueName_color_' + color],
            )}
          >
            {valueName}
          </div>
        </div>
        <div className={styles.chart__content}>
          <div
            className={styles.chart__background}
            ref={(elem) => setBackgroundHeight((elem?.clientHeight && elem.clientHeight - 16) || 0)}
          >
            <ChartBackground totals={totals} />
          </div>
          <div className={styles.chart__analytics}>
            <ChartAnalytics stacks={stacks} />
          </div>
        </div>
      </div>
    )
  },
)

export default Chart
