import React, { memo } from 'react'
import styles from './ChartBackground.module.scss'

export type ChartBackgroundProps = {
  totals: string[]
}

const ChartBackground: React.FC<ChartBackgroundProps> = memo(({ totals }): JSX.Element => {
  return (
    <div className={styles.cartBackground}>
      {totals.map((total) => (
        <React.Fragment key={total}>
          <div className={styles.cartBackground__value}>{total}</div>
          <div className={styles.cartBackground__horizontal} />
        </React.Fragment>
      ))}
    </div>
  )
})

export default ChartBackground
