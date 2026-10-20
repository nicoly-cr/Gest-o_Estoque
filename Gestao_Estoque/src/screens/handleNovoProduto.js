import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    SafeAreaView,
    Platform
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomInput from "../components/CustomInput";

export default function HandleNovoProduto({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
            <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.scrollContent}
            >
            {/* Cabeçalho e botão voltar alinhados horizontalmente */}
            <View style={styles.grid}>
                <TouchableOpacity
                onPress={() => navigation?.goBack()}
                activeOpacity={0.8}
                accessibilityLabel="Voltar"
                style={styles.btnVoltar}
                >
                <MaterialIcons name="arrow-back" size={20} color="#c42996" />
                </TouchableOpacity>

                <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>GESTÃO DE CATÁLOGO</Text>
                <Text style={styles.subTitulo}>Novo Produto</Text>
                </View>
            </View>

            {/* Banner informativo */}
            <View style={styles.infoBanner}>
                <MaterialIcons name="info-outline" size={18} color="#c42996" />
                <Text style={styles.infoBannerText}>
                Preencha as informações técnicas e de controle para incluir o item no estoque.
                </Text>
            </View>

            {/** Formulário sessão 1 - Informações básicas e identificação */}
            <View style={styles.cardSessao}>
                <View style={styles.cardSessaoHeader}> 
                    <View style={[styles.cardSessaoIcon,{backgroundColor: "#ffd6eb"}]}>
                        <MaterialIcons name="inventory" size={18} color="#c42996"/>
                    </View>
                    <View>
                        <Text style={styles.cardSessaoTitulo}>1. Identificação Geral</Text>
                        <Text style={styles.cardSessaoSubtitulo}>Dados Principais do Produto.</Text>
                    </View>
                </View>

                {/** 1. Nome do Produto */}
                <CustomInput
                    label="Nome do Produto"
                    placeholder="Digite o nome do produto."
                    value={""}
                    onChangeText={(text) => {}}
                    error={""}
                ></CustomInput>
                
                {/** 2. Categoria */}
                <CustomInput
                    label="Categoria"
                    placeholder="Digite a categoria do produto."
                    value={""}
                    onChangeText={(text) => {}}
                    error={""}
                ></CustomInput>

                {/** 3. Fabricante/Marca */}
                <CustomInput
                    label="Fabricante / Marca"
                    placeholder="Digite o fabricante ou a marca do produto."
                    value={""}
                    onChangeText={(text) => {}}
                    error={""}
                ></CustomInput>

                {/** 4. Número do Lote */}
                <CustomInput
                    label="Número do Lote"
                    placeholder="Digite o número do lote do produto."
                    value={""}
                    onChangeText={(text) => {}}
                    error={""}
                ></CustomInput>

                {/** 5. Descrição */}
                <CustomInput
                    label="Descrição"
                    placeholder="Descreva os principais detalhes técnicos e especificações do produto."
                    value={""}
                    onChangeText={(text) => {}}
                    error={""}
                    multiline={true}
                ></CustomInput>
            </View>

            {/** Formulário sessão 2 - Valores e Controle de Estoque */}
            <View style={styles.cardSessao}>
                <View style={styles.cardSessaoHeader}> 
                    <View style={[styles.cardSessaoIcon,{backgroundColor: "#ffd6eb"}]}>
                        <MaterialIcons name="inventory" size={18} color="#c42996"/>
                    </View>
                    <View>
                        <Text style={styles.cardSessaoTitulo}>2. Valores e Controle de Estoque</Text>
                        <Text style={styles.cardSessaoSubtitulo}>Precificação e limites de segurança.</Text>
                    </View>
                </View>
                {/** 1. Preço (R$) */}
                <CustomInput
                    label="Preço (R$)"
                    placeholder="Digite o preço (R$) do produto."
                    value={""}
                    onChangeText={(text) => {}}
                    error={""}
                ></CustomInput>

                {/** 2. Estoque Mínimo */}
                <CustomInput
                    label="Estoque Mínimo"
                    placeholder="Digite o estoque mínimo do produto."
                    value={""}
                    onChangeText={(text) => {}}
                    error={""}
                ></CustomInput>

                {/** 3. Cor / Acabamento */}
                <CustomInput
                    label="Cor / Acabamento"
                    placeholder="Digite a cor / acabamento do produto."
                    value={""}
                    onChangeText={(text) => {}}
                    error={""}
                ></CustomInput>
            </View>


            </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcf8fb",
    },
    scrollContent: {
        padding: 16,
    },
    grid: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    btnVoltar: {
        width: 44,
        height: 44,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e2e8f0",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    tituloContainer: {
        flex: 1,
        justifyContent: "center",
    },
    titulo: {
        fontSize: 11,
        color: "#a4a2a3",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    subTitulo: {
        fontSize: 18,
        fontWeight: "700",
        color: "#c42996",
        marginTop: 2,
    },
    infoBanner: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f6eef5",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: "#c42996",
        gap: 8,
    },
    infoBannerText: {
        flex: 1,
        fontSize: 12,
        color: "#c42996",
    },
    cardSessao: {
        backgroundColor: "#ffffff",
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e5e0e4",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
    },
    cardSessaoHeader:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f9f1f8",
        gap: 10,
    },
    cardSessaoIcon:{
        width: 32,
        height: 32,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    cardSessaoTitulo:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#c42996",
    },
    cardSessaoSubtitulo:{
        fontSize: 11,
        color: "#7d757b",
        marginTop: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 40,
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9f1f8",
    }
});