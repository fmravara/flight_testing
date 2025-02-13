/* sap.ui.define([
    "sap/m/MessageToast"
  ], (MessageToast)=> {
    "use strict";
    return {
      onPrintXMLPress(oEvent) {
        MessageToast.show("Functionality to be addded!");
      }
    };
  }); */


/*   sap.ui.define([
    "sap/m/MessageToast"
  ], function(MessageToast) {
    "use strict";
    return {
      onPrintXMLPress() {
        var oModel = this.getView().getModel();
        if (!oModel){
          console.error("Model not found!");
          MessageToast.show("Error: Model not found");
          return;
        }

        var aData = oModel.getProperty("/VooSet"); 
        console.log("MOOOOOOODEEELLLLLLL: ", oModel);
        console.log("Data: ", aData);
        MessageToast.show("XML!!!!"); 
      }
    };
  });   */

sap.ui.define([
  "sap/m/MessageToast",
  "sap/ui/core/util/File"
], function (MessageToast, File) {
  "use strict";

  return {
    onPrintXMLPress(oEvent) {
      const content = this.generateXMLContent();
      this.downloadXMLFile(content, "example");
      MessageToast.show("XML file downloaded successfully!");
    },
    generateXMLContent() {
      // This is a simple example XML structure
      const xmlString =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<root>\n' +
        '    <item>\n' +
        '        <name>Example Item</name>\n' +
        '        <value>123</value>\n' +
        '    </item>\n' +
        '</root>';

      return xmlString;
    },
    downloadXMLFile(content, sFileName) {
      const sMimeType = 'application/xml';
      const sData = new Blob([content], { type: sMimeType });
      const sFileExtension = 'xml';
      File.save(sData, sFileName, sFileExtension, sMimeType);
    }
  };
});