export default {
  type: "object",
  properties: {
    nombre: { type: 'string' },
    fechaNacimiento: { type: 'string' },
    colorOjos: { type: 'string' },
    peliculas: { type: 'array' },
    altura: { type: 'string' },
    peso: { type: 'string' },
    genero: { type: 'string' },
    colorPelo: { type: 'string' },
    mundoNatal: { type: 'string' },
    colorPiel: { type: 'string' },
    especies: { type: 'array' },
    navesEstelares: { type: 'array' },
    url: { type: 'string' },
    vehiculos: { type: 'array' },
    creado: { type: 'string' },
    editado: { type: 'string' },
  },
  required: ['nombre']
} as const;
