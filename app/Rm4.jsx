import React, { useState } from "react"; // Import useState for state management
import { StyleSheet, Text, View, Switch } from "react-native";

function Rm4() {
  // Capitalize the function name for better naming conventions
  const [isEnabled, setIsEnabled] = useState(false); // Define state for switch

  return (
    <View style={styles.container}>
      <Text style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}>
        Room 4 Switch {"\n"}
      </Text>
      <Switch
        trackColor={{ false: "#FEFFFE", true: "#000101" }} // Optional: Customize track colors
        thumbColor={isEnabled ? "#FEFFFE" : "#000101"} // Optional: Customize thumb color
        onValueChange={setIsEnabled} // Set state on change
        value={isEnabled} // Pass current state value
        style={{ transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }] }} // Increase scale
      />
    </View>
  );
}

export default Rm4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2FCDFA",
  },
});
