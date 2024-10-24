import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import Boat from './boat';

const AllBoats = () => {
    return (
        <ScrollView>
                <Text>{'\n'}</Text>
            <Text>GetABoat - For Sale</Text>
            <Text>{'\n'}</Text>
            <Boat
                title = "Sea Ray500 Sundancer"
                desc = "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                icon_name = "ship"
                poster ={require('./img/sea_ray.jpg')}
            />
            <Boat
                title = "Four Winns Horizon 180"
                desc = "A sporty look and refined details truly set the Horizon 180 above all others."
                icon_name = "ship"
                poster ={require('./img/four_winns.jpg')}
            />
            <Boat
                title = "Flipper 640 ST"
                desc = "A modern take on the classic, traditional hardtop and perfect for a family picnic."
                icon_name = "ship"
                poster ={require('./img/flipper.jpg')}
            />
            <Boat
                title = "Princess V48"
                desc = "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                icon_name = "ship"
                poster ={require('./img/princess.jpg')}
            />
            <Boat
                title = "Bayliner 175 Bowrider"
                desc = "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                icon_name = "ship"
                poster ={require('./img/bayliner.jpg')}
            />
            <Boat
                title = "Fairline Targa 47"
                desc = "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                icon_name = "ship"
                poster ={require('./img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;
