var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Sitiosarqueologicosrestriccinalta_1 = new ol.format.GeoJSON();
var features_Sitiosarqueologicosrestriccinalta_1 = format_Sitiosarqueologicosrestriccinalta_1.readFeatures(json_Sitiosarqueologicosrestriccinalta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitiosarqueologicosrestriccinalta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosarqueologicosrestriccinalta_1.addFeatures(features_Sitiosarqueologicosrestriccinalta_1);
var lyr_Sitiosarqueologicosrestriccinalta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosarqueologicosrestriccinalta_1, 
                style: style_Sitiosarqueologicosrestriccinalta_1,
                popuplayertitle: 'Sitios arqueologicos restricción alta',
                interactive: true,
                title: '<img src="styles/legend/Sitiosarqueologicosrestriccinalta_1.png" /> Sitios arqueologicos restricción alta'
            });
var format_Sitiosarqueologicosrestriccintotal_2 = new ol.format.GeoJSON();
var features_Sitiosarqueologicosrestriccintotal_2 = format_Sitiosarqueologicosrestriccintotal_2.readFeatures(json_Sitiosarqueologicosrestriccintotal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitiosarqueologicosrestriccintotal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosarqueologicosrestriccintotal_2.addFeatures(features_Sitiosarqueologicosrestriccintotal_2);
var lyr_Sitiosarqueologicosrestriccintotal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosarqueologicosrestriccintotal_2, 
                style: style_Sitiosarqueologicosrestriccintotal_2,
                popuplayertitle: 'Sitios arqueologicos restricción total',
                interactive: true,
                title: '<img src="styles/legend/Sitiosarqueologicosrestriccintotal_2.png" /> Sitios arqueologicos restricción total'
            });
var format_Sitiosarqueologicos_3 = new ol.format.GeoJSON();
var features_Sitiosarqueologicos_3 = format_Sitiosarqueologicos_3.readFeatures(json_Sitiosarqueologicos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitiosarqueologicos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosarqueologicos_3.addFeatures(features_Sitiosarqueologicos_3);
var lyr_Sitiosarqueologicos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosarqueologicos_3, 
                style: style_Sitiosarqueologicos_3,
                popuplayertitle: 'Sitios arqueologicos',
                interactive: true,
                title: '<img src="styles/legend/Sitiosarqueologicos_3.png" /> Sitios arqueologicos'
            });
var format_Zoitrestriccinbaja_4 = new ol.format.GeoJSON();
var features_Zoitrestriccinbaja_4 = format_Zoitrestriccinbaja_4.readFeatures(json_Zoitrestriccinbaja_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoitrestriccinbaja_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoitrestriccinbaja_4.addFeatures(features_Zoitrestriccinbaja_4);
var lyr_Zoitrestriccinbaja_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoitrestriccinbaja_4, 
                style: style_Zoitrestriccinbaja_4,
                popuplayertitle: 'Zoit restricción baja',
                interactive: true,
                title: '<img src="styles/legend/Zoitrestriccinbaja_4.png" /> Zoit restricción baja'
            });
var format_Zoitrestriccinmoderada_5 = new ol.format.GeoJSON();
var features_Zoitrestriccinmoderada_5 = format_Zoitrestriccinmoderada_5.readFeatures(json_Zoitrestriccinmoderada_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoitrestriccinmoderada_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoitrestriccinmoderada_5.addFeatures(features_Zoitrestriccinmoderada_5);
var lyr_Zoitrestriccinmoderada_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoitrestriccinmoderada_5, 
                style: style_Zoitrestriccinmoderada_5,
                popuplayertitle: 'Zoit restricción moderada',
                interactive: true,
                title: '<img src="styles/legend/Zoitrestriccinmoderada_5.png" /> Zoit restricción moderada'
            });
var format_Zoitrestriccinalta_6 = new ol.format.GeoJSON();
var features_Zoitrestriccinalta_6 = format_Zoitrestriccinalta_6.readFeatures(json_Zoitrestriccinalta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoitrestriccinalta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoitrestriccinalta_6.addFeatures(features_Zoitrestriccinalta_6);
var lyr_Zoitrestriccinalta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoitrestriccinalta_6, 
                style: style_Zoitrestriccinalta_6,
                popuplayertitle: 'Zoit restricción alta',
                interactive: true,
                title: '<img src="styles/legend/Zoitrestriccinalta_6.png" /> Zoit restricción alta'
            });
