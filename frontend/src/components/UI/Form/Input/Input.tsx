'use client'

import React, { memo, useImperativeHandle, useRef } from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames'

type RIcon =
  | {
      ricon?: JSX.Element
      riconClassName?: never
    }
  | {
      ricon: JSX.Element
      riconClassName: string
    }

export type InputHandle = {
  focus: () => void
}

export type InputProps = JSX.IntrinsicElements['input'] &
  RIcon & {
    type: React.HTMLInputTypeAttribute
    ref?: React.Ref<HTMLInputElement> | null
  }

const Input = memo(
  React.forwardRef<InputHandle, InputProps>(
    ({ type, className, ricon, riconClassName, ...rest }, ref): JSX.Element => {
      const inputRef = useRef<HTMLInputElement>(null)

      useImperativeHandle(
        ref,
        () => ({
          focus: () => inputRef.current?.focus(),
        }),
        [],
      )

      return (
        <div className={classNames(styles.input, className)}>
          <div className={styles.input__group}>
            <input ref={inputRef} className={styles.input__handler} type={type} {...rest} />
            {ricon && (
              <div className={classNames(styles.input__ricon, riconClassName)}>{ricon}</div>
            )}
          </div>
        </div>
      )
    },
  ),
)

export default Input
