//Imports
import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
//importação da API (service)

export default function handleNovoProduto({ navigation }) {
    //Lógica

    //JSX (tela)
    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    style={styles.ScrollView}
                >

                    {/**Cabeçalho e botão "voltar" */}
                    <View style={styles.grid}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.8}
                            accessibilityLabel="Voltar"
                            style={styles.btnVoltar}
                        >
                            <View style={styles.materialAdd}>
                                <MaterialIcons name="arrow-back" size={22} color="#c42996" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.tituloContainer}>
                            <Text style={styles.titulo}>GESTÃO DE CATÁLOGO</Text>
                            <Text style={styles.subTitulo}>Novo Produto</Text>
                        </View>
                    </View>

                    {/**Banner informativo */}
                    <View style={styles.infoBanner}>
                        <MaterialIcons name="info-outline" size={20} color="#c42996" />
                        <Text style={styles.infoBannerText}>Preencha as informações técnicas e de controle para incluir o item no estoque.</Text>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

};

//Style
const styles = StyleSheet.create({
    tituloContainer: {
        flex: 1,
        marginHorizontal: 12,
    },
    titulo: {
        fontSize: 12,
        color: "#a2a3a4",
        fontWeight: "500",
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    subTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#c42996",
    },
    materialAdd: {
        width: 42,
        height: 42,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    grid: {
        gap: 10,
        marginBottom: 26,
    },
    infoBanner: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0e2ec",
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: "#c42996",
        gap: 10,
    },
    infoBannerText: {
        flex: 1,
        fontSize: 12,
        color: "#a2a3a4",
        lineHeight: 18,
    },
});