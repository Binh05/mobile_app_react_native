import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useTheme } from "react-native-paper"

interface DailyProgressData {
  day: string
  calories: number
  goal: number
}

interface DailyProgressBarsProps {
  data: DailyProgressData[]
}

const DailyProgressBars: React.FC<DailyProgressBarsProps> = ({ data }) => {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.barContainer}>
          <View style={styles.barWrapper}>
            <View
              style={[
                styles.barBackground,
                {
                  backgroundColor: theme.dark ? "#444444" : "#EEEEEE",
                },
              ]}
            />
            <View
              style={[
                styles.barFill,
                {
                  backgroundColor: theme.colors.primary,
                  height: `${(item.calories / item.goal) * 100}%`,
                },
              ]}
            />
          </View>
          <Text
            style={[
              styles.dayLabel,
              {
                color: theme.colors.secondary,
                opacity: 0.6,
                fontFamily: "Montserrat_400Regular",
              },
            ]}
          >
            {item.day}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 120,
    width: "100%",
    paddingHorizontal: 8,
  },
  barContainer: {
    alignItems: "center",
  },
  barWrapper: {
    width: 12,
    height: 100,
    position: "relative",
    marginBottom: 8,
  },
  barBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  barFill: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    borderRadius: 6,
  },
  dayLabel: {
    fontSize: 12,
  },
})

export default DailyProgressBars
