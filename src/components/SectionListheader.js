import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const SectionListHeader = props => {
  return <Text style={styles.Head}>{props.titles}</Text>;
};

const styles = StyleSheet.create({
  Head: {
    fontSize: 30,
    backgroundColor: 'black',
    color: 'white',
  },
});

export default SectionListHeader;
