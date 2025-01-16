import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import {
  Provider as PaperProvider,
  Button,
  Card,
  FAB,
  Portal,
} from "react-native-paper";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    class: "GST 121",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "3ac68afc-c605-88d3-a4f8-fbd91aa97f63",
    class: "GST 213",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "58694a5f-3da1-471f-bd96-145571e2iod72",
    class: "GST 124",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fb391aa93463",
    class: "GST 213",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "5869bQ0f-3da1-471f-jd96-145571e29d72",
    class: "GST 124",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-prds1aa97f63",
    class: "GST 213",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "586rta0f-3da1-471f-bd96-145571l29d72",
    class: "GST 124",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "58694a5f-3da1-471f-bd96-145571e29d72",
    class: "GST 124",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fb391aa97q63",
    class: "GST 213",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "58694a0f-3da1-471f-jd96-145571e29]72",
    class: "GST 124",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "3ac68afc-c605-48d3-a4fi-fb5s1aa97f63",
    class: "GST 213",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145l71l29p72",
    class: "GST 124",
    time: "9:00 AM - 11:00 AM",
  },
];

const Item = ({ className, time }) => (
  <View style={{ padding: 10 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: "black",
          padding: 0,
          margin: 0,
        }}
      >
        {className}
      </Text>
      <Text
        style={{
          fontSize: 16,
          justifyContent: "center",
          fontWeight: "bold",
          color: "#0059C9",
        }}
      >
        {time}
      </Text>
    </View>
  </View>
);

export default function App() {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={{ padding: 0 }}>
          <View style={{ padding: 0 }}>
            <Button mode="contained" onPress={pickImage} style={styles.button}>
              Pick an image
            </Button>
            {image && <Image source={{ uri: image }} style={styles.image} />}
          </View>
          <Card
            style={{
              backgroundColor: "white",
              width: 320,
            }}
          >
            <Card.Title
              title="Next Class"
              icon="cloud"
              //subtitle="Card Subtitle"
              variant="titleMedium"
              titleStyle={{
                fontWeight: "bold",
                color: "#0059C9",
                padding: 0,
                margin: 0,
              }}
            />
            <Card.Content>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "black",
                  padding: 0,
                  margin: 0,
                }}
              >
                GST 111
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 900,
                  color: "black",
                  backgroundColor: "#DBE2F9",
                  borderRadius: 10,
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  marginTop: 2,
                  alignSelf: "flex-start",
                  marginTop: 2,
                }}
              >
                9:00 AM - 11:00 AM
              </Text>
            </Card.Content>
          </Card>
        </View>

        {/* the second half sha */}

        <Text
          style={{
            fontSize: 21,
            fontWeight: 900,
            color: "black",
            padding: 15,
            paddingLeft: 30,
            alignSelf: "flex-start",
          }}
        >
          Today
        </Text>
        <View
          style={{
            margin: 0,
            padding: 0,
            minHeight: 450,
            //backgroundColor: "blue",
          }}
        >
          <Card
            style={{
              backgroundColor: "white",
              width: 320,
              height: 400,
            }}
          >
            <Card.Content>
              <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <Item className={item.class} time={item.time} />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ flexGrow: 1 }}
              />
            </Card.Content>
          </Card>
        </View>
      </View>

      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "calendar-today" : "plus"}
          label={open ? "" : "Add Timetable"}
          color="white"
          fabStyle={{
            backgroundColor: "#0059C9",
          }}
          actions={[
            {
              icon: "camera",
              color: "white",
              label: "Scan Timetable",
              style: {
                backgroundColor: "#0059C9",
              },
              onPress: () => console.log("Pressed scan"),
            },
            {
              icon: "cloud",
              color: "white",
              label: "Upload Timetable",

              style: {
                backgroundColor: "#0059C9",
              },
              //onPress: () => console.log("Pressed upload"),
              onPress: () => {
                pickImage();
              },
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2FC",
    alignItems: "center",
    //padding: 20,
    margin: 0,
    justifyContent: "center",
  },

  time: {
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    margin: 10,
    backgroundColor: "#0059C9",
  },
});
