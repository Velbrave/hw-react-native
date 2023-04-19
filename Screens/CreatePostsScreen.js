import React, { useState } from "react";
import { Camera } from "expo-camera";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Location from "expo-location";

const initialState = {
  name: "",
  region: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [state, setState] = useState(initialState);

  const takeFoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log("Foto", photo);

    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
  };

  const sendFoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("Default", { photo, state });
    setState(initialState);
    console.log(state);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 150, width: 130 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takeFoto} style={styles.takeButton}>
          <View style={styles.fotoBtn}>
            <MaterialCommunityIcons name="camera" color={"#BDBDBD"} size={24} />
          </View>
        </TouchableOpacity>
      </Camera>
      <Text style={styles.text}>Upload a photo</Text>

      <TextInput
        style={styles.input}
        placeholder="Name..."
        value={state.name}
        onChangeText={(value) =>
          setState((prevState) => ({ ...prevState, name: value }))
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Region..."
        value={state.region}
        onChangeText={(value) =>
          setState((prevState) => ({ ...prevState, region: value }))
        }
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={sendFoto}
      >
        <Text style={styles.textBtn}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    height: "40%",
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  photoContainer: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#fff",
    top: 10,
    left: 10,
  },
  fotoBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#BDBDBD",
    fontWeight: 400,
    fontSize: 16,
    marginTop: 8,
    marginLeft: 16,
    marginBottom: 32,
  },
  input: {
    color: "#BDBDBD",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginHorizontal: 16,
    height: 50,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    marginTop: 16,
    // marginBottom: 16,
    marginHorizontal: 16,
    height: 52,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "regular",
  },
});

export default CreatePostsScreen;
