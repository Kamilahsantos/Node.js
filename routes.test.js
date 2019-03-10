const request = require('supertest');
const server = require('../app.js');
const sayTDD = require('../helloJest');

beforeAll(async () => {
   console.log('Iniciando TDD com jest!');
});


afterAll(() => {
   server.close();
   console.log('servidor fechado');
});


describe('inicio dos testes', () => {
   test('acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
      const response = await request(server).get('/');
      expect(response.status).toEqual(200);
      expect(response.text).toContain('<h1>Você está na Home!</h1> <p> vamos começar os testes </p>');

   });

   test('acessa a rota /tdd e então será apresentada a seguinte defiição de tdd:', async () => {
      const response = await request(server).get('/TDD');
      expect(response.status).toEqual(200);
      expect(response.text).toContain('<h4>no tdd primeiro fazemos os testes e depois desenvolvemos o sistema para que ele passe nos testes</h4>');
   });

   test('acessa a rota /koa e então será apresentada a seguinte definição de Koa.js', async () => {
      const response = await request(server).get('/KOA');
      expect(response.status).toEqual(200);
      expect(response.text).toContain('<h4>O Koa é uma nova estrutura da Web criada pela equipe do Express, que pretende ser uma base menor, mais expressiva e mais robusta para aplicativos da Web e APIs</h4>');

   });

   test('irá verificar o retorno da função saytdd', () => {
      expect(sayTDD()).toMatch('TDD é o Desenvolvimento Orientado por Testes');
   });





});

