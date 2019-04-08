import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';



export default class FicheMet extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../assets/Images/wall.jpg')}
                             style={{width: '100%', height: '100%'}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.answersContainer}>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('coursHTML')}>
                                <Image
                                       source={require('../assets/Images/selectcours.png')}/>
                            </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/select_chap_free_2.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/selectcourslock.png')}/>
                        </TouchableOpacity>

                        </View>
                    </View>
            </ScrollView>
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },


    answersContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent:'space-around'

    },




});
