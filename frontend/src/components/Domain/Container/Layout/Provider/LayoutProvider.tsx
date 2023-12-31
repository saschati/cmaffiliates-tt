'use client'

import { useLayoutEffect, useMemo, useState } from 'react'
import { Device, LayoutContext } from './LayoutContext'

const DISPLAY = {
  LAPTOP: 1199,
  TABLET: 992,
  MOBILE: 768,
}

const LayoutProvider: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  const [device, setDevice] = useState<Device | null>(null)

  useLayoutEffect(() => {
    const listener = () => {
      let device: Device | null = null
      const width = window.innerWidth
      const height = window.innerHeight

      if (width >= DISPLAY.LAPTOP) {
        device = Device.DESCTOP
      } else if (width >= DISPLAY.TABLET) {
        device = Device.LAPTOP
      } else if (width >= DISPLAY.MOBILE) {
        device = Device.TABLET
      } else {
        device = Device.MOBILE
      }

      setDevice(device)

      document.documentElement.style.setProperty('--window-height', height + 'px')
      document.documentElement.style.setProperty('--window-width', width + 'px')
    }

    listener()

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [])

  const context = useMemo(() => {
    return {
      device: device || Device.DESCTOP,
    }
  }, [device])

  return <LayoutContext.Provider value={context}>{children}</LayoutContext.Provider>
}

export default LayoutProvider
