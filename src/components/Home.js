import { onNavigate } from "../main";

export const home = () => {
  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonRegister = document.createElement('button');

  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'))

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};