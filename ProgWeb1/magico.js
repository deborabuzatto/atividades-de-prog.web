let  ordem  =  0 ;
let  matriz  =  [ ] ;
deixe  somaNumeros  =  0 ;

documento . addEventListener ( 'DOMContentLoaded' ,  ( )  =>  {
    começa ( ) ;
} ) ;

function  começa ( )  {
    const  div  =  document . createElement ( 'div' ) ;
    documento . corpo . anexar ( div ) ;

    const  texto1  =  documento . createElement ( 'p' ) ;
    texto1. classList . add ( 'texto1' ) ;
    texto1 . innerText  =  "Escolha a ordem em que deseja jogar:"
    div . append ( texto1 ) ;

    const  input  =  document . createElement ( 'input' ) ;
    entrada . classList . add ( 'ordem' ) ;
    div . anexar ( entrada )

    entrada . addEventListener ( 'alterar' ,  ( )  =>  {
        ordem  =  parseInt ( entrada . valor ) ;
        matriz  =  matriz ( ordem )
        para  ( deixar  i = 0 ;  i < matriz . comprimento ;  i ++ )  {
            matriz [ i ]  =  matriz ( ordem ) ;
        }
        somaNumeros  =  ( ordem  +  ordem ** 3 ) / 2 ;
        textoInicio . remove ( ) ;
        entrada . remove ( ) ;
        insereTabela ( ) ;
    } ) ;
}

function  insereTabela ( )  {
    const  tabela  =  documento . createElement ( 'tabela' ) ;
    tabela . id  =  'quadradomagico' ;
    documento . corpo . anexar ( tabela ) ;
    para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
        const  linha  =  documento . createElement ( 'tr' ) ;
        tabela . anexar ( linha ) ;
        para  ( deixe  j = 0 ;  j < ordem ;  j ++ )  {
            const  celula  =  documento . createElement ( 'td' ) ;
            linha . anexar ( celula )
            celula . id  =  `lin $ { i } col $ { j } ` ;
            insereInput ( celula ) ;
        }
    }
}

function  getLinhaColuna ( celula )  {
    const  [ linha , coluna ]  =  celula . id . dividir ( 'col' ) ;
    return  [ linha . split ( 'lin' ) [ 1 ] , coluna ] ;
}

function  insereInput ( celula )  {
    const  input  =  document . createElement ( 'input' ) ;
    celula . anexar ( entrada ) ;
    entrada . addEventListener ( 'alterar' ,  ( )  =>  {
        const  valor  =  parseInt ( entrada . valor ) ;
        const  [ linha , coluna ]  =  getLinhaColuna ( celula ) ;
        matriz [ linha ] [ coluna ]  =  valor ;
        const  quadradroCompleto  =  verificaMatriz ( ) ;
        if  ( quadradroCompleto )  {
            documento . querySelector ( '#quadradomagico' ) . classList . add ( 'Vitória' ) ;
            documento . querySelectorAll ( 'input' ) . forEach ( input  =>  {
                entrada . readOnly  =  true ;
            } )
            TextoParabens ( ) ;
            criaBotaoReinicia ( ) ;
        }
    } ) ;
}

function  TextoParabens ( )  {
    const  parabens  =  document . createElement ( 'p' ) ;
    parabenos . innerText  =  "Parabéns! deseja jogar novamente? :)"
    documento . corpo . anexar ( parabenos ) ;
}

function  criaBotaoReinicia ( )  {
    const  botaoReinicia  =  documento . createElement ( 'botão' ) ;
    botaoReinicia . innerText  =  "começar novamente"
    documento . corpo . anexar ( botaoReinicia ) ;
    botaoReinicia . addEventListener ( 'click' ,  ( )  =>  {
        const  tabela  =  documento . querySelector ( '#quadradomagico' ) ;
        const  parabens  =  document . querySelector ( 'p' ) ;
        tabela . remove ( ) ;
        parabenos . remove ( ) ;
        botaoReinicia . remove ( ) ;
        começa ( ) ;
    } )
}

function  verificaMatriz ( )  {
    const  numerosRepetidos  =  verificaNumerosRepetidos ( ) ;
    const  numerosForaDosLimites  =  verificaNumerosForaDosLimites ( ) ;
    const  todasSomaOK  =  verificaSomas ( ) ;
    volte  ! numerosRepetidos  &&  ! numerosForaDosLimites  &&  todasSomaOK ;
}

função  verificaSomas ( )  {
    const  diagonalPrincipalOK  =  verificaSomaDiagonalPrincipal ( ) ;
    const  diagonalSecundariaOK  =  verificaSomaDiagonalSecundaria ( ) ;
    const  todasLinhasOK  =  verificaSomaLinhas ( ) ;
    const  todasColunasOK  =  verificaSomaColunas ( ) ;
    retornar  diagonalPrincipalOK  &&  diagonalSecundariaOK  &&  todasLinhasOK  &&  todasColunasOK ;
}

function  verificaSomaColunas ( )  {
    deixe  todasColunasOK  =  true ;
    para  ( deixe  j = 0 ;  j < ordem ;  j ++ )  {
        todasColunasOK  & =  verificaSomaColuna ( j ) ;
    }
    retornar  todasColunasOK ;
}

