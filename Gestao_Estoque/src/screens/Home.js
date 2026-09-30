import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Platform,
    Alert,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    
    const handleLogout = () => {
        if (Platform.OS === 'web') {
            if (window.confirm("Deseja mesmo sair?")) {
                if (navigation) navigation.replace("Login");
            }
        } else {
            Alert.alert(
                "Sair",
                "Deseja mesmo sair?",
                [
                    { text: "Cancelar", style: "cancel" },
                    { 
                        text: "Sair", 
                        style: "destructive", 
                        onPress: () => navigation && navigation.replace("Login") 
                    }
                ]
            );
        }
    };

    //Call Back
    const handleNovoProduto = () =>{
        navigation.navigate('NovoProduto');
    };

    const handleLista = () =>{
        navigation.navigate('Lista');
    };

    const handleEstoqueBaixo = () =>{
        navigation.navigate('EstoqueBaixo');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.boasVindas}>Olá, Admin!</Text>
                        <Text style={styles.appName}>Gestão Estoque</Text>
                    </View>

                    <TouchableOpacity
                        onPress={handleLogout}
                        style={styles.sair}
                        activeOpacity={0.7}
                        accessibilityLabel="sair do sistema"
                    >
                        <MaterialIcons name="logout" size={20} color="#c42996" />
                    </TouchableOpacity>
                </View>

                {/* Cards Row */}
                <View style={styles.rowCards}>
                    <View style={styles.cards}>
                        <MaterialIcons name="inventory-2" size={22} color="#c42996" />
                        <Text style={styles.metricaValue}>20</Text>
                        <Text style={styles.metricaLabel}>Total de produtos</Text>
                    </View>

                    <View style={styles.cards}>
                        <MaterialIcons name="warning" size={22} color="#c42996" />
                        <Text style={styles.metricaValue}>2</Text>
                        <Text style={styles.metricaLabel}>Estoque Baixo</Text>
                    </View>

                    <View style={styles.cards}>
                        <MaterialIcons name="category" size={22} color="#c42996" />
                        <Text style={styles.metricaValue}>2</Text>
                        <Text style={styles.metricaLabel}>Categorias</Text>
                    </View>
                </View>

                {/* Seção Ações Rápidas */}
                <View style={styles.header}>
                    <Text style={styles.title}>Ações Rápidas</Text>
                </View>

                <View style={styles.grid}>
                    {/* Novo Produto */}
                    <TouchableOpacity
                    onPress={handleNovoProduto}
                    style={[styles.cardAcao, styles.primaryCard]}
                    activeOpacity={0.8}
                    >

                        <View style={styles.materialAdd}>
                            <MaterialIcons name="add-circle" size={28} color="#ffffff"/>
                        </View>

                        <View style={styles.containerTexto}>
                            <Text style={styles.titleNovoProduto}>Novo Produto</Text>
                            <Text style={styles.subtituloPlace}>Cadastrar um novo produto</Text>
                        </View>

                        <MaterialIcons name="chevron-right" size={22} color="#ffffff"/>

                    </TouchableOpacity>

                    {/* Listar Todos os Produtos */}
                    <TouchableOpacity
                    onPress={handleLista}
                    style={[styles.cardAcao, styles.secondCard]}
                    activeOpacity={0.8}
                    >

                        <View style={styles.materialAdd}>
                            <MaterialIcons name="list" size={28} color="#c42996"/>
                        </View>

                        <View style={styles.containerTexto}>
                            <Text style={styles.titleListEstoq}>Todos os Produtos</Text>
                            <Text style={styles.subtituloPlace}>Ver estoque completo</Text>
                        </View>

                        <MaterialIcons name="chevron-right" size={22} color="#c42996"/>

                    </TouchableOpacity>

                    {/* Produtos com Estoque Baixo */}
                    <TouchableOpacity
                    onPress={handleEstoqueBaixo}
                    style={[styles.cardAcao, styles.secondCard]}
                    activeOpacity={0.8}
                    >

                        <View style={styles.materialAdd}>
                            <MaterialIcons name="warning" size={28} color="#c42996"/>
                        </View>

                        <View style={styles.containerTexto}>
                            <Text style={styles.titleListEstoq}>Produtos com Estoque Baixo</Text>
                            <Text style={styles.subtituloPlace}>Ver produtos com estoque baixo</Text>
                        </View>

                        <MaterialIcons name="chevron-right" size={22} color="#c42996"/>

                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

// Styles
const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: '#f7f9fb',
    },
    scroll: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 36,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    boasVindas: {
        fontSize: 13,
        color: "#75777d",
        fontWeight: "500",
    },
    appName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#c42996",
    },
    sair: {
        width: 40,
        height: 40,
        backgroundColor: '#ffdad6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ffb4ab',
    },
    rowCards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        gap: 10,
    },
    cards: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e3e5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    metricaValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#c42996',
        marginTop: 4,
    },
    metricaLabel: {
        fontSize: 11,
        color: '#75777d',
        marginTop: 2,
        textAlign: 'center',
    },
    sectionContainer: {
        marginTop: 4,
        marginBottom: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#c42996',
    },
    cardAcao: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: '#e0e3e5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },
    primaryCard:{
        backgroundColor: '#c42996',
        borderColor: '#c42996',
    },
    secondCard:{
        backgroundColor: '#f0e2ec',
        borderColor: '#f0e2ec',
    },
    grid:{
        gap: 10,
        marginBottom: 26,
    },
    titleNovoProduto:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    titleListEstoq:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#c42996',
    },
    subtituloPlace:{
        fontSize: 12,
        color: '#a2a3a4',
        marginTop: 1,
    },
    containerTexto:{
        flex: 1,
    },
    materialAdd: {
        width: 42,
        height: 42,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
});