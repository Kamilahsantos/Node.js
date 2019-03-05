const request = require('supertest');
const server = require('../app.js');
const sayTDD = require('../helloJest');
beforeAll(async () => {
 // mensagem ao iniciar o teste
 console.log('Iniciando TDD com jest!');
});
// close the server after each test
afterAll(() => {
 server.close();
 console.log('servidor fechado');
});
describe('inicio dos testes', () => {
 test('get a rota da home ', async () => {
 const response = await request(server).get('/');
 expect(response.status).toEqual(200);
 expect(response.text).toContain('<h1>Você está na Home!</h1>');
 
 });

 test('get a rota da definição de TDD ', async () => {
    const response = await request(server).get('/TDD');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('<h4>no tdd primeiro fazemos os testes e depois desenvolvemos o sistema para que ele passe nos testes</h4>');
 });
    test('get a rota da introdução do KOA ', async () => {
        const response = await request(server).get('/KOA');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('<h4>O Koa é uma nova estrutura da Web criada pela equipe do Express, que pretende ser uma base menor, mais expressiva e mais robusta para aplicativos da Web e APIs</h4>');
    
    });

 test('string dizendo o que é TDD', () => {
    expect(sayTDD()).toMatch('TDD é o Desenvolvimento Orientado por Testes');
});

 


});

