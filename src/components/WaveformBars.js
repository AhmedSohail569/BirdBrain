import {View, StyleSheet} from "react-native";

/**
 * WaveformBars
 * - Renders N vertical bars using a [-60..0] dB scale (typical metering range).
 * - Pass an array of numeric dB values in `levels`. Most recent last.
 */
export default function WaveformBars({
  levels = [],
  barCount = 20,
  barWidth = 5,
  gap = 15,
  height = 120,
  color = "#136B8E",
  background = "#e3f6fe",
  style,
}) {
  const data =
    levels.length >= barCount
      ? levels.slice(levels.length - barCount)
      : [...Array(barCount - levels.length).fill(-60), ...levels];

  console.log("data", data);

  return (
    <View
      style={[styles.container, {height, backgroundColor: background}, style]}>
      <View style={[styles.bars, {height}]}>
        {data.map((db, idx) => {
          const h = dbToUnit(db) * (height * 0.9); // keep some top/bottom padding
          return (
            <View
              key={idx}
              style={{
                width: barWidth,
                height: Math.max(4, h),
                backgroundColor: color,
                marginHorizontal: gap / 2,
                borderRadius: barWidth / 2,
                alignSelf: "center",
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

function dbToUnit(db) {
  if (typeof db !== "number") return 0.06;
  const minDb = -60;
  const maxDb = 0;
  const clamped = Math.max(minDb, Math.min(maxDb, db));
  const norm = (clamped - minDb) / (maxDb - minDb); // 0..1
  return Math.max(0.06, norm);
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  bars: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
