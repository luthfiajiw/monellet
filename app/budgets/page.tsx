'use client'

import { Layout } from '@/components/layouts/Layout'
import withAuth from '@/hoc/withAuth'
import React from 'react'

type Props = {}

function BudgetsPage({}: Props) {
  return (
    <Layout>
      <div>BudgetsPage</div>
    </Layout>
  )
}

export default withAuth(BudgetsPage)