var format_Zoitrestriccintotal_7 = new ol.format.GeoJSON();
var features_Zoitrestriccintotal_7 = format_Zoitrestriccintotal_7.readFeatures(json_Zoitrestriccintotal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoitrestriccintotal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoitrestriccintotal_7.addFeatures(features_Zoitrestriccintotal_7);
var lyr_Zoitrestriccintotal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoitrestriccintotal_7, 
                style: style_Zoitrestriccintotal_7,
                popuplayertitle: 'Zoit restricción total',
                interactive: true,
                title: '<img src="styles/legend/Zoitrestriccintotal_7.png" /> Zoit restricción total'
            });
var format_ParqueNacionalrestriccinbaja_8 = new ol.format.GeoJSON();
var features_ParqueNacionalrestriccinbaja_8 = format_ParqueNacionalrestriccinbaja_8.readFeatures(json_ParqueNacionalrestriccinbaja_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueNacionalrestriccinbaja_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueNacionalrestriccinbaja_8.addFeatures(features_ParqueNacionalrestriccinbaja_8);
var lyr_ParqueNacionalrestriccinbaja_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueNacionalrestriccinbaja_8, 
                style: style_ParqueNacionalrestriccinbaja_8,
                popuplayertitle: 'Parque Nacional restricción baja',
                interactive: true,
                title: '<img src="styles/legend/ParqueNacionalrestriccinbaja_8.png" /> Parque Nacional restricción baja'
            });
var format_ParqueNacionalrestriccinmoderada_9 = new ol.format.GeoJSON();
var features_ParqueNacionalrestriccinmoderada_9 = format_ParqueNacionalrestriccinmoderada_9.readFeatures(json_ParqueNacionalrestriccinmoderada_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueNacionalrestriccinmoderada_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueNacionalrestriccinmoderada_9.addFeatures(features_ParqueNacionalrestriccinmoderada_9);
var lyr_ParqueNacionalrestriccinmoderada_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueNacionalrestriccinmoderada_9, 
                style: style_ParqueNacionalrestriccinmoderada_9,
                popuplayertitle: 'Parque Nacional restricción moderada',
                interactive: true,
                title: '<img src="styles/legend/ParqueNacionalrestriccinmoderada_9.png" /> Parque Nacional restricción moderada'
            });
var format_ParqueNacionalrestriccinalta_10 = new ol.format.GeoJSON();
var features_ParqueNacionalrestriccinalta_10 = format_ParqueNacionalrestriccinalta_10.readFeatures(json_ParqueNacionalrestriccinalta_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueNacionalrestriccinalta_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueNacionalrestriccinalta_10.addFeatures(features_ParqueNacionalrestriccinalta_10);
var lyr_ParqueNacionalrestriccinalta_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueNacionalrestriccinalta_10, 
                style: style_ParqueNacionalrestriccinalta_10,
                popuplayertitle: 'Parque Nacional restricción alta',
                interactive: true,
                title: '<img src="styles/legend/ParqueNacionalrestriccinalta_10.png" /> Parque Nacional restricción alta'
            });
var format_ParqueNacionalrestriccintotal_11 = new ol.format.GeoJSON();
var features_ParqueNacionalrestriccintotal_11 = format_ParqueNacionalrestriccintotal_11.readFeatures(json_ParqueNacionalrestriccintotal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueNacionalrestriccintotal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueNacionalrestriccintotal_11.addFeatures(features_ParqueNacionalrestriccintotal_11);
var lyr_ParqueNacionalrestriccintotal_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueNacionalrestriccintotal_11, 
                style: style_ParqueNacionalrestriccintotal_11,
                popuplayertitle: 'Parque Nacional restricción total',
                interactive: true,
                title: '<img src="styles/legend/ParqueNacionalrestriccintotal_11.png" /> Parque Nacional restricción total'
            });
var format_SitioPrioritariorestriccinbaja_12 = new ol.format.GeoJSON();
var features_SitioPrioritariorestriccinbaja_12 = format_SitioPrioritariorestriccinbaja_12.readFeatures(json_SitioPrioritariorestriccinbaja_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitioPrioritariorestriccinbaja_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitioPrioritariorestriccinbaja_12.addFeatures(features_SitioPrioritariorestriccinbaja_12);
var lyr_SitioPrioritariorestriccinbaja_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitioPrioritariorestriccinbaja_12, 
                style: style_SitioPrioritariorestriccinbaja_12,
                popuplayertitle: 'Sitio Prioritario restricción baja ',
                interactive: true,
                title: '<img src="styles/legend/SitioPrioritariorestriccinbaja_12.png" /> Sitio Prioritario restricción baja '
            });
