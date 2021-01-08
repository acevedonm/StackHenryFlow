import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { GetSomethingsPosts } from "../../database/controllers/controllerPost";
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
    error: null
  });
  const [page, setPage] = useState(3)

  const handleSearch = (data) => {
    setPosts(data);
  };

  const firebaseRequest = () => {
    //setLoading(true)
    setTimeout(() => {
      GetSomethingsPosts(page)
      .then((posts) => {
        setPage(page+3)
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
    firebaseRequest();
  }, []);

  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      style={!isDarkMode ? styles.listItemContainer : darkStyles.listItemContainer}
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
    return (
      //Footer View with Load More button
      <View style={stylesLocal.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={firebaseRequest}
          //On Click of button calling getData function to load more data
          style={stylesLocal.loadMoreBtn}>
          <Text style={stylesLocal.btnText}>Cargar Más</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };


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
        />
      ) : (
        <Text>No se encontraron resultados..</Text>
      )}
    </>
  );

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={!isDarkMode ? styles.bodyPostList : darkStyles.darkBodyPostList}>
          <SearchBar onSearch={handleSearch}/>
          <View style={!isDarkMode ? styles.cardPostList : darkStyles.darkCardPostList}>
            {/* loading ? <Text>Cargando posts..</Text> : */ renderList()}
          </View>
        </View>
      </ScrollView>
    </>
  );
}


const stylesLocal = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});