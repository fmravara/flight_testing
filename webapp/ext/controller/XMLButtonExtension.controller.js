sap.ui.define([
    "sap/m/MessageToast"
  ], function(MessageToast) {
    "use strict";
    return {
    
      onShowMessagePress: function(oEvent) {
        MessageToast.show("Hello, this is your custom message!");
      }
    };
  });