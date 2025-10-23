import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore'

/* Layout principal */
import HomeView from '@/views/HomeView.vue'

/* Vistas */
import DashboardView from '@/views/DashboardView.vue'
import DatosPersonalesView from '@/views/PersonalInfoView.vue'
import DatosAcademicosView from '@/views/AcademicInfoView.vue'
import OfertaAcademicaView from '@/views/OffertSchedules.vue'
import GeneradorHorarioView from '@/views/TimeTableGenerator.vue'
import DocentesResenasView from '@/views/TeachingReviews.vue'
import LoginView from '@/views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    component: HomeView,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'dashboard', component: DashboardView },
      { path: 'datos-personales', name: 'datos-personales', component: DatosPersonalesView },
      { path: 'datos-academicos', name: 'datos-academicos', component: DatosAcademicosView },
      { path: 'oferta-academica', name: 'oferta-academica', component: OfertaAcademicaView },
      { path: 'generador-horario', name: 'generador-horario', component: GeneradorHorarioView },
      { path: 'docentes-resenas', name: 'docentes-resenas', component: DocentesResenasView },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login' })
  } else if (to.name === 'login' && authStore.isAuthenticated) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})