var format_SitioPrioritariorestriccinmoderada_13 = new ol.format.GeoJSON();
var features_SitioPrioritariorestriccinmoderada_13 = format_SitioPrioritariorestriccinmoderada_13.readFeatures(json_SitioPrioritariorestriccinmoderada_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitioPrioritariorestriccinmoderada_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitioPrioritariorestriccinmoderada_13.addFeatures(features_SitioPrioritariorestriccinmoderada_13);
var lyr_SitioPrioritariorestriccinmoderada_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitioPrioritariorestriccinmoderada_13, 
                style: style_SitioPrioritariorestriccinmoderada_13,
                popuplayertitle: 'Sitio Prioritario restricción moderada',
                interactive: true,
                title: '<img src="styles/legend/SitioPrioritariorestriccinmoderada_13.png" /> Sitio Prioritario restricción moderada'
            });
var format_SitioPrioritariorestriccinalta_14 = new ol.format.GeoJSON();
var features_SitioPrioritariorestriccinalta_14 = format_SitioPrioritariorestriccinalta_14.readFeatures(json_SitioPrioritariorestriccinalta_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitioPrioritariorestriccinalta_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitioPrioritariorestriccinalta_14.addFeatures(features_SitioPrioritariorestriccinalta_14);
var lyr_SitioPrioritariorestriccinalta_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitioPrioritariorestriccinalta_14, 
                style: style_SitioPrioritariorestriccinalta_14,
                popuplayertitle: 'Sitio Prioritario restricción alta',
                interactive: true,
                title: '<img src="styles/legend/SitioPrioritariorestriccinalta_14.png" /> Sitio Prioritario restricción alta'
            });
var format_SitioPrioritariorestriccintotal_15 = new ol.format.GeoJSON();
var features_SitioPrioritariorestriccintotal_15 = format_SitioPrioritariorestriccintotal_15.readFeatures(json_SitioPrioritariorestriccintotal_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitioPrioritariorestriccintotal_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitioPrioritariorestriccintotal_15.addFeatures(features_SitioPrioritariorestriccintotal_15);
var lyr_SitioPrioritariorestriccintotal_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitioPrioritariorestriccintotal_15, 
                style: style_SitioPrioritariorestriccintotal_15,
                popuplayertitle: 'Sitio Prioritario restricción total',
                interactive: true,
                title: '<img src="styles/legend/SitioPrioritariorestriccintotal_15.png" /> Sitio Prioritario restricción total'
            });
var format_Humedalesfueradeareasderestriccion_16 = new ol.format.GeoJSON();
var features_Humedalesfueradeareasderestriccion_16 = format_Humedalesfueradeareasderestriccion_16.readFeatures(json_Humedalesfueradeareasderestriccion_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humedalesfueradeareasderestriccion_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Humedalesfueradeareasderestriccion_16.addFeatures(features_Humedalesfueradeareasderestriccion_16);
var lyr_Humedalesfueradeareasderestriccion_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Humedalesfueradeareasderestriccion_16, 
                style: style_Humedalesfueradeareasderestriccion_16,
                popuplayertitle: 'Humedales fuera de areas de restriccion',
                interactive: true,
                title: '<img src="styles/legend/Humedalesfueradeareasderestriccion_16.png" /> Humedales fuera de areas de restriccion'
            });
var format_Humedalesensitiosprioritariosconrestriccionmoderada_17 = new ol.format.GeoJSON();
var features_Humedalesensitiosprioritariosconrestriccionmoderada_17 = format_Humedalesensitiosprioritariosconrestriccionmoderada_17.readFeatures(json_Humedalesensitiosprioritariosconrestriccionmoderada_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humedalesensitiosprioritariosconrestriccionmoderada_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Humedalesensitiosprioritariosconrestriccionmoderada_17.addFeatures(features_Humedalesensitiosprioritariosconrestriccionmoderada_17);
var lyr_Humedalesensitiosprioritariosconrestriccionmoderada_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Humedalesensitiosprioritariosconrestriccionmoderada_17, 
                style: style_Humedalesensitiosprioritariosconrestriccionmoderada_17,
                popuplayertitle: 'Humedales en sitios prioritarios con restriccion moderada',
                interactive: true,
                title: '<img src="styles/legend/Humedalesensitiosprioritariosconrestriccionmoderada_17.png" /> Humedales en sitios prioritarios con restriccion moderada'
            });
var format_Humedalesensitiosprioritariosconrestriccinalta_18 = new ol.format.GeoJSON();
var features_Humedalesensitiosprioritariosconrestriccinalta_18 = format_Humedalesensitiosprioritariosconrestriccinalta_18.readFeatures(json_Humedalesensitiosprioritariosconrestriccinalta_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humedalesensitiosprioritariosconrestriccinalta_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Humedalesensitiosprioritariosconrestriccinalta_18.addFeatures(features_Humedalesensitiosprioritariosconrestriccinalta_18);
var lyr_Humedalesensitiosprioritariosconrestriccinalta_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Humedalesensitiosprioritariosconrestriccinalta_18, 
                style: style_Humedalesensitiosprioritariosconrestriccinalta_18,
                popuplayertitle: 'Humedales en sitios prioritarios con restricción alta',
                interactive: true,
                title: '<img src="styles/legend/Humedalesensitiosprioritariosconrestriccinalta_18.png" /> Humedales en sitios prioritarios con restricción alta'
            });
