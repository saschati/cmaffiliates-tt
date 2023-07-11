'use client'

import Chart from '@/Domain/Weather/Chart/Chart'
import styles from './page.module.scss'
import Table from '@/Domain/Weather/Table/Table'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__chart}>
        <Chart />
      </div>
      <div className={styles.homepage__table}>
        <Table />
      </div>
    </div>
  )
}
