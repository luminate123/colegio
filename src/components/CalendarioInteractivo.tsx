"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from "lucide-react"

interface Actividad {
  id: number
  titulo: string
  fecha: string
  hora: string
  lugar: string
  tipo: "academico" | "deportivo" | "cultural" | "social" | "administrativo"
  descripcion: string
}

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

const actividadesPorMes: Record<number, Actividad[]> = {
  0: [
    // Enero
    {
      id: 1,
      titulo: "Inicio de Clases",
      fecha: "8 de Enero",
      hora: "7:30 AM",
      lugar: "Todas las aulas",
      tipo: "administrativo",
      descripcion: "Bienvenida al nuevo ciclo escolar 2025",
    },
    {
      id: 2,
      titulo: "Reunión de Padres de Familia",
      fecha: "15 de Enero",
      hora: "6:00 PM",
      lugar: "Auditorio Principal",
      tipo: "social",
      descripcion: "Presentación del plan académico anual",
    },
    {
      id: 3,
      titulo: "Torneo de Ajedrez Interescolar",
      fecha: "25 de Enero",
      hora: "9:00 AM",
      lugar: "Biblioteca",
      tipo: "academico",
      descripcion: "Competencia entre estudiantes de primaria y secundaria",
    },
  ],
  1: [
    // Febrero
    {
      id: 4,
      titulo: "Día del Amor y la Amistad",
      fecha: "14 de Febrero",
      hora: "10:00 AM",
      lugar: "Patio Central",
      tipo: "cultural",
      descripcion: "Celebración con actividades especiales para todos los niveles",
    },
    {
      id: 5,
      titulo: "Feria de Ciencias",
      fecha: "20 de Febrero",
      hora: "8:00 AM",
      lugar: "Laboratorios",
      tipo: "academico",
      descripcion: "Exposición de proyectos científicos de estudiantes",
    },
    {
      id: 6,
      titulo: "Torneo de Fútbol",
      fecha: "28 de Febrero",
      hora: "3:00 PM",
      lugar: "Cancha de Fútbol",
      tipo: "deportivo",
      descripcion: "Competencia deportiva entre diferentes grados",
    },
  ],
  2: [
    // Marzo
    {
      id: 7,
      titulo: "Día Internacional de la Mujer",
      fecha: "8 de Marzo",
      hora: "9:00 AM",
      lugar: "Auditorio",
      tipo: "cultural",
      descripcion: "Conferencia sobre liderazgo femenino",
    },
    {
      id: 8,
      titulo: "Simulacro de Evacuación",
      fecha: "15 de Marzo",
      hora: "10:30 AM",
      lugar: "Todo el colegio",
      tipo: "administrativo",
      descripcion: "Práctica de seguridad escolar",
    },
    {
      id: 9,
      titulo: "Festival de Primavera",
      fecha: "21 de Marzo",
      hora: "4:00 PM",
      lugar: "Jardines del colegio",
      tipo: "cultural",
      descripcion: "Celebración del equinoccio con actividades al aire libre",
    },
  ],
  3: [
    // Abril
    {
      id: 10,
      titulo: "Semana Santa - Vacaciones",
      fecha: "1-7 de Abril",
      hora: "Todo el día",
      lugar: "Descanso",
      tipo: "administrativo",
      descripcion: "Período vacacional de Semana Santa",
    },
    {
      id: 11,
      titulo: "Día del Niño",
      fecha: "30 de Abril",
      hora: "9:00 AM",
      lugar: "Patio Principal",
      tipo: "cultural",
      descripcion: "Celebración especial con juegos y actividades",
    },
    {
      id: 12,
      titulo: "Olimpiadas Matemáticas",
      fecha: "25 de Abril",
      hora: "8:00 AM",
      lugar: "Aulas de matemáticas",
      tipo: "academico",
      descripcion: "Competencia de matemáticas por niveles",
    },
  ],
  4: [
    // Mayo
    {
      id: 13,
      titulo: "Día del Maestro",
      fecha: "15 de Mayo",
      hora: "8:00 AM",
      lugar: "Auditorio",
      tipo: "social",
      descripcion: "Homenaje a nuestros docentes",
    },
    {
      id: 14,
      titulo: "Festival de Talentos",
      fecha: "20 de Mayo",
      hora: "6:00 PM",
      lugar: "Teatro del colegio",
      tipo: "cultural",
      descripcion: "Muestra de talentos artísticos de los estudiantes",
    },
    {
      id: 15,
      titulo: "Torneo de Básquetbol",
      fecha: "28 de Mayo",
      hora: "2:00 PM",
      lugar: "Cancha de básquetbol",
      tipo: "deportivo",
      descripcion: "Competencia intergrupal de básquetbol",
    },
  ],
  5: [
    // Junio
    {
      id: 16,
      titulo: "Graduación Bachillerato",
      fecha: "15 de Junio",
      hora: "7:00 PM",
      lugar: "Auditorio Principal",
      tipo: "academico",
      descripcion: "Ceremonia de graduación de estudiantes de bachillerato",
    },
    {
      id: 17,
      titulo: "Clausura Primaria",
      fecha: "20 de Junio",
      hora: "10:00 AM",
      lugar: "Patio Central",
      tipo: "academico",
      descripcion: "Ceremonia de clausura del ciclo escolar de primaria",
    },
    {
      id: 18,
      titulo: "Vacaciones de Verano",
      fecha: "25 de Junio",
      hora: "Todo el día",
      lugar: "Descanso",
      tipo: "administrativo",
      descripcion: "Inicio del período vacacional de verano",
    },
    
  ],
  6: [
    // Julio
    {
      id: 19,
      titulo: "Curso de Verano",
      fecha: "1-15 de Julio",
      hora: "9:00 AM - 1:00 PM",
      lugar: "Aulas especiales",
      tipo: "academico",
      descripcion: "Actividades recreativas y educativas de verano",
    },
    {
      id: 20,
      titulo: "Mantenimiento de Instalaciones",
      fecha: "16-31 de Julio",
      hora: "Todo el día",
      lugar: "Todo el colegio",
      tipo: "administrativo",
      descripcion: "Período de mantenimiento y mejoras",
    },
  ],
  7: [
    // Agosto
    {
      id: 21,
      titulo: "Capacitación Docente",
      fecha: "1-10 de Agosto",
      hora: "8:00 AM - 4:00 PM",
      lugar: "Sala de maestros",
      tipo: "administrativo",
      descripcion: "Actualización pedagógica para el nuevo ciclo",
    },
    {
      id: 22,
      titulo: "Inscripciones Nuevo Ciclo",
      fecha: "15-25 de Agosto",
      hora: "9:00 AM - 3:00 PM",
      lugar: "Oficina de admisiones",
      tipo: "administrativo",
      descripcion: "Proceso de inscripciones para el nuevo año escolar",
    },
  ],
  8: [
    // Septiembre
    {
      id: 23,
      titulo: "Ceremonia Cívica - Independencia",
      fecha: "15 de Septiembre",
      hora: "8:00 AM",
      lugar: "Patio de Honor",
      tipo: "cultural",
      descripcion: "Celebración del Día de la Independencia",
    },
    {
      id: 24,
      titulo: "Junta de Padres - Primer Bimestre",
      fecha: "25 de Septiembre",
      hora: "6:00 PM",
      lugar: "Aulas respectivas",
      tipo: "social",
      descripcion: "Entrega de calificaciones del primer bimestre",
    },
    {
      id: 25,
      titulo: "Concurso de Oratoria",
      fecha: "30 de Septiembre",
      hora: "10:00 AM",
      lugar: "Auditorio",
      tipo: "academico",
      descripcion: "Competencia de expresión oral por niveles",
    },
  ],
  9: [
    // Octubre
    {
      id: 26,
      titulo: "Día Mundial del Maestro",
      fecha: "5 de Octubre",
      hora: "8:00 AM",
      lugar: "Auditorio",
      tipo: "social",
      descripcion: "Reconocimiento especial a nuestros educadores",
    },
    {
      id: 27,
      titulo: "Festival de Otoño",
      fecha: "31 de Octubre",
      hora: "4:00 PM",
      lugar: "Instalaciones generales",
      tipo: "cultural",
      descripcion: "Celebración de Halloween con disfraces y actividades",
    },
    {
      id: 28,
      titulo: "Maratón de Lectura",
      fecha: "20 de Octubre",
      hora: "9:00 AM",
      lugar: "Biblioteca",
      tipo: "academico",
      descripcion: "Actividad para fomentar el hábito de la lectura",
    },
  ],
  10: [
    // Noviembre
    {
      id: 29,
      titulo: "Día de Muertos",
      fecha: "2 de Noviembre",
      hora: "10:00 AM",
      lugar: "Patio Cultural",
      tipo: "cultural",
      descripcion: "Celebración de tradiciones mexicanas",
    },
    {
      id: 30,
      titulo: "Revolución Mexicana",
      fecha: "20 de Noviembre",
      hora: "8:00 AM",
      lugar: "Patio de Honor",
      tipo: "cultural",
      descripcion: "Ceremonia cívica conmemorativa",
    },
    {
      id: 31,
      titulo: "Expo Proyectos Finales",
      fecha: "28 de Noviembre",
      hora: "2:00 PM",
      lugar: "Salón de usos múltiples",
      tipo: "academico",
      descripcion: "Presentación de proyectos de fin de año",
    },
  ],
  11: [
    // Diciembre
    {
      id: 32,
      titulo: "Posadas Navideñas",
      fecha: "15 de Diciembre",
      hora: "5:00 PM",
      lugar: "Patio Principal",
      tipo: "cultural",
      descripcion: "Celebración navideña con toda la comunidad escolar",
    },
    {
      id: 33,
      titulo: "Clausura del Año Escolar",
      fecha: "18 de Diciembre",
      hora: "10:00 AM",
      lugar: "Auditorio",
      tipo: "academico",
      descripcion: "Ceremonia de fin de año y entrega de reconocimientos",
    },
    {
      id: 34,
      titulo: "Vacaciones de Invierno",
      fecha: "19 de Diciembre",
      hora: "Todo el día",
      lugar: "Descanso",
      tipo: "administrativo",
      descripcion: "Inicio del período vacacional de invierno",
    },
  ],
}

