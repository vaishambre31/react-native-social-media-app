import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import ProfileAvatar from "../components/ProfileAvatar";
import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { kFormatter } from "../utils/index";

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import { Get_Analysis } from '../store/actions/TweetsActions';
import Loading from '../components/Loading';

const TweetDetails = ({ route }) => {
    const [openChart, setOpenChart] = useState(false)
    const [openLoading, setOpenLoading] = useState(false)
    const { post } = route.params;

    const dispatch = useDispatch();
    const reduxState = useSelector(state => state.Tweets);
    const { loading, analysis, error } = reduxState
    // const analysis = {
    //     "score": -10,
    //     "comparative": -2.5,
    //     "calculation": [
    //         {
    //             "negative": -2
    //         },
    //         {
    //             "bad": -3
    //         },
    //         {
    //             "angry": -3
    //         },
    //         {
    //             "sad": -2
    //         }
    //     ],
    //     "tokens": [
    //         "sad",
    //         "angry",
    //         "bad",
    //         "negative"
    //     ],
    //     "words": [
    //         "negative",
    //         "bad",
    //         "angry",
    //         "sad"
    //     ],
    //     "positive": [],
    //     "negative": [
    //         "negative",
    //         "bad",
    //         "angry",
    //         "sad"
    //     ]
    // }
    let data;
    if (analysis !== null) {
        data = {
            labels: ["score", "comparitive", "positive", "negative"],
            datasets: [
                {
                    data: [Number(analysis.score), Number(analysis.comparative), analysis.positive.length, analysis.negative.length]
                }
            ]
        };
    } else {
        data = {
            labels: ["score", "comparitive", "positive", "negative"],
            datasets: [
                {
                    data: [0, 0, 0, 0]
                }
            ]
        };
    }

    const chartConfig = {
        backgroundColor: '#1cc910',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        // decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        // style: {
        //     borderRadius: 16,
        // },
    };

    const GetData = async (post) => {
        setOpenLoading(true)
        await dispatch(Get_Analysis(post.text))
        setOpenLoading(false)
    }

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View>

                <View style={{ elevation: 5, backgroundColor: '#FFF', padding: 10, margin: 10, borderRadius: 10 }} >
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
                </View>


                <TouchableOpacity style={{ backgroundColor: '#3c3c3c', padding: 10, margin: 10, borderRadius: 15 }} onPress={() => {
                    GetData(post)
                    if (!openLoading) {
                        setOpenChart(true)
                    }
                }}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Show Analysis</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    openChart && analysis !== null ? (<View>
                        <BarChart
                            style={{ elevation: 8, backgroundColor: '#e35610', margin: 10, borderRadius: 10 }}
                            data={data}
                            width={340}
                            height={220}
                            chartConfig={chartConfig}
                        />
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Analyzed data</Text>
                            <Text style={{ marginVertical: 10 }}>Score {analysis.score}</Text>
                            <Text style={{ marginVertical: 10 }}>Comparative {analysis.comparative}</Text>
                            <View style={{ elevation: 6, backgroundColor: '#FFF', padding: 10, borderRadius: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Analyzed Words {analysis.words.length}</Text>
                                {
                                    analysis.words.length > 0 ? analysis.words.map((item, index) => (
                                        <Text key={index} style={{ color: '#1048e3', marginVertical: 2 }}>{item}</Text>
                                    ))
                                        : <Text style={{ color: '#1048e3', marginVertical: 2 }}>No Words Analyzed</Text>
                                }
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Positive Words {analysis.positive.length}</Text>
                                {
                                    analysis.positive.length > 0 ? analysis.positive.map((item, index) => (
                                        <Text key={index} style={{ color: 'green', marginVertical: 2 }}>{item}</Text>
                                    ))
                                        : <Text style={{ color: 'green', marginVertical: 2 }}>No positive Words</Text>
                                }
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Negative Words {analysis.negative.length}</Text>
                                {
                                    analysis.negative.length > 0 ? analysis.negative.map((item, index) => (
                                        <Text key={index} style={{ color: 'red', marginVertical: 2 }}>{item}</Text>
                                    ))
                                        : <Text style={{ color: 'red', marginVertical: 2 }}>No negative Words</Text>
                                }
                            </View>
                        </View>
                    </View>
                    )
                        : <Text>acb</Text>
                }
            </View>
        </ScrollView>
    )
}
export default TweetDetails

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
