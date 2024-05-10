import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { createDocument } from './database/db';
import schema from './schema';

const lambdaPost: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  try {
    const requestBody = event.body;
    const id = await createDocument(requestBody);

    return formatJSONResponse({
      message: 'Se creo personaje correctamente',
      id: id
    }, 201);
  } catch (error) {
    console.error('Error al crear el personaje:', error);
    return formatJSONResponse({
      message: 'Error al crear el personaje'
    }, 500);
  }
};

export const main = middyfy(lambdaPost);
