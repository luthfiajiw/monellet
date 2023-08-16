interface User {
  id: string
  name: string
  email: string
  hash?: string
}

interface Session {
  user?: User
  expired?: boolean
}