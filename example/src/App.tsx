import { useExtractCameraDevices } from 'react-native-vision-camera-devices-extractor';
import { Text, View, StyleSheet } from 'react-native';
import { useMMKV } from 'react-native-mmkv';

export default function App() {
  useExtractCameraDevices();
  const storage = useMMKV();
  return (
    <View style={styles.container}>
      <Text>{storage.getString('RN_camera_devices')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
