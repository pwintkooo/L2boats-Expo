import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';

const styles = StyleSheet.create({
    box: {
        flexDirection: "column",
        backgroundColor: '#1F3C9A',
        borderWidth: 2,
        borderColor: 'black',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 6,
        marginBottom: 6,
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        flex: 1
    },
    titleBox: {
        borderWidth: 2,
        backgroundColor: '#FF6F61',
        marginTop: 10,
        marginRight: 3,
        marginLeft: 3,
        padding: 5,
        alignSelf: 'stretch',
        flex: 1
    },
    desc: {
        borderWidth: 2,
        backgroundColor: 'whitesmoke',
        padding: 5,
        marginTop: 10,
        flex: 1
    },
    image: {
        marginTop: 10,
        width: '100%',
        alignItems: "center",
        flex: 1,
        resizeMode: 'contain'
    }
})

const Boat = ({title, desc, poster, icon_name}) => {
    return (
        <View style={styles.box}>
            <View style={styles.titleBox}>
                <Text style={styles.title}><Icon name={icon_name} size={20}/>{title}</Text>
            </View>
            <Text style={styles.desc}>{desc}</Text>
            <Image source={poster} style={styles.image}/>
        </View>
    );
};

export default Boat;
