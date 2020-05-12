# Curso HTML 5 & CSS 3
<p> Digital Innovation One</p>

<h3> Estrutura do HTML</h3>

```

<!--comentario em html-->
'<!DOCTYPE html>'   Informa ao navegador que se trata de um documento do tipo html 5 o <!DOCTYPE html> deve ser colocado no inicio do documento html

<html> Todo o conteudo do navegador ou browser esta dentro da tag principal, chamada raiz ou root  <html>...</html>

Dentro dessa tag principal <html>, podemos configurar a linguagem no caso portugues do brasil

<html lang="pt-br">

</html>

<head>...</head>apos a tag principal vem a tag <head>, onde ficam armazenados os meta dados
<meta charset ="utf-8"> dentro do head ,diz ao navegador para utilizar o padrao de paginas do brasil
A tag <meta>...</meta> indica o local de armazenamentos de instruçoes para meta dados
<title>...</title> Dah um titulo na aba do navegador para identificar a mesma de outras paginas abertas ou nao

<body>...</body> Apos a head temos a tag <body> onde vai estar o texto, fotos, codigos de javascript ou seja o corpo principal da pagina com informaçoes ao usuario.
Dentro da tag <body> podemos ter tags que denotam diferentes formas de marcar ou aprimorar um texto, tais como cores, tipo de fontes, paragrafos, negrito, italicos.
<p></p> Essa tag indica um paragrafo dentro do texto.
<b></b> Essa tag indica que o texto deve estar em negrito

<header>...</header> e o cabeçalho da pagina pode ser colocado o titulo da pagina web
<h1>h1</h1> Mostra um texto maior
<h2>h2</h2> Mostra um sub texto menor
<h3>h3</h3> Mostra um subt'titulo
vai ate o h6 o h7 e do mesmo tamanho do paragrafo

 <footer>...</footer>, que e o rodape da pagina web

Tanto o header quanto o footer ficam dentro da tag body

<nav>...</nav> representa o menu de navegaçao da pagina podendo conter links
Dentro no nav pode se ter uma lista de itens por exemplo o <ul>...</ul>
a estrutura completa de item fica assim
<nav>
   <ul>
       <li>itens da lista</li>
       <li>outro item</li>
       <li>mais outro item</li>
   </ul>
</nav>

<section></section> indica uma porçao da pagina web, seçao de conteudo especifico ,e boa pratica colocar um id dentro da tag section para especificar melhor a seçao que faz parte.
<section id="secao1"></section>

site de imagens gratuitas na internet -> https://www.pexels.com

para colocar uma imagem no site deve-se fazer:
<img src="endereco da imagem" > A tag <img> nao tem fechamento 

Dentro da tag nav na lista é possível usar hiperlinks para linkar a própria página.
<nav>
    <ul>
        <li><a href=#id da tag>Nome do hiperlink</a></li>
    </ul>
</nav>

Estrutura do hiperlink 

<a href="local ou id">Nome do Hiper link</a> 
<a href="mailto:enderecodoemail">endereco@email.com</a> Mostra o endereço do email e chama o programa de enviar email
<a href="tel:34991179515">(34)99117-9515</a> chama o programa para efeturar ligação telefônica

O hiperlink também pode ser usado em imagens da seguinte forma

<a href="site onde se quer linkar"><img src="endereço da imagem" width="100px"></a> dessa forma ao clicar sobre a imagem o navegador irá abrir a página que estava linkada a imagem.

Também é possivel utilizar a construção :
<a href="endereço" target="_blank"><img src="endereço"></a> com o target="_blank" é possível abrir o link em outra página do navegador sem sair da página atual.


<div> são divisões criadas na página html 
```

# CSS3 ( Cascade Style Sheet )
---
### Folha de Estilo em Cascata

<p>Permite animações, transições de imagens, alterações de fontes, cores em toda a página web de maneira mais organizada e simples.</p>

---
###Commandos

```
    <link rel="stylesheet" type="text/css" href="css/style.css"> esse comando serve para linkar o arquivo css para a página web.
 