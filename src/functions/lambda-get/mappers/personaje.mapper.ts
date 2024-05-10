import { PersonajeDTO } from "../dtos/personaje.dto";

export const mapToPersonajeDTO = (data: any) : PersonajeDTO => {
    return {
        nombre: data.name,
        fechaNacimiento: data.birth_year,
        colorOjos: data.eye_color,
        peliculas: data.films,
        altura: data.height,
        peso: data.mass,
        genero: data.gender,
        colorPelo: data.hair_color,
        mundoNatal: data.homeworld,
        colorPiel: data.skin_color,
        creado: data.created,
        editado: data.edited, 
        especies: data.species,
        navesEstelares: data.starships,
        url: data.url,
        vehiculos: data.vehicles
    };
}