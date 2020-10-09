import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { colorDarkWhite } from '../constants/Colors'
import Posts from "../components/Home/Posts";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Posts navigation={navigation} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f0f0f0',
    }
})