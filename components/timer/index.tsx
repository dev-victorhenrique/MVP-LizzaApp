import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Timer() {
  const [fill, setFill] = useState(0); // Estado do progresso
  const duration = 60; // Duração total do cronômetro (em segundos)
  const [reset, setReset] = useState(false); // Controle de reset

  useEffect(() => {
    // Reinicia o cronômetro quando `reset` mudar para `true`
    if (reset) {
      setFill(0); // Reseta o estado de progresso para 0
      setReset(false); // Desativa o reset para permitir novos ciclos
    }

    const interval = setInterval(() => {
      setFill((prevFill) => {
        const newFill = prevFill + 100 / duration;

        if (newFill >= 100) {
          clearInterval(interval); // Para o intervalo quando o cronômetro chega a 100%
          return 100;
        }

        return newFill;
      });
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [reset]); // Reexecuta o efeito ao alterar `reset`

  // Força o reset do cronômetro ao montar o componente
  useEffect(() => {
    setReset(true);
  }, []);

  return (
    <View>
      <AnimatedCircularProgress
        size={300}
        width={5}
        backgroundWidth={20}
        fill={fill}
        tintColor="#C5168C"
        backgroundColor="#D9D9D9"
        duration={1000}
        rotation={360}
      >
        {() => {
          if (fill < 100) {
            return (
              <Text style={styles.timerNumber}>
                {Math.round((60 - (fill / 100) * 60))}s
              </Text>
            );
          } else {
            return (
              <Text style={styles.timerFinalText}>
                Pedido de ajuda realizado!
              </Text>
            );
          }
        }}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  timerNumber: {
    fontSize: 50,
    color: '#000',
  },
  timerFinalText: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
});
