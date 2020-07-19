import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import Row from "./components/Row";
import Button from "./components/Button";

export default function App() {
  const [currentVal, setCurrentVal] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevVal, setPrevVal] = useState(null);
  const [equation, setEquation] = useState(null);

  handleTap = (type, value) => {
    if (type === "number") {
      if (currentVal === "0") {
        setCurrentVal(`${value}`);
      } else {
        setCurrentVal(`${currentVal}${value}`);
      }
    }

    if (type === "operator") {
      setOperator(value);
      setPrevVal(currentVal);
      setCurrentVal("0");
    }

    if (type === "clear") {
      setCurrentVal("0");
      setOperator(null);
      setPrevVal(null);
      setEquation(null);
    }

    if (type === "posneg") {
      setCurrentVal(`${parseFloat(currentVal) * -1}`);
    }

    if (type === "percentage") {
      setCurrentVal(`${parseFloat(currentVal) * 0.01}`);
    }

    if (type === "equal") {
      const current = parseFloat(currentVal);
      const previous = parseFloat(prevVal);
      setEquation(`${prevVal}${operator}${current}`);

      if (operator === "+") {
        setCurrentVal(previous + current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "-") {
        setCurrentVal(previous - current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "*") {
        setCurrentVal(previous * current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "/") {
        setCurrentVal(previous / current);
        setOperator(null);
        setPrevVal(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.equation}>{equation}</Text>
        <Text style={styles.value}>{currentVal}</Text>
        <Row>
          <Button
            text="AC"
            theme="secondary"
            onPress={() => this.handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => this.handleTap("posneg")}
          />
          <Button
            text=" %"
            theme="secondary"
            onPress={() => this.handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => this.handleTap("operator", "/")}
          />
        </Row>
        <Row>
          <Button text="7" onPress={() => this.handleTap("number", 7)} />
          <Button text="8" onPress={() => this.handleTap("number", 8)} />
          <Button text="9" onPress={() => this.handleTap("number", 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => this.handleTap("operator", "*")}
          />
        </Row>
        <Row>
          <Button text="4" onPress={() => this.handleTap("number", 4)} />
          <Button text="5" onPress={() => this.handleTap("number", 5)} />
          <Button text="6" onPress={() => this.handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => this.handleTap("operator", "-")}
          />
        </Row>
        <Row>
          <Button text="1" onPress={() => this.handleTap("number", 1)} />
          <Button text="2" onPress={() => this.handleTap("number", 2)} />
          <Button text="3" onPress={() => this.handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => this.handleTap("operator", "+")}
          />
        </Row>
        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => this.handleTap("number", 0)}
          />
          <Button text="." onPress={() => alert("TBD")} />
          <Button
            text="="
            theme="accent"
            onPress={() => this.handleTap("equal")}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 80,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  equation: {
    color: "#fff",
    alignSelf: "flex-end",
    marginRight: 20,
    fontSize: 16,
  },
});
