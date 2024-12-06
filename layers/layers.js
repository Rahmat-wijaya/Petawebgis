var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> <br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> Banawa Selatan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> Dolo<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> Kinovaro<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> Mantikulore<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> Marawola<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> Marawola Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> Palu Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> Palu Selatan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> Palu Timur<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> Palu Utara<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> Sigi Biromaru<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> Tanantovea<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> Tatanga<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> Tawaeli<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> Ulujadi<br />'
        });
var format_JALAN_LN_50K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_2 = format_JALAN_LN_50K_2.readFeatures(json_JALAN_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_2.addFeatures(features_JALAN_LN_50K_2);
var lyr_JALAN_LN_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_2, 
                style: style_JALAN_LN_50K_2,
                popuplayertitle: "JALAN_LN_50K",
                interactive: true,
    title: 'JALAN_LN_50K<br />\
    <img src="styles/legend/JALAN_LN_50K_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_50K_2_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_50K_2_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JALAN_LN_50K_2_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JALAN_LN_50K_2_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/JALAN_LN_50K_2_5.png" /> <br />'
        });
var format_RumahMakan_3 = new ol.format.GeoJSON();
var features_RumahMakan_3 = format_RumahMakan_3.readFeatures(json_RumahMakan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahMakan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahMakan_3.addFeatures(features_RumahMakan_3);cluster_RumahMakan_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RumahMakan_3
});
var lyr_RumahMakan_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RumahMakan_3, 
                style: style_RumahMakan_3,
                popuplayertitle: "Rumah Makan",
                interactive: false,
                title: '<img src="styles/legend/RumahMakan_3.png" /> Rumah Makan'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_JALAN_LN_50K_2.setVisible(true);lyr_RumahMakan_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_JALAN_LN_50K_2,lyr_RumahMakan_3];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_50K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RumahMakan_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_50K_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RumahMakan_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_50K_2.set('fieldLabels', {'NAMRJL': 'inline label - visible with data', 'KONRJL': 'inline label - visible with data', 'MATRJL': 'inline label - visible with data', 'FGSRJL': 'inline label - visible with data', 'UTKRJL': 'inline label - visible with data', 'TOLRJL': 'inline label - visible with data', 'WLYRJL': 'inline label - visible with data', 'AUTRJL': 'inline label - visible with data', 'KLSRJL': 'inline label - visible with data', 'SPCRJL': 'inline label - visible with data', 'JPARJL': 'inline label - visible with data', 'ARHRJL': 'inline label - visible with data', 'STARJL': 'inline label - visible with data', 'KLLRJL': 'inline label - visible with data', 'MEDRJL': 'inline label - visible with data', 'LOCRJL': 'inline label - visible with data', 'JARRJL': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', });
lyr_RumahMakan_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_RumahMakan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});