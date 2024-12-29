import React, { useState, useEffect, useCallback } from "react";
import { View, Image } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import styles from "./styles";
import { messages as chatbotMessages } from "./messages";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import {register } from "./../../services/register"

export default function Chatbot() {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const [isFirstTime, setIsFirstTime] = useState(true);
    const router = useRouter();

   

    // Checa se é a primeira vez que o usuário usa o chatbot
    useEffect(() => {
        const checkIfFirstTime = async () => {
            const hasSeenChatbot = await AsyncStorage.getItem("hasSeenChatbot");
            AsyncStorage.clear()
            console.log(hasSeenChatbot)
            if (hasSeenChatbot) {
                setIsFirstTime(false); 
            } else {
                setMessages([
                    {
                        _id: 1,
                        text: chatbotMessages[0].message,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: "Chatbot",
                        },
                    },
                ]);
            }
        };

        checkIfFirstTime();
    }, []);

    const onSend = useCallback(
        (messages = []) => {
            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, messages)
            );

            const userMessage = messages[0].text;
            setUserAnswers((prevAnswers) => [...prevAnswers, userMessage]);
            //console.log(userAnswers);

            if (questionIndex < chatbotMessages.length - 1) {
                setQuestionIndex(questionIndex + 1);
                setMessages((previousMessages) =>
                    GiftedChat.append(previousMessages, [
                        {
                            _id: Math.random(), // Gera um ID único para cada mensagem
                            text: chatbotMessages[questionIndex + 1].message,
                            createdAt: new Date(),
                            user: chatbotMessages[questionIndex + 1].user,
                        },
                    ])
                );
            } else {
                // Quando o chatbot termina, marca como "já visto"
                AsyncStorage.setItem("hasSeenChatbot", "true");
               // console.log(userAnswers)
                //register(userAnswers)
                setIsFirstTime(false); // Atualiza para que a tela não seja mais mostrada
            }
        },
        [questionIndex, userAnswers] // Inclui userAnswers para garantir que o estado esteja atualizado
    );

    const renderAvatar = (props) => {
        return (
            <View style={styles.avatar}>
                <Image
                    source={require("./../../assets/images/avatar.png")}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        resizeMode: "cover",
                        paddingHorizontal: 15,
                        paddingVertical: 15,
                    }}
                />
            </View>
        );
    };

    // Verifica se o chatbot deve ser exibido ou não
    useEffect(() => {
        if (!isFirstTime) {
            router.replace("/login");
        }
    }, [isFirstTime]);

    if (isFirstTime) {
        
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <GiftedChat
                        messages={messages}
                        onSend={(messages) => onSend(messages)}
                        user={{
                            _id: 1,
                        }}
                        renderAvatar={renderAvatar}
                    />
                </View>
            </View>
        );
    }

    // Se não for a primeira vez, retorna null e não exibe a tela do chatbot
    return null;
}
