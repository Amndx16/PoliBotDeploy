import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/lib/api'

export interface Usuario {
  id: number
  correo: string
  boleta: string
  token?: string
}

export const useUserStore = defineStore('user', () => {

  const usuario = ref<Usuario | null>(null)
  const cargando = ref(false)
  const error = ref<string | null>(null)


  const isAuthenticated = computed(() => !!usuario.value)
  const userEmail = computed(() => usuario.value?.correo ?? '')
  const userBoleta = computed(() => usuario.value?.boleta ?? '')



  const register = async (correo: string, boleta: string, password: string) => {
    cargando.value = true
    error.value = null
    try {
      const res = await api.post('/usuarios', { correo, boleta, password })
      usuario.value = res.data
      return res.data
    } catch (err: any) {
      console.error('Error en registro:', err)
      error.value = err.response?.data?.error || 'No se pudo registrar el usuario'
      throw err
    } finally {
      cargando.value = false
    }
  }

  const login = async (correo: string, password: string) => {
    cargando.value = true
    error.value = null
    try {
      const res = await api.post('/usuarios/login', { correo, password })
      usuario.value = res.data
      localStorage.setItem('usuario', JSON.stringify(res.data))
      return res.data
    } catch (err: any) {
      console.error('Error en login:', err)
      error.value = err.response?.data?.error || 'Credenciales incorrectas'
      throw err
    } finally {
      cargando.value = false
    }
  }

  const loadUserFromStorage = () => {
    const saved = localStorage.getItem('usuario')
    if (saved) usuario.value = JSON.parse(saved)
  }

  const logout = () => {
    usuario.value = null
    localStorage.removeItem('usuario')
  }


  return {
    // state
    usuario,
    cargando,
    error,
    // getters
    isAuthenticated,
    userEmail,
    userBoleta,
    // actions
    register,
    login,
    logout,
    loadUserFromStorage
  }
})
