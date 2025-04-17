'use client'

import React from 'react'
import { Button } from '@payloadcms/ui'

export type BeforeIndicatorProps = { children?: React.ReactNode }

export const BeforeIndicator = ({}: BeforeIndicatorProps) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const buttonText = isLoading ? 'Deploying...' : 'Deploy to Staging'

  return (
    <div>
      <Button
        buttonStyle="secondary"
        onClick={() => {
          setIsLoading((prev) => !prev)
        }}
      >
        {buttonText}
      </Button>
      <br />
      <p>
        <strong>Note:</strong> This does not currently deploy, to be implemented in a later ticket.
      </p>
    </div>
  )
}