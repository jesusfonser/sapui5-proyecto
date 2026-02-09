
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App",{
        onShowHello : function () {
            MessageToast.show("Hola cómo estás");
        },

        onInit: function(){
            const oData = {
                recipient: {
                    name: "UI5"
                }
            };

            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});