import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { GetMyPosts } from "../../database/controllers/controllerPost";
import { styles } from "../../styles/styles";
// COMPONENTS //
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { Avatar, ListItem } from "react-native-elements";
import { darkStyles } from "../../styles/darkStyles";
import DarkThemeContext from "../../DarkThemeContext";

export default function MyPosts({ navigation }) {
  const isDarkMode = React.useContext(DarkThemeContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("my posts: ", isDarkMode);

  console.log("darkStyles: ", darkStyles);
  const handleSearch = (data) => {
    setPosts(data);
  };

  useEffect(() => {
    setLoading(true);
    GetMyPosts()
      .then((myPost) => {
        setPosts(myPost.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.log("Error getting posts", err);
      });
  }, []);

  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      containerStyle={{ borderBottomWidth: 1.5 }}
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
    return (
      <View
        style={
          !isDarkMode
            ? styles.separatorPostList
            : darkStyles.darkSeparatorPostList
        }
      />
    );
  };
  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View
        style={
          !isDarkMode
            ? styles.spinnerVerticalPagination
            : darkStyles.darkSpinnerVerticalPagination
        }
      >
        <ActivityIndicator animating size="small"></ActivityIndicator>
      </View>
    );
  };

  const renderList = () => (
    <>
      <Text style={!isDarkMode ? styles.h3text : darkStyles.darkH3text}>
        ULTIMAS ENTRADAS
      </Text>
      {posts && posts.length >= 1 ? (
        <FlatList
          keyExtractor={keyExtractor}
          data={posts}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <Text style={!isDarkMode ? styles.textstyle : darkStyles.darkTextStyle}>
          No se encontraron resultados..
        </Text>
      )}
    </>
  );

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={!isDarkMode ? styles.scroll : darkStyles.darkScroll}>
        <View
          style={
            !isDarkMode ? styles.bodyPostList : darkStyles.darkBodyPostList
          }
        >
          <SearchBar onSearch={handleSearch} />
          <View
            style={
              !isDarkMode ? styles.cardPostList : darkStyles.darkCardPostList
            }
          >
            {loading ? <Text>Cargando posts..</Text> : renderList()}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
