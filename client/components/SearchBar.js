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
    if(busqueda){
      var result = await searchInPost(busqueda);
      onSearch(result)
    }

  };

  useEffect(() => {
    buscar(search);
  }, [search]);

  return (

    <View>
      <SearchBar
        showCancel={false}
        placeholder="Buscar..."
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
        platform={"ios"}
        // inputContainerStyle={{ borderRadius: 50,backgroundColor: 'transparent'}}
         containerStyle={{ borderRadius: 50,backgroundColor: 'transparent'}}

      />
    </View>
  );
};

export default Bar;
