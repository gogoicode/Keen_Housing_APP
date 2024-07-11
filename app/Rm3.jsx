import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { supabase } from "./supabasedata";
import "react-native-gesture-handler";
import BackgroundTimer from "react-native-background-timer";

export default function Rm3() {
  const [ledState, setLedState] = useState(false);

  useEffect(() => {
    fetchLedState();

    const intervalId = setInterval(fetchLedState, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchLedState = async () => {
    try {
      const { data, error } = await supabase
        .from("Lights")
        .select("Light")
        .eq("id", 1)
        .single();

      if (error) {
        console.error("Error fetching LED state:", error.message);
      } else {
        setLedState(data.Light);
      }
    } catch (error) {
      console.error("Fetch LED state error:", error.message);
    }
  };

  const toggleLed = async () => {
    const newState = !ledState;

    try {
      const { data, error } = await supabase
        .from("Lights")
        .update({ Light: newState })
        .eq("id", 1);

      if (error) {
        console.error("Error toggling LED state in Supabase:", error.message);
      } else {
        setLedState(newState);
      }
    } catch (error) {
      console.error("Toggle LED state error:", error.message);
    }
  };

  const [secondsLeft, setSecondsLeft] = useState(20);
  const [timerOn, setTimerOn] = useState(false);

  // useEffect(() => {
  //   if (timerOn) startTimer();
  //   else BackgroundTimer.stopBackgroundTimer();

  //   return () => {
  //     BackgroundTimer.stopBackgroundTimer();
  //   };
  // }, timerOn);

  // useEffect(() => {
  //   if (secondsLeft === 0) {
  //     BackgroundTimer.stopBackgroundTimer();
  //   }
  // });

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft((secs) => {
        if (secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  };

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);

    let displayHrs = hours < 10 ? "0${hours}" : hours;
    let displayMins = mins < 10 ? "0${hours}" : mins;
    let displaySecs = seconds < 10 ? "0${hours}" : seconds;

    return {
      displayHrs,
      displayMins,
      displaySecs,
    };
  };

  return (
    <View style={styles.container}>
      <Text>LED is {ledState ? "ON" : "OFF"}</Text>
      <Button title="Toggle LED" onPress={toggleLed} />

      {/* <Text style={styles.time}>
        {clockify().displayHrs.displayMins.displaySecs}LED is{" "}
        {ledState ? "ON" : "OFF"}
      </Text>
      <Button
        title="Toggle LED"
        onPress={() => setTimerOn((current) => !current)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {},
});
