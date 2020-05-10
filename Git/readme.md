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
<p>Branches permitem que diferentes versoes do mesmo cohdigo estejam disponiveis para testes e verificacoes de features, caso o usuario esteja satisfeito com a nova branch a mesma pode ser implementada na master atraves da fusao ou merging </p>
 <table style="width:100%">
  <tr>
    <th>Branch Master e Secundaria</th>
    <th>---</th>
    <th>Merging</th>
  </tr>
  <tr>
    <td><img src="https://github.com/adalbertobrant/digitalinnovationOne/blob/master/Git/fusaoDb.jpg" width="400" height="225" alt="Fusao"></td>
    <td>&#8594</td>
    <td><img src="https://github.com/adalbertobrant/digitalinnovationOne/blob/master/Git/gotenks-fusa-o.jpg" width="400" height="225" alt="Merging"</td>
  </tr>
  
</table> 
<h4> Commandos </h4>
<table style="width:100%">
  <tr>
    <th>Comandos</th>
    <th>Funcoes</th>
    <th>Pratica</th>
  </tr>
 <tr>
  <td> git branch</td>
  <td> lista no terminal todas as branch e mostra a master</td>
  <td> <img src = "https://github.com/adalbertobrant/digitalinnovationOne/blob/master/Git/gitbranch_lista.png" width="300" height="169" alt="Lista Branch"</td>
 </tr>
 <td> git checkout nomedabranch</td>
 <td> troca de branch saindo da master e indo para outra</td>
 <td> <img src ="https://github.com/adalbertobrant/digitalinnovationOne/blob/master/Git/gitbranch_trocaBranch.png "  width="300" height="169" alt="troca de branch"</td>
  <tr>
   <td> git branch -D nomedabranch</td>
   <td> apaga o branch e retorna a master</td>
   <td> <img src ="https://github.com/adalbertobrant/digitalinnovationOne/blob/master/Git/gitbranch_apagaBranch.png " width="300" height="169" alt="apaga a branch"</td>
  </tr>
 <td> git checkout -b criaOutraBranch</td>
 <td> cria outro branch e ja vai para ele</td>
 <td> <img src =" https://github.com/adalbertobrant/digitalinnovationOne/blob/master/Git/gitbranch_criaBranchEVai.png " width="300" height="169" alt="cria a branch e vai para ela"</td>
 </table>


