import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { GetPosts } from "../../database/controllers/controllerPost";
import { styles } from "../../styles/styles";
// COMPONENTS //
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import DarkThemeContext from '../../DarkThemeContext'

export default function Posts({ navigation }) {
  const isDarkMode = React.useContext(DarkThemeContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setPosts(data);
  };

  useEffect(() => {
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

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.bodyPostList}>
          <SearchBar onSearch={handleSearch} />
          <View style={styles.cardPostList}>
            { loading ? <Text>Cargando posts..</Text> : 
            <>
            <Text style={styles.h3}>ULTIMAS ENTRADAS</Text>
            {posts && posts.length >= 1 ? (
              <>
                {posts.map((post) => (
                  <View key={post.id} style={styles.post}>
                    <Text
                      style={styles.postList}
                      onPress={() =>
                        navigation.navigate("PostDetails", { data: post})
                      }
                    >
                      {post.title.length > 20
                        ? `${post.title.substring(0, 20)}..`
                        : post.title}
                    </Text>
                    <Text style={styles.postTag}>{post.tag}</Text>
                  </View>
                ))}
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
