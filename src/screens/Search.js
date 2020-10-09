import React, { useEffect, useState, Fragment } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import Values from "../constants/Values";
import { Feather } from "@expo/vector-icons";
import imageUrl from "./../../assets/instadp.jpg";
import Loading from "../components/Loading";
import Post from "../components/Home/Post";
import SearchHeader from '../components/SearchHeader'
import { SearchTweet } from "../store/actions/SearchActions";
import { statuses } from "../../searchData.json";

const Search = ({ navigation }) => {
    const [text, setText] = useState('')

    // const dispatch = useDispatch();
    // const reduxState = useSelector(state => state.Search);

    // const { searchData, loading } = reduxState

    // if (loading) {
    //     return <Loading />;
    // }
    return (
        <View style={{ flex: 1 }}>
            <SearchHeader />
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Your Search :  Donald Trump</Text>
                {
                    statuses.length === 0
                        ? <Text style={{ marginTop: 80, fontSize: 18, fontWeight: 'bold' }}>Search Results</Text>
                        : <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={statuses}
                            // ListHeaderComponent={<Stories />}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <>
                                    <Post post={item} navigation={navigation} />
                                </>
                            )}
                        />
                }
            </View>
        </View>
    )
}

export default Search

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
