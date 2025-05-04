# react-native-vision-camera-devices-extractor

This Lib extract the Camera Devices to add in a open-source database

## Installation

This library requires:

- [`react-native-vision-camera`](https://github.com/mrousavy/react-native-vision-camera)
- [`react-native-mmkv`](https://github.com/mrousavy/react-native-mmkv)

Make sure they are installed and configured in your project:

```bash
npm install react-native-vision-camera react-native-mmkv
npx pod-install
```

---

## ❗ Notes for `vision-camera`

- If you're using **Frame Processors**, ensure the host app also installs `react-native-worklets-core`.
- If you're building a **Vision Camera Frame Processor Plugin**, you'll need extra native setup (let me know if you're doing that and I can walk you through it).

---

## Usage

Simply add the hook `useExtractCameraDevices();` into your app initialization script

```ts
import { useExtractCameraDevices } from 'react-native-vision-camera-devices-extractor';

// ...

useExtractCameraDevices();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
