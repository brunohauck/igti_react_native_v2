import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import UserItem from './UserItem';

const UserList = props => {
	// props são varáveis globais de um componente que pode ser passadas de um componente para outro
	const { users, onPressItem } = props;
	// neste momento cria a view Flatlist e dentro da mesma foi carragado um novo component
	return (
		<FlatList
			style={styles.container}
			data={users}
			renderItem={({ item }) => (
				<UserItem
					user={item}
					navigateToEditPage={onPressItem} />
			)}
			keyExtractor={item => item.name} />
	);
};
//definição dos estilos do layout html like
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
})
export default UserList;