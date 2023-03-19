import $api from '../api/interceptors'
import Endpoints from '../api/Endpoints'

export default class AuthService {
  static async login(values) {
    return $api.post(Endpoints.AUTH.LOGIN, { values })
  }

  static async registraton(values) {
    return $api.post(Endpoints.AUTH.REGISTER, { values })
  }

  static async logout() {
    return $api.post('/logout')
  }
}
