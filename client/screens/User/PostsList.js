import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { GetPosts } from "../../database/controllers/controllerPost";
import { styles } from "../../styles/styles";
// COMPONENTS //
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { Avatar, ListItem } from "react-native-elements";

import DarkThemeContext from '../../DarkThemeContext'
import { darkStyles } from "../../styles/darkStyles";

export default function Posts({ navigation }) {
  console.log('POSTS LIST!!!!')
  const isDarkMode = React.useContext(DarkThemeContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    refreshing: false,
    seed: 1,
    page: 1,
    error: null
  });

  const handleSearch = (data) => {
    //setPosts(data);
  };

  const firebaseRequest = (j) => {

    //PODRIA HACER UN FOR DESDE I HASTA LA PAGINA SIGUIENTE, O ALGO ASI
    //AGREGAR AL USEEFECT EL ESTADO DE PAGE PARA VOLVER A RENDERIZAR, FUNCIONA ASI CON HOOKS
    setTimeout(() => {
      GetPosts()
      .then((posts) => {
/*         for (let i = 0; i < 3; i++) {
          const doc = posts.docs[i];
          console.log("edoc",doc)
          setPosts([...{id: doc.id, ...doc.data()} ])
          
        } */
/*         var array = []
        console.log("page: ", pagination.page)
        console.log("J: ", j)
        array.push(posts.docs[j])
        array.push(posts.docs[j+1])
        array.push(posts.docs[j+2])
        console.log("array: ", array) */
        setPosts(posts.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .then(() => {
        setLoading(false);
        setPagination({...pagination, refreshing: false });
      })
      .catch((error) => {
        console.log("Error getting posts", error);
        setLoading(false);
        setPagination({ ...pagination, error, refreshing: false });
      });
    }, 1500);

  };

  useEffect(() => {
    console.log("cargando");
    setLoading(true);
    firebaseRequest(pagination.page);
  }, []);

  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      containerStyle={!isDarkMode ? styles.listItemContainer : darkStyles.listItemContainer}
      onPress={() => navigation.navigate("PostDetails", { data: item })}
    >
      <Avatar
        rounded
        title={item.title[0]}
        source={{ uri: item.photo ? item.photo : "https://cutt.ly/hjrVYr8" }}
      />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle style={{ fontSize: 10 }}>
          {item.tag}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  const renderSeparator = () => {
    return <View style={styles.separatorPostList} />;
  };
  const renderFooter = () => {
    //if (!loading) return null;
    return (
      <View style={styles.spinnerVerticalPagination}>
        <ActivityIndicator animating size="small"></ActivityIndicator>
      </View>
    );
  };

  const handleRefresh = () => {
    console.log("entre a handle refresh")
    setPagination(
      {...pagination,
        refreshing: true,
        page: 1,
        seed: pagination.seed + 1,
      })
      firebaseRequest(pagination.page);
 
  };
  const handleLoadMore = ()=> {
    console.log("Entre a hanlde load more")
    setPagination({...pagination,
      page: pagination.page+1
    })
    firebaseRequest(pagination.page)
  }

  const renderList = () => (
    <>
    {console.log("refreshing: ", pagination.refreshing)}
      <Text style={!isDarkMode ? styles.h3 : darkStyles.darkH3text}>ULTIMAS ENTRADAS</Text>
      {posts && posts.length >= 1 ? (
        <FlatList
          keyExtractor={keyExtractor}
          data={posts}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
          refreshing={pagination.refreshing}
          onRefresh={handleRefresh}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={3}
        />
      ) : (
        <Text>No se encontraron resultados..</Text>
      )}
    </>
  );

  return (
    <>
    {console.log("lo que ghay en post: ", posts)}
      <Header navigation={navigation} />
      <ScrollView>
        <View style={!isDarkMode ? styles.bodyPostList : darkStyles.darkBodyPostList}>
          <SearchBar onSearch={handleSearch} />
<<<<<<< HEAD
          <View style={!isDarkMode ? styles.cardPostList : darkStyles.darkCardPostList}>
            {loading ? <Text>Cargando posts..</Text> : renderList()}
=======
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
>>>>>>> dev
          </View>
        </View>
      </ScrollView>
    </>
  );
}
