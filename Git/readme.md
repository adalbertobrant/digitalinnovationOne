# Comandos do Git 

1. git init - inicia um repositorio 
2. git clone - clona um projeto de um servidor remote por exemplo algum projeto no site do github.com
3. git add. git add << nome do arquivo >> - adiciona arquivos para o rastreio do git daquele arquivo controlando sua versao
4. git commit -m "mensagem de commit" - salva as alteraçoes e torna as mesmas rastreaveis por uma id com a opçao de uma mensagem
5. git push - publica os commits em um servidor remoto - fica disponivel para todos os colaboradores
6. git pull - atualiza o repositorio local confome o repositorio remoto
7. git merge - juntar alteracoes em uma branch com a master branch, em resolucao de conflitos 
8. git status - mostra o estado atual do projeto , mostrando as alteracoes no repositorio
9. git log - devolve um historio de alteracoes que sofre no repositorio ao longo do tempo
10. git branch << nome da branch >> - pega a branch master e implementa novos recursos para um branch secundario 

fonte: git-scm.com/docs

## Trabalhando com Branches

<h4> Conceito</h4>
<p></p>
<p> BranchPrincipal (master)--------------------------------------------------------- Programa disponivel ao usuario</p>                                                          

<p>(BranchSecundahria) -----> novo conceito ou teste <span>&#8599</span> </p> 
<p>Branches permitem que diferentes versoes do mesmo cohdigo estejam disponiveis para testes e verificacoes de features, caso o usuario esteja satisfeito com a nova branch a mesma pode ser implementada na master atraves da <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjovemnerd.com.br%2Fnerdbunker%2Fagora-e-possivel-fazer-a-danca-da-fusao-de-dragon-ball-em-destiny-2%2F&psig=AOvVaw3vjlC-Z4S3BkNb3-6ZyKSR&ust=1589196658841000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjLloaZqekCFQAAAAAdAAAAABAD" ></p>