const tipoColors = {
  academico: "bg-blue-100 text-blue-800 border-blue-200",
  deportivo: "bg-orange-100 text-orange-800 border-orange-200",
  cultural: "bg-purple-100 text-purple-800 border-purple-200",
  social: "bg-blue-100 text-blue-800 border-blue-200",
  administrativo: "bg-gray-100 text-gray-800 border-gray-200",
}

export default function CalendarioInteractivo() {
  const [mesActual, setMesActual] = useState(new Date().getMonth())

  const cambiarMes = (direccion: "anterior" | "siguiente") => {
    if (direccion === "anterior") {
      setMesActual(mesActual === 0 ? 11 : mesActual - 1)
    } else {
      setMesActual(mesActual === 11 ? 0 : mesActual + 1)
    }
  }

  const actividades = actividadesPorMes[mesActual] || []

  return (
    <div className="w-full space-y-6">
      {/* Header del calendario */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={() => cambiarMes("anterior")}
          className="border-blue-200 hover:bg-blue-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{meses[mesActual]} 2025</h3>
          <p className="text-gray-600">Actividades y eventos del mes</p>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => cambiarMes("siguiente")}
          className="border-blue-200 hover:bg-blue-50"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Leyenda de tipos */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Badge className={tipoColors.academico}>Académico</Badge>
        <Badge className={tipoColors.deportivo}>Deportivo</Badge>
        <Badge className={tipoColors.cultural}>Cultural</Badge>
        <Badge className={tipoColors.social}>Social</Badge>
        <Badge className={tipoColors.administrativo}>Administrativo</Badge>
      </div>

      {/* Lista de actividades */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {actividades.length > 0 ? (
          actividades.map((actividad) => (
            <Card key={actividad.id} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg text-gray-900 leading-tight">{actividad.titulo}</CardTitle>
                  <Badge className={tipoColors[actividad.tipo]}>{actividad.tipo}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-gray-600">{actividad.descripcion}</CardDescription>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>{actividad.fecha}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>{actividad.hora}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{actividad.lugar}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No hay actividades programadas para este mes</p>
          </div>
        )}
      </div>

        {/* Navegación rápida por meses */}
        <div className="flex flex-wrap gap-2 justify-center pt-6 border-t border-gray-200">
        {meses.map((mes, index) => (
            <Button
            key={mes}
            variant={index === mesActual ? "default" : "outline"}
            size="sm"
            onClick={() => setMesActual(index)}
            className={`mes-btn ${
                index === mesActual
                ? "bg-blue-600 text-white"
                : "border border-blue-200 hover:bg-blue-50"
            } px-3 py-1 rounded-md text-sm`}
            >
            {mes}
            </Button>
        ))}
        </div>

    </div>
  )
}
