import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';

const UserItem = props => {
	const { user, navigateToEditPage } = props;
	const name = user.name;
	const phone = user.phone;
	const email = user.email;
	return (
		<View style={styles.item}>
			<TouchableOpacity onPress={() => {
				// nesse momento vai navegar executar uma função e passar por parâmentro o user mais essa função será
				// executada no HomeScreen no codigo onPressItem={pageParams => {
				//		console.log(pageParams)
				//		this.props.navigation.navigate('Edit', pageParams);
				//	}}
				console.log(user)
				navigateToEditPage({ user });
			}}>
				
				<View style={styles.container}>
					<Image
						style={styles.image}
						resizeMode={"cover"}
						source={{ uri: user.img_url }}
					/>
					<Text style={styles.txtTitulo}>Name: {name}</Text>
					<Text style={styles.txtValor}>Telefone:  {phone}</Text>
					<Text style={styles.txtValor}>Email:  {email}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
	item: {
		backgroundColor: '#FFF',
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10,
		padding: 10,
		flexDirection: 'column'
	},
	foto: {
		width: 250,
		height: 150
	},
	destalhesItem: {
		marginLeft: 20,
		flex: 1
	},
	txtTitulo: {
		fontSize: 13,
		color: 'black',
		marginBottom: 5
	},
	txtValor: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	txtDetalhes: {
		fontSize: 16
	}

});

export default UserItem;