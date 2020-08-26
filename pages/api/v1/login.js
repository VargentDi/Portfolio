
import auth0 from '@/utils/auth0'

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res)
  }
  catch (e) {
    res.status(error.status || 400).json(error.message)
  }
}