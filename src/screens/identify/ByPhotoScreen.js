import React, {useState, useRef, useEffect} from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
  Animated,
  PanResponder,
} from "react-native";
import {Camera, useCameraDevice} from "react-native-vision-camera";
import Icon from "react-native-vector-icons/Ionicons";
import {checkAndRequestPermissions} from "../../utils/permissions";
import {RFPercentage} from "react-native-responsive-fontsize";
import {Images} from "~assets";
import {useNavigation} from "@react-navigation/native";
import {Button, Modal, Text} from "~components/Common";

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

export default function ByPhotoScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [layoutReady, setLayoutReady] = useState(false);

  const [birdFound, setBirdFound] = useState(null); // null = scanning, true/false after scan
  const [noBirdModalVisible, setNoBirdModalVisible] = useState(false);
  const navigation = useNavigation();

  const camera = useRef(null);
  const device = useCameraDevice("back", {
    physicalDevices: ["wide-angle-camera"],
  });

  // Frame position (draggable)
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    (async () => {
      const granted = await checkAndRequestPermissions();
      setHasPermission(granted);
    })();
  }, []);

  const handleTakePhoto = async () => {
    if (camera.current) {
      const snapshot = await camera.current.takePhoto({
        qualityPrioritization: "balanced",
      });
      setPhoto(snapshot.path);
      setPhotoTaken(true);
      setScanning(true);

      // Fake scanning delay + random result simulation
      setTimeout(() => {
        const found = Math.random() > 0.5; // simulate 50% chance bird found
        setBirdFound(found);
        setScanning(false);

        if (!found) {
          setNoBirdModalVisible(true);
        }
      }, 2500);
    }
  };

  const handleRetake = () => {
    setPhoto(null);
    setPhotoTaken(false);
    setScanning(false);
    setBirdFound(null);
  };

  // 🟦 PanResponder for draggable frame
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        const newX = Math.min(
          Math.max(pan.x._value + gesture.dx, -SCREEN_WIDTH * 0.4),
          SCREEN_WIDTH * 0.4,
        );
        const newY = Math.min(
          Math.max(pan.y._value + gesture.dy, -SCREEN_HEIGHT * 0.3),
          SCREEN_HEIGHT * 0.3,
        );
        pan.setValue({x: newX, y: newY});
      },
      onPanResponderRelease: () => {},
    }),
  ).current;

  if (!hasPermission) {
    return (
      <View style={styles.centered}>
        <Text>Waiting for camera permission...</Text>
      </View>
    );
  }

  if (!device) return <Text>Loading Camera...</Text>;

  return (
    <View style={styles.container} onLayout={() => setLayoutReady(true)}>
      {/* Camera Preview */}
      <View style={{position: "absolute", top: 40, left: 20, zIndex: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.BackWhite} />
        </TouchableOpacity>
      </View>

      <View style={styles.cameraContainer}>
        {layoutReady &&
          (!photo ? (
            <Camera
              ref={camera}
              style={styles.camera}
              device={device}
              isActive={!photoTaken}
              photo={true}
            />
          ) : (
            <Image source={{uri: `file://${photo}`}} style={styles.camera} />
          ))}
      </View>

      {/* 🟨 Draggable Frame Overlay */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.frameOverlay,
          {
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          },
        ]}>
        <View style={styles.cornerTopLeft} />
        <View style={styles.cornerTopRight} />
        <View style={styles.cornerBottomLeft} />
        <View style={styles.cornerBottomRight} />
      </Animated.View>

      {!photoTaken && (
        <Text variant="small" style={styles.instruction}>
          Zoom and drag to frame the bird within the square
        </Text>
      )}

      {/* Bottom Control Panel */}
      <View style={styles.bottomPanel}>
        {!photoTaken && (
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="image-outline" size={28} color="#333" />
              <Text style={styles.label}>Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.captureButton}
              onPress={handleTakePhoto}>
              <View style={styles.innerCircle} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate("SnapTipsScreen")}>
              <Icon name="help-circle-outline" size={28} color="#333" />
              <Text style={styles.label}>Snap Tips</Text>
            </TouchableOpacity>
          </View>
        )}

        {scanning && (
          <View style={styles.scanContainer}>
            <ActivityIndicator size="large" color="#2b7de9" />
            <Text style={styles.scanText}>Scanning Bird...</Text>
          </View>
        )}

        {!scanning && photoTaken && birdFound && (
          <View style={styles.scanComplete}>
            <Icon name="checkmark-circle" size={80} color="#2b7de9" />
            <Text style={styles.scanText}>Bird Identified!</Text>
            <TouchableOpacity
              style={styles.retakeButton}
              onPress={handleRetake}>
              <Text style={styles.retakeText}>Retake</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Modal
        visible={noBirdModalVisible}
        onClose={() => {
          setNoBirdModalVisible(false);
          handleRetake();
        }}>
        <View style={{alignItems: "center", paddingTop: 20}}>
          <Text style={{fontSize: 18, fontWeight: "600", marginTop: 10}}>
            No Birds Found
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#666",
              marginTop: 8,
              paddingHorizontal: 20,
            }}>
            Check the tips below to help you get a clearer picture!
          </Text>

          <View style={{gap: 10, alignItems: "center", marginVertical: 5}}>
            <Image source={Images.snapTip1} />
            <Image source={Images.snapTip2} />
            <Image source={Images.snapTip3} />
          </View>

          <Button
            title={
              <View
                style={{alignItems: "center", flexDirection: "row", gap: 8}}>
                <Icon name="camera" size={25} color={"#fff"} />
                <Text style={{fontWeight: "600", color: "#fff"}}>Retake</Text>
              </View>
            }
            style={{width: "100%"}}
            onPress={() => {
              setNoBirdModalVisible(false);
              handleRetake();
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    top: 60,
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.65,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: RFPercentage(15),
  },
  camera: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.65,
    overflow: "hidden",
    marginBottom: RFPercentage(15),
    borderRadius: 40,
  },
  instruction: {
    position: "absolute",
    bottom: SCREEN_HEIGHT * 0.28,
    color: "#fff",
    textAlign: "center",
    width: "100%",
  },
  frameOverlay: {
    position: "absolute",
    top: SCREEN_HEIGHT * 0.18,
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.45,
    alignSelf: "center",
  },
  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#fff",
    width: 40,
    height: 40,
    borderTopLeftRadius: 10,
  },
  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: "#fff",
    width: 40,
    height: 40,
    borderTopRightRadius: 10,
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#fff",
    width: 40,
    height: 40,
    borderBottomLeftRadius: 10,
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: "#fff",
    width: 40,
    height: 40,
    borderBottomRightRadius: 10,
  },
  bottomPanel: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  captureButton: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "#2b7de9",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 50,
    height: 50,
    backgroundColor: "#2b7de9",
    borderRadius: 50,
  },
  label: {
    marginTop: 6,
    fontSize: 13,
    color: "#333",
  },
  scanContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  scanText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  scanComplete: {
    alignItems: "center",
    paddingVertical: 20,
  },
  retakeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: "#2b7de9",
  },
  retakeText: {
    color: "#fff",
    fontWeight: "600",
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