function  verificaSomaColuna ( j )  {
    deixe  soma  =  0 ;
    para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
        if  ( matriz [ i ] [ j ]  ==  null )  retorna  falso ;
        soma  + =  matriz  [ i ] [ j ] ;
    }
    if  ( soma  ! =  somaNumeros )  {
        para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
            atribuiClasseCelula ( "somaerradacoluna" ,  i ,  j ) ;
        }
        return  false ;
    }  else  {
        para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
            removeClasseCelula ( "somaerradacoluna" ,  i ,  j ) ;
        }
    }
    return  true ;
}

função  verificaSomaLinhas ( )  {
    deixe  todasLinhasOK  =  verdadeiro ;
    para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
        todasLinhasOK  & =  verificaSomaLinha ( i ) ;
    }
    retornar  todasLinhasOK ;
}

função  verificaSomaLinha ( i )  {
    deixe  soma  =  0 ;
    para  ( deixe  j = 0 ;  j < ordem ;  j ++ )  {
        if  ( matriz [ i ] [ j ]  ==  null )  retorna  falso ;
        soma  + =  matriz  [ i ] [ j ] ;
    }
    if  ( soma  ! =  somaNumeros )  {
        para  ( deixe  j = 0 ;  j < ordem ;  j ++ )  {
            atribuiClasseCelula ( "somaerradalinha" ,  i ,  j ) ;
        }
        return  false ;
    }  else  {
        para  ( deixe  j = 0 ;  j < ordem ;  j ++ )  {
            removeClasseCelula ( "somaerradalinha" ,  i ,  j ) ;
        }
    }
    return  true ;
}

function  verificaSomaDiagonalSecundaria ( )  {
    deixe  soma  =  0 ;
    para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
        if  ( matriz [ i ] [ ordem - i - 1 ]  ==  null )  retorna  falso ;
        soma  + =  matriz  [ i ] [ ordem - i - 1 ] ;
    }
    if  ( soma  ! =  somaNumeros )  {
        para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
            atribuiClasseCelula ( "somaerradadiagonalsecundaria" ,  i ,  ordem - i - 1 ) ;
        }
        return  false ;
    }  else  {
        para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
            removeClasseCelula ( "somaerradadiagonalsecundaria" ,  i ,  ordem - i - 1 ) ;
        }
    }
    return  true ;
}

function  verificaSomaDiagonalPrincipal ( )  {
    deixe  soma  =  0 ;
    para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
        if  ( matriz [ i ] [ i ]  ==  null )  retorna  falso ;
        soma  + =  matriz  [ i ] [ i ] ;
    }
    if  ( soma  ! =  somaNumeros )  {
        para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
            atribuiClasseCelula ( "somaerradadiagonalprincipal" ,  i ,  i ) ;
        }
        return  false ;
    }  else  {
        para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
            removeClasseCelula ( "somaerradadiagonalprincipal" ,  i ,  i ) ;
        }
    }
    return  true ;
}

function  verificaNumerosForaDosLimites ( )  {
    const  minimo  =  1 ;
    const  maximo  =  ordem ** 2 ;
    let  numerosForaDosLimites  =  false ;
    para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
        para  ( deixe  j = 0 ;  j < ordem ;  j ++ ) {
            if  ( matriz [ i ] [ j ]  <  mínimo  ||  matriz [ i ] [ j ]  >  maximo )  {
                numerosForaDosLimites  =  true ;
                atribuiClasseCelula ( 'foradoslimites' ,  i ,  j ) ;
            }  else  {
                removeClasseCelula ( 'foradoslimites' ,  i ,  j ) ;
            }
        }
    }
    return  numerosForaDosLimites ;
}

function  verificaNumerosRepetidos ( )  {
    const  numeros  =  Array ( ordem ** 2 ) . preencher ( 0 ) ;
    deixe  numerosRepetidos  =  false ;
    para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
        para  ( deixe  j = 0 ;  j < ordem ;  j ++ )  {
             valor  const =  matriz [ i ] [ j ] ;
            if  ( ! isNaN ( valor ) )  {
                numeros [ valor - 1 ] ++ ;
            }
        }
    }
    para  ( deixe  i = 0 ;  i < ordem ;  i ++ )  {
        para  ( deixe  j = 0 ;  j < ordem ;  j ++ )  {
             valor  const =  matriz  [ i ] [ j ] ;
            if  ( ! isNaN ( valor )  &&  numeros [ valor - 1 ]  >  1 )  {
                numerosRepetidos  =  true ;
                atribuiClasseCelula ( 'numerosrepetidos' ,  i ,  j ) ;
            }  else  {
                removeClasseCelula ( 'numerosrepetidos' ,  i ,  j ) ;
            }
        }
    }
    return  numerosRepetidos ;
}

function  atribuiClasseCelula ( classe ,  i ,  j )  {
    const  celula  =  documento . querySelector ( `#lin $ { i } col $ { j } ` ) ;
    celula . classList . adicionar ( classe ) ;
}

function  removeClasseCelula ( classe ,  i ,  j )  {
    const  celula  =  documento . querySelector ( `#lin $ { i } col $ { j } ` ) ;
    celula . classList . remover ( classe ) ;
}
