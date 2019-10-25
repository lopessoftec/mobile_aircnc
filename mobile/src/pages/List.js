import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Image, AsyncStorage } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List(){
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());
 
            setTechs(techsArray);
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            {/* posso dizer que aqui faz referencia as tecnologias e irei fazer um loop */}
            {techs.map(tech => <SpotList key={tech} tech={tech} />)}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    logo: {
        height: 32,
        // quero que o conteudo da imagem fique contido no espaço disponvel
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 25
    },
});