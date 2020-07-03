import React from 'react';
//import UserList from '../components/UserList';
import axios from 'axios';
import {
	ActivityIndicator,
	StyleSheet,
	View
} from 'react-native';
import UserList from '../components/UserList'
//import deviceStorage from '../../constants/deviceStorage';
export default class HomeListComponent extends React.Component {

	static navigationOptions = {
		title: 'Usuários',
	};
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: false,
			error: false,
			jwt: ''
		};
        console.log("Entrou no construtor");
	}
	httpRequestGetAllUsers() {
		this.setState({ loading: true });
		const url = 'http://localhost:4000/api/getAllUsers';
		setTimeout(() => {
			axios({
				method: 'GET',
				url: url
			
			}).then((response) => {
				console.log(response.data)        
				this.setState({
					users: response.data,
					loading: false,
				});
			}).catch((error) => {
				this.setState({
					loading: false,
					error: true,
				})
			})
		}, 4000);
	}
	componentDidMount() {
		this.httpRequestGetAllUsers();
	}
	render() {
		if (this.state.loading) {
			return (
				<View style={[styles.container, styles.horizontal]}>
					<ActivityIndicator size="large" color="#0000ff" />
				</View>
			);
		} else {
			return (
				<View>
					<UserList
						users={this.state.users}
						onPressItem={pageParams => {											
							this.props.navigation.navigate('Edit', pageParams);
						}} />
				</View>
			);
		}
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	}
})
