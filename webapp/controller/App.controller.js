
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App",{
        onShowHello : function () {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient])

            MessageToast.show(sMsg);
        },

        onInit: function(){
            const oData = {
                recipient: {
                    name: "UI5"
                }
            };

            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            const i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            })
            this.getView().setModel(i18nModel, "i18n");
        }
    });
});