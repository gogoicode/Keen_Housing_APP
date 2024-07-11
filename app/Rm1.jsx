import React, { useState, useEffect } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { createClient } from "@supabase/supabase-js";
import { someFunction } from "@supabase/auth-js/dist/main/lib/types";

// const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseUrl = "https://wvbovqfvxtkuavxtdejh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2Ym92cWZ2eHRrdWF2eHRkZWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxMTMyMjksImV4cCI6MjAzNTY4OTIyOX0.1hC2pDLOb4yf0EF1ak8JNUr6pRoS_ztqxDGm4CtX-kM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Rm1() {
  const [isLight1On, setIsLight1On] = useState(false);
  const [isLight2On, setIsLight2On] = useState(false);

  useEffect(() => {
    fetchLightStates();
  }, []);

  const fetchLightStates = async () => {
    let { data, error } = await supabase.from("Lights").select("*").single();
    if (error) console.log("Error fetching light states:", error);
    else {
      setIsLight1On(data.Light1);
      setIsLight2On(data.Light2);
    }
  };

  const updateLightState = async (light, state) => {
    let updates = {};
    updates[light] = state;

    const { data, error } = await supabase
      .from("Lights")
      .update(updates)
      .eq("id", 1);
    if (error) console.log("Error updating ${Light} state:", error);
    if (data) console.log("Data updating ${Light} state:", data);
  };

  const toggleLight1 = () => {
    const newState = !isLight1On;
    setIsLight1On(newState);
    updateLightState("Light", newState);
  };

  const toggleLight2 = () => {
    const newState = !isLight2On;
    setIsLight2On(newState);
    updateLightState("Light", newState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IoT Smart Home Control</Text>
      <View style={styles.switchContainer}>
        <Text>Light 1</Text>
        <Switch value={isLight1On} onValueChange={toggleLight1} />
      </View>
      <View style={styles.switchContainer}>
        <Text>Light 2</Text>
        <Switch value={isLight2On} onValueChange={toggleLight2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
