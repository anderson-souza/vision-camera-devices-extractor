import { useEffect } from 'react';
import { useMMKV } from 'react-native-mmkv';
import { Camera } from 'react-native-vision-camera';

export const useExtractCameraDevices = () => {
  const storage = useMMKV();
  useEffect(() => {
    const runOnceKey = 'RN_camera_devices_extracted';
    const cameraDevicesKey = 'RN_camera_devices';

    const extractDevices = async () => {
      const hasRunBefore = storage.getBoolean(runOnceKey);

      if (hasRunBefore) {
        console.debug('Devices information has already been extracted.');
        return;
      }

      try {
        // Extract devices information
        const devices = Camera.getAvailableCameraDevices();
        console.log('Extracted devices:', devices);

        // Store devices information in MMKV
        storage.set(cameraDevicesKey, JSON.stringify(devices));

        // Mark as run
        storage.set(runOnceKey, true);
      } catch (error) {
        console.error('Error extracting devices:', error);
      }
    };

    extractDevices();
  }, [storage]);
};
