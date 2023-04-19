import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DefaultScreen = ({ route, navigation }) => {
  const [post, setPost] = useState([]);
  console.log("route", route.params);
  useEffect(() => {
    if (route.params) {
      setPost((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", post);
  return (
    <View style={styles.container}>
      <FlatList
        data={post}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.photo }} style={styles.foto} />
            <Text style={styles.textName}>{item.state.name}</Text>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <View style={styles.comment}>
                  <MaterialCommunityIcons
                    name="comment-processing-outline"
                    color={"#BDBDBD"}
                    size={24}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                <View style={styles.map}>
                  <MaterialCommunityIcons
                    name="map-marker-radius-outline"
                    color={"#BDBDBD"}
                    size={24}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.textRegion}>{item.state.region}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foto: {
    height: 200,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 32,
  },
  button: {
    flex: 1,
    height: 28,
    marginTop: 8,
    marginLeft: 16,
    flexWrap: "wrap",
  },
  comment: {
    marginBottom: 10,
    marginRight: 50,
  },
  textName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#212121",
    marginLeft: 16,
    marginTop: 8,
  },
  textRegion: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#212121",
    marginLeft: 4,
  },
});

export default DefaultScreen;
