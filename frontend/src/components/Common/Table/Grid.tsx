import { memo } from 'react'
import styles from './Grid.module.scss'
import classNames from 'classnames'

export type Column = {
  id: string
  value: string | number
}
export type Header = Column

export type Row = {
  columns: Column[]
}

export type GridProps = {
  headers: Header[]
  rows: Row[]
}

const Grid: React.FC<GridProps> = ({ rows, headers }): JSX.Element => {
  return (
    <div className={styles.grid} style={{ ['--grid-col' as string]: headers.length }}>
      {headers?.map((header, index) => (
        <div
          key={header.id}
          className={classNames(
            styles.grid__column,
            styles.grid__column_type_header,
            !index && styles.grid__column_pos_start,
          )}
        >
          {header.value}
        </div>
      ))}
      {rows?.map((row, rindex) =>
        row.columns.map((column, cindex) => (
          <div
            key={column.id}
            className={classNames(
              styles.grid__column,
              !cindex && styles.grid__column_pos_start,
              rindex % 2 === 0 ? styles.grid__column_sec_black : styles.grid__column_sec_white,
            )}
          >
            {column.value}
          </div>
        )),
      )}
    </div>
  )
}

export default memo(Grid)
