import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { GetPosts } from "../../database/controllers/controllerPost";
import { styles } from "../../styles/styles";
// COMPONENTS //
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { Avatar, ListItem, List } from 'react-native-elements'

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


  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => (
    <ListItem bottomDivider >
      <Avatar title={item.title[0]} source={item.photo && { uri: item.photo }}/>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.tag}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )


  return (
    <>
      {console.log("Set Post: ", posts)}
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.bodyPostList}>
          <SearchBar onSearch={handleSearch} />
          <View style={styles.cardPostList}>
            {loading ? <Text>Cargando posts..</Text> :
              <>
                <Text style={styles.h3}>ULTIMAS ENTRADAS</Text>
                {posts && posts.length >= 1 ? (
                  <>
                    <>
                      <FlatList
                        keyExtractor={keyExtractor}
                        data={posts}
                        renderItem={renderItem}
                      />
                    </>
                  </>
                ) : (
                    <Text>No se encontraron resultados..</Text>
                  )}
              </>
            }
          </View>
        </View>
      </ScrollView>
    </>
  );
}
