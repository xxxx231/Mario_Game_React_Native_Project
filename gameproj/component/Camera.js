import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const Camera = (props) => {
  if(props.flag == false){
    return(
      <View></View>
    )
  };
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState(props.uri);
  const [rs, setrs] = useState('')

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
    });

    // Explore the result

    if (!result.cancelled) {
      setPickedImagePath(result.uri);

    }
  }

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
        aspect: [4,5]
    });

    // Explore the result

    if (!result.cancelled) {
        setrs(result)
        setPickedImagePath(result.uri);
        //console.log(pickedImagePath);
    }
  }

  // const Flip = async() =>{
  //   const manipResult = await ImageManipulator.manipulateAsync(
  //       rs.localUri || rs.uri,
  //       [{rotate: 180}, {flip: ImageManipulator.FlipType.Vertical }],
  //       { compress: 1, format: ImageManipulator.SaveFormat.PNG }
  //   );
  //   setPickedImagePath(manipResult.uri);
  //   setrs(manipResult);
  // }
  // console.log(pickedImagePath)
  useEffect(()=>{
    if(props.uri != pickedImagePath){
    props.geturi(pickedImagePath);
    }
  })
  
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Select an image" />
        <Button onPress={openCamera} title="Open camera" />
      </View>
      {/* <Text onPress={Flip}> Flip? </Text> */}
      {/* <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View> */}
    </View>
  );

}

export default Camera;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 100,
    height: 100,
    // resizeMode: 'cover'
  }
});
