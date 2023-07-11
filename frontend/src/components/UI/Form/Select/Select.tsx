'use client'

import styles from './Select.module.scss'
import Input, { InputProps } from '@/UI/Form/Input'
import { Arrow } from '@/UI/Icon/Custom'
import { useClickOutside } from '@/hooks/useClickOutside'
import { memo, useRef, useState } from 'react'
import classNames from 'classnames'

export type Option = {
  value: string
  label: string
  isSelected?: boolean
}

export type SelectProps = {
  value?: string
  onSelect: (value: Option) => void
  options: Option[]
  placeholder?: string
  input?: Omit<InputProps, 'type' | 'value' | 'placeholder'>
  isMultiple?: boolean
}

const Select: React.FC<SelectProps> = memo(
  ({ value, onSelect, options, isMultiple, placeholder, input }): JSX.Element => {
    const ref = useRef(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handlerClick = () => setIsOpen(!isOpen)

    useClickOutside(ref, () => setIsOpen(false))

    return (
      <div className={styles.select} ref={ref}>
        <div className={styles.select__handler} onClick={handlerClick}>
          <Input
            {...(input as InputProps)}
            type="text"
            readOnly
            value={value}
            placeholder={placeholder}
            ricon={<Arrow rotate={isOpen ? 'top' : 'botton'} />}
            riconClassName={classNames(
              styles.select__ricon,
              isOpen && styles.select__ricon_rotate_top,
            )}
          />
        </div>
        {isOpen && (
          <div className={styles.select__optionsOverflow}>
            <ul className={styles.select__options}>
              {options.map((option) => (
                <li
                  className={classNames(
                    styles.select__option,
                    option.isSelected && styles.select__option_type_active,
                  )}
                  key={option.value}
                  onClick={() => {
                    onSelect(option)
                    if (!isMultiple) {
                      setIsOpen(false)
                    }
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  },
)

export default Select
