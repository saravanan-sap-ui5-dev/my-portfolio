sap.ui.define([
    "com/myportfolio/controller/BaseController",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("com.myportfolio.controller.AppUnified", {
            onInit: function () {
                let htmlText = '<p style="font-size:80px;font-weight: 600;color:#CCD6F6;line-height: 88px;">Brittany Chiang.</p>' +
                    '</br>' +
                    '<p style="font-size:80px;font-weight: 600;color:#8892B0;line-height: 88px;">I build things for the web.</p >';
                this.getView().setModel(new JSONModel({ HTML: htmlText }))
            }
        });
    });
