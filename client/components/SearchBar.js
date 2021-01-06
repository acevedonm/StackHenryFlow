import { SearchBar } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { searchInPost } from "../database/controllers/controllerPost";
import { styles } from "../styles/styles";

const Bar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e);
  };

  const buscar = async (busqueda) => {
    var result = await searchInPost(busqueda);
    onSearch(result)
  };

  useEffect(() => {
    buscar(search);
  }, [search]);

  return (
    <View >
      <SearchBar
        placeholder="Buscar..."
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
 
      />
    </View>
  );
};

export default Bar;
