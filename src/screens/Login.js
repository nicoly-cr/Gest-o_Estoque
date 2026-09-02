// #region Imports.
import React, {useState} from "react";
import {MaterialIcons} from '@expo/vector-icons';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform,
    ScrollView
} from "react-native";
// #endregion

// #region lógicas e Estados.
export default function Login({navigation}) {
    // #region lógicas e Estados.
    // 1. Estados (State) par armazenar os valores digitados e mensagem de erro.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [error, setError] = useState(""); // Guarda a mensagem de validação.

    // 2. Função disparada ao clicar no botão "Entrar".
    const handleLogin = () => {
        // Limpa mensagens de erro anteriores.
        setError("");
    };

    // 3. Validação de campos vazios.
    if (email.trim() === "") {
        setError ("Por favor, digite seu email.");
        return; // Interrompe a execução aqui.
    }
    if (password.trim() === "") {
        setError ("Por favor, digite sua senha.");
        return;
    }

    // 4. Se passou por todas as validações com sucesso:
    if (Platform.OS === "web") {
        alert ("Login efetuado com sucesso!");
    } else {
        Alert.alert("Sucesso", "Login efetuado com sucesso!");
    }

    // 5. Navegação da tela de login para a tela principal.
    if (navigation) {
        navigation.replace("Home");
    }

    // Fim da implementação se rolar - cadastro de usuário.
    // #endregion

    // #region Retorno do JSX
    return(
        <ScrollView
        contentContainerStyle={StyleSheet.scrollContainer}
        keyboardShouldPersistTaps="handled"
        >
            {/* Cabeçalho com logo */}
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <MaterialIcons name="caixa aberta" size={48} color="#83003d"/>
                </View>
                <Text style={styles.logoText}>EletroGestão</Text>
                <Text style={styles.subtitulo}>Bem-vindo!</Text>
            </View>

        </ScrollView>
    );

}
// #endregion

/**
 * Blocos styles, tudo que é estilo
 */
const styles = StyleSheet.create ({
    header: {
        alignItems: 'center',
        marginBottom: 28,
    },
    logoContainer: {
        width: 64,
        height: 64,
        borderRadius: 12,
        backgroundColor: '#eadfe4',
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
    },
});