import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Button } from 'react-native'
import ProfileAvatar from '../components/ProfileAvatar'
import Colors from "../constants/Colors";
import Values from "../constants/Values";
import { kFormatter } from "../utils/index";
import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import { Get_Trump, Get_Biden } from '../store/actions/AnalysisActions';
import { data } from "../../charts.json";

const Notification = () => {
    const [loadin, setloadin] = useState(false)
    const [modal, openModal] = useState({
        trump: false,
        open: false
    })
    useEffect(() => {
        // ApiCalls();
    }, []);
    const dispatch = useDispatch();
    const reduxState = useSelector(state => state.Analysis);
    // const { trump, biden } = reduxState;
    const trump = data[0]
    const biden = data[1]

    const ApiCalls = async () => {
        await dispatch(Get_Trump())
        await dispatch(Get_Biden())
        setloadin(false)
    }

    const post = {
        "created_at": "Sun Sep 20 06:43:06 +0000 2020",
        "id": 1307570967447699500,
        "id_str": "1307570967447699456",
        "text": "Something i hate twitter so badly sad truth",
        "truncated": false,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 1278367975746101200,
            "id_str": "1278367975746101253",
            "name": "vaish dev",
            "screen_name": "VaishDev",
            "location": "",
            "description": "IT enthusiast",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 4,
            "friends_count": 7,
            "listed_count": 0,
            "created_at": "Wed Jul 01 16:41:45 +0000 2020",
            "favourites_count": 11,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 9,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1279306433058582528/mNUbn38o_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1279306433058582528/mNUbn38o_normal.jpg",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en",
        "sentiment": -1.1428571428571428,
        "emotion": "😖"
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


    const trumpData = {
        labels: ["followers", "likes", "ReTweets", "Score"],
        datasets: [
            {
                data: [200000, trump.favorite_count, trump.retweet_count, 0]
            }
        ]
    };

    const bidenData = {
        labels: ["followers", "likes", "ReTweets", "Score"],
        datasets: [
            {
                data: [20000, biden.favorite_count, biden.retweet_count, 0]
            }
        ]
    };


    return (
        <ScrollView>
            <Text style={{ margin: 10, fontSize: 18, fontWeight: 'bold' }}> US Election 2020 Analysis</Text>
            <Text style={{ margin: 10, fontSize: 16 }}> Candidates</Text>

            <TouchableOpacity style={{ elevation: 5, backgroundColor: '#FFF', padding: 10, margin: 10, borderRadius: 10 }} >
                <View style={styles.postHeader}>
                    <ProfileAvatar
                        url={'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'}
                        size={50}
                        isStory={post.retweeted}
                    />

                    <View style={{
                        flexGrow: 1,
                        // borderWidth: 1,
                        paddingHorizontal: 10
                    }}>
                        <Text style={styles.username}>
                            {"Donald J. Trump"}
                            <Text>  </Text>
                            <Text style={{ fontWeight: '100', fontSize: 14 }}>

                            </Text>
                        </Text>
                        <Text style={{ fontSize: 15 }}>@{"realDonaldTrump"}</Text>
                    </View>
                    <Feather name="more-vertical" size={22} />
                </View>
            </TouchableOpacity>


            {!loadin &&
                <TouchableOpacity onPress={() => openModal({
                    trump: true,
                    open: true
                })}>
                    <BarChart
                        style={{ elevation: 8, backgroundColor: '#e35610', margin: 10, borderRadius: 10 }}
                        data={trumpData}
                        width={340}
                        height={220}
                        chartConfig={chartConfig}
                    />
                </TouchableOpacity>
            }

            <Modal
                animationType={"fade"}
                transparent={true}
                visible={modal.open}
                onRequestClose={() => openModal({
                    open: false
                })}>
                {/*All views of Modal*/}
                <View style={styles.modal}>
                    <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                        <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>Followers : </Text>{modal.trump ? trump.user.followers_count : biden.user.followers_count}</Text>
                        <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>Likes : </Text>{modal.trump ? trump.favorite_count : biden.favorite_count}</Text>
                        <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>Retweetd Counts : </Text>{modal.trump ? trump.retweet_count : biden.retweet_count}</Text>
                        <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>Peoples Sentiment : </Text>{trump.retweet_count}</Text>
                        {/* <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 10 }}>Chart Analysis 👇</Text> */}
                    </View>
                    <Button title="❌" onPress={() => {
                        openModal({
                            open: false
                        })
                    }} />
                </View>
            </Modal>


            <TouchableOpacity style={{ elevation: 5, backgroundColor: '#FFF', padding: 10, margin: 10, borderRadius: 10 }} onPress={() => { }} >
                <View style={styles.postHeader}>
                    <ProfileAvatar
                        url={'https://pbs.twimg.com/profile_images/1276548577058344960/hHLf-P8l_400x400.jpg'}
                        size={50}
                        isStory={post.retweeted}
                    />

                    <View style={{
                        flexGrow: 1,
                        // borderWidth: 1,
                        paddingHorizontal: 10
                    }}>
                        <Text style={styles.username}>
                            {"Joe Biden"}
                            <Text>  </Text>
                            <Text style={{ fontWeight: '100', fontSize: 14 }}>

                            </Text>
                        </Text>
                        <Text style={{ fontSize: 15 }}>@{"JoeBiden"}</Text>
                    </View>
                    <Feather name="more-vertical" size={22} />
                </View>


            </TouchableOpacity>
            {!loadin && <TouchableOpacity onPress={() => openModal({
                trump: false,
                open: true
            })}>
                <BarChart
                    style={{ elevation: 8, backgroundColor: '#e35610', margin: 10, borderRadius: 10 }}
                    data={bidenData}
                    width={340}
                    height={220}
                    chartConfig={chartConfig}
                /></TouchableOpacity>
            }

        </ScrollView>
    )
}

export default Notification

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
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ebeded",
        height: 300,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 80,
        marginLeft: 40,

    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
})
