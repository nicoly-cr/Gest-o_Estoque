//#region Imports
/**
 * Imports, tudo aqui que usamos no React Native, precisa ser importado
 */
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform,
    ScrollView
} from 'react-native';
//import {ScrollView} from "react-native-web";
import CustomInput from "../components/CustomInput";

//#endregion

//#region Logica e estados 
/**
 * Bloco de logica e estados
 */
export default function Login ({ navigation }) {
    // 1. Estados (State) para armazenar os valores digitados e mensagens de erro
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // guarda a mensagem de validação

    // 2. Função disparada ao clicar no botão "Entrar"
    const handleLogin = () => {
        // limpa mensagem de erro anteriores 
        setError("");

        // 3. Validação de campos vazios 
        if (email.trim() === "") {  // trim = tira os espaços 
            setError("Por favor, digite seu email.");
            return; // Interrompe a execução aqui 
        }

        if (password.trim() === "") {   
            setError("Por favor, digite sua senha.");
            return;
        }

        // 4. Se passou por todas as validações com sucesso:
        if (Platform.OS === "web") {
            alert("Login efetuado com sucesso!");
        } else {
            Alert.alert("Sucesso", "Login efetuado com sucesso!");
        }

        // 5. Navegação da tela de login para a tela principal
        if (navigation) {
            navigation.replace("Home");
        }
    }; // <-- O fechamento do handleLogin deve ser AQUI

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
        >
            {/* Cabeçalho com logo */}
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <MaterialIcons name="archive" size={48} color="#bb5bff"/>
                </View>
                <Text style={styles.logoText}>EletroGestão</Text>
                <Text style={styles.subtitulo}>Bem-Vindo(a)!</Text>
            </View>

            {/*Formulário de login card central*/}
            <View style={styles.card}>
                {/*Mensagem de erro caso ocorra*/}
                {error !== "" && (
                    <View style={styles.errorBox}>
                        <MaterialIcons name="error-outline" size={18} color="#ba1a1a"/>
                        <Text syle={styles.errorText}>{error}</Text>
                    </View>
                )}

                {/*Email*/}
                <CustomInput 
                    label="Email"
                    iconName="email"
                    placeholder="Digite seu email aqui: abc@abc.com"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        if(error) setError(""); //limpa a mensagem de erro se o usuario
                    }}
                    keyboardType="email-address"
                />

                {/*Senha*/}
                <CustomInput
                    iconName="lock"
                    placeholder="Digite sua senha aqui: "
                    value={password}
                    onChangeText={(text) => {
                        setEmail(text);
                        if(error) setError(""); //limpa a mensagem de erro se o usuario
                    }}
                    secureTextEntry={true}
                />
            </View>
        </ScrollView>
    );
}
//#endregion

/**
 * Bloco styles, tudo que é estilo, precisa ser declarado aqui
 */
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginBottom: 28,
    },
    logoContainer: {
        width: 64,
        height: 64,
        borderRadius: 12,
        backgroundColor: '#e0e3e5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1d2b3e',
        letterSpacing: -0.5,
    },
    subtitulo: {
        fontSize: 16,
        color: '#75777d',
        marginTop: 4,
    }
});