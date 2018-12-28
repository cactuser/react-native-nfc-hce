import { NativeModules, DeviceEventEmitter } from "react-native";

const { RNHce } = NativeModules;

export default {
  supportNFC: function() {
    return RNHce.supportNFC;
  },
  startListenNFCStatus: function(callback) {
    DeviceEventEmitter.addListener("listenNFCStatus", callback);
  },
  stopListenNFCStatus: function(callback) {
    DeviceEventEmitter.removeListener("listenNFCStatus", callback);
  },
  setCardContent: function(content) {
    RNHce.setCardContent(content);
  },
  setAppState: function(content) {
    RNHce.setAppState(content);
  },
  setNfcDefaultTicket: function(content) {
    RNHce.setNfcDefaultTicket(content);
  }
};
