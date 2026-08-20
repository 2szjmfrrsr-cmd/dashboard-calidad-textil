// Configuración central del Dashboard de Control de Rechazos y Aseguramiento de Calidad Textil.
// Edita este archivo para ajustar el tablero sin tocar index.html.
window.DASHBOARD_CONFIG = {
  // Título mostrado en el encabezado y en la pestaña del navegador.
  dashboardTitle: 'Control de Rechazos y Aseguramiento de la Calidad Textil',

  // Nombre (o ruta) del archivo Excel maestro. Debe estar en el mismo repositorio,
  // en la misma carpeta que index.html (o una ruta relativa a ella).
  // Para actualizar el tablero: reemplaza este archivo por la nueva versión con el mismo nombre.
  dataFileName: 'DATA_DASHBOARD_CALIDAD_2026.xlsx',

  // Año fiscal/calendario que se muestra por defecto.
  year: 2026,

  // Meta de tasa de rechazo (kilos malos / kilos buenos). Si el Excel trae su propio
  // valor en la hoja PARAMETROS (META_RECHAZO), ese valor tiene prioridad sobre este.
  metaRechazo: 0.05,

  // Cuántas causas de rechazo y lotes mostrar en los rankings.
  topCausas: 8,
  topLotes: 10,

  // Texto de ayuda mostrado bajo el indicador de última actualización.
  updateNote: 'Los datos se calculan automáticamente a partir del archivo Excel maestro (hojas MENSUAL, SEMANAL, DATOS_DIARIOS y RECHAZOS).'
};
