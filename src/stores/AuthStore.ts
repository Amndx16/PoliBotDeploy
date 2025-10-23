import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { router } from '@/router'
import { toast } from 'vue-sonner'
import api from '@/lib/api'

interface LoginResponse {
  token: string
  boleta: string
  correo?: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: Cookies.get('token') || '',
    userBoleta: Cookies.get('boleta') || '',
    userCorreo: Cookies.get('correo') || '',
    isAuth: !!Cookies.get('token'),
    loading: false,
    error: '' as string | null
  }),

  getters: {
    usuario: (state) => ({
      boleta: state.userBoleta,
      correo: state.userCorreo
    }),
    isAuthenticated: (state) => state.isAuth
  },

  actions: {
    hydrate() {
      const token = Cookies.get('token')
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        this.isAuth = true
      }
    },

    async register(correo: string, boleta: string, password: string) {
      this.loading = true
      this.error = null
      toast.info('Registrando usuario...')

      try {
        const res = await api.post<LoginResponse>('/usuarios', { correo, boleta, password })
        toast.success('Registro exitoso 🎉')
        return res.data
      } catch (error) {
        this._handleAxiosError(error, 'Error al registrar usuario')
      } finally {
        this.loading = false
      }
    },

    async login(boleta: string, password: string) {
      this.loading = true
      this.error = null
      toast.info('Iniciando sesión...')

      try {
        const res = await api.post<LoginResponse>('/usuarios/login', { boleta, password })
        const token = res.data.token
        const correo = res.data.correo

        // Guardar en cookies
        Cookies.set('token', token, { expires: 7 })
        Cookies.set('boleta', boleta, { expires: 7 })
        if (correo) Cookies.set('correo', correo, { expires: 7 })

        // Configurar header global
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        // Actualizar store
        this.token = token
        this.userBoleta = boleta
        this.userCorreo = correo || ''
        this.isAuth = true

        toast.success(`Bienvenida, ${boleta} `)
        setTimeout(() => router.push({ name: 'dashboard' }), 800)
      } catch (error) {
        this._handleAxiosError(error, 'Error al iniciar sesión')
      } finally {
        this.loading = false
      }
    },

    logout() {
      toast('Cerrando sesión... ')

      Cookies.remove('token')
      Cookies.remove('boleta')
      Cookies.remove('correo')

      this.token = ''
      this.userBoleta = ''
      this.userCorreo = ''
      this.isAuth = false

      delete axios.defaults.headers.common['Authorization']
      setTimeout(() => router.push({ name: 'login' }), 800)
    },

    _handleAxiosError(error: unknown, titleFallback: string) {
      if (error instanceof AxiosError) {
        const status = error.response?.status
        const message =
          (error.response?.data as any)?.error ||
          error.message ||
          'Error desconocido.'

        if (status === 401 || status === 403) {
          toast.error('No autorizado. Inicia sesión nuevamente.')
          this.logout()
          return
        }

        toast.error(`${titleFallback}: ${message}`)
      } else {
        toast.error(`${titleFallback}: Ha ocurrido un error inesperado.`)
      }
    }
  }
})
