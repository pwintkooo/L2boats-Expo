import React from 'react';
import {Text, ScrollView, View, StyleSheet} from 'react-native';
import Boat from './boat';

const styles = StyleSheet.create({
    box: {
        borderWidth: 2,
        backgroundColor: 'grey',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 25
    }
})

const AllBoats = () => {
    return (
        <ScrollView>
            <View style={styles.box}>
                <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20, color: 'white' }}>GETABOAT - FOR SALE</Text>
            </View>
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
