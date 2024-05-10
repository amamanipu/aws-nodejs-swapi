import axios from 'axios';
import { mapToPersonajeDTO } from '../mappers/personaje.mapper';
import { PersonajeDTO } from '../dtos/personaje.dto';

const URI_SWAPI : string = process.env.URI_SWAPI || '';
const URI_PEOPLE : string = `${URI_SWAPI}/people/`;

export const getPersonajes = async(): Promise<PersonajeDTO[]> => {
    const url = `${URI_PEOPLE}`;
    const response = await axios.get(url);
    return response.data.results.map((item: any) => mapToPersonajeDTO(item));
}

export const getPersonaje = async(id: number): Promise<PersonajeDTO> => {
    const url = `${URI_PEOPLE}${id}/`;
    const response = await axios.get(url);
    return mapToPersonajeDTO(response.data);
}