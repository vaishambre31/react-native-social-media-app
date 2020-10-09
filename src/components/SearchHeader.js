import React, { Fragment, useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, Image, TouchableOpacity, TextInput } from 'react-native';
import Colors from "../constants/Colors";
import Values from "../constants/Values";
import { Feather } from "@expo/vector-icons";
import imageUrl from "./../../assets/instadp.jpg";

import { useDispatch, useSelector } from "react-redux";
import { SearchTweet } from "../store/actions/SearchActions";

const SearchHeader = ({ navigation, onPress }) => {
    const [text, setText] = useState('')

    const dispatch = useDispatch();

    return (
        <Fragment>
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // borderColor: 'red',
                    // borderWidth: 1
                }}>

                    <View style={{
                        // flex: 1,
                        flexDirection: 'row',
                        // borderColor: 'red',
                        // borderWidth: 1,
                        marginHorizontal: 20,
                    }}>
                        <Image source={imageUrl} style={{
                            height: 30,
                            width: 30,
                            alignSelf: 'flex-end',
                            borderRadius: 50,
                        }}
                        />
                    </View>
                    {/* 
                <LinearGradient
                    colors={['red', 'green', 'blue']}
                    style={{ flexGrow: 1, borderRadius: 20, padding: 1, }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                > */}

                    <TextInput
                        placeholder="Search"
                        underlineColor="transparent"
                        inp
                        onChangeText={text => setText(text)}
                        style={{
                            height: 40,
                            borderColor: Colors.colorGreyLight,
                            borderRadius: 20,
                            paddingHorizontal: 20,
                            fontSize: 14,
                            flexGrow: 1,
                            borderColor: Colors.colorGreyLight,
                            borderWidth: 1,
                            backgroundColor: Colors.colorDarkWhite
                        }}
                    />

                    {/* </LinearGradient> */}

                    <TouchableOpacity
                        style={{
                            // flex: 1,
                            // borderColor: 'red',
                            // borderWidth: 1,
                            marginHorizontal: 20,
                        }}
                        onPress={() => dispatch(SearchTweet(text))}
                    >

                        <Feather name="search" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </Fragment>
    )
}

export default SearchHeader
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? Values.statusBarHeight : 0,
        height: Values.headerHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorDarkWhite,
        borderBottomColor: Colors.headerBottomBorderColor,
        borderBottomWidth: 1
    }
})