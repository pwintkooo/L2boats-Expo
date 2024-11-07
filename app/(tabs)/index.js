import React from 'react';
import {Text, ScrollView, Image, View, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

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
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
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
    descBox: {
        borderWidth: 2,
        backgroundColor: 'whitesmoke',
        padding: 5,
        textAlign: "center",
        marginTop: 10,
        flex: 1
    },
    image: {
        marginTop: 10,
        maxWidth: 375,
        alignItems: "center",
        flex: 1,
        resizeMode: 'contain'
    }
})

const Boat = ({title, desc, poster, icon_name}) => {
    return (
        <View style={styles.box}>
            <Text style={[styles.title, styles.titleBox]}><Icon name={icon_name} size={20}/>{title}</Text>
            <Text style={styles.descBox}>{desc}</Text>
            <Image source={poster} style={styles.image}/>
            <Text>{'\n'}</Text>
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView>
                <Text>{'\n'}</Text>
            <Text style={[styles.box, styles.title]}>GETABOAT - FOR SALE</Text>
            <Boat
                title = "SEA RAY500 SUNDANCERS"
                desc = "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                icon_name = "ship"
                poster ={require('./img/sea_ray.jpg')}
            />
            <Boat
                title = "FOUR WINNS HORIZON 180"
                desc = "A sporty look and refined details truly set the Horizon 180 above all others."
                icon_name = "ship"
                poster ={require('./img/four_winns.jpg')}
            />
            <Boat
                title = "FLIPPER 640 ST"
                desc = "A modern take on the classic, traditional hardtop and perfect for a family picnic."
                icon_name = "ship"
                poster ={require('./img/flipper.jpg')}
            />
            <Boat
                title = "PRINCESS V48"
                desc = "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                icon_name = "ship"
                poster ={require('./img/princess.jpg')}
            />
            <Boat
                title = "BAYLINER 175 BOWRIDER"
                desc = "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                icon_name = "ship"
                poster ={require('./img/bayliner.jpg')}
            />
            <Boat
                title = "FAIRLINE TARGA 47"
                desc = "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                icon_name = "ship"
                poster ={require('./img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;
