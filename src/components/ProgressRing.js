import {View, Text, StyleSheet} from "react-native";
import Svg, {Circle} from "react-native-svg";

export default function ProgressRing({
  size = 160,
  strokeWidth = 10,
  progress = 0.62, // 62% as in screenshot default
  color = "#2BA6FF",
  trackColor = "rgba(43,166,255,0.15)",
  label,
  labelStyle,
  style,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(1, progress));
  const dashOffset = circumference * (1 - clamped);

  return (
    <View style={[styles.wrap, {width: size, height: size}, style]}>
      <Svg width={size} height={size}>
        <Circle
          stroke={trackColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.center}>
        <Text style={[styles.percent, {color}]}>
          {Math.round(clamped * 100)}%
        </Text>
        {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {alignItems: "center", justifyContent: "center"},
  center: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  percent: {fontSize: 28, fontWeight: "700"},
  label: {marginTop: 4, fontSize: 12, color: "#6b7280"},
});
