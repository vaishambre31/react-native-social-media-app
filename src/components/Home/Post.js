import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ProfileAvatar from "../ProfileAvatar";
import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

import { kFormatter } from "../../utils/index";

const Post = ({ post, navigation }) => {

    return (

        <TouchableOpacity style={{ elevation: 5, backgroundColor: '#FFF', padding: 10, margin: 10, borderRadius: 10 }} onPress={() => navigation.navigate('Tweet_details', { post: post })} >
            <View style={styles.postHeader}>
                <ProfileAvatar
                    url={post.user.profile_image_url}
                    size={50}
                    isStory={post.retweeted}
                />

                <View style={{
                    flexGrow: 1,
                    // borderWidth: 1,
                    paddingHorizontal: 10
                }}>
                    <Text style={styles.username}>
                        {post.user.name}
                        <Text>  </Text>
                        <Text style={{ fontWeight: '100', fontSize: 14 }}>
                            {/* {post.created_at} */}
                            2h
                        </Text>
                    </Text>
                    <Text style={{ fontSize: 15 }}>@{post.user.screen_name}</Text>
                </View>
                <Feather name="more-vertical" size={22} />
            </View>

            <View style={styles.postbody}>

                {/* <View style={styles.postImage}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={{ height: 200, width: '100%' }}
                        resizeMode="contain"
                    />
                </View> */}

                <Text
                    style={styles.postCaption}
                    numberOfLines={5}
                >
                    {post.text}
                </Text>

                <View style={styles.postFeatures}>
                    <View style={styles.postActions}>
                        <View style={styles.actionLayout}>
                            <EvilIcons name="heart" size={30} color={Colors.colorGreyLight} />
                            <Text style={{ fontSize: 14 }}>{kFormatter(Number(post.favorite_count))}</Text>
                        </View>
                        <View style={styles.actionLayout}>
                            <EvilIcons name="comment" size={30} color={Colors.colorGreyLight} />
                            <Text style={{ fontSize: 14 }}>{kFormatter(Number(post.favorite_count))}</Text>
                        </View>
                        <View style={styles.actionLayout}>
                            <EvilIcons name="share-google" size={30} color={Colors.colorGreyLight} />
                        </View>
                    </View>
                    <View style={styles.postSentiment}>
                        <Text style={{ fontSize: 18 }}>{post.emotion}</Text>
                        {/* <MaterialIcons name="mood" size={28} /> */}
                    </View>
                </View>

                {/* <Text style={{ marginHorizontal: 10 }}>
                    Liked by <Text style={{ fontWeight: 'bold' }}>vaish_ambre_31 and others</Text>
                </Text> */}

                {/* <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: 5, marginBottom: 15 }}>
                    comments <Text>11,001</Text>
                </Text> */}

            </View>
        </TouchableOpacity>
    )
}

export default Post

const styles = StyleSheet.create({
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postbody: {
        borderRadius: 5,
        borderWidth: .5,
        marginVertical: 5,
        borderColor: Colors.headerBottomBorderColor
    },
    postImage: {
        // backgroundColor: 'yellow',
        // borderWidth: .5
    },
    postCaption: {
        margin: 10,
        fontSize: 15,
        color: Colors.colorDarkBlack
    },
    postFeatures: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
        marginLeft: 5,
        marginRight: 10,
        marginVertical: 5
        // marginVertical : 10
    },
    postActions: {
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'space-between',
    },
    actionLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5
    },
    postSentiment: {
        flexDirection: 'row',
        // borderWidth: 1,
        alignItems: 'center'
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    posted: {
        fontSize: 12,
    }
})