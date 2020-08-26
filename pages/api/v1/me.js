
import auth0 from '@/utils/auth0'


export default async function me(req, res) {
  try {
    await auth0.handleProfile(req, res)
  }
  catch (e) {
    res.status(error.status || 400).json(error.message)
  }
}