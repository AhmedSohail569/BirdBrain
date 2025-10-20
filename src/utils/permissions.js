import {Platform, PermissionsAndroid, Linking, Alert} from "react-native";
import {Camera} from "react-native-vision-camera";

export async function checkAndRequestPermissions() {
  try {
    if (Platform.OS === "ios") {
      // iOS — request camera + microphone permission
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const micPermission = await Camera.getMicrophonePermissionStatus();

      let newCameraPermission = cameraPermission;
      let newMicPermission = micPermission;

      if (cameraPermission !== "granted") {
        newCameraPermission = await Camera.requestCameraPermission();
      }
      if (micPermission !== "granted") {
        newMicPermission = await Camera.requestMicrophonePermission();
      }

      const allGranted =
        newCameraPermission === "granted" && newMicPermission === "granted";

      if (!allGranted) {
        Alert.alert(
          "Permissions Required",
          "Please enable Camera and Microphone permissions in Settings to use this feature.",
          [
            {text: "Cancel", style: "cancel"},
            {text: "Open Settings", onPress: () => Linking.openSettings()},
          ],
        );
      }

      return allGranted;
    } else {
      // Android — request camera, audio, and storage permissions
      const permissions = [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        // PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        // PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ];

      const results = await PermissionsAndroid.requestMultiple(permissions);

      const allGranted = Object.values(results).every(
        status => status === PermissionsAndroid.RESULTS.GRANTED,
      );

      if (!allGranted) {
        Alert.alert(
          "Permissions Required",
          "Please allow all permissions in App Settings to continue.",
          [
            {text: "Cancel", style: "cancel"},
            {text: "Open Settings", onPress: () => Linking.openSettings()},
          ],
        );
      }

      return allGranted;
    }
  } catch (error) {
    console.warn("Permission check error:", error);
    return false;
  }
}
