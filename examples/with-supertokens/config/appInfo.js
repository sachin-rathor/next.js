const port = process.env.APP_PORT || 3000

const apiBasePath = '/api/auth/'

export const websiteDomain =
  process.env.APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
//     `http://localhost:${port}`
      `https://purple-hill-066e8f11e.2.azurestaticapps.net`

export const appInfo = {
  appName: 'SuperTokens Demo App',
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath,
}