var format_Humedalesenparquenacionalconrestriccionalta_19 = new ol.format.GeoJSON();
var features_Humedalesenparquenacionalconrestriccionalta_19 = format_Humedalesenparquenacionalconrestriccionalta_19.readFeatures(json_Humedalesenparquenacionalconrestriccionalta_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humedalesenparquenacionalconrestriccionalta_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Humedalesenparquenacionalconrestriccionalta_19.addFeatures(features_Humedalesenparquenacionalconrestriccionalta_19);
var lyr_Humedalesenparquenacionalconrestriccionalta_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Humedalesenparquenacionalconrestriccionalta_19, 
                style: style_Humedalesenparquenacionalconrestriccionalta_19,
                popuplayertitle: 'Humedales en parque nacional con restriccion alta',
                interactive: true,
                title: '<img src="styles/legend/Humedalesenparquenacionalconrestriccionalta_19.png" /> Humedales en parque nacional con restriccion alta'
            });
var format_Humedalesenparquenacionalconrestricciontotal_20 = new ol.format.GeoJSON();
var features_Humedalesenparquenacionalconrestricciontotal_20 = format_Humedalesenparquenacionalconrestricciontotal_20.readFeatures(json_Humedalesenparquenacionalconrestricciontotal_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humedalesenparquenacionalconrestricciontotal_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Humedalesenparquenacionalconrestricciontotal_20.addFeatures(features_Humedalesenparquenacionalconrestricciontotal_20);
var lyr_Humedalesenparquenacionalconrestricciontotal_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Humedalesenparquenacionalconrestricciontotal_20, 
                style: style_Humedalesenparquenacionalconrestricciontotal_20,
                popuplayertitle: 'Humedales en parque nacional con restriccion total',
                interactive: true,
                title: '<img src="styles/legend/Humedalesenparquenacionalconrestricciontotal_20.png" /> Humedales en parque nacional con restriccion total'
            });
var format_Puntosdesondajev3_21 = new ol.format.GeoJSON();
var features_Puntosdesondajev3_21 = format_Puntosdesondajev3_21.readFeatures(json_Puntosdesondajev3_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdesondajev3_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdesondajev3_21.addFeatures(features_Puntosdesondajev3_21);
var lyr_Puntosdesondajev3_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdesondajev3_21, 
                style: style_Puntosdesondajev3_21,
                popuplayertitle: 'Puntos de sondaje v3',
                interactive: true,
                title: '<img src="styles/legend/Puntosdesondajev3_21.png" /> Puntos de sondaje v3'
            });
var format_Puntosdesondajev2_22 = new ol.format.GeoJSON();
var features_Puntosdesondajev2_22 = format_Puntosdesondajev2_22.readFeatures(json_Puntosdesondajev2_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdesondajev2_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdesondajev2_22.addFeatures(features_Puntosdesondajev2_22);
var lyr_Puntosdesondajev2_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdesondajev2_22, 
                style: style_Puntosdesondajev2_22,
                popuplayertitle: 'Puntos de sondaje v2',
                interactive: true,
                title: '<img src="styles/legend/Puntosdesondajev2_22.png" /> Puntos de sondaje v2'
            });
var format_Puntosdesondajev1_23 = new ol.format.GeoJSON();
var features_Puntosdesondajev1_23 = format_Puntosdesondajev1_23.readFeatures(json_Puntosdesondajev1_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdesondajev1_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdesondajev1_23.addFeatures(features_Puntosdesondajev1_23);
var lyr_Puntosdesondajev1_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdesondajev1_23, 
                style: style_Puntosdesondajev1_23,
                popuplayertitle: 'Puntos de sondaje v1',
                interactive: true,
                title: '<img src="styles/legend/Puntosdesondajev1_23.png" /> Puntos de sondaje v1'
            });
var format_readeEstudio_24 = new ol.format.GeoJSON();
var features_readeEstudio_24 = format_readeEstudio_24.readFeatures(json_readeEstudio_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeEstudio_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeEstudio_24.addFeatures(features_readeEstudio_24);
var lyr_readeEstudio_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeEstudio_24, 
                style: style_readeEstudio_24,
                popuplayertitle: 'Área de Estudio',
                interactive: true,
                title: '<img src="styles/legend/readeEstudio_24.png" /> Área de Estudio'
            });
