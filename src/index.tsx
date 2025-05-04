import { useEffect } from 'react';
import { useMMKV } from 'react-native-mmkv';
import { Camera } from 'react-native-vision-camera';

export const useExtractCameraDevices = () => {
  const storage = useMMKV();
  useEffect(() => {
    const cameraDevicesKey = 'RN_camera_devices';

    const extractDevices = async () => {
      const hasRunBefore = storage.contains(cameraDevicesKey);

      if (hasRunBefore) {
        console.debug('Devices information has already been extracted.');
        console.debug(
          'Devices information:',
          storage.getString(cameraDevicesKey)
        );
        return;
      }

      try {
        // Extract devices information
        const devices = Camera.getAvailableCameraDevices();

        const devicesString = JSON.stringify(devices);
        console.debug('Devices information:', devicesString);

        // Store devices information in MMKV
        storage.set(cameraDevicesKey, devicesString);
      } catch (error) {
        console.error('Error extracting devices:', error);
      }
    };

    extractDevices();
  }, [storage]);
};
