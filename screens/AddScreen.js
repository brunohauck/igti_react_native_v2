import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import FormAdd from '../components/FormAdd';
import { ScrollView, StyleSheet } from 'react-native';
export default class AddEditScreen extends React.Component {
  static navigationOptions = {
    title: 'Add',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <FormAdd navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
