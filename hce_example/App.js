//@flow

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions
} from "react-native";
import HCE from "react-native-nfc-hce";

const window = Dimensions.get("window");

export default class App extends Component {
  state = {
    support: false,
    enabled: false,
    warnText: null
  };

  componentDidMount = () => {
    const { support, enabled } = HCE.supportNFC();
    console.log("enable: ", HCE.supportNFC());
    if (support) {
      this.setState({ support, enabled });
      if (!enabled) {
        this.setState({ warnText: "請開啟ＮＦＣ" });
      } else {
        this.setState({ warnText: null });
      }
    } else {
      this.setState({ warnText: "你的裝置不支援ＮＦＣ" });
    }

    HCE.listenNFCStatus(enabled => {
      console.log("NFC enabled: ", enabled);
      this.setState({ enabled, warnText: enabled ? null : "請開啟ＮＦＣ" });
    });
  };

  _onChangeText = text => {
    if (text.length > 0) {
      HCE.setCardContent(text);
    }
  };

  render() {
    const { warnText } = this.state;
    return (
      <View style={styles.container}>
        {warnText ? <Text style={styles.text}>{warnText}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder={"Enter Card Content"}
          onChangeText={this._onChangeText}
          returnKeyType={"done"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 24 },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: {
    width: window.width - 40,
    fontSize: 24,
    padding: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1
  }
});
