import { Layout } from 'antd'
import { AuthFooter } from 'components/auth/footer'
import { NextPage } from 'next'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LoadingPage } from '../components/loading.page'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { publicRuntimeConfig } = getConfig() as {
  publicRuntimeConfig: {
    spa: boolean
  }
}

const Index: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation()

  useEffect(() => {
    if (router.pathname !== window.location.pathname && window.location.pathname.length > 2) {
      let href = router.asPath
      const as = router.asPath
      const possible = [/(\/form\/)[^/]+/i, /(\/admin\/forms\/)[^/]+/i, /(\/admin\/users\/)[^/]+/i]

      possible.forEach((r) => {
        if (r.test(as)) {
          href = href.replace(r, '$1[id]')
        }
      })

      router.replace(href, as).catch((e: Error) => {
        console.error('failed redirect', e)
      })
    }
  })

  if (
    publicRuntimeConfig.spa ||
    (process.browser &&
      router.pathname !== window.location.pathname &&
      window.location.pathname.length > 2)
  ) {
    return <LoadingPage message={t('loading')} />
  }

  return (
    <Layout
      style={{
        height: '100vh',
        background: '#437fdc',
      }}
    >
      <img
        alt={'OhMyForm'}
        style={{
          margin: 'auto',
          maxWidth: '90%',
          width: 500,
          textAlign: 'center',
        }}
        src={require('../assets/images/logo_white.png') as string}
      />

      <AuthFooter />
    </Layout>
  )
}

export default Index
