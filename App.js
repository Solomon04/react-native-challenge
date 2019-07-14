/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as axios from 'react-native-axios';
import Post from "./components/Post";

export default class App extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          url: "https://api.reddit.com/r/pics/hot.json", 
          posts: []
        };
  }

  componentDidMount(){
      axios.get(this.state.url, {
          params: {
              sort: "new",
              limit: 5
          }
      }).then(res => {
          let children = res.data.data.children;
          this.setState({posts: children}); 
      }).catch(err => {
          console.log(err.message);
      });
  }

  formatDate(value){
      let date = new Date(value*1000);
      if (!isNaN(date.getTime())) {
          // Months use 0 index.
          return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
      }
  }

    showPosts(){
        return this.state.posts.map((item) => {
            let img = null; 
            //Checks to see if post has a thumbnail
            if(item.data.thumbnail === "self"){
                img = "https://via.placeholder.com/200x100";
            }else{
                img = item.data.thumbnail;
            }
            return (
                <Post
                    key={item.data.id}
                    body={item.data.body}
                    thumbnail={img}
                    height={item.data.thumbnail_height}
                    width={item.data.thumbnail_width}
                    title={item.data.title}
                    date={this.formatDate(item.data.created)}
                    author={item.data.author}
                    score={item.data.score}
                    comments={item.data.num_comments}
                    url={"https://www.reddit.com" + item.data.permalink}
                />
            );
        }); 
    }

  render(){
      return (
          <ScrollView>
              {this.showPosts()}
          </ScrollView>
          
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
