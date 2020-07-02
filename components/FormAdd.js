import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';
import deviceStorage from '../constants/deviceStorage';

export default class FormAdd extends Component {
	constructor() {
		super();
		this._id = '';
		this.formType = 'add';
		this.state = {
			name: '',
			username: '',
			email: '',
			phone: '',
			password: '',
			img_url: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'
		}
		this.stateJwt = {
			jwt: '',
			loading: true
		}
		this.newJWT = this.newJWT.bind(this);
		this.loadJWT = deviceStorage.loadJWT.bind(this);
		this.loadJWT();
	}
	newJWT(jwt){
		this.setStateJwt({
		  jwt: jwt
		});
	} 

	validateEmail = (email) => {
		const regex = /^[a-z._-]+@[a-z.-]+\.[a-z]{2,4}$/;

		if (email == "") {
			return false
		} else {
			return regex.test(email);
		}
	}

	validatePhone = (phone) => {
		const regex = /^\+?[0-9]*$/;

		if (phone == "") {
			return false
		} else {
			return regex.test(phone);
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
		if (this.state.name == "") {
			alert('Please enter contact name!')
		} else if (this.validateEmail(this.state.email) == false) {
			alert('Please enter a valid email!')
		} else if (this.validatePhone(this.state.phone) == false) {
			alert('Please enter a valid phone number!')
		} else if (this.validatePassword(this.state.password) == false) {
			alert('Please enter a valid password')
		} else {
			const headers = {
				'Authorization': 'Bearer ' + vm.stateJwt.jwt
			};
			axios.post(url, headers, vm.state)
			.then(function (response) {
				const data = response.data;
				console.log(data.msg);
			})
			.catch(function (err) {
				alert(err)
			})

				/*
			const url = global.api+'/api/createuser';
			deviceStorage.saveKey("id_token").then(function (response){
				console.log("Entrou get Key")
				const headers = {
					'Authorization': 'Bearer ' + response
				};
			
				axios({
					method: 'POST',
					url: url,
					headers: headers,
				  }, vm.state ).then((response) => {
					this.setState({
					  email: response.data.email,
					  loading: false
					});
				  }).catch((error) => {
					this.setState({
					  error: 'Error retrieving data',
					  loading: false
					});
				  });
				
				axios.post(url, headers, vm.state)
				.then(function (response) {
					const data = response.data;
					console.log(data.msg);
				})
				.catch(function (err) {
					alert(err)
				})
			});	*/

		}
	}
	render() {
		console.log("Render")
		return (
			<Content>
				<Form style={styles.formOuter}>
					<Item floatingLabel style={styles.formInput}>
						<Label>Name Add</Label>
						<Input
							onChangeText={(name) => this.setState({ name })}
							value={this.state.name}
						/>
					</Item>
					<Item floatingLabel style={styles.formInput}>
						<Label>Username</Label>
						<Input
							onChangeText={(username) => this.setState({ username })}
							value={this.state.username}
						/>
					</Item>
					<Item floatingLabel style={styles.formInput}>
						<Label>Email</Label>
						<Input
							onChangeText={(email) => this.setState({ email })}
							value={this.state.email}
						/>
					</Item>
					<Item floatingLabel style={styles.formInput}>
						<Label>Celular</Label>
						<Input
							onChangeText={(phone) => this.setState({ phone })}
							value={this.state.phone}
						/>
					</Item>
					<Item floatingLabel style={styles.formInput}>
						<Label>Password</Label>
						<Input
							onChangeText={(password) => this.setState({ password })}
							value={this.state.password}
						/>
					</Item>
					<Button block primary iconLeft style={styles.submitBtn} onPress={this.formSubmit.bind(this)}>
						<Text>Salvar</Text>
					</Button>
				</Form>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
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