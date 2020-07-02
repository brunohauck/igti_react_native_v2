import React from 'react';

//import { HeaderBackButton } from 'react-navigation';
//import { StackActions, NavigationActions } from 'react-navigation';

import { ScrollView, StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import axios from 'axios';
//import deviceStorage from '../constants/deviceStorage';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = this.props.navigation;
        this.state = {
            username: 'brunohauck',
            password: '123456'
        }
    }
    
    validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (password == "") {
            return false
        } else {
            return regex.test(password);
        }
    }
    formSubmit = () => {
        const vm = this;

         if (this.state.username == "") {
            alert('Please enter contact name!')
        } 
        if (this.state.password == "") {
            alert('Please enter contact name!')
        } else {
            const url = 'http://localhost:4000/api/auth';
            axios.post(url, vm.state)
                .then((response) => {
                    const data = response.data;          
                    console.log(data.token);
                    this.props.navigation.navigate('Root');
                })
                .catch(function (err) {
                    console.log(err)
                    alert(err)
                })
        }
    }
    render() {
        return (
            <>
                <Content>
                    <Form style={styles.formOuter}>
                        <Item floatingLabel style={styles.formInput}>
                            <Label>Username</Label>
                            <Input
                                onChangeText={(username) => this.setState({ username })}
                                value={this.state.username}
                            />
                        </Item>
                        <Item floatingLabel style={styles.formInput}>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                            />
                        </Item>
                        <Button block primary iconLeft  onPress={this.formSubmit.bind(this)}>
                            <Text>Log in</Text>
                        </Button>
                    </Form>
                </Content>
            </>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    formOuter: {
        flex: 1,
        padding: 8
    },
    formInput: {
        marginLeft: 0
    },
    submitBtn: {
        marginTop: 20
    }
});
