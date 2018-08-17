import { NativeModules, DeviceEventEmitter } from "react-native";

const { RNHce } = NativeModules;

export default {
  supportNFC: function() {
    return RNHce.supportNFC;
  },
  listenNFCStatus: function(callback) {
    DeviceEventEmitter.addListener("listenNFCStatus", resp => {
      if (resp.status) {
        callback(resp.status);
      }
    });
  }
};