var group_Sondajes = new ol.layer.Group({
                                layers: [lyr_Puntosdesondajev3_21,lyr_Puntosdesondajev2_22,lyr_Puntosdesondajev1_23,],
                                fold: 'close',
                                title: 'Sondajes'});
var group_Humedalesreasderestriccin = new ol.layer.Group({
                                layers: [lyr_Humedalesfueradeareasderestriccion_16,lyr_Humedalesensitiosprioritariosconrestriccionmoderada_17,lyr_Humedalesensitiosprioritariosconrestriccinalta_18,lyr_Humedalesenparquenacionalconrestriccionalta_19,lyr_Humedalesenparquenacionalconrestricciontotal_20,],
                                fold: 'close',
                                title: 'Humedales áreas de restricción'});
var group_reasprotegidas = new ol.layer.Group({
                                layers: [lyr_Zoitrestriccinbaja_4,lyr_Zoitrestriccinmoderada_5,lyr_Zoitrestriccinalta_6,lyr_Zoitrestriccintotal_7,lyr_ParqueNacionalrestriccinbaja_8,lyr_ParqueNacionalrestriccinmoderada_9,lyr_ParqueNacionalrestriccinalta_10,lyr_ParqueNacionalrestriccintotal_11,lyr_SitioPrioritariorestriccinbaja_12,lyr_SitioPrioritariorestriccinmoderada_13,lyr_SitioPrioritariorestriccinalta_14,lyr_SitioPrioritariorestriccintotal_15,],
                                fold: 'close',
                                title: 'Áreas protegidas'});
