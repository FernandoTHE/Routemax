// const BASE_API = ' http://localhost:3000/posts';

// const API = () => {
//   //   //   //requisição de verificação de dados
//       checkToken: async (token) => {
//         const req = await fetch(`${BASE_API}/posts`, {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({nome, matricula, senha}),
//         });
//         const json = await req.json({token});
//         return json;
//       },
//   // requisição de login
//      Login: async (matricula, senha) => {
//     console.log('id');
//     const req = await fetch(`${BASE_API}/posts`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({matricula, senha}),
//     });
//     const json = await req.json();
//     return json;
//   },
//       //requisição de cadastro
//       Cadastro: async (nome, matricula, senha) => {
//         const req = await fetch(`${BASE_API}/auth/user`, {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({nome, matricula, senha}),
//         });
//         const json = await req.json();
//         return json;
//       },
// };

// export default API;
