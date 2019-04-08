import React from 'react';
import * as firebase from 'firebase';
import {StyleSheet, Text, Image, View} from 'react-native';
import { Container, Form, Input, Item, Button, Label} from 'native-base';


// Initialize Firebase
export var config = {
    apiKey: "AIzaSyAjn3nMgD3pUJYgUFefztgytHPM4osVzqU",
    authDomain: "quiz-app-80fad.firebaseapp.com",
    databaseURL: "https://quiz-app-80fad.firebaseio.com",
    projectId: "quiz-app-80fad",
    storageBucket: "quiz-app-80fad.appspot.com",
    messagingSenderId: "374084417499"
};
firebase.initializeApp(config);


export default class LoginForm extends React.Component {

    constructor(props){
        super(props)

        this.state =({
            email: '',
            password: ''
        })
    }

    signUpUser = (email, password) => {

        try {
            if (this.state.password.length < 6) {
                alert('Veuillez entrez un mot de passe de minimum 6 caractères.')
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password).then(firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    this.props.navigation.navigate("ProfileScreen");
                }
            }))

        }
        
        catch (error) {
            console.log(error.toString());
        }
        
    }

    signInUser = (email, password) => {
        try {   
            
            firebase.auth().signInWithEmailAndPassword(email, password).then(firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    var email = user.email;
                    var uid = user.uid;
                    var providerData = user.providerData;
                    this.props.navigation.navigate("ProfileScreen");
                }
                console.log(email);
            }))
        }
        catch (error) {
            console.log(error.toString());
        }
    
    }

    render() {
      return ( 
            <Container style= {styles.container}>
                <View style={styles.header}>
                <Image
                source={require('../assets/Images/logo.png')}
                />
                </View>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input 
                        autoCorrect={false}
                        autoCapitalize= "none"
                        onChangeText= {(email) => this.setState({email})}
                        >
                        </Input>
                    </Item>

                    <Item floatingLabel>
                        <Label>Mot de passe</Label>
                        <Input 
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize= "none"
                        onChangeText= {(password) => this.setState({password})}
                        >
                        </Input>
                    </Item>

                    <Button 
                    style= {{ marginTop: 20 }}
                    full
                    rounded
                    success
                    onPress= {() => this.signInUser(this.state.email, this.state.password)}
                    >
                        <Text>Connexion</Text>
                    </Button>

                    <Button 
                    style= {{ marginTop: 20 }}
                    full
                    rounded
                    primary
                    onPress= {() => this.signUpUser(this.state.email, this.state.password)}
                    >
                        <Text>Inscription</Text>
                    </Button>
                </Form>
            </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFCC66',
    },

      header: {
          alignItems: 'center',
          justifyContent: 'center'
      },


});