var group_Arqueologa = new ol.layer.Group({
                                layers: [lyr_Sitiosarqueologicosrestriccinalta_1,lyr_Sitiosarqueologicosrestriccintotal_2,lyr_Sitiosarqueologicos_3,],
                                fold: 'close',
                                title: 'Arqueología'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Sitiosarqueologicosrestriccinalta_1.setVisible(true);lyr_Sitiosarqueologicosrestriccintotal_2.setVisible(true);lyr_Sitiosarqueologicos_3.setVisible(true);lyr_Zoitrestriccinbaja_4.setVisible(true);lyr_Zoitrestriccinmoderada_5.setVisible(true);lyr_Zoitrestriccinalta_6.setVisible(true);lyr_Zoitrestriccintotal_7.setVisible(true);lyr_ParqueNacionalrestriccinbaja_8.setVisible(true);lyr_ParqueNacionalrestriccinmoderada_9.setVisible(true);lyr_ParqueNacionalrestriccinalta_10.setVisible(true);lyr_ParqueNacionalrestriccintotal_11.setVisible(true);lyr_SitioPrioritariorestriccinbaja_12.setVisible(true);lyr_SitioPrioritariorestriccinmoderada_13.setVisible(true);lyr_SitioPrioritariorestriccinalta_14.setVisible(true);lyr_SitioPrioritariorestriccintotal_15.setVisible(true);lyr_Humedalesfueradeareasderestriccion_16.setVisible(true);lyr_Humedalesensitiosprioritariosconrestriccionmoderada_17.setVisible(true);lyr_Humedalesensitiosprioritariosconrestriccinalta_18.setVisible(true);lyr_Humedalesenparquenacionalconrestriccionalta_19.setVisible(true);lyr_Humedalesenparquenacionalconrestricciontotal_20.setVisible(true);lyr_Puntosdesondajev3_21.setVisible(true);lyr_Puntosdesondajev2_22.setVisible(true);lyr_Puntosdesondajev1_23.setVisible(true);lyr_readeEstudio_24.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Arqueologa,group_reasprotegidas,group_Humedalesreasderestriccin,group_Sondajes,lyr_readeEstudio_24];
lyr_Sitiosarqueologicosrestriccinalta_1.set('fieldAliases', {'Componente': 'Componente', 'Tipo_restr': 'Tipo_restr', 'Valor_Rest': 'Valor_Rest', 'Área_Ha': 'Área_Ha', });
lyr_Sitiosarqueologicosrestriccintotal_2.set('fieldAliases', {'Tipo_Restr': 'Tipo_Restr', 'Valor_Rest': 'Valor_Rest', 'Área_Ha': 'Área_Ha', 'Componente': 'Componente', });
lyr_Sitiosarqueologicos_3.set('fieldAliases', {'id': 'id', });
lyr_Zoitrestriccinbaja_4.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_Zoitrestriccinmoderada_5.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_Zoitrestriccinalta_6.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_Zoitrestriccintotal_7.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_ParqueNacionalrestriccinbaja_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ParqueNacionalrestriccinmoderada_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ParqueNacionalrestriccinalta_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ParqueNacionalrestriccintotal_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_SitioPrioritariorestriccinbaja_12.set('fieldAliases', {'Nombre': 'Nombre', 'Nombre 2': 'Nombre 2', });
lyr_SitioPrioritariorestriccinmoderada_13.set('fieldAliases', {'Nombre': 'Nombre', 'Nombre 2': 'Nombre 2', });
lyr_SitioPrioritariorestriccinalta_14.set('fieldAliases', {'Nombre': 'Nombre', 'Nombre 2': 'Nombre 2', });
lyr_SitioPrioritariorestriccintotal_15.set('fieldAliases', {'Nombre': 'Nombre', 'Nombre 2': 'Nombre 2', });
lyr_Humedalesfueradeareasderestriccion_16.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Área': 'Área', 'COD_HUMEDA': 'COD_HUMEDA', 'NOM_HUMDET': 'NOM_HUMDET', 'COD_HUMMAS': 'COD_HUMMAS', 'NOM_HUMMAS': 'NOM_HUMMAS', 'ORDEN_1': 'ORDEN_1', 'ORDEN_2': 'ORDEN_2', 'ORDEN_3': 'ORDEN_3', 'ORDEN_4': 'ORDEN_4', 'ORDEN_5': 'ORDEN_5', 'HECTAREAS': 'HECTAREAS', 'HLIMITEURB': 'HLIMITEURB', 'URL_SIMBIO': 'URL_SIMBIO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Humedalesensitiosprioritariosconrestriccionmoderada_17.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Área': 'Área', 'COD_HUMEDA': 'COD_HUMEDA', 'NOM_HUMDET': 'NOM_HUMDET', 'COD_HUMMAS': 'COD_HUMMAS', 'NOM_HUMMAS': 'NOM_HUMMAS', 'ORDEN_1': 'ORDEN_1', 'ORDEN_2': 'ORDEN_2', 'ORDEN_3': 'ORDEN_3', 'ORDEN_4': 'ORDEN_4', 'ORDEN_5': 'ORDEN_5', 'HECTAREAS': 'HECTAREAS', 'HLIMITEURB': 'HLIMITEURB', 'URL_SIMBIO': 'URL_SIMBIO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Humedalesensitiosprioritariosconrestriccinalta_18.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Área': 'Área', 'COD_HUMEDA': 'COD_HUMEDA', 'NOM_HUMDET': 'NOM_HUMDET', });
lyr_Humedalesenparquenacionalconrestriccionalta_19.set('fieldAliases', {'COD_HUMEDA': 'COD_HUMEDA', 'NOM_HUMDET': 'NOM_HUMDET', 'COD_HUMMAS': 'COD_HUMMAS', 'NOM_HUMMAS': 'NOM_HUMMAS', 'ORDEN_1': 'ORDEN_1', 'ORDEN_2': 'ORDEN_2', 'ORDEN_3': 'ORDEN_3', 'ORDEN_4': 'ORDEN_4', 'ORDEN_5': 'ORDEN_5', 'HECTAREAS': 'HECTAREAS', 'HLIMITEURB': 'HLIMITEURB', 'URL_SIMBIO': 'URL_SIMBIO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'COD_HUME_1': 'COD_HUME_1', 'NOM_HUMD_1': 'NOM_HUMD_1', 'COD_HUMM_1': 'COD_HUMM_1', 'NOM_HUMM_1': 'NOM_HUMM_1', 'ORDEN_1_2': 'ORDEN_1_2', 'ORDEN_2_2': 'ORDEN_2_2', 'ORDEN_3_2': 'ORDEN_3_2', 'ORDEN_4_2': 'ORDEN_4_2', 'ORDEN_5_2': 'ORDEN_5_2', 'HECTAREAS_': 'HECTAREAS_', 'HLIMITEU_1': 'HLIMITEU_1', 'URL_SIMB_1': 'URL_SIMB_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'fid': 'fid', 'DN': 'DN', 'Área': 'Área', });
lyr_Humedalesenparquenacionalconrestricciontotal_20.set('fieldAliases', {'Tipo_Restr': 'Tipo_Restr', 'Valor_Rest': 'Valor_Rest', 'Área_Ha': 'Área_Ha', });
lyr_Puntosdesondajev3_21.set('fieldAliases', {'id': 'id', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', });
lyr_Puntosdesondajev2_22.set('fieldAliases', {'Coord X': 'Coord X', 'Coord Y': 'Coord Y', });
lyr_Puntosdesondajev1_23.set('fieldAliases', {'Coord X': 'Coord X', 'Coord Y': 'Coord Y', });
lyr_readeEstudio_24.set('fieldAliases', {'Nombre': 'Nombre', 'Área_Ha': 'Área_Ha', });
lyr_Sitiosarqueologicosrestriccinalta_1.set('fieldImages', {'Componente': '', 'Tipo_restr': '', 'Valor_Rest': '', 'Área_Ha': '', });
lyr_Sitiosarqueologicosrestriccintotal_2.set('fieldImages', {'Tipo_Restr': '', 'Valor_Rest': '', 'Área_Ha': '', 'Componente': '', });
lyr_Sitiosarqueologicos_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Zoitrestriccinbaja_4.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Zoitrestriccinmoderada_5.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Zoitrestriccinalta_6.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Zoitrestriccintotal_7.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_ParqueNacionalrestriccinbaja_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ParqueNacionalrestriccinmoderada_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ParqueNacionalrestriccinalta_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ParqueNacionalrestriccintotal_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_SitioPrioritariorestriccinbaja_12.set('fieldImages', {'Nombre': 'TextEdit', 'Nombre 2': 'TextEdit', });
lyr_SitioPrioritariorestriccinmoderada_13.set('fieldImages', {'Nombre': 'TextEdit', 'Nombre 2': 'TextEdit', });
lyr_SitioPrioritariorestriccinalta_14.set('fieldImages', {'Nombre': 'TextEdit', 'Nombre 2': 'TextEdit', });
lyr_SitioPrioritariorestriccintotal_15.set('fieldImages', {'Nombre': 'TextEdit', 'Nombre 2': 'TextEdit', });
lyr_Humedalesfueradeareasderestriccion_16.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Área': 'TextEdit', 'COD_HUMEDA': 'TextEdit', 'NOM_HUMDET': 'TextEdit', 'COD_HUMMAS': 'TextEdit', 'NOM_HUMMAS': 'TextEdit', 'ORDEN_1': 'TextEdit', 'ORDEN_2': 'TextEdit', 'ORDEN_3': 'TextEdit', 'ORDEN_4': 'TextEdit', 'ORDEN_5': 'TextEdit', 'HECTAREAS': 'TextEdit', 'HLIMITEURB': 'TextEdit', 'URL_SIMBIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Humedalesensitiosprioritariosconrestriccionmoderada_17.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Área': 'TextEdit', 'COD_HUMEDA': 'TextEdit', 'NOM_HUMDET': 'TextEdit', 'COD_HUMMAS': 'TextEdit', 'NOM_HUMMAS': 'TextEdit', 'ORDEN_1': 'TextEdit', 'ORDEN_2': 'TextEdit', 'ORDEN_3': 'TextEdit', 'ORDEN_4': 'TextEdit', 'ORDEN_5': 'TextEdit', 'HECTAREAS': 'TextEdit', 'HLIMITEURB': 'TextEdit', 'URL_SIMBIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Humedalesensitiosprioritariosconrestriccinalta_18.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Área': 'TextEdit', 'COD_HUMEDA': 'TextEdit', 'NOM_HUMDET': 'TextEdit', });
lyr_Humedalesenparquenacionalconrestriccionalta_19.set('fieldImages', {'COD_HUMEDA': 'TextEdit', 'NOM_HUMDET': 'TextEdit', 'COD_HUMMAS': 'TextEdit', 'NOM_HUMMAS': 'TextEdit', 'ORDEN_1': 'TextEdit', 'ORDEN_2': 'TextEdit', 'ORDEN_3': 'TextEdit', 'ORDEN_4': 'TextEdit', 'ORDEN_5': 'TextEdit', 'HECTAREAS': 'TextEdit', 'HLIMITEURB': 'TextEdit', 'URL_SIMBIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'COD_HUME_1': 'TextEdit', 'NOM_HUMD_1': 'TextEdit', 'COD_HUMM_1': 'TextEdit', 'NOM_HUMM_1': 'TextEdit', 'ORDEN_1_2': 'TextEdit', 'ORDEN_2_2': 'TextEdit', 'ORDEN_3_2': 'TextEdit', 'ORDEN_4_2': 'TextEdit', 'ORDEN_5_2': 'TextEdit', 'HECTAREAS_': 'TextEdit', 'HLIMITEU_1': 'TextEdit', 'URL_SIMB_1': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', 'Área': 'TextEdit', });
lyr_Humedalesenparquenacionalconrestricciontotal_20.set('fieldImages', {'Tipo_Restr': '', 'Valor_Rest': '', 'Área_Ha': '', });
lyr_Puntosdesondajev3_21.set('fieldImages', {'id': 'TextEdit', 'Coord X': '', 'Coord Y': '', });
lyr_Puntosdesondajev2_22.set('fieldImages', {'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', });
lyr_Puntosdesondajev1_23.set('fieldImages', {'Coord X': '', 'Coord Y': '', });
lyr_readeEstudio_24.set('fieldImages', {'Nombre': 'TextEdit', 'Área_Ha': 'TextEdit', });
lyr_Sitiosarqueologicosrestriccinalta_1.set('fieldLabels', {'Componente': 'no label', 'Tipo_restr': 'no label', 'Valor_Rest': 'no label', 'Área_Ha': 'no label', });
lyr_Sitiosarqueologicosrestriccintotal_2.set('fieldLabels', {'Tipo_Restr': 'no label', 'Valor_Rest': 'no label', 'Área_Ha': 'no label', 'Componente': 'no label', });
lyr_Sitiosarqueologicos_3.set('fieldLabels', {'id': 'no label', });
lyr_Zoitrestriccinbaja_4.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', });
lyr_Zoitrestriccinmoderada_5.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', });
lyr_Zoitrestriccinalta_6.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', });
lyr_Zoitrestriccintotal_7.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', });
lyr_ParqueNacionalrestriccinbaja_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_ParqueNacionalrestriccinmoderada_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_ParqueNacionalrestriccinalta_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_ParqueNacionalrestriccintotal_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_SitioPrioritariorestriccinbaja_12.set('fieldLabels', {'Nombre': 'no label', 'Nombre 2': 'no label', });
lyr_SitioPrioritariorestriccinmoderada_13.set('fieldLabels', {'Nombre': 'no label', 'Nombre 2': 'no label', });
lyr_SitioPrioritariorestriccinalta_14.set('fieldLabels', {'Nombre': 'no label', 'Nombre 2': 'no label', });
lyr_SitioPrioritariorestriccintotal_15.set('fieldLabels', {'Nombre': 'no label', 'Nombre 2': 'no label', });
lyr_Humedalesfueradeareasderestriccion_16.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Área': 'no label', 'COD_HUMEDA': 'no label', 'NOM_HUMDET': 'no label', 'COD_HUMMAS': 'no label', 'NOM_HUMMAS': 'no label', 'ORDEN_1': 'no label', 'ORDEN_2': 'no label', 'ORDEN_3': 'no label', 'ORDEN_4': 'no label', 'ORDEN_5': 'no label', 'HECTAREAS': 'no label', 'HLIMITEURB': 'no label', 'URL_SIMBIO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Humedalesensitiosprioritariosconrestriccionmoderada_17.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Área': 'no label', 'COD_HUMEDA': 'no label', 'NOM_HUMDET': 'no label', 'COD_HUMMAS': 'no label', 'NOM_HUMMAS': 'no label', 'ORDEN_1': 'no label', 'ORDEN_2': 'no label', 'ORDEN_3': 'no label', 'ORDEN_4': 'no label', 'ORDEN_5': 'no label', 'HECTAREAS': 'no label', 'HLIMITEURB': 'no label', 'URL_SIMBIO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Humedalesensitiosprioritariosconrestriccinalta_18.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Área': 'no label', 'COD_HUMEDA': 'no label', 'NOM_HUMDET': 'no label', });
lyr_Humedalesenparquenacionalconrestriccionalta_19.set('fieldLabels', {'COD_HUMEDA': 'no label', 'NOM_HUMDET': 'no label', 'COD_HUMMAS': 'no label', 'NOM_HUMMAS': 'no label', 'ORDEN_1': 'no label', 'ORDEN_2': 'no label', 'ORDEN_3': 'no label', 'ORDEN_4': 'no label', 'ORDEN_5': 'no label', 'HECTAREAS': 'no label', 'HLIMITEURB': 'no label', 'URL_SIMBIO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'COD_HUME_1': 'no label', 'NOM_HUMD_1': 'no label', 'COD_HUMM_1': 'no label', 'NOM_HUMM_1': 'no label', 'ORDEN_1_2': 'no label', 'ORDEN_2_2': 'no label', 'ORDEN_3_2': 'no label', 'ORDEN_4_2': 'no label', 'ORDEN_5_2': 'no label', 'HECTAREAS_': 'no label', 'HLIMITEU_1': 'no label', 'URL_SIMB_1': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'fid': 'no label', 'DN': 'no label', 'Área': 'no label', });
lyr_Humedalesenparquenacionalconrestricciontotal_20.set('fieldLabels', {'Tipo_Restr': 'no label', 'Valor_Rest': 'no label', 'Área_Ha': 'no label', });
lyr_Puntosdesondajev3_21.set('fieldLabels', {'id': 'no label', 'Coord X': 'no label', 'Coord Y': 'no label', });
lyr_Puntosdesondajev2_22.set('fieldLabels', {'Coord X': 'no label', 'Coord Y': 'no label', });
lyr_Puntosdesondajev1_23.set('fieldLabels', {'Coord X': 'no label', 'Coord Y': 'no label', });
lyr_readeEstudio_24.set('fieldLabels', {'Nombre': 'no label', 'Área_Ha': 'no label', });
lyr_readeEstudio_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});