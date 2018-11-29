import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Leaderboard from 'react-native-leaderboard';


export default class Classement extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            data: [
                {userName: 'Joe', highScore: 52},
                {userName: 'Jenny', highScore: 120},
        ]})
    }

    render() {
        return (
            <ScrollView>
                <Leaderboard
                    data={this.state.data}
                    sortBy='highScore'
                    labelBy='userName'/>)
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC66',

    },

    answersContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop: 10

    },
    answersButtons: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#FFF'

    },
    containerShop: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 40,
        marginLeft: 10,

    },


});
