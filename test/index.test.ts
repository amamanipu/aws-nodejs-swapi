import { expect } from 'chai';
import * as sinon from 'sinon';
import { lambdaGet } from '../src/functions/lambda-get/handler';
import * as personajeService from '../src/functions/lambda-get/services/personaje.service';

describe('Lambda Get', async() => {
    it('Obtener Personajes correctamente', async() => {
        const fakePersonajesResponse: any = sinon.fake.returns([]); // Mock Personajes
        sinon.replace(personajeService, 'getPersonajes', fakePersonajesResponse);
        const result = await lambdaGet({ pathParameters: null });
        expect(result.statusCode).to.equal(200);
    });

    it('Obtener Personaje correctamente', async() => {
        const fakePersonajeResponse: any = sinon.fake.returns({}); // Mock Personaje
        sinon.replace(personajeService, 'getPersonaje', fakePersonajeResponse);
        const result = await lambdaGet({ pathParameters: { id: 1 } });
        expect(result.statusCode).to.equal(200);
    });
});