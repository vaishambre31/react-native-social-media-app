import React, { Fragment } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, Image, TouchableOpacity, TextInput } from 'react-native';
import Values from "../constants/Values";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

const imageUrl = require('../../assets/instadp.jpg');

const Header = ({ title, navigation }) => {
    return (
        <SafeAreaView>
            {
                (title === "Feed")
                    ? <Feedheader navigation={navigation} />
                    : (title === "Search")
                        ? <SearchHeader navigation={navigation} />
                        : (title === "activity")
                            ? <Fragment><Text>{title}</Text></Fragment>
                            : <Fragment><Text>no title</Text></Fragment>
            }
        </SafeAreaView>
    )
}

export default Header

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

const Feedheader = ({ navigation }) => (
    <Fragment>
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                // borderColor: 'red',
                // borderWidth: 1
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // borderColor: 'red',
                    // borderWidth: 1,
                    // textAlign: 'center',
                    marginHorizontal: 20
                }}>
                    <Image source={require('../../assets/react.png')} style={{ height: 35, width: 35 }} />
                </View>
                <Text style={{
                    flex: 1,
                    // borderColor: 'red',
                    // borderWidth: 1,
                    textAlign: 'center',
                    marginHorizontal: 20,
                    fontSize: 18,
                    fontWeight: '500',
                }}>
                    Feed
            </Text>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        // borderColor: 'red',
                        // borderWidth: 1,
                        marginHorizontal: 20,
                    }}
                    onPress={() => { }}
                >
                    <Image source={imageUrl} style={{
                        height: 30,
                        width: 30,
                        alignSelf: 'flex-end',
                        borderRadius: 50,
                    }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </Fragment>
)

const SearchHeader = ({ navigation }) => (
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
                    onPress={() => alert(JSON.stringify(navigation.getParam('loadData')))}
                >

                    <Feather name="search" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    </Fragment>
)