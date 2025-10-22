export interface Student {
  nombre: string
  carrera: string
  foto?: string
  boleta: string
  plantel: string
  curp: string
  rfc: string
  sexo: string
  nacimiento: Nacimiento
  direccion: Direccion
  escolaridad: Escolaridad
  tutor: Tutor
}

export interface Nacimiento {
  fecha: string
  nacionalidad: string
  entidad: string
}

export interface Direccion {
  calle: string
  colonia: string
  cp: string
  estado: string
  municipio: string
  telefono: string
  email: string
  labora: string
}

export interface Escolaridad {
  procedencia: string
  entidadEscuela: string
  promedioSecundaria: string
  promedioBachillerato: string
}

export interface Tutor {
  nombreTutor: string
  rfcTutor: string
  padre: string
  madre: string
}
