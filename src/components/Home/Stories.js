import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native'
import ProfileAvatar from '../ProfileAvatar';

const Stories = () => {
    const imageSrc = 'https://s3-us-west-2.amazonaws.com/ticketmgmt/profileThumb_1506777767750.jpg';
    const stories = [
        {
            profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPXqQt1AvNLUWt3Jh-ORA6KDBCgqEs2v5Nwg&usqp=CAU',
            profileName: "vaish_ambre31",
        },
        {
            profileUrl: "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg",
            profileName: "smartearnonline"
        },
        {
            profileUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            profileName: "_rushi_3099_"
        },
        {
            profileUrl: imageSrc,
            profileName: "_rohan.ambre31_"
        },
        {
            profileUrl: imageSrc,
            profileName: "_be.my.luck_"
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={stories}
                ListHeaderComponent={
                    <View style={styles.myStory}>
                        <ProfileAvatar url={imageSrc} size={55} isStory={false} />
                        <Text numberOfLines={1} style={styles.textStyle}>Your Story</Text>
                    </View>
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.storyView}>
                        <ProfileAvatar url={item.profileUrl} size={55} isStory={true} />
                        <Text numberOfLines={1} style={styles.textStyle}>{item.profileName}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        flexDirection: 'row',
        // borderColor: 'pink',
    },
    myStory: {
        margin: 1,
        alignItems: 'center',
        marginVertical: 10,
        // borderWidth: 1
    },
    storyView: {
        // borderWidth: 1,
        margin: 1,
        alignItems: 'center',
        marginVertical: 10
    },
    textStyle: {
        fontSize: 12,
        width: 80,
        textAlign: 'center',
        // borderWidth: 1,
    },
})
