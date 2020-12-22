import { SearchBar } from "react-native-elements";
import React from "react";
import { View } from "react-native";

export default class App extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={{ width: "90%", alignSelf: "center" }}>
        <SearchBar
          placeholder="Buscar..."
          onChangeText={this.updateSearch}
          value={search}
        />
      </View>
    );
  }
}
