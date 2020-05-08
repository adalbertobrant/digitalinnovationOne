programa
{
	inclua biblioteca Util --> u
	inclua biblioteca Matematica
	
	funcao inicio()
	{
		inteiro matriz[3][3],i,j,menor
		// colocar valores na matriz random
		para(i=0;i<3;i++){
			para(j=0;j<3;j++){
				matriz[i][j] = u.sorteia(50,786)
			}
		}
		// imprimir a posição matriz[2][1]
		escreva("Posição da matriz[2][1] = "+matriz[2][1]+"\n")
		// imprimir a matriz completa no formato :123
		//                                        123
		//                                        123
		para(i=0;i<3;i++){
			para(j=0;j<3;j++){
				escreva(matriz[i][j])
				escreva(" ")
			}
			escreva("\n")
		}
		// Achar o menor número dentro da matriz
		// talvez o menor número esta na posição menor = matriz[0][0]
		menor = matriz[0][0]
		para(i=0;i<3;i++){
			para(j=0;j<3;j++){
				se(menor > matriz[i][j]){
					menor = matriz[i][j]
				}
			}
			
		}
		escreva ("O menor número dentro da matriz é : "+menor+"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 913; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */