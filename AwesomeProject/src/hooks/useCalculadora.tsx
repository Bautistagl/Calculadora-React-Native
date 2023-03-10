import { useRef, useState } from "react";



enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operadores>()
  
    const limpiar = () => {
      setNumero('0')
      setNumeroAnterior('0')
    }
  
    const armarNumero = (numeroTexto: string) => {
      // No aceptar doble punto
      if(numero.includes('.')&& numeroTexto === '.') return;
  
      if(numero.startsWith('0') || numero.startsWith('-0') ) {
  
        if (numeroTexto === '.') {
          setNumero (numero + numeroTexto);
        } else if ( numeroTexto === '0' && numero.includes('.') ) {
            setNumero(numero + numeroTexto);
        } else if (numeroTexto !== '0' && !numero.includes('/') ){
  
          setNumero( numeroTexto);
        } else if (numeroTexto === '0' && !numero.includes('.') ) {
          setNumero(numero);
        }
      } else {
        setNumero(numero + numeroTexto);
      }
    }
  
  
    const positivoNegativo = () => {
      if (numero.includes('-')){
        setNumero(numero.replace('-',''));
      } else {
        setNumero('-' + numero)
      }
    }
  
    const btnDelete = () => {
      let negativo = '';
      let numeroTemporal = numero;
      if ( numero.includes('-') ) {
        negativo = '-';
        numeroTemporal = numero.substring(1);
      }
      if ( numeroTemporal.length > 1) {
        setNumero( negativo +  numeroTemporal.slice(0,-1) );
      } else {
        setNumero('0')
      }
    }
  
      const cambiarNumeroPorAnterior = () => {
        if(numero.endsWith('.') ) {
          setNumeroAnterior(numero.slice(0,-1))
        } else {
          setNumeroAnterior(numero);
        }
        setNumero('0')
      }
  
      const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir
      }
  
      const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar
      }
  
      const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar
      }
  
      const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar
      }
  
      const calcular = () => {
  
        const num1 = Number( numero);
        const num2 = Number ( numeroAnterior);
  
        switch (ultimaOperacion.current) {
          case Operadores.sumar:
            setNumero(`${num1 + num2}`);
            break;
  
          case Operadores.restar:
            setNumero(`${num2 - num1}`);
              break;
  
          case Operadores.dividir:
           
            setNumero(`${num2 / num1}`);
                break;
  
          case Operadores.multiplicar:
            setNumero(`${num1 * num2}`);
                break;
        
         
        }
        setNumeroAnterior('0')
  
      }

      return {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        armarNumero,
        calcular,
      }
}
