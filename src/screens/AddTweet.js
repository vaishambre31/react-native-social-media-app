import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Api from '../config/Api'
import { url } from '../config/keys'

const AddTweet = () => {
    const [tweetData, setText] = useState('')
    const [tweetLoading, setTweetLoading] = useState(false)
    const [emoji, setEmoji] = useState('Type To Get Emoji')

    const GetSentiemnt = (review) => {
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify({ review }),
        //     headers: new Headers({ 'Content-Type': 'application/json' })
        // }
        setText(review)
        fetch(url + '/api/nlp/s-analyzer/' + review)
            .then(res => res.json())
            .then(({ analysis }) => {
                if (analysis < 0 && analysis >= -1) {
                    setEmoji("😢")
                }
                else if (analysis < -1 && analysis >= -2) {
                    setEmoji("😖")
                }
                else if (analysis < -2) {
                    setEmoji("😤")
                } else if (analysis > 0 && analysis <= 1) {
                    setEmoji("😄")
                } else if (analysis > 1 && analysis <= 2) {
                    setEmoji("😊")
                } else if (analysis > 2) {
                    setEmoji("😇")
                } else {
                    setEmoji("🙂")
                }
            })
            .catch(err => {
                setEmoji('Type To Get Emoji')
            })
    }

    const postData = async () => {
        setTweetLoading(true)
        const resposne = await Api.post(`/api/tweet/${tweetData}`)
        const data = resposne.data;
        setTweetLoading(false)
        alert(data);
        setEmoji('')
    }

    return (
        <View style={{ marginTop: 45 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Whats Going On Buddy..???</Text>
            <TextInput
                underlineColor="transparent"
                onChangeText={review => GetSentiemnt(review)}
                style={{
                    height: 150,
                    borderColor: '#000',
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    fontSize: 14,
                    flexGrow: 1,
                    borderColor: '#3c3c3c',
                    borderWidth: 1,
                    backgroundColor: '#FFF',
                    margin: 10
                }}
            />
            <Text style={{ margin: 10, fontSize: 18 }}> Tweet Sentiment : {emoji}</Text>
            <TouchableOpacity style={{ backgroundColor: '#778ee0', padding: 10, margin: 10, borderRadius: 20 }} onPress={postData}>
                {
                    tweetLoading ? <ActivityIndicator color='#FFF' size='large' /> : <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 18 }}>Post Tweet</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default AddTweet
