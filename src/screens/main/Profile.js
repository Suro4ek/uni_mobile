import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Profile = props => {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>asdasd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Profile;
