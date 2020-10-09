import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { connect } from "react-redux";

import Post from "./Post";
import Loading from '../../components/Loading';
import Stories from '../../components/Home/Stories'
import ItemSeparater from "../../components/ItemSeparater";

import { Get_Feed } from '../../store/actions/TweetsActions';
import { resData as tweets } from "../../../feedData.json";

// const Posts = ({ Get_Feed, Tweets: { loading }, navigation }) => {
const Posts = ({ Get_Feed, Tweets: { tweets, loading, error }, navigation }) => {

    useEffect(() => {
        Get_Feed();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>{error}</Text>
        </View>

    }

    return (
        <View style={styles.container}>
            {
                tweets.length !== 0 ? <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={tweets}
                    ListHeaderComponent={<Stories />}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <>
                            <Post post={item} navigation={navigation} />
                        </>
                    )}
                />
                    : <Text>No Data Found</Text>
            }

        </View>
    )
}

const mapStateToProps = (state) => ({
    Tweets: state.Tweets
})

export default connect(mapStateToProps, { Get_Feed })(Posts)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // marginHorizontal: 10
    },
})