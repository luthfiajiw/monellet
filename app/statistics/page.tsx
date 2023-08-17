'use client'

import { Layout } from '@/components/layouts/Layout'
import withAuth from '@/hoc/withAuth'
import React from 'react'

type Props = {}

function StatisticsPage({}: Props) {
  return (
    <Layout>
      <div>StatisticsPage</div>
    </Layout>
  )
}

export default withAuth(StatisticsPage)