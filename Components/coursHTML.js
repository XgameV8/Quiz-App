import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    For,
    ImageBackground,

} from 'react-native';
export default class CGU extends React.Component {


    render() {
        return (
            <ImageBackground source={require('../assets/Images/wall.jpg')}
                             style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <Text style={styles.headerLabel}>Gérer la Structure de sa page</Text>

                        <View>
                            <Text style={styles.textCGU}>

                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                            </Text>

                            <Text style={styles.headerLabel}>La magie de Flexbox</Text>
                            <Text style={styles.textCGU}>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FicheMet')}>
                            <Image
                                source={require('../assets/Images/bouton_valider.png')}/>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        );


    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },


    headerLabel: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffdc7f',
    },
    textCGU : {

        color: '#FFF'
    },




});