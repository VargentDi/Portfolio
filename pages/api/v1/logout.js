
import auth0 from '@/utils/auth0'

export default async function logout(req, res) {
  try {
    await auth0.handleLogout(req, res)
  }
  catch (e) {
    res.status(error.status || 400).json(error.message)
  }
}