export function isAuthenticated() {
  const user = localStorage.getItem('token');  // Verifica se o token está no localStorage
  return !!user;  // Retorna true se houver um usuário
}
