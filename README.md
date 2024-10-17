# Projeto Testa i front Angular
Projeto Proposto - Teste Full Stack (Java + Angular)

# Proposta apresentada aqui:
O Projeto foi iniciado usando fork de um projeto antigo que usava a ideia de componentes reutilizáveis para agilizar o processo.

  O original disponível em https://github.com/voidChetan/resuableAngular ainda estava com Angular versão 12.2.17. Aqui alteramos e temos Angular com versão 18 já.
  
  A estrutura de pastas atual está um tanto maior e diferente do original também:
  
        |_____src
        
            |_____directives...
            
            |_____modals...
            
            |_____pages...
            
            |_____services...
            
            |_____validators...
            
            |_____widgets
            
                |______complex-table
                
                |______side-menu

  Os componentes genéricos permanecem na pasta "widgets", estando já bem alterados como se pode observar.
  
# Projeto em fase de desenvolvimento (rodando localmente):
  Com o respectivo projeto back-end configurado e rodando localmente, lembrar de verificar em \src\app\services\api.service.ts, o valor de baseUrl ('http://localhost:8080');
  
  Usar o comando `ng serve` e navegar para `http://localhost:4200/`.

  Neste momento basta usar as credenciais fixadas (username = 'userAdmin' e password = 'admin@123') para poder realizar o login e testar a aplicação.

# Próximos passos:
  - no modal 'person-modal', ajustar melhor os campos tipo data;

  - replicar toda a lógina do 'person-modal' agora para o 'project-modal';

  - no 'project-modal' implementar funcionalidade a mais para permitir visualizar/editar/adicionar novos membros do projeto - analisar a estratégia de ter um novo modal para 'project-member modal' ou de implementer uma funcionalidade de expandir abaixo da linha da listagem de projetos;

  - no componente 'complex-table' - implementar a funcionalidade de paginação, permitindo alterar número de registros por pagina e alterar entre diferentes páginas da listagem carregada;

  - validar sobre os pontos de login, e após alterar no back-end, implementar respectivas alterações no front-end;
