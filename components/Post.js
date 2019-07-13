import React from 'react';
import {View, Text, Image, StyleSheet, Linking, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Post extends React.Component {

    // goToURL(url){
    //     Linking.openURL(url).catch(err => console.error('An error occurred', err));
    // }

    //static propTypes = { url: React.PropTypes.string };
    handleClick = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else {
                console.log("Don't know how to open URI: " + this.props.url);
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    <Text style={styles.description}>
                            {"\n"}Posted by <Text style={{textDecorationLine: 'underline', fontStyle: 'italic'}}> {this.props.author}</Text> on <Text style={{textDecorationLine: 'underline'}}> {this.props.date}</Text>
                    </Text>
                    <Image source={{uri: this.props.thumbnail}} style={{height: 200, marginVertical: 50}}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}} >
                            <Icon.Button name="thumbs-up" size={24} backgroundColor="#3b5998">
                                <Text style={{ fontFamily: 'Helvetica', fontSize: 18,  fontWeight: 'bold', color: 'white'}}>
                                    {this.props.score}
                                </Text>
                            </Icon.Button>
                        </View>
                        <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}} >
                            <Icon.Button name="comment" size={24} backgroundColor="#3b5998">
                                <Text style={{ fontFamily: 'Helvetica', fontSize: 18,  fontWeight: 'bold', color: 'white'}}>
                                    {this.props.comments}
                                </Text>
                            </Icon.Button>
                        </View>
                        <View style={{width: 0, height: 50, backgroundColor: 'powderblue'}} />
                </View>
                <View style={{alignItems: 'stretch', justifyContent: 'center', marginVertical: 25}}>
                        <Button
                            onPress={this.handleClick}
                            title="View Post On Reddit"
                            color="#007bff"
                            accessibilityLabel="View Post On Reddit"
                            style={{padding: 20}}
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245, 245, 245)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleSection: {
        alignItems: 'stretch',
        //backgroundColor: '#fff',
        marginBottom: 20,
        marginTop: 50
    },

    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    },

    subText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    description: {
        fontSize: 17,
        //fontWeight: 'italic',
    },

    imgSection: {
        alignItems: 'stretch',
        backgroundColor: 'gray',
        flex: 0.3
    },
    img: {

    }




});