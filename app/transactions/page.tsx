'use client'

import { Layout } from '@/components/layouts/Layout'
import withAuth from '@/hoc/withAuth'
import React from 'react'

type Props = {}

function TransactionsPage({}: Props) {
  return (
    <Layout>
      <div>TransactionsPage</div>
    </Layout>
  )
}

export default withAuth(TransactionsPage)