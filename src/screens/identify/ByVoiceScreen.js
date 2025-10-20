import React, {useEffect, useRef, useState} from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Alert,
} from "react-native";
import Sound from "react-native-nitro-sound";
import {Circle} from "react-native-progress";
import WaveformBars from "../../components/WaveformBars";
import {checkAndRequestPermissions} from "../../utils/permissions";
import Header from "~components/Header";
import {useNavigation} from "@react-navigation/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";
import {Text} from "~components/Common";

const COLORS = {
  bg: "#fff",
  text: "#1a1a1a",
  subtext: "#5f6b7a",
  primary: "#37c5f0",
  accent: "#87CEEB",
};

export default function ByVoiceScreen() {
  const navigation = useNavigation();
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState("00:00.00");
  const [recordedLevels, setRecordedLevels] = useState([]); // keeps full waveform history
  const [liveLevels, setLiveLevels] = useState([]); // short moving window during recording

  const filePathRef = useRef(null);
  const pulse = useRef(new Animated.Value(1)).current;

  // Pulse animation for idle mic
  useEffect(() => {
    if (!recording && !analyzing) {
      const loop = Animated.loop(
        Animated.sequence([
          Animated.timing(pulse, {
            toValue: 1.08,
            duration: 800,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(pulse, {
            toValue: 1,
            duration: 800,
            easing: Easing.in(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
      );
      loop.start();
      return () => loop.stop();
    }
  }, [recording, analyzing]);

  const formatTime = ms => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hundredths = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}.${String(hundredths).padStart(2, "0")}`;
  };

  const normalizeMetering = db => {
    const clamped = Math.max(-60, Math.min(0, db ?? -60));
    return (clamped + 60) / 60;
  };

  const startRecording = async () => {
    const ok = await checkAndRequestPermissions();
    if (!ok) {
      Alert.alert(
        "Permissions Required",
        "Microphone access is needed to record audio.",
      );
      return;
    }

    try {
      setRecordedLevels([]);
      setLiveLevels([]);
      setTimer("00:00.00");

      Sound.addRecordBackListener(e => {
        if (e?.currentPosition != null) setTimer(formatTime(e.currentPosition));
        if (e?.currentMetering != null) {
          const level = normalizeMetering(e.currentMetering);
          const db = -60 + level * 60;
          setRecordedLevels(prev => [...prev, db]);
          setLiveLevels(prev => [...prev, db].slice(-20));
        }
      });

      const path = await Sound.startRecorder();
      filePathRef.current = path;
      setRecording(true);
    } catch (err) {
      console.warn("startRecording error:", err);
    }
  };

  const stopRecording = async () => {
    try {
      const path = await Sound.stopRecorder();
      Sound.removeRecordBackListener();
      setRecording(false);
      setRecorded(true);
      filePathRef.current = path;
      setTimeout(() => beginAnalyzing(), 1000);
    } catch (err) {
      console.warn("stopRecording error:", err);
    }
  };

  const playSound = async () => {
    if (!filePathRef.current) {
      Alert.alert("No Recording", "Please record a sound first.");
      return;
    }

    try {
      setPlaying(true);
      await Sound.startPlayer(filePathRef.current);
      Sound.addPlayBackListener(e => {
        if (e?.currentPosition >= e.duration) stopSound();
      });
    } catch (err) {
      setPlaying(false);
      console.warn("playSound error:", err);
    }
  };

  const stopSound = async () => {
    try {
      await Sound.stopPlayer();
      Sound.removePlayBackListener();
      setPlaying(false);
    } catch (err) {
      console.warn("stopSound error:", err);
    }
  };

  const beginAnalyzing = () => {
    setAnalyzing(true);
    setProgress(0);
    let p = 0;
    const id = setInterval(() => {
      p += 0.05;
      setProgress(p);
      if (p >= 1) {
        clearInterval(id);
        setTimeout(() => {
          setAnalyzing(false);
          Alert.alert("Bird Identified", "AI has identified the bird sound!");
        }, 400);
      }
    }, 150);
  };

  // Choose waveform data depending on state
  const waveformData = analyzing
    ? recordedLevels
    : recording
    ? liveLevels
    : recordedLevels;

  return (
    <View style={styles.container}>
      <Header
        showBack
        title={
          recording
            ? "Bird Voice Recording..."
            : analyzing
            ? "AI Analyzing..."
            : "Identify by Voice"
        }
        onBack={() => navigation.goBack()}
      />

      {/* Waveform */}
      <View style={styles.waveStrip}>
        <WaveformBars
          levels={waveformData}
          barCount={analyzing ? recordedLevels.length : 20}
          height={RFPercentage(20)}
        />
      </View>

      {/* Main Body */}
      <View style={styles.body}>
        <View style={{alignItems: "center"}}>
          <Text
            style={
              !recording && !analyzing
                ? styles.timerIdle
                : recording && !analyzing && styles.timerLive
            }>
            {timer}
          </Text>
        </View>

        {!analyzing && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: RFPercentage(5),
              marginHorizontal: 20,
            }}>
            <Text style={styles.identifyOption}>AI Enhance</Text>
            <Text style={styles.identifyOption}>By Photo</Text>
            <Text
              style={[
                styles.identifyOption,
                {
                  color: "#38BAEF",
                  borderBottomColor: "#38BAEF",
                  fontWeight: "500",
                },
              ]}>
              By Sound
            </Text>
          </View>
        )}

        {/* Idle */}
        {!recording && !analyzing && (
          <View style={styles.center}>
            <Animated.View style={{transform: [{scale: pulse}]}}>
              <TouchableOpacity
                style={styles.micButton}
                onPress={startRecording}
                activeOpacity={0.85}>
                <Icon name="mic" size={35} color={"#fff"} />
              </TouchableOpacity>
            </Animated.View>

            {!!filePathRef.current && (
              <TouchableOpacity
                style={[
                  styles.playButton,
                  playing && {backgroundColor: COLORS.accent},
                ]}
                onPress={playing ? stopSound : playSound}
                activeOpacity={0.85}>
                <Text style={styles.playText}>{playing ? "Stop" : "Play"}</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Recording */}
        {recording && !analyzing && (
          <View style={styles.center}>
            <TouchableOpacity
              style={[styles.micButton, {backgroundColor: COLORS.accent}]}
              onPress={stopRecording}
              activeOpacity={0.85}>
              <View style={styles.stopInner} />
            </TouchableOpacity>
            <Text style={styles.hint}>
              Tap to stop recording the bird sound
            </Text>
          </View>
        )}

        {/* Analyzing */}
        {analyzing && (
          <View style={styles.center}>
            <Text style={styles.hintAnalyze}>
              Please wait while AI identifies the sound
            </Text>
            <View style={{marginVertical: 20}}>
              <Circle
                size={120}
                progress={progress}
                showsText
                color={COLORS.primary}
              />
            </View>
            <Icon
              name="ios-search"
              size={40}
              color="#38BAEF"
              style={{marginTop: 10}}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.bg},
  waveStrip: {
    height: RFPercentage(40),
    width: "100%",
    backgroundColor: "#e3f6fe",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  body: {flex: 1, justifyContent: "flex-end", marginBottom: RFPercentage(10)},
  identifyOption: {
    flex: 1,
    fontSize: RFValue(13),
    fontWeight: "400",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    textAlign: "center",
  },
  center: {alignItems: "center", justifyContent: "center"},
  timerIdle: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 18,
  },
  timerLive: {
    backgroundColor: "#87CEEB",
    padding: 10,
    borderRadius: 20,
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 18,
  },
  micButton: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  stopInner: {
    width: 26,
    height: 26,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  hint: {marginTop: 10, color: COLORS.subtext, fontSize: 14},
  hintAnalyze: {
    color: COLORS.subtext,
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 24,
  },
  playButton: {
    marginTop: 22,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 26,
    backgroundColor: COLORS.primary,
  },
  playText: {color: "#fff", fontWeight: "600", fontSize: 16},
});
