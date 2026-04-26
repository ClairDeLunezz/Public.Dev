📱 DevPortfólio — App Mobile

Aplicativo de portfólio pessoal desenvolvido com React Native e Expo, como parte da disciplina de Desenvolvimento Mobile.


👥 Integrantes
Nomes:
- Artur
- Pietro

📋 Descrição do App
O Public.Dev é um aplicativo mobile de apresentação pessoal com duas telas principais:

🏠 Tela Home — Exibe foto de perfil, apresentação, botões de ação, links para redes sociais e um Switch que alterna entre os perfis dos dois integrantes do grupo e entre Light e Dark Mode.
👤 Tela Sobre mim — Apresenta a biografia detalhada, habilidades, experiências e objetivos profissionais, com rodapé de créditos.

✨ Funcionalidades

Navegação entre telas com React Navigation
Switch alterna entre as redes sociais do Artur e do Pietro
Links das redes sociais (GitHub, LinkedIn, Instagram) abrem diretamente no navegador/app
Alternância de tema claro/escuro
Layout responsivo com componentes reutilizáveis

🖼️ Prints das Telas
Tela 1 — Home (Artur)
<img width="398" height="828" alt="image" src="https://github.com/user-attachments/assets/0fbe3526-fc20-4bb0-832e-ffab8746da2a" />

Tela 2 - Home (Pietro)
<img width="391" height="827" alt="image" src="https://github.com/user-attachments/assets/1f095f34-09a3-433c-a80e-9ab92b7b8bc7" />

Tela 3 - Sobre Nós
<img width="297" height="826" alt="image" src="https://github.com/user-attachments/assets/b539e75b-bdd6-4400-a6fe-26b1a5719139" />

🚀 Como Rodar o Projeto
Pré-requisitos

Node.js instalado (versão 18 ou superior)
Expo Go instalado no celular (Android ou iOS)

Passo a passo
1. Clone ou baixe o repositório
git clone https://github.com/ClairDeLunezz/Public.Dev.git
cd Public.Dev
2. Instale as dependências do projeto
npm install
3. Instale o Expo CLI globalmente
npm install -g expo-cli
4. Instale as dependências de navegação
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
5. Instale os tipos do TypeScript
hnpm install --save-dev @types/react @types/react-native
6. Inicie o servidor de desenvolvimento
npm run start
7. Abra o app

Escaneie o QR Code com o app Expo Go no celular
Ou pressione a para abrir no emulador Android
Ou pressione i para abrir no simulador iOS



