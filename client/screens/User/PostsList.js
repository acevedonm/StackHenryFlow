import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { GetPosts } from "../../database/controllers/controllerPost";
import { styles } from "../../styles/styles";
// COMPONENTS //
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { Avatar, ListItem } from 'react-native-elements'

export default function PostsList({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setPosts(data);
  };

  useEffect(() => {
    console.log("cargando")
    setLoading(true);
    GetPosts()
      .then((posts) => {
        setPosts(posts.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.log("Error getting posts", err);
      });
  }, []);


  const keyExtractor = item => item.id
  const renderItem = ({ item }) => (
    <ListItem bottomDivider containerStyle={{ borderBottomWidth: 1.5 }}>
      <Avatar rounded title={item.title[0]} source={{uri: item.photo ? item.photo:"https://cutt.ly/hjrVYr8"}}/>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle style={{fontSize : 10}}>{item.tag}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )
  const renderSeparator = () => {
    return (
      <View
        style={styles.separatorPostList}
      />
    );
  };
  const renderFooter = ()=>{
    if (!loading) return null 
    return <View style={styles.spinnerVerticalPagination}>
      <ActivityIndicator animating size="small" ></ActivityIndicator>
    </View>
  }

const renderList = ()=>(
  <>
  <Text style={styles.h3}>ULTIMAS ENTRADAS</Text>
  {posts && posts.length >= 1 ? (
        <FlatList
          keyExtractor={keyExtractor}
          data={posts}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
        />
  ) : (
      <Text>No se encontraron resultados..</Text>
    )}
</>
)

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.bodyPostList}>
          <SearchBar onSearch={handleSearch} />
          <View style={styles.cardPostList}>
            {loading ? <Text>Cargando posts..</Text> :
              renderList()
            }
          </View>
        </View>
      </ScrollView>
    </>
  );
}
