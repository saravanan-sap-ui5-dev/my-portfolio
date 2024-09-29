sap.ui.define([
    "com/myportfolio/controller/BaseController",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("com.myportfolio.controller.Dashboard", {
            onInit: function () {
                var oCitiesModel = new JSONModel(sap.ui.require.toUrl("com/myportfolio/model/cities.json")),
                    oProductsModel = new JSONModel(sap.ui.require.toUrl("com/myportfolio/model/products.json"));

                this.getView().setModel(oCitiesModel, "cities");
                this.getView().setModel(oProductsModel, "products");

                // Use smaller margin around grid when on smaller screens
                var oGrid = this.getView().byId("demoGrid");
                oGrid.attachLayoutChange(function (oEvent) {
                    var sLayout = oEvent.getParameter("layout");

                    if (sLayout === "layoutXS" || sLayout === "layoutS") {
                        oGrid.removeStyleClass("sapUiSmallMargin");
                        oGrid.addStyleClass("sapUiTinyMargin");
                    } else {
                        oGrid.removeStyleClass("sapUiTinyMargin");
                        oGrid.addStyleClass("sapUiSmallMargin");
                    }
                });
                let oModel = new JSONModel(this.onGetData());
                this.getView().setModel(oModel)
            },

            onRevealGrid: function () {
                RevealGrid.toggle("demoGrid", this.getView());
            },

            onExit: function () {
                RevealGrid.destroy("demoGrid", this.getView());
            },

            onSnapToRowChange: function (oEvent) {
                this.getView().byId("demoGrid").setSnapToRow(oEvent.getParameter("state"));
            },

            onAllowDenseFillChange: function (oEvent) {
                this.getView().byId("demoGrid").setAllowDenseFill(oEvent.getParameter("state"));
            },

            onInlineBlockLayoutChange: function (oEvent) {
                this.getView().byId("demoGrid").setInlineBlockLayout(oEvent.getParameter("state"));
            },

            onPress: function (oEvent) {
                MessageToast.show("Press was fired on - " + oEvent.getSource().getMetadata().getName());
            },

            onGridColumnsChange: function (oEvent) {
                //this.getView().byId("columnsCountText").setText("Current grid columns count: " + oEvent.getParameter("columns"));
            },
            onGetData: function () {
                return {
                    skills: {
                        languages: [
                            {
                                key: 1,
                                text: "SAP UI5"
                            },
                            {
                                key: 2,
                                text: "SAP CAP"
                            },
                            {
                                key: 3,
                                text: "SAP BTP"
                            },
                            {
                                key: 4,
                                text: "SAP Hana SQL Script"
                            },
                            {
                                key: 5,
                                text: "Spring Boot"
                            },
                            {
                                key: 6,
                                text: "React Native"
                            },
                            {
                                key: 7,
                                text: "JavaScript"
                            },
                            {
                                key: 8,
                                text: "HTML"
                            },
                            {
                                key: 9,
                                text: "CSS"
                            }
                        ]
                    },
                    "list2": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.list2",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "List",
                            "header": {
                                "title": "Incidents in the last 24 hours",
                                "subTitle": "Suddent storm wind damaged 3 polinating hives",
                                "icon": {
                                    "src": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/CompanyLogo.png"
                                }
                            },
                            "content": {
                                "data": {
                                    "json": [
                                        {
                                            "name": "Alain Chevalier",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Avatar_1.png",
                                            "description": "On Site"
                                        },
                                        {
                                            "name": "Yolanda Barrueco",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Avatar_2.png",
                                            "description": "Travelling to Idaho"
                                        },
                                        {
                                            "name": "Arend Pellewever",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Avatar_3.png",
                                            "description": "Travelling to Idaho"
                                        },
                                        {
                                            "name": "Lean Pulp",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Avatar_4.png",
                                            "description": "Headquaters Support"
                                        }
                                    ]
                                },
                                "item": {
                                    "icon": {
                                        "src": "{icon}"
                                    },
                                    "title": {
                                        "value": "{name}"
                                    },
                                    "description": {
                                        "value": "{description}"
                                    },
                                    "actions": [
                                        {
                                            "type": "Navigation",
                                            "parameters": {
                                                "url": "/users/{name}"
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        });
    });
