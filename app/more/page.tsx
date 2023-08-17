'use client'

import { Layout } from '@/components/layouts/Layout'
import withAuth from '@/hoc/withAuth'
import React from 'react'

type Props = {}

function MorePage({}: Props) {
  return (
    <Layout>
      <div>MorePage</div>
    </Layout>
  )
}

export default withAuth(MorePage)