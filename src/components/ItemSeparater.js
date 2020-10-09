import React from 'react'
import { StyleSheet, View } from 'react-native';
import { itemSeparatorColor } from '../constants/Colors';

const ItemSeparater = () => <View style={styles.container}></View>;

export default ItemSeparater;

const styles = StyleSheet.create({
    container: {
        borderColor: itemSeparatorColor,
        borderWidth: .5
    }
});
