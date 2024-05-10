import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { getPersonaje, getPersonajes } from './external-services/personaje.service';

export const lambdaGet = async (event: any) => {
  try {
    let personajeData: any;
    if (event.pathParameters) {
      const personajeId = parseInt(event.pathParameters.id);
      personajeData = await getPersonaje(personajeId);
    } else {
      personajeData = await getPersonajes();
    }

    return formatJSONResponse(personajeData);
  } catch (error) {
    console.error('Error al obtener el personaje:', error);
    return formatJSONResponse({
      message: 'Error al obtener el personaje'
    }, 500);
  }
};

export const main = middyfy(lambdaGet);
