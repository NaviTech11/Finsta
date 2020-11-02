import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native'
import { ListItem, Card, Input, Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { CONVERSATIONS } from './conversations';

export default class MessengerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversations: CONVERSATIONS
        };
    }

    render() {
        const renderConversation = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.display}
                    leftAvatar={{source: {uri: item.image}}}
                />
            );
        };

        return (
           <ScrollView>
               <View>
                    <View style={{ flexDirection: 'row', flex: 1, height: 50, padding: 10 }}>
                        <View style={{ alignItems: 'flex-start', flex: 0.2 }}>
                            <Icon 
                                name='chevron-left'
                                type='font-awesome'
                                iconStyle={{ paddingRight: 10, fontSize: 26 }}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 26 }}>username</Text>
                        </View>
                    </View>
                </View>
                <Input 
                    placeholder='Search'
                    leftIcon={{ type: 'font-awesome', name: 'search' }}
                    leftIconContainerStyle={{ paddingRight: 10 }}
                />
                <FlatList
                    data={this.state.conversations}
                    renderItem={renderConversation}
                    keyExtractor={item => item.id.toString()}
                />
           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mesScreen: {

    }
});