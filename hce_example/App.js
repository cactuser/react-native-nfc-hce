//@flow

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import HCE from "react-native-nfc-hce";

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

  render() {
    const { warnText } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {warnText ? <Text style={{ fontSize: 24 }}>{warnText}</Text> : null}
        <TextInput />
      </View>
    );
  }
}
