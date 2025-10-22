import { defineStore } from 'pinia'
import { AxiosError } from 'axios'
import api from '@/lib/api'
import { toast } from 'vue-sonner'
import type { Student } from '@/types/student.types'

export const useStudentStore = defineStore('student', {
  state: () => ({
    student: null as Student | null,
    loading: false,
    error: '' as string | null,
  }),

  getters: {
    isLoaded: (state) => !!state.student,
    fullName: (state) => state.student?.nombre || '',
  },

  actions: {
    async fetchStudent(boleta: string) {
      this.loading = true
      this.error = null
      toast.info('Cargando información del estudiante...')

      try {
        const res = await api.get<Student>(`/student/${boleta}`)
        this.student = res.data
        toast.success('Datos del estudiante cargados 🎓')
      } catch (error) {
        this._handleAxiosError(error, 'Error al obtener los datos')
      } finally {
        this.loading = false
      }
    },

    async updateStudent(data: Partial<Student>) {
      if (!this.student) return
      this.loading = true
      toast.info('Actualizando información...')

      try {
        const boleta = this.student.boleta
        const res = await api.put<Student>(`/student/${boleta}`, data)
        this.student = res.data
        toast.success('Datos actualizados correctamente ')
      } catch (error) {
        this._handleAxiosError(error, 'Error al actualizar los datos')
      } finally {
        this.loading = false
      }
    },

    loadMock() {
      this.student = {
        nombre: 'Andrea Medellín Niño',
        carrera: 'Ingeniería en Inteligencia Artificial',
        foto: '',
        boleta: '2023630592',
        plantel: 'ESCOM',
        curp: 'TURF020523MMCRDR4R4',
        rfc: 'TURF020523',
        sexo: 'Mujer',
        nacimiento: {
          fecha: '23 May 2002',
          nacionalidad: 'México',
          entidad: 'Ciudad de México',
        },
        direccion: {
          calle: 'Avenida Centenario 3004 BIS',
          colonia: 'Lomas de Tarango',
          cp: '01620',
          estado: 'Ciudad de México',
          municipio: 'Álvaro Obregón',
          telefono: '5528618496',
          email: 'trujillo.rodriguez.fernanda23@gmail.com',
          labora: 'No',
        },
        escolaridad: {
          procedencia: 'CET 1',
          entidadEscuela: 'Ciudad de México',
          promedioSecundaria: '9.00',
          promedioBachillerato: '8.10',
        },
        tutor: {
          nombreTutor: 'Sin especificar',
          rfcTutor: 'XXXX999999',
          padre: 'Sin especificar',
          madre: 'Sin especificar',
        },
      }
      toast('Mock cargado (modo desarrollo)')
    },

    _handleAxiosError(error: unknown, titleFallback: string) {
      if (error instanceof AxiosError) {
        const message =
          (error.response?.data as any)?.error ||
          error.message ||
          'Error desconocido.'

        toast.error(`${titleFallback}: ${message}`)
      } else {
        toast.error(`${titleFallback}: Ha ocurrido un error inesperado.`)
      }
      this.error = titleFallback
    },
  },
})
