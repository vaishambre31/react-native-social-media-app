import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { colorAccent } from '../constants/Colors';

const ProfileAvatar = ({ url, size, isStory }) => {
    const imageSrc = require('../../assets/instadp.jpg');
    return (
        <View style={isStory ? styles.imageStyle : styles.myImage}>

            <Image
                source={url ? { uri: url } : imageSrc}
                size={size}
                style={{
                    height: size,
                    width: size,
                    borderRadius: 50
                }}
            />

        </View>
    )
}

export default ProfileAvatar

const styles = StyleSheet.create({
    imageStyle: {
        borderWidth: 2,
        padding: 2,
        borderRadius: 50,
        // marginBottom: 2
        borderColor: colorAccent,
    },
    myImage: {
        borderWidth: 2,
        padding: 2,
        borderRadius: 50,
        borderColor: 'white',
    }
})
