$(document)
    .ready(function () {

        /*********************** MAP START ******************/
        var debugMode = false;
        var allChildrenDataJSON = [
            {
                "Los_ID": 0,
                "LocationId": 0,
                "Name": "PL.21735",
                "Distance": 0,
                "Azimuth": 0,
                "Coordinate": "52°12'37\"N 21°02'29\"E",
                "CoordinateDec": "52.21028000 21.04139000",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAD",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 0,
                "LocationId": 0,
                "Name": "PL.21736",
                "Distance": 0,
                "Azimuth": 0,
                "Coordinate": "52°13'44\"N 21°00'40\"E",
                "CoordinateDec": "52.22889000 21.01111000",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAF",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 0,
                "LocationId": 0,
                "Name": "PL.21737",
                "Distance": 0,
                "Azimuth": 0,
                "Coordinate": "52°14'35\"N 21°01'03\"E",
                "CoordinateDec": "52.24306000 21.01750000",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAH",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 0,
                "LocationId": 0,
                "Name": "PL.23223",
                "Distance": 0,
                "Azimuth": 0,
                "Coordinate": "52°15'48\"N 21°01'22\"E",
                "CoordinateDec": "52.26333000 21.02278000",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAT",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 0,
                "LocationId": 0,
                "Name": "PL.21743",
                "Distance": 0,
                "Azimuth": 0,
                "Coordinate": "52°13'43\"N 21°00'30\"E",
                "CoordinateDec": "52.22861000 21.00833000",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAU",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 0,
                "LocationId": 0,
                "Name": "PL.14206",
                "Distance": 0,
                "Azimuth": 0,
                "Coordinate": "52°14'09\"N 21°00'54\"E",
                "CoordinateDec": "52.23583000 21.01500000",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAY",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 0,
                "LocationId": 0,
                "Name": "PL.21744",
                "Distance": 0,
                "Azimuth": 0,
                "Coordinate": "52°12'30\"N 21°01'17\"E",
                "CoordinateDec": "52.20833000 21.02139000",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAZ",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 0,
                "LocationId": 0,
                "Name": "PL.23687",
                "Distance": 0,
                "Azimuth": 0,
                "Coordinate": "52°09'53\"N 20°59'34\"E",
                "CoordinateDec": "52.16472000 20.99278000",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AA4",
                "Operation": 0,
                "TempId": null
            }
        ]

        var selectedChildrenDataJSON = [
            {
                "Los_ID": 244395,
                "LocationId": 1934574,
                "Name": "PL.14206",
                "Distance": 0.33,
                "Azimuth": 87,
                "Coordinate": "52º14'8.988\"N 21º0'54\"E",
                "CoordinateDec": "52.23583 21.015",
                "IsSelected": true,
                "MiboId": "ABFgxzAAdAACyC0AAY",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 244397,
                "LocationId": 1934574,
                "Name": "PL.21736",
                "Distance": 0.76,
                "Azimuth": 175,
                "Coordinate": "52º13'44.004\"N 21º0'39.996\"E",
                "CoordinateDec": "52.22889 21.01111",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAF",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 244411,
                "LocationId": 1934574,
                "Name": "test D2",
                "Distance": 0.51,
                "Azimuth": 175,
                "Coordinate": "52º13'51.915\"N 21º0'38.805\"E",
                "CoordinateDec": "52.2310875 21.01077917",
                "IsSelected": false,
                "MiboId": null,
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 244415,
                "LocationId": 1934574,
                "Name": "PL.21743",
                "Distance": 0.8,
                "Azimuth": 189,
                "Coordinate": "52º13'42.996\"N 21º0'29.988\"E",
                "CoordinateDec": "52.22861 21.00833",
                "IsSelected": true,
                "MiboId": "ABFgxzAAdAACyC0AAU",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 244420,
                "LocationId": 1934574,
                "Name": "test Custom 2",
                "Distance": 0.31,
                "Azimuth": 28,
                "Coordinate": "52º14'13.066\"N 21º1'3.061\"E",
                "CoordinateDec": "52.23696284 21.01751696",
                "IsSelected": false,
                "MiboId": null,
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 244426,
                "LocationId": 1934574,
                "Name": "PL.21737",
                "Distance": 0.96,
                "Azimuth": 31,
                "Coordinate": "52º14'35.016\"N 21º1'3\"E",
                "CoordinateDec": "52.24306 21.0175",
                "IsSelected": false,
                "MiboId": "ABFgxzAAdAACyC0AAH",
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 244427,
                "LocationId": 1934574,
                "Name": "Test A",
                "Distance": 0.51,
                "Azimuth": 251,
                "Coordinate": "52º14'3.226\"N 21º0'11.151\"E",
                "CoordinateDec": "52.2342295 21.0030974",
                "IsSelected": false,
                "MiboId": null,
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 244428,
                "LocationId": 1934574,
                "Name": "test B",
                "Distance": 0.4,
                "Azimuth": 0,
                "Coordinate": "52º14'21.392\"N 21º0'36.488\"E",
                "CoordinateDec": "52.23927552 21.01013552",
                "IsSelected": false,
                "MiboId": null,
                "Operation": 0,
                "TempId": null
            }, {
                "Los_ID": 244429,
                "LocationId": 1934574,
                "Name": "test C",
                "Distance": 0.44,
                "Azimuth": 135,
                "Coordinate": "52º13'58.401\"N 21º0'52.864\"E",
                "CoordinateDec": "52.23288905 21.01468455",
                "IsSelected": false,
                "MiboId": null,
                "Operation": 0,
                "TempId": null
            }
        ]

        var cities= ["Warsaw", "Krakow", "Wroclove", "Zakopane"]        
        var streets= ["al. Jerozolimskie", "ul. Marszałkowska", "ul. Ostrowska", "ul. Białostocka"]
        
        function data1Fn() {

            var losList = [];
            var total = 10;
            var i = 0;
            for (i; i < total; i++) {
                losList.push({
                    "Los_ID": 0,
                    "LocationId": 0,
                    "Name": "PL." + i,
                    "Distance": 0,
                    "Azimuth": 0,
                    "Coordinate": "",
                    "CoordinateDec": ((Math.random() * 5) + 49) + " " + ((Math.random() * 10) + 15), //"52.21028000 21.04139000",
                    "IsSelected": false,
                    "MiboId": i,
                    "Operation": 0,
                    "TempId": null,
                    "AddressCity": cities[Math.floor(Math.random() * cities.length)],
                    "AddressStreet": streets[Math.floor(Math.random() * streets.length)],
                    "AddressStreetNo": Math.floor((Math.random() * 50) + 1),
                    "SiteName": ""
                })
            }
            return losList;
        }

        var data1 = data1Fn();

        var ajaxCall_All = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(data1);
            }, 0);
        })

        var ajaxCall_Selected = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(selectedChildrenDataJSON);
            }, 0);
        })

        Promise
            .all([ajaxCall_All, ajaxCall_Selected])
            .then(function (result) {
                initMapComponent(result[0], result[1]);
            });

        /*================= MAP FN START =================*/
        function initMapComponent(allChildrensAjaxRes, selectedChildreAjaxRes) {
            /* DATA START*/
            var allChildrensFeature = convertToFeatures(allChildrensAjaxRes);
            var selectedChildreFeatures = convertToFeatures(selectedChildreAjaxRes);
         
            function convertToFeatures(array) {

                if (array.length > 0) {
                    return array.map(function (item) {
                        var tempCoordDec = item
                            .CoordinateDec
                            .split(" ");
                        var feature = new ol.Feature({
                            geometry: new ol
                                .geom
                                .Point(ol.proj.fromLonLat([
                                    tempCoordDec[1] * 1,
                                    tempCoordDec[0] * 1
                                ])),
                            tempId: item.TempId,
                            miboId: item.MiboId,
                            losId: item.Los_ID,
                            name: item.Name,
                            type: 'child',
                            distance: item.Distance,
                            azimuth: item.Azimuth,
                            isSelected: item.IsSelected,
                            operation: 1, //item.Operation,
                            coordinate: item.Coordinate,
                            coordinateDec: item.CoordinateDec
                        })

                        feature.setStyle(defaultChildStyle);

                        return feature;
                    })
                } else 
                    return [];
           }           
          /* DATA END */

          /* SEARCH LOS START*/             
          function convertToSearchString(array){
                return array.map(function(item){

                    var searchStr = (
                      item.AddressCity + ', ' + 
                      item.AddressStreet + ' ' + 
                      item.AddressStreetNo + ', ' + 
                      item.Name + ', ' + 
                      item.SiteName
                    );
                  
                    var lowerObj = _.mapKeys(item, (v, k) => _.camelCase(k))
                  
                    return {label: searchStr, data:lowerObj};
                })
            }
           var data = addSearchData();
           var searchStr = convertToSearchString(allChildrensAjaxRes)
          
           $("#searchChildBox")
             .autocomplete({
             source: searchStr,
             select: function (event, ui) {          
                 // console.log(ui.item.data);
                 addFoundChildToMap(ui.item.data)
                 return false;
              }
             })

            function addFoundChildToMap(foundItemData) {
              if (pointsLayer.getSource().getFeatures().length > 0) {
                var findId =-1;
                var findBy = "miboId"

//                 if(foundItemData.los_ID === "" ||
//                     foundItemData.los_ID === 0 ||
//                     foundItemData.los_ID === null ||
//                     foundItemData.los_ID === "null")
//                 {
                  
//                    if(foundItemData.miboId === "" ||
//                     foundItemData.miboId === 0 ||
//                     foundItemData.miboId === null ||
//                     foundItemData.miboId === "null")
//                   {
//                       findBy = "TempId";
//                   }
//                   else{
//                     findBy = "miboId";
//                   }
//                 }
//                 else
//                 {
//                     findBy = "Los_ID";
//                 }
                
                findId = allChildrensLayer.getSource().getFeatures().map(function(item) {
                    var featureProps = item.getProperties();
                    return featureProps[findBy];
                  
                }).indexOf(foundItemData[findBy]);

                var feature = allChildrensLayer.getSource().getFeatures()[findId];
              
                if( selectChildren.getFeatures().getArray().indexOf(feature) == -1)
                {
                  addChildToSelected(feature)
                  //update children props
                  updateSelectedChildrenProps();
                  
                  $('#searchChildBox').val('')
                }
              }
            }
          
           function addSearchData(...restParam){

                var tempArray = []
                return restParam.map(function (arr) {
                    return tempArray.concat(arr)
                });
            }
            /* SEARCH LOS END */

            /* MAP TABLE START */
            var selectedChildrenTableData = [];
            var listAction = function (postData, jtParams) {
                return {"Result": "OK", "Records": selectedChildrenTableData, "TotalRecordCount": selectedChildrenTableData.length};
            };

            var updateAction = function (postData, jtParams) {
                return false
            }

            $('#mapLosTable').jtable({
                title: 'Lista widocznych obiektów - LOS',
                paging: true,
                pageSize: 10,
                deleteConfirmation: function (data) {
                    data.deleteConfirm = false;
                },
                actions: {
                    listAction: listAction,
                    //createAction: '', updateAction: updateAction, deleteAction: deleteAction
                },
                fields: {
                    tempId: {
                        title: 'tempId',
                        key: true,
                        visibility: 'hidden',
                        list: false
                    },
                    losId: {
                        title: 'losId',
                        //key: true,
                        visibility: 'hidden',
                        //list: false
                    },
                    miboId: {
                        title: 'miboId',
                        //key: true,
                        visibility: 'hidden',
                        //list: false
                    },
                    name: {
                        title: 'Nazwa',
                        width: '30%'
                    },
                    distance: {
                        title: 'Odległość',
                        width: '30%'
                    },
                    azimuth: {
                        title: 'Azymut',
                        width: '30%'
                    },
                    coordinate: {
                        visibility: 'hidden'
                    },
                    coordinateDec: {
                        visibility: 'hidden'
                    },
                    customUpdate: {
                        title: '',
                        width: '1%',
                        //sorting: false, create: false, edit: false,
                        list: true,
                        display: function (data) {
                            if (data.record) {

                                var editBtn = $('<button type="button" title="Edit Record" class="los-update-btn jtable-command-b' +
                                        'utton jtable-edit-command-button"><span>Edycja</span></button>')
                                editBtn.click(function (evt) {
                                    customUpdate(evt, data.record)
                                });

                                return editBtn;
                            }
                        }
                    },
                    customDelete: {
                        title: '',
                        width: '1%',
                        //sorting: false, create: false, edit: false,
                        list: true,
                        display: function (data) {
                            if (data.record) {

                                var delBtn = $('<button type="button" title="Delete Record" class="los-delete-btn jtable-command' +
                                        '-button jtable-delete-command-button"><span>Usuwanie</span></button>')
                                delBtn.click(function (evt) {
                                    customDelete(evt, data.record)
                                });

                                return delBtn;
                            }
                        }
                    }
                }
            });

            $('#mapLosTable')
                .find('.jtable-main-container')
                .css({'overflow-x': 'hidden'});

            $('#mapLosTable')
                .find('.jtable-toolbar')
                .append('<span id="showCreateLosPopupBtn" class="jtable-toolbar-item jtable-toolbar-item-' +
                        'add-record" style=""><span class="jtable-toolbar-item-icon"></span><span class="' +
                        'jtable-toolbar-item-text">Stwórz nowy LOS</span></span>');

            function customUpdate(evt, rowData) {

                clearFormErrors();
                debugMode
                    ? console.log("rowData", rowData)
                    : null;

                var findId = -1;
                var findBy;

                if (rowData.losId === "" || rowData.losId === 0 || rowData.losId === null || rowData.losId === "null") {
                    findBy = "tempId";
                } else {
                    findBy = "losId";
                }

                findId = selectedChildrenTableData.map(function (item) {
                    return item[findBy];
                }).indexOf(rowData[findBy]);

                if (!$('#btnAddNewLos').hasClass('hidden')) 
                    $('#btnAddNewLos').addClass('hidden')

                $('#btnUpdateLos').removeClass('hidden')

                if (rowData.miboId === "" || rowData.miboId === "null" || rowData.miboId === null) {

                    $("#los-editor").modal({backdrop: false});
                    $('.los-coords-it').val('');

                    var tempCoords = rowData
                        .coordinateDec
                        .split(" ");
                    var getCoordinatesDDDMS = getDDDMS(tempCoords[1], tempCoords[0]);

                    $('#losName').val(rowData.name);
                    $('#losXY2').val(rowData.coordinateDec);

                    $('#losDegreesN').val(getCoordinatesDDDMS.lat.deg);
                    $('#losMinutesN').val(getCoordinatesDDDMS.lat.min);
                    $('#losSecondsN').val(getCoordinatesDDDMS.lat.sec);

                    $('#losDegreesE').val(getCoordinatesDDDMS.long.deg);
                    $('#losMinutesE').val(getCoordinatesDDDMS.long.min);
                    $('#losSecondsE').val(getCoordinatesDDDMS.long.sec);

                    $('#btnUpdateLos').click(function (evt) {
                        evt.preventDefault();

                        var locfeature = pointsLayer
                            .getSource()
                            .getFeatures()[0];
                        var featuresArr = selectChildren
                            .getFeatures()
                            .getArray();
                        var f = 0;
                        var fLength = featuresArr.length;

                        for (f; f < fLength; f++) {

                            var featureProps = featuresArr[f].getProperties();

                            if (rowData[findBy] === featureProps[findBy]) {
                                var nameTxt = $('#losName').val();
                                var coordsTxt = $('#losXY2').val();
                                var tempCoords = coordsTxt.split(" ");

                                var newChildCoords = {
                                    lat: (tempCoords[0] * 1),
                                    long: (tempCoords[1] * 1)
                                }

                                var latLon3857 = ol
                                    .proj
                                    .transform([
                                        newChildCoords.long, newChildCoords.lat
                                    ], 'EPSG:4326', 'EPSG:3857');

                                var getCoordinatesDDDMS = getDDDMS(newChildCoords.long, newChildCoords.lat);
                                var distance = calcDistance(locfeature.getGeometry().getCoordinates(), latLon3857);

                                var angle = calcAngle(locfeature.getGeometry().getCoordinates(), latLon3857);

                                var feature = featuresArr[f];
                                feature
                                    .getGeometry()
                                    .setCoordinates(latLon3857);
                                feature.setProperties({
                                    "name": nameTxt,
                                    "coordinate": getCoordinatesDDDMS.lat.string + " " + getCoordinatesDDDMS.long.string,
                                    "coordinateDec": coordsTxt
                                });

                                //update table
                                var updatedChildTableData = selectedChildrenTableData[findId];
                                updatedChildTableData.name = nameTxt,
                                updatedChildTableData.distance = distance,
                                updatedChildTableData.azimuth = angle,
                                updatedChildTableData.coordinate = (getCoordinatesDDDMS.lat.string + " " + getCoordinatesDDDMS.long.string),
                                updatedChildTableData.coordinateDec = (getCoordinatesDDDMS.lat.decimal + " " + getCoordinatesDDDMS.long.decimal)
                                $('#mapLosTable').jtable('load');

                                // update json
                                var updatedChildJsonData = localizationResult.selectedChildren[f];
                                updatedChildJsonData.Name = nameTxt;
                                updatedChildJsonData.Distance = distance.replace(/[km, m]/g, "");
                                updatedChildJsonData.Azimuth = angle.replace("º", "");
                                updatedChildJsonData.Coordinate = (getCoordinatesDDDMS.lat.string + " " + getCoordinatesDDDMS.long.string);
                                updatedChildJsonData.CoordinateDec = coordsTxt;

                                convertMapJsonToSelectedLosList(localizationResult.selectedChildren);

                                $('#btnUpdateLos').unbind('click')
                                break;
                            }
                        }

                        $('#los-editor').modal('toggle');
                        clearFormErrors();

                    })
                }
            }

            function customDelete(evt, rowData) {

                var findId = -1;
                var findBy;

                if (rowData.losId === "" || rowData.losId === 0 || rowData.losId === null || rowData.losId === "null") {
                    findBy = "tempId";
                } else {
                    findBy = "losId";
                }

                findId = selectedChildrenTableData.map(function (item) {
                    return item[findBy];
                }).indexOf(rowData[findBy]);

                selectedChildrenTableData.splice(findId, 1);
                $('#mapLosTable').jtable('load');

                var feature;
                var featuresArr = selectChildren
                    .getFeatures()
                    .getArray();
                var f = 0;
                var fLength = featuresArr.length;

                for (f; f < fLength; f++) {

                    if (featuresArr[f].getProperties().losId === rowData.losId) {
                        feature = featuresArr[f];
                        feature.setStyle(defaultChildStyle);
                        feature.setProperties({"isSelected": false, "operation": 4});
                        selectChildren
                            .getFeatures()
                            .removeAt(f);

                        /*remove from gfx from layer if child was
                            created manually (not taken from mibo)*/
                        if (feature.getProperties().miboId === "" || feature.getProperties().miboId === "null" || feature.getProperties().miboId === null) {
                            allChildrensLayer
                                .getSource()
                                .removeFeature(feature);
                        }
                        // update json
                        var unselectedChildJsonData = localizationResult.selectedChildren[f];
                        if (unselectedChildJsonData.hasOwnProperty('IsSelected')) {
                            unselectedChildJsonData.IsSelected = false;
                            unselectedChildJsonData.Operation = 4;
                        }

                        convertMapJsonToSelectedLosList(localizationResult.selectedChildren);
                        break;
                    }
                }

            }

            $("#los-editor").draggable({handle: ".modal-header"});

            var losFormErrors = [];

            function addFormErrors(array) {
                losFormErrors = losFormErrors.concat(array);
            }

            function clearFormErrors() {
                losFormErrors = [];
                $('.los-coords-alert').html('');
            }

            $('#showCreateLosPopupBtn')
                .click(function () {

                    $('#btnAddNewLos').removeClass('hidden');

                    if (!$('#btnUpdateLos').hasClass('hidden')) 
                        $('#btnUpdateLos').addClass('hidden');
                    
                    $("#los-editor").modal({backdrop: false});
                    $('.los-coords-it').val('');
                    clearFormErrors();
                });

            $("#losDegreesN").on('input', calcLosCoord);
            $("#losMinutesN").on('input', calcLosCoord);
            $("#losSecondsN").on('input', calcLosCoord);

            $("#losDegreesE").on('input', calcLosCoord);
            $("#losMinutesE").on('input', calcLosCoord);
            $("#losSecondsE").on('input', calcLosCoord);

            $("#losXY2").on('input', calcLosCoordDec);

            $('#btnAddNewLos').click(submitNewLos);

            function calcLosCoord() {
                var coordinates = '';
                var valueX = parseFloat($("#losDegreesN").val()) + parseFloat($("#losMinutesN").val()) / 60 + parseFloat($("#losSecondsN").val()) / 3600;
                var valueY = parseFloat($("#losDegreesE").val()) + parseFloat($("#losMinutesE").val()) / 60 + parseFloat($("#losSecondsE").val()) / 3600;
                if (!isNaN(valueX)) {
                    coordinates = valueX
                        .toFixed(8)
                        .toString();
                }
                if (!isNaN(valueY)) {
                    coordinates = coordinates + ' ' + valueY
                        .toFixed(8)
                        .toString();
                }
                $('#losXY2').val(coordinates);
            }

            function calcLosCoordDec(evt) {

                clearFormErrors();

                var valX,
                    valY;
                var input = evt.currentTarget.id;
                var val = this
                    .value
                    .toString()
                    .split(" ");
                var valX = (val[0] * 1);
                var valY = (val[1] * 1);

                //longtitude
                if (val[1] !== undefined) {
                    if (val[1].length > (coordsPrecision + 1)) {

                        valY = (val[1] * 1).toPrecision(coordsPrecision);
                        $('#losXY2').val(valX.toPrecision(coordsPrecision) + " " + valY)
                    }
                } else {
                    valY = 0;
                }

                //lattitude
                if (val[0] !== undefined) {
                    if (val[0].length > (coordsPrecision + 1)) {
                        valX = (val[0] * 1).toPrecision(coordsPrecision);
                        $('#losXY2').val(valX + " " + valY.toPrecision(coordsPrecision))
                    }
                } else {
                    valX = 0;
                }

                var defaultCoords = {};

                var errorsX = validateDecCoords(valX);
                var errorsY = validateDecCoords(valY);

                if ((errorsX.length === 0) && (errorsY.length === 0)) {
                    defaultCoords.lat = (valX);
                    defaultCoords.long = (valY);
                } else {

                    addFormErrors(errorsX);
                    addFormErrors(errorsY);

                    displayLosCoordError(errorsX, "Szerokość");
                    displayLosCoordError(errorsY, "Długość");
                }

                setLosInputsDMS(defaultCoords)
            }

            function setLosInputsDMS(coords) {

                var dms = getDDDMS(coords.long, coords.lat);

                $('#losDegreesN').val(dms.lat.deg);
                $('#losMinutesN').val(dms.lat.min);
                $('#losSecondsN').val(dms.lat.sec);
                //$('#directionN').val(dms.lat.direction);

                $('#losDegreesE').val(dms.long.deg);
                $('#losMinutesE').val(dms.long.min);
                $('#losSecondsE').val(dms.long.sec);
                //$('#directionE').val(dms.long.direction);
            }

            function displayLosCoordError(errors, fieldName) {
                var msg = "";
                var i = 0;
                var iLength = errors.length;

                for (i; i < iLength; i++) {
                    msg += '<li style="list-style-type: none;"><i class="fa fa-exclamation-triangle" aria-hi' +
                            'dden="true"></i> ' + fieldName + ":" + errors[i] + '</li>'
                }

                $(msg).appendTo($('.los-coords-alert'));
            }

            function submitNewLos(evt) {

                evt.preventDefault();
                $("#losXY2").trigger('input', calcLosCoordDec);

                if (losFormErrors.length === 0) {
                    createNewChild();

                }
            }
            /* MAP TABLE END */

            /* STYLES START*/
            var iconSrc = 'https://openlayers.org/en/v4.3.2/examples/data/dot.png';
            // var iconSrc = window.location.origin + SubConBase+
            // '/images/openlayers/dot.png';
            var enableFullLabels = true;   
            var scale = 1;
          
            var defaultPinStyle = new ol
                .style
                .Style({
                    image: new ol
                        .style
                        .Icon(/** type {olx.style.IconOptions} */
                        ({color: '#ff0000', crossOrigin: 'anonymous', src: iconSrc, scale:scale}))
                })

            var selectedPinStyle = new ol
                .style
                .Style({
                    image: new ol
                        .style
                        .Icon(/** type {olx.style.IconOptions} */
                        ({color: '#ff8100', crossOrigin: 'anonymous', src: iconSrc, scale:scale}))
                })

            // var defaultChildStyle = new ol.style.Style({     image: new ol.style.Icon(/**
            // type {olx.style.IconOptions} */       ({           color: '#006400',
            //  crossOrigin: 'anonymous',           src: iconSrc       })) })

            function defaultChildStyle() {

                if (pointsLayer.getSource().getFeatures().length > 0) {

                    var locFeature = pointsLayer
                        .getSource()
                        .getFeatures()[0];

                    var distance = calcDistance(locFeature.getGeometry().getCoordinates(), this.getGeometry().getCoordinates()).replace(/[km, m]/g, "");

                    return (distance < visibleChildrenRange)
                        ? [
                            new ol
                                .style
                                .Style({
                                    image: new ol
                                        .style
                                        .Icon(/** type {olx.style.IconOptions} */
                                        ({color: '#006400', crossOrigin: 'anonymous', src: iconSrc, scale:scale})),
                                    text: new ol
                                        .style
                                        .Text({
                                            text: this.get('name'),
                                            font: 'bold 10px Verdana,sans-serif',
                                            fill: new ol
                                                .style
                                                .Fill({color: 'black'}),
                                            //stroke: new ol.style.Stroke({color: 'black', width: 3}),
                                            offsetX: 0,
                                            offsetY: -20
                                        })
                                })
                        ]
                        : new ol
                            .style
                            .Style({image: ''})
                } else {
                    return [
                        new ol
                            .style
                            .Style({
                                image: new ol
                                    .style
                                    .Icon(/** type {olx.style.IconOptions} */
                                    ({color: '#006400', crossOrigin: 'anonymous', src: iconSrc, scale:scale})),
                                text: new ol
                                    .style
                                    .Text({
                                        text: this.get('name'),
                                        font: 'bold 10px Verdana,sans-serif',
                                        fill: new ol
                                            .style
                                            .Fill({color: 'black'}),
                                        //stroke: new ol.style.Stroke({color: 'black', width: 3}),
                                        offsetX: 0,
                                        offsetY: -20
                                    })
                            })
                    ]
                }
            };

            var selectedChildStyle = function () {
                return [
                    new ol
                        .style
                        .Style({
                            image: new ol
                                .style
                                .Icon(/** type {olx.style.IconOptions} */
                                ({color: '#00ff00', crossOrigin: 'anonymous', src: iconSrc, scale:scale})),
                            text: new ol
                                .style
                                .Text({
                                    text: (enableFullLabels
                                        ? this.get('name') + '\n' + this.get('distance') + '\n' + this.get('azimuth') + '\n'
                                        : this.get('name')),
                                    font: 'bold 10px Verdana,sans-serif',
                                    fill: new ol
                                        .style
                                        .Fill({color: '#00ff00'}),
                                    stroke: new ol
                                        .style
                                        .Stroke({color: 'black', width: 3}),
                                    offsetX: 0,
                                    offsetY: -30
                                })
                        })
                ]
            };

            function clusterStyle (feature,resolution) {
                var clusterSize = feature.get('features').length;
                  style = new ol.style.Style({
                      image: new ol.style.Circle({
                        radius: 10,
                        stroke: new ol.style.Stroke({
                          color: '#000'
                        }),
                        fill: new ol.style.Fill({
                          color: 'blue'
                        })
                      }),
                      text: new ol.style.Text({
                        text: clusterSize.toString(),
                        fill: new ol.style.Fill({
                          color: '#fff'
                        })
                      })
                    });
              return [style];
            }
            /* STYLES END*/

            //vars
            var selectedFeature;
            var prevSelectedFeature;
            var selectedFeatureChildren = [];

            var localizationResult = {
                localization: null,
                selectedChildren: []
            };

            var localizationIsEdited = false;
            var newPointFeature = [];
            var coordsPrecision = 10;
            var errors = [];
            var enabledExtendedInfo = false;
            var enabledDefaultCoords = false; //(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
            var visibleChildrenRange = 15;

            //map source
            var rasterLayer = new ol
                .layer
                .Tile({
                    source: new ol
                        .source
                        .OSM()
                });

            //cuurent position point layer
            var pointsLayer = new ol
                .layer
                .Vector({
                    source: new ol
                        .source
                        .Vector({features: newPointFeature})
                });
            //loaded points layer
            var allChildrensLayer = new ol
                .layer
                .Vector({
                    source: new ol
                        .source
                        .Vector({features: allChildrensFeature})
                });

            // a clustered source is configured with another vector source that it operates
            // on
            var clusterSource = new ol
                .source
                .Cluster({
                    distance: 100,
                    source: new ol
                        .source
                        .Vector({features: allChildrensFeature})
                });

            // it needs a layer too
            var currentZoom;
            var clusterLayer = new ol
                .layer
                .Vector({source: clusterSource, style: clusterStyle});
            // var coords = {long:19,lat:52};
            var defaultCoords = {
                long: 0,
                lat: 0
            };

            var selectedPointCoords = {};

            var view = new ol.View({
                center: ol
                    .proj
                    .fromLonLat([defaultCoords.long, defaultCoords.lat]),
                zoom: 6
            });

            /*SETUP CUTOM MAP BUTTONS START*/
            var myLocBtn = document.createElement('button');
            myLocBtn.id = "myLocalizationBtn";
            myLocBtn.innerHTML = '<i class="fa fa-location-arrow"></i>';

            var pinLocBtn = document.createElement('button');
            pinLocBtn.id = "myPinLocalizationBtn";
            pinLocBtn.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>';

            var element = document.createElement('div');
            element.className = 'ol-unselectable ol-control';
            element.style.top = '100px'
            element.style.left = '8px';
            element.appendChild(myLocBtn);
            element.appendChild(pinLocBtn);

            var newControl = new ol
                .control
                .Control({element: element})
            var controls = new ol
                .control
                .defaults({attribution: false})
                .extend([newControl])
            /*SETUP CUTOM MAP BUTTONS END*/

            var featureadded = false;
            var select = new ol
                .interaction
                .Select({
                    layers: [pointsLayer],
                    condition: function (mapBrowserEvent) {
                        //disable default click check if it is a click event
                        if (!ol.events.condition.singleClick(mapBrowserEvent)) 
                            return false;
                        }
                    });

            var translate = new ol
                .interaction
                .Translate({
                    features: select.getFeatures()
                });

            var selectChildren = new ol
                .interaction
                .Select({
                    layers: [allChildrensLayer],
                    condition: function (mapBrowserEvent) {
                        //disable default click check if it is a click event
                        if (!ol.events.condition.singleClick(mapBrowserEvent)) 
                            return false;
                        }
                    });

            var map = new ol.Map({
                interactions: ol
                    .interaction
                    .defaults({doubleClickZoom: false})
                    .extend([selectChildren, select, translate]),
                target: 'map',
                layers: [
                    rasterLayer, allChildrensLayer, pointsLayer, clusterLayer
                ],
                view: view,
                controls: controls
            });

            map.on('click', function (evt) {

                var clickedFeature = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                    if (feature.getProperties().type === "loc") {
                        return feature;
                    }

                    return feature;
                });

                if (clickedFeature != null) {
                    if (clickedFeature.getProperties().type === "loc") {
                        onFeatureClick(clickedFeature);
                    }

                    if (clickedFeature.getProperties().type === "child") {
                        //console.log("show pop up");
                    }
                }

                if (clickedFeature != null) {
                    if (select.getFeatures().getArray().length > 0) {
                        onFeatureChildClick(clickedFeature)
                    }
                }

                if (ctrlPressed && pointsLayer.getSource().getFeatures().length < 1) {

                    var latLon = ol
                        .proj
                        .transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
                    selectedPointCoords.long = (latLon[0].toPrecision(coordsPrecision) * 1);
                    selectedPointCoords.lat = (latLon[1].toPrecision(coordsPrecision) * 1)

                    addFeature(selectedPointCoords)
                    setInputes(selectedPointCoords);

                    defaultCoords = selectedPointCoords;
                }
            });

            
            currentZoom = map.getView().getZoom();
            
            map.on('moveend', function(evt){
              currentZoom = evt.map.getView().getZoom();
             
              if (currentZoom > 8) 
              {
                  clusterLayer.setVisible(false);
                  allChildrensLayer.setVisible(true);    
              }
              else{
                clusterLayer.setVisible(true);
                allChildrensLayer.setVisible(false);                                         

              }
            })

            function onFeatureClick(clickedFeature) {
                if (clickedFeature.getProperties().type === "loc") {
                    var finfId = select
                        .getFeatures()
                        .getArray()
                        .indexOf(clickedFeature)
                    if (finfId == -1) {
                        clickedFeature.setStyle(selectedPinStyle);
                        select
                            .getFeatures()
                            .push(clickedFeature);
                        localizationIsEdited = true;
                    } else {
                        clickedFeature.setStyle(defaultPinStyle);
                        select
                            .getFeatures()
                            .removeAt(finfId);
                        localizationIsEdited = false;
                    }
                }
            }

            function onFeatureChildClick(clickedFeature) {

                if (clickedFeature.getProperties().type === "child") {

                    var findId = selectChildren
                        .getFeatures()
                        .getArray()
                        .indexOf(clickedFeature);
                    // selectChildren.getFeatures()
                    if (findId == -1) {
                        addChildToSelected(clickedFeature);
                    } else {
                        // selectChildren.getFeatures().removeAt(index); removeFromJSON("child", index);
                        unselectChild(findId);
                    }

                    //update children props
                    updateSelectedChildrenProps();
                }
            }

            function addChildToSelected(feature) {

                //console.log('feature', feature)

                var lonLat4326 = ol
                    .proj
                    .transform(feature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
                var coords = {
                    lat: (lonLat4326[1].toPrecision(coordsPrecision) * 1),
                    long: (lonLat4326[0].toPrecision(coordsPrecision) * 1)
                }

                var getCoordinatesDDDMS = getDDDMS(coords.long, coords.lat);
                var lonLat3857 = feature
                    .getGeometry()
                    .getCoordinates();

                var distance = calcDistance(selectedFeature.getGeometry().getCoordinates(), feature.getGeometry().getCoordinates());

                var angle = calcAngle(selectedFeature.getGeometry().getCoordinates(), feature.getGeometry().getCoordinates());

                // var currentChild = feature;
                feature.setStyle(selectedChildStyle);
                feature.setProperties({'distance': distance, 'azimuth': angle, 'isSelected': true, 'operation': 1})

                // console.log('addChildToSelected', feature)
                // if(selectChildren.getFeatures().getArray().indexOf(feature) !== -1)
                selectChildren
                    .getFeatures()
                    .push(feature);
                //    var lonLat = ol.proj.transform(feature.getGeometry().getCoordinates(),
                // 'EPSG:3857', 'EPSG:4326');    var coords ={
                // lat:(lonLat[1].toPrecision(coordsPrecision) *1),
                // long:(lonLat[0].toPrecision(coordsPrecision) *1)    } setupJSONData(string
                // type, geomPoint coords, string id) console.log('addChildToSelected 2')

                setupJSONData(feature);
            }

            function addChildToLayer(feature) {

                var lonLat4326 = ol
                    .proj
                    .transform(feature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
                var coords = {
                    lat: (lonLat4326[1].toPrecision(coordsPrecision) * 1),
                    long: (lonLat4326[0].toPrecision(coordsPrecision) * 1)
                }

                var getCoordinatesDDDMS = getDDDMS(coords.long, coords.lat);
                var lonLat3857 = feature
                    .getGeometry()
                    .getCoordinates();

                var distance = calcDistance(selectedFeature.getGeometry().getCoordinates(), feature.getGeometry().getCoordinates());

                var angle = calcAngle(selectedFeature.getGeometry().getCoordinates(), feature.getGeometry().getCoordinates());

                // var currentChild = feature;
                feature.setProperties({'distance': distance, 'azimuth': angle, 'isSelected': false, 'operation': 1})

                selectChildren
                    .getFeatures()
                    .push(feature);
                //    var lonLat = ol.proj.transform(feature.getGeometry().getCoordinates(),
                // 'EPSG:3857', 'EPSG:4326');    var coords ={
                // lat:(lonLat[1].toPrecision(coordsPrecision) *1),
                // long:(lonLat[0].toPrecision(coordsPrecision) *1)    } setupJSONData(string
                // type, geomPoint coords, string id)
                setupJSONData(feature);
            }

            function unselectChild(index) {

                var feature = selectChildren
                    .getFeatures()
                    .getArray()[index];
                feature.setStyle(defaultChildStyle);
                feature.setProperties({"isSelected": false, "operation": 1});

                selectChildren
                    .getFeatures()
                    .removeAt(index);
                removeFromJSON("child", feature);
            }

            function unselectAllChildren() {

                var allFeatures = selectChildren
                    .getFeatures()
                    .getArray()
                var i = 0;
                for (i; i < allFeatures.length; i++) {
                    var feature = allFeatures[i];
                    feature.setStyle(defaultChildStyle);
                    feature.setProperties({"isSelected": false, "operation": 1});

                    removeFromJSON("child", feature);
                    //unselectChild(i);
                }

                selectChildren
                    .getFeatures()
                    .clear();
            }

            $('.addPin')
                .click(function (evt) {
                    evt.preventDefault();

                    if (pointsLayer.getSource().getFeatures().length < 1 && errors.length === 0) {
                        if (Object.keys(selectedPointCoords).length === 0) 
                            selectedPointCoords = defaultCoords;
                        
                        addFeature(selectedPointCoords);

                        map.setView(new ol.View({
                            center: ol
                                .proj
                                .fromLonLat([selectedPointCoords.long, selectedPointCoords.lat]),
                            zoom: 16
                        }));
                    }

                    map.render();
                })

            function addFeature(coords) {

                var newGeomPoint = new ol
                    .geom
                    .Point(ol.proj.fromLonLat([selectedPointCoords.long, selectedPointCoords.lat]))
                var newFeature = new ol.Feature(newGeomPoint);
                newFeature.on('change', updatePointPos);
                newFeature.setStyle(defaultPinStyle);
                newFeature.setProperties({'id': "A", 'type': "loc"})
                pointsLayer
                    .getSource()
                    .addFeature(newFeature);
                selectedFeature = newFeature;

                //setupJSONData(string type, geomPoint coords, string id)
                setupJSONData(newFeature);

                // pointsLayer.getSource().getFeatures(); select.getFeatures().clear();
                // newFeature.setStyle(defaultPinStyle) newFeature.setStyle(selectedPinStyle)
                // select.getFeatures().push(selectedFeature);
                allChildrensLayer
                    .getSource()
                    .changed();
            }

            $('.removePin')
                .click(function (evt) {
                    evt.preventDefault();

                    // var locFeature = pointsLayer.getSource().getFeatures();
                    // locFeature.un('change',updatePointPos);

                    clickedFeature = null;
                    select
                        .getFeatures()
                        .clear();
                    pointsLayer
                        .getSource()
                        .clear();
                    removeFromJSON("loc", null);

                    unselectAllChildren();
                    updateSelectedChildrenProps();

                    selectedPointCoords = {};
                    if (enabledDefaultCoords) {
                        navigator
                            .geolocation
                            .getCurrentPosition(function (pos) {

                                defaultCoords = {
                                    long: (parseFloat(pos.coords.longitude).toPrecision(coordsPrecision) * 1),
                                    lat: (parseFloat(pos.coords.latitude).toPrecision(coordsPrecision) * 1)
                                };
                                //setInputes(defaultCoords);
                            });
                    }
                    allChildrensLayer
                        .getSource()
                        .changed();
                })

            $('.coords-input').keypress(function (evt) {
                if (evt.keyCode == 13) 
                    updatePointPosManually();
                }
            );

            $('.updatePin').click(function (evt) {
                evt.preventDefault();
                if (errors.length === 0) 
                    updatePointPosManually();
                }
            );

            /* FIND MU LOC START*/
            $('#myLocalizationBtn').click(function (evt) {
                evt.preventDefault();
                if (enabledDefaultCoords) {
                    navigator
                        .geolocation
                        .getCurrentPosition(function (pos) {

                            defaultCoords = {
                                long: (parseFloat(pos.coords.longitude).toPrecision(coordsPrecision) * 1),
                                lat: (parseFloat(pos.coords.latitude).toPrecision(coordsPrecision) * 1)
                            };

                            map.setView(new ol.View({
                                center: ol
                                    .proj
                                    .fromLonLat([defaultCoords.long, defaultCoords.lat]),
                                zoom: 16
                            }));

                            // map   .getView()   .animate({     center: new
                            // ol.proj.fromLonLat([defaultCoords.long, defaultCoords.lat]),     zoom: 16
                            // }); setInputes(defaultCoords);
                        });
                }
            })

            $('#myPinLocalizationBtn').click(function (evt) {
                evt.preventDefault();
                if (pointsLayer.getSource().getFeatures().length > 0) {

                    var latLon = ol
                        .proj
                        .transform(selectedFeature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');

                    defaultCoords = {
                        long: (parseFloat(latLon[0]).toPrecision(coordsPrecision) * 1),
                        lat: (parseFloat(latLon[1]).toPrecision(coordsPrecision) * 1)
                    };

                    map
                        .getView()
                        .animate({
                            center: ol
                                .proj
                                .fromLonLat([defaultCoords.long, defaultCoords.lat]),
                            zoom: 16
                        });

                    setInputes(defaultCoords);
                }
            })
            /* FIND MU LOC END*/
            //https://mediavinemarketing.com/wp-content/uploads/2016/02/map-marker-icon.png

            /* LOCALIZATION COORDINATES UPDATE START*/
            function updatePointPosManually() {
                if (pointsLayer.getSource().getFeatures().length > 0) {

                    var latLon3857 = ol
                        .proj
                        .transform([
                            defaultCoords.long, defaultCoords.lat
                        ], 'EPSG:4326', 'EPSG:3857');
                    selectedFeature
                        .getGeometry()
                        .setCoordinates(latLon3857);

                    //setupJSONData(string type, geomPoint coords, string id)
                    setupJSONData(selectedFeature);

                    map
                        .getView()
                        .animate({
                            center: ol
                                .proj
                                .fromLonLat([defaultCoords.long, defaultCoords.lat]),
                            zoom: 16
                        });
                    //       setInputes(defaultCoords);
                    allChildrensLayer
                        .getSource()
                        .changed();
                }
            }

            function updatePointPos(evt) {
                var latLon = ol
                    .proj
                    .transform(this.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
                selectedPointCoords.long = (latLon[0].toPrecision(coordsPrecision) * 1);
                selectedPointCoords.lat = (latLon[1].toPrecision(coordsPrecision) * 1)

                //calculate distance setupJSONData(string type, geomPoint coords, string id)
                setupJSONData(this);

                setInputes(selectedPointCoords);
                allChildrensLayer
                    .getSource()
                    .changed();
            }
            /* LOCALIZATION COORDINATES UPDATE COORDINATES END*/

            /* CONVERT TO DMS START*/
            function getDDDMS(lng, lat) {

                var lat = lat;
                var lng = lng;
                var latResult = {};
                var lngResult = {};
                var dmsResult = {};

                lat = parseFloat(lat);
                lng = parseFloat(lng);

                latResult = getDms(lat);
                latResult.direction = (lat >= 0)
                    ? 'N'
                    : 'S';
                latResult.decimal = lat;
                latResult.string = latResult.deg + "º" + latResult.min + "'" + latResult.sec + "\"" + latResult.direction
                // Call to getDms(lat) function for the coordinates of Latitude in DMS. The
                // result is stored in latResult variable. latResult += getDms(lat);

                lngResult = getDms(lng);
                lngResult.direction = (lng >= 0)
                    ? 'E'
                    : 'W';
                lngResult.decimal = lng
                lngResult.string = lngResult.deg + "º" + lngResult.min + "'" + lngResult.sec + "\"" + lngResult.direction
                // Call to getDms(lng) function for the coordinates of Longitude in DMS. The
                // result is stored in lngResult variable. lngResult += getDms(lng); Joining
                // both variables and separate them with a space.
                dmsResult = {
                    long: lngResult,
                    lat: latResult
                };

                // Return the resultant string
                return dmsResult;
            }

            function getDms(val) {

                var result = {};
                var valDeg,
                    valMin,
                    valSec;
                var str;

                val = Math.abs(val);
                //degrees
                valDeg = Math.floor(val);
                // str = valDeg + "º"; minutes
                valMin = Math.floor((val - valDeg) * 60);
                //str += valMin + "'"; seconds
                valSec = Math.round((val - valDeg - valMin / 60) * 3600 * 1000) / 1000;
                //str += valSec + '"';
                result = {
                    deg: valDeg,
                    min: valMin,
                    sec: valSec
                }

                return result;
            }
            /* CONVERT TO DMS END*/

            /* UPDATE INPUTS START*/
            function setInputes(coords) {
                setInputesDD(coords);
                setInputesDMS(coords);
            }

            /* UPDATE INPUTS (DMS) START*/
            function setInputesDMS(coords) {

                var dms = getDDDMS(coords.long, coords.lat);

                $('#directionE').val(dms.long.direction);
                $('#degreesE').val(dms.long.deg);
                $('#minutesE').val(dms.long.min);
                $('#secondsE').val(dms.long.sec);

                $('#directionN').val(dms.lat.direction);
                $('#degreesN').val(dms.lat.deg);
                $('#minutesN').val(dms.lat.min);
                $('#secondsN').val(dms.lat.sec);
            }

            function clearInputsDMS() {
                $('#directionE').val('');
                $('#degreesE').val('');
                $('#minutesE').val('');
                $('#secondsE').val('');

                $('#directionN').val('');
                $('#degreesN').val('');
                $('#minutesN').val('');
                $('#secondsN').val('');
            }
            /* UPDATE INPUTS (DMS)END*/

            /* UPDATE INPUTS (DD)*/
            /* initial setup */
            if (enabledExtendedInfo) {
                $("#coordinateX").on('input', calculateCoordinatesDec);
                $("#coordinateY").on('input', calculateCoordinatesDec);
            }
            $("#CoordinateXY2").on('input', calculateCoordinatesDec);

            var latStr = "Szerokość";
            var lngStr = "Długość";

            function setInputesDD(coords) {

                if (enabledExtendedInfo) {
                    $('#formDD')
                        .find('.map-long')
                        .val((coords.long * 1).toPrecision(coordsPrecision));
                    $('#formDD')
                        .find('.map-lat')
                        .val((coords.lat * 1).toPrecision(coordsPrecision));
                }

                $('#CoordinateXY2').val((coords.lat * 1).toPrecision(coordsPrecision) + " " + (coords.long * 1).toPrecision(coordsPrecision));
            }

            function clearInputsDD() {

                if (enabledExtendedInfo) {
                    $('#formDD')
                        .find('.map-long')
                        .val('');
                    $('#formDD')
                        .find('.map-lat')
                        .val('');
                }

                $('#CoordinateXY2').val('');
            }

            function calculateCoordinatesDec(evt) {
                $('.map-coords-alert').html('');

                var valX,
                    valY;
                var input = evt.currentTarget.id;

                switch (input) {
                    case "coordinateX":
                        valX = $('#coordinateX').val();
                        valY = $('#coordinateY').val();

                        var val = this
                            .value
                            .toString();
                        if (val.length > coordsPrecision) {
                            $('#coordinateX').val((valX * 1).toPrecision(coordsPrecision));
                        }

                        break;
                    case "coordinateY":
                        valX = $('#coordinateX').val();
                        valY = $('#coordinateY').val();

                        var val = this
                            .value
                            .toString();
                        if (val.length > coordsPrecision) {
                            $('#coordinateY').val((valY * 1).toPrecision(coordsPrecision));
                        }

                        break;
                    case "CoordinateXY2":

                        var val = this
                            .value
                            .toString()
                            .split(" ");
                        var valX = (val[0] * 1);
                        var valY = (val[1] * 1);

                        //longtitude
                        if (val[1] !== undefined) {
                            if (val[1].length > (coordsPrecision + 1)) {

                                valY = (val[1] * 1).toPrecision(coordsPrecision);
                                $('#CoordinateXY2').val(valX.toPrecision(coordsPrecision) + " " + valY);
                            }
                        } else {
                            valY = 0;
                        }

                        //lattitude
                        if (val[0] !== undefined) {
                            if (val[0].length > (coordsPrecision + 1)) {
                                valX = (val[0] * 1).toPrecision(coordsPrecision);
                                $('#CoordinateXY2').val(valX + " " + valY.toPrecision(coordsPrecision));
                            }
                        } else {
                            valX = 0;
                        }
                        //       if( val[1].length > (coordsPrecision+1) || val[0].length >
                        // (coordsPrecision+1))       {          $('#CoordinateXY2').val(
                        // (valX*1).toPrecision(coordsPrecision) + " " +
                        // (valY*1).toPrecision(coordsPrecision))}
                        break;
                }

                var errorsX = validateDecCoords(valX);
                var errorsY = validateDecCoords(valY);

                if ((errorsX.length == 0) && (errorsY.length == 0)) {
                    defaultCoords.long = (valY);
                    defaultCoords.lat = (valX);
                } else {
                    displayMapCoordError(errorsX, latStr);
                    displayMapCoordError(errorsY, lngStr);

                    // $("#CoordinateXY2").valid() $('#CoordinateXY2').validationEngine('showError',
                    // 'This a custom msg', 'load')
                    // $('#FormLocalization').validationEngine('validate') $("#FormLocalization").
                    //  validate().    showErrors({
                    // 'subConLocNetworkViewModel.CoordinateXY2': "I know that your firstname is
                    // Pete, Pete!"    });
                }

                setInputesDMS(defaultCoords);
            }

            function validateDecCoords(decVal) {
                var result = true;
                // var value = parseFloat(decVal) * 100
                var value = parseFloat(decVal) * 100;
                var msgArr = [];

                if (decVal.toString().indexOf('.') == -1) 
                    msgArr.push('Proszę podać liczbę z kropką');
                
                if (value > 5999 || value < 0 || isNaN(value)) {
                    msgArr.push('Proszę podać liczbę zmiennoprzecinkową dodatnią i mniejszą od 60');
                }
                return msgArr;
            }
            /* UPDATE INPUTS DD (END)*/

            /* DISPLAY DD ERRORS START*/
            function displayMapCoordError(errors, fieldName) {
                var msg = "";
                var i = 0;
                var iLength = errors.length;
                for (i; i < iLength; i++) {
                    msg += '<li style="list-style-type: none;"><i class="fa fa-exclamation-triangle" aria-hi' +
                            'dden="true"></i> ' + fieldName + ":" + errors[i] + '</li>'
                }
                $(msg).appendTo($('.map-coords-alert'));
            }
            /* DISPLAY DD ERRORS END*/

            /* KEY HANDLERS START */
            var ctrlPressed = false;
            var shiftPressed = false;

            document.onkeydown = function (evt) {
                if (evt.code === "ControlLeft") 
                    ctrlPressed = true;
                if (evt.code === "ShiftLeft") 
                    shiftPressed = true;
                };
            
            document.onkeyup = function (evt) {
                if (evt.code === "ControlLeft") 
                    ctrlPressed = false;
                if (evt.code === "ShiftLeft") 
                    shiftPressed = false;
                };
            
            /* KEY HANDLERS END */

            /* SET JSON DATA START */
            function setupJSONData(feature) {

                var type = feature
                    .getProperties()
                    .type;
                var lonLat4326 = ol
                    .proj
                    .transform(feature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
                var coords = {
                    lat: (lonLat4326[1].toPrecision(coordsPrecision) * 1),
                    long: (lonLat4326[0].toPrecision(coordsPrecision) * 1)
                }

                var getCoordinatesDDDMS = getDDDMS(coords.long, coords.lat);

                switch (type) {
                    case "loc":

                        localizationResult.localization = {
                            coordinate: (getCoordinatesDDDMS.lat.string + " " + getCoordinatesDDDMS.long.string),
                            coordinateDec: (getCoordinatesDDDMS.lat.decimal + " " + getCoordinatesDDDMS.long.decimal),
                            //my propsocalizationResult.selectedChildren
                            ddLattitude: getCoordinatesDDDMS.lat.decimal,
                            ddLongtitude: getCoordinatesDDDMS.long.decimal,
                            dmsLattitude: getCoordinatesDDDMS.lat.string,
                            dmsLongtitude: getCoordinatesDDDMS.long.string
                        }

                        //update children props
                        updateSelectedChildrenProps();

                        break;

                    case "child":

                        var jsonChildObj = {
                            TempId: feature
                                .getProperties()
                                .tempId,
                            Los_ID: feature
                                .getProperties()
                                .losId,
                            MiboId: feature
                                .getProperties()
                                .miboId,
                            LocationId: '@Model.LocalizationID',
                            Name: feature
                                .getProperties()
                                .name,
                            Coordinate: (getCoordinatesDDDMS.lat.string + " " + getCoordinatesDDDMS.long.string),
                            CoordinateDec: (getCoordinatesDDDMS.lat.decimal + " " + getCoordinatesDDDMS.long.decimal),
                            Distance: feature
                                .getProperties()
                                .distance
                                .replace(/[km, m]/g, ""),
                            Azimuth: feature
                                .getProperties()
                                .azimuth
                                .replace("º", ""),
                            IsSelected: feature
                                .getProperties()
                                .isSelected,
                            Operation: feature
                                .getProperties()
                                .operation
                        }

                        var findBy;

                        if (jsonChildObj.MiboId === "" || jsonChildObj.MiboId === 0 || jsonChildObj.MiboId === null || jsonChildObj.MiboId === "null") {

                            if (jsonChildObj.Los_ID === "" || jsonChildObj.Los_ID === 0 || jsonChildObj.Los_ID === null || jsonChildObj.Los_ID === "null") {
                                findBy = "TempId";
                            } else {
                                findBy = "Los_ID";
                            }
                        } else {
                            findBy = "MiboId";
                        }

                        var id = localizationResult
                            .selectedChildren
                            .map(function (item) {
                                return item[findBy]
                            })
                            .indexOf(jsonChildObj[findBy])

                            //update item
                            if (id != -1) {
                                Object.assign(localizationResult.selectedChildren[id], jsonChildObj);
                                convertMapJsonToSelectedLosList(localizationResult.selectedChildren//new item
                                )
                            } else {
                                localizationResult
                                    .selectedChildren
                                    .push(jsonChildObj);
                            }

                            //selectedLosList = localizationResult.selectedChildren;
                            convertMapJsonToSelectedLosList(localizationResult.selectedChildren);
                        // $('#SelectedLosList').val(
                        // JSON.stringify(localizationResult.selectedChildren));
                        // selectedChildrenDataJSON = localizationResult.selectedChildren;
                        break;
                }

                debugMode
                    ? console.log('setupJSONData', localizationResult.selectedChildren)
                    : null;
            }

            function removeFromJSON(type, feature) {

                if (type === "loc") {
                    // localizationResult.localization = null; localizationResult.selectedChildren =
                    // [];

                    clearInputsDD();
                    clearInputsDMS();
                    // var outside map componentFn selectedLosList =
                    // localizationResult.selectedChildren; $('#SelectedLosList').val('');
                }
                if (type === "child") {

                    overrideJSON(feature);

                    // localizationResult.selectedChildren.splice(index, 1);
                    // if(unselectedChildJsonData.hasOwnProperty('IsSelected'))
                    // unselectedChildJsonData.IsSelected = false; var outside map componentFn
                    // selectedLosList = localizationResult.selectedChildren;
                    // convertMapJsonToSelectedLosList(localizationResult.selectedChildren)
                    // $('#SelectedLosList').val(
                    // JSON.stringify(localizationResult.selectedChildren));
                }
                // console.log('localizationResult',localizationResult)

                debugMode
                    ? console.log('unselectChild', $('#SelectedLosList').val())
                    : null;

            }

            function overrideJSON(feature) {

                var jsonChildObj = {
                    TempId: feature
                        .getProperties()
                        .tempId,
                    Los_ID: feature
                        .getProperties()
                        .losId,
                    MiboId: feature
                        .getProperties()
                        .miboId,
                    LocationId: '@Model.LocalizationID',
                    Name: feature
                        .getProperties()
                        .name,
                    Coordinate: feature
                        .getProperties()
                        .coordinate,
                    CoordinateDec: feature
                        .getProperties()
                        .coordinateDec,
                    Distance: feature
                        .getProperties()
                        .distance
                        .replace(/[km, m]/g, ""),
                    Azimuth: feature
                        .getProperties()
                        .azimuth
                        .replace("º", ""),
                    IsSelected: feature
                        .getProperties()
                        .isSelected,
                    Operation: feature
                        .getProperties()
                        .operation
                }

                var findBy;

                if (jsonChildObj.MiboId === "" || jsonChildObj.MiboId === 0 || jsonChildObj.MiboId === null || jsonChildObj.MiboId === "null") {

                    if (jsonChildObj.Los_ID === "" || jsonChildObj.Los_ID === 0 || jsonChildObj.Los_ID === null || jsonChildObj.Los_ID === "null") {
                        findBy = "TempId";
                    } else {
                        findBy = "Los_ID";
                    }
                } else {
                    findBy = "MiboId";
                }

                // var id = localizationResult.selectedChildren.map(function(item){ return
                // item.Los_ID}).indexOf(jsonChildObj.Los_ID);
                var id = localizationResult
                    .selectedChildren
                    .map(function (item) {
                        return item[findBy]
                    })
                    .indexOf(jsonChildObj[findBy])

                Object.assign(localizationResult.selectedChildren[id], jsonChildObj);
                convertMapJsonToSelectedLosList(localizationResult.selectedChildren)
            }

            /* SET JSON DATA END */

            /* UPDATE CHILDREN PROPERTIES START */
            function updateSelectedChildrenProps() {

                var selectedChildrenFeaturesArray = selectChildren
                    .getFeatures()
                    .getArray();
                // var selectedIdArray = localizationResult.selectedChildren;
                // console.log('c1',selectedChildrenFeaturesArray);

                var f = 0;
                var fLength = allChildrensLayer
                    .getSource()
                    .getFeatures()
                    .length;
                var childrenArray = allChildrensLayer
                    .getSource()
                    .getFeatures();

                // data for json localizationResult.selectedChildren =[]; clear map table data
                // array for table
                selectedChildrenTableData = [];

                if (fLength > 0) {
                    for (f; f < fLength; f++) {
                        var tempId = new Date().valueOf();
                        var currentChild = childrenArray[f];

                        // if(selectedIdArray.indexOf(currentChild.getProperties().id) != -1)  {
                        if (selectedChildrenFeaturesArray.indexOf(currentChild) != -1) {

                            var lonLat4326 = ol
                                .proj
                                .transform(currentChild.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
                            var coords = {
                                lat: (lonLat4326[1].toPrecision(coordsPrecision) * 1),
                                long: (lonLat4326[0].toPrecision(coordsPrecision) * 1)
                            };

                            var getCoordinatesDDDMS = getDDDMS(coords.long, coords.lat);

                            var distance = calcDistance(selectedFeature.getGeometry().getCoordinates(), currentChild.getGeometry().getCoordinates());

                            var angle = calcAngle(selectedFeature.getGeometry().getCoordinates(), currentChild.getGeometry().getCoordinates());

                            currentChild.setProperties({
                                'coordinate': (getCoordinatesDDDMS.lat.string + " " + getCoordinatesDDDMS.long.string),
                                'coordinateDec': (getCoordinatesDDDMS.lat.decimal + " " + getCoordinatesDDDMS.long.decimal),
                                'distance': distance,
                                'azimuth': angle
                            });

                            //update json
                            overrideJSON(currentChild);

                            debugMode
                                ? console.log('updateSelectedChildrenProps', $('#SelectedLosList').val())
                                : null

                            //create new item for map table
                            var childTableData = {
                                tempId: currentChild
                                    .getProperties()
                                    .tempId,
                                losId: currentChild
                                    .getProperties()
                                    .losId,
                                miboId: currentChild
                                    .getProperties()
                                    .miboId,
                                name: currentChild
                                    .getProperties()
                                    .name,
                                distance: distance,
                                azimuth: angle,
                                coordinate: (getCoordinatesDDDMS.lat.string + " " + getCoordinatesDDDMS.long.string),
                                coordinateDec: (getCoordinatesDDDMS.lat.decimal + " " + getCoordinatesDDDMS.long.decimal)
                            }
                            //add new data to map data array
                            selectedChildrenTableData.push(childTableData);
                        }
                    }
                    // add map data array to table
                    $('#mapLosTable').jtable('load');
                }
            }

            function calcDistance(p1, p2) {

                var line = new ol
                    .geom
                    .LineString([p1, p2]);
                var length = ol
                    .Sphere
                    .getLength(line);

                var output;
                if (length > 100) {
                    output = (Math.round(length / 1000 * 100) / 100) + ' km';
                } else {
                    output = (Math.round(length * 100) / 100) + ' m';
                }

                return output;
            };

            function calcAngle(p1, p2) {

                var p1y = p1[0];
                var p1x = p1[1];

                var p2y = p2[0];
                var p2x = p2[1];

                var perpendicular = (p2y - p1y);
                var base = (p2x - p1x);
                var theta = Math.atan2(perpendicular, base); // in radians
                var angle = (theta * 180 / Math.PI); // in degrees

                if (angle < 0) 
                    angle = (360 + angle)

                return Math.round(angle) + 'º';
            }
            /* UPDATE CHILDREN PROPERTIES END */

            /* INIT MAP START*/
            // remember to comment it $('#CoordinateXY2').val("52.18101510 20.99223280");
            // $('#SelectedLosList').val([5]);

            /* if data exists */
            function initMap() {

                if ($('#CoordinateXY2').val().length > 0) {
                    var val = $('#CoordinateXY2')
                        .val()
                        .split(" ");
                    defaultCoords = {
                        long: ((val[1] * 1).toPrecision(coordsPrecision) * 1),
                        lat: ((val[0] * 1).toPrecision(coordsPrecision) * 1)
                    };

                    var getCoordinatesDDDMS = getDDDMS(defaultCoords.long, defaultCoords.lat);

                    map.setView(new ol.View({
                        center: ol
                            .proj
                            .fromLonLat([defaultCoords.long, defaultCoords.lat]),
                        zoom: 16
                    }));

                    $('.addPin').trigger('click');

                    if (selectedChildreFeatures.length > 0) {
                        //if mibo accessible
                        if (allChildrensFeature.length > 0) {

                            var s = 0;
                            var sLength = selectedChildreFeatures.length;

                            loopA : for (s; s < sLength; s++) {

                                var f = 0;
                                var fLength = allChildrensFeature.length;

                                loopB : for (f; f < fLength; f++) {
                                    if (selectedChildreFeatures[s].getProperties().miboId === allChildrensFeature[f].getProperties().miboId) {

                                        allChildrensFeature[f].setProperties({
                                            'losId': selectedChildreFeatures[s]
                                                .getProperties()
                                                .losId,
                                            'isSelected': selectedChildreFeatures[s]
                                                .getProperties()
                                                .isSelected
                                        })

                                        if (allChildrensFeature[f].getProperties().isSelected) 
                                            addChildToSelected(allChildrensFeature[f]);
                                        
                                        break loopB;
                                    }

                                    //manually created loses
                                    if (selectedChildreFeatures[s].getProperties().miboId === "" || selectedChildreFeatures[s].getProperties().miboId === null || selectedChildreFeatures[s].getProperties().miboId === "null") {

                                        allChildrensLayer
                                            .getSource()
                                            .addFeature(selectedChildreFeatures[s]);

                                        if (selectedChildreFeatures[s].getProperties().isSelected) 
                                            addChildToSelected(selectedChildreFeatures[s]);
                                        
                                        //else    addChildToLayer(selectedChildreFeatures[s])

                                        break loopB;
                                    }

                                }
                            }
                        }
                    }

                    updateSelectedChildrenProps(/* else find current geoloc */);
                } else {
                    if (enabledDefaultCoords) {
                        navigator
                            .geolocation
                            .getCurrentPosition(function (pos) {

                                defaultCoords = {
                                    long: (parseFloat(pos.coords.longitude).toPrecision(coordsPrecision) * 1),
                                    lat: (parseFloat(pos.coords.latitude).toPrecision(coordsPrecision) * 1)
                                };

                                map.setView(new ol.View({
                                    center: ol
                                        .proj
                                        .fromLonLat([defaultCoords.long, defaultCoords.lat]),
                                    zoom: 16
                                }));

                                // setInputes(defaultCoords);
                            },
                            /* if geoloc is turned off*/
                            function (error) {
                                if (error.code == error.PERMISSION_DENIED) {
                                    resetViewMap()
                                    // setInputes(defaultCoords);
                                }
                            });
                    } else {
                        resetViewMap();
                    }
                }
            }

            function resetViewMap() {
                defaultCoords = {
                    long: 19,
                    lat: 52
                }

                map.setView(new ol.View({
                    center: ol
                        .proj
                        .fromLonLat([defaultCoords.long, defaultCoords.lat]),
                    zoom: 6
                }));
            }

            initMap();
            /* INIT MAP END*/

            /* ADD NEW CHILD TO MAP FROM START */
            function createNewChild() {

                if (pointsLayer.getSource().getFeatures().length > 0) {

                    var nameTxt = $('#losName').val();
                    var coordsTxt = $('#losXY2').val();

                    var feature = pointsLayer
                        .getSource()
                        .getFeatures()[0];
                    var tempCoords = coordsTxt.split(" ");

                    var newChildCoords = {
                        lat: (tempCoords[0] * 1),
                        long: (tempCoords[1] * 1)
                    }

                    var latLon3857 = ol
                        .proj
                        .transform([
                            newChildCoords.long, newChildCoords.lat
                        ], 'EPSG:4326', 'EPSG:3857');

                    var getCoordinatesDDDMS = getDDDMS(newChildCoords.long, newChildCoords.lat);
                    var distance = calcDistance(feature.getGeometry().getCoordinates(), latLon3857);

                    var angle = calcAngle(feature.getGeometry().getCoordinates(), latLon3857);

                    var tempId = new Date().valueOf();

                    var newChildren = [
                        {
                            TempId: tempId,
                            Los_ID: 0,
                            MiboId: null,
                            LocationId: '@Model.LocalizationID',
                            Name: nameTxt,
                            Distance: distance.replace(/[km, m]/g, ""),
                            Azimuth: angle.replace("º", ""),
                            Coordinate: getCoordinatesDDDMS.lat.string + ' ' + getCoordinatesDDDMS.long.string,
                            CoordinateDec: coordsTxt,
                            IsSelected: true,
                            Operation: 1
                        }
                    ]

                    var newChild = convertToFeatures(newChildren)[0];
                    allChildrensLayer
                        .getSource()
                        .addFeature(newChild);
                    addChildToSelected(newChild);

                    /* UPDATE TABLE START*/
                    var selectedChildData = {
                        tempId: newChild
                            .getProperties()
                            .tempId,
                        losId: newChild
                            .getProperties()
                            .losId,
                        miboId: newChild
                            .getProperties()
                            .miboId,
                        name: newChild
                            .getProperties()
                            .name,
                        distance: newChild
                            .getProperties()
                            .distance,
                        azimuth: newChild
                            .getProperties()
                            .azimuth,
                        coordinate: newChild
                            .getProperties()
                            .coordinate,
                        coordinateDec: newChild
                            .getProperties()
                            .coordinateDec
                    }

                    selectedChildrenTableData.push(selectedChildData);
                    //var outside map component Fn
                    convertMapJsonToSelectedLosList(localizationResult.selectedChildren);
                    $('#mapLosTable').jtable('load');
                    /* UPDATE TABLE END*/

                    $('#los-editor').modal('toggle');
                }
            };
            /* ADD NEW CHILD FEATURE TO MAP START*/

            /* GEOCODER START */
            var geocoder = new Geocoder('nominatim', {
                provider: 'photon',
                lang: 'en',
                placeholder: 'Search for ...',
                limit: 5,
                debug: true,
                autoComplete: true,
                keepOpen: true
            });
            map.addControl(geocoder);

            //Listen when an address is chosen
            geocoder.on('addresschosen', function (evt) {
                var feature = evt.feature,
                    coord = evt.coordinate;
                content.innerHTML = '<p>' + evt.address.formatted + '</p>';
                overlay.setPosition(coord);
            });

            // popup
            var container = document.getElementById('popupSearchMap'),
                content = document.getElementById('popupSearchMapContent'),
                closer = document.getElementById('popupSearchMapCloser'),
                overlay = new ol.Overlay({
                    element: container,
                    offset: [0, -40]
                });
            closer.onclick = function () {
                overlay.setPosition(undefined);
                closer.blur();
                return false;
            };
            map.addOverlay(overlay);
            /* GEOCODER END*/



            /* VALIDATE DMS MAP INPUTS START */
            $("#degreesN").on('input', calculateCoordinates);
            $("#minutesN").on('input', calculateCoordinates);
            $("#secondsN").on('input', calculateCoordinates);

            $("#degreesE").on('input', calculateCoordinates);
            $("#minutesE").on('input', calculateCoordinates);
            $("#secondsE").on('input', calculateCoordinates);

            function double(field) {
                var value = parseFloat(field.val()) * 100;
                if (field.val().indexOf('.') == -1 || field.val().length > 5) 
                    return 'Proszę podać liczbę z kropką i maksymalnie dwoma miejscami po nim';
                if (value > 5999 || value < 0 || isNaN(value)) {
                    return 'Proszę podać liczbę zmiennoprzecinkową dodatnią i mniejszą od 60';
                }
            }

            function calculateCoordinates(evt) {

                var coordinates = '';
                var valueX = parseFloat($("#degreesN").val()) + parseFloat($("#minutesN").val()) / 60 + parseFloat($("#secondsN").val()) / 3600;
                var valueY = parseFloat($("#degreesE").val()) + parseFloat($("#minutesE").val()) / 60 + parseFloat($("#secondsE").val()) / 3600;
                if (!isNaN(valueX)) {
                    coordinates = valueX
                        .toFixed(8)
                        .toString();
                }
                if (!isNaN(valueY)) {
                    coordinates = coordinates + ' ' + valueY
                        .toFixed(8)
                        .toString();
                }
                $('#CoordinateXY2').val(coordinates);

                defaultCoords.long = (valueY.toPrecision(coordsPrecision) * 1);
                defaultCoords.lat = (valueX.toPrecision(coordsPrecision) * 1);
            }
            /* VALIDATE DMS MAP INPUTS END */

            function convertMapJsonToSelectedLosList(jsonMapData) {

                $('#SelectedLosList').val('');
                //JSON.stringify(localizationResult.selectedChildren)
                var i = 0;
                var iLength = jsonMapData.length;
                var temoJsonList = [];

                for (i; i < iLength; i++) {
                    temoJsonList.push({
                        jsonLos: Object.assign({}, jsonMapData[i])
                    })
                }

                $('#SelectedLosList').val(JSON.stringify(temoJsonList));
            }

        }
        /*================= MAP FN END =================*/

        /*********************** MAP END*******************/

    });