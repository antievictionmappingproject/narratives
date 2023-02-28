vizjson({
  "id": "fce8b53a-14e4-11e4-87ad-0e230854a1cb",
  "version": "0.1.0",
  "title": "Narratives of Displacement, by the Anti-Eviction Mapping Project ",
  "likes": 0,
  "description": "<p>This is the oral history map by the <strong><a href=\"https://www.antievictionmappingproject.net\" target=\"_blank\">Anti-Eviction Mapping Project</a>.</strong></p>\n",
  "scrollwheel": true,
  "legends": false,
  "url": null,
  "map_provider": "leaflet",
  "bounds": [
    [37.74560729922351, -122.46665954589844],
    [37.82103964868822, -122.26873397827148]
  ],
  "center": "[37.78333309725631, -122.36769676208496]",
  "zoom": 12,
  "updated_at": "2018-06-14T09:21:28+00:00",
  "layers": [
    {
      "options": {
        "type": "Tiled",
        "category": "Stamen",
        "urlTemplate": "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png",
        "subdomains": "abcd",
        "minZoom": "0",
        "maxZoom": "18",
        "name": "Toner Background",
        "className": "toner_background_stamen",
        "attribution": "Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>.",
        "selected": true,
        "val": "toner_background_stamen",
        "label": "Toner Background",
        "default": false,
        "highlighted": true
      },
      "infowindow": null,
      "tooltip": null,
      "id": "f299d500-5ed2-4633-bd73-8a3884db5bd9",
      "order": 0,
      "type": "tiled"
    },
    {
      "type": "namedmap",
      "order": 1,
      "options": {
        "type": "namedmap",
        "user_name": "ampitup",
        "maps_api_template": "https://{user}.carto.com:443",
        "sql_api_template": "https://{user}.carto.com:443",
        "tiler_protocol": "http",
        "tiler_domain": "carto.com",
        "tiler_port": "80",
        "filter": "mapnik",
        "named_map": {
          "name": "tpl_fce8b53a_14e4_11e4_87ad_0e230854a1cb",
          "stat_tag": "fce8b53a-14e4-11e4-87ad-0e230854a1cb",
          "params": { "layer0": 1, "layer1": 1, "layer2": 1, "layer3": 1 },
          "layers": [
            {
              "id": "bcc98e20-aab4-4f11-826b-11c075701186",
              "layer_name": "ca_uds_2014_2016",
              "interactivity": "",
              "visible": true
            },
            {
              "id": "422de755-9f86-4095-8f9a-3cbc669ae5a5",
              "layer_name": "california_census_tract",
              "interactivity": "",
              "visible": true
            },
            {
              "id": "0dc853f8-e645-4ccc-8280-1fc6ae9c3c09",
              "layer_name": "All Evictions",
              "interactivity": "",
              "visible": true
            },
            {
              "id": "d84c589b-12fc-4769-9113-821f05b04f81",
              "layer_name": "Narratives",
              "interactivity": "cartodb_id,name,address,description,narrative,credit",
              "visible": true,
              "infowindow": {
                "fields": [
                  { "name": "name", "title": true, "position": 0 },
                  { "name": "address", "title": true, "position": 1 },
                  { "name": "narrative", "title": true, "position": 2 },
                  { "name": "description", "title": true, "position": 3 },
                  { "name": "credit", "title": true, "position": 4 }
                ],
                "template_name": "",
                "template": "      <div class=\"aemp-infodrawer cartodb-popup v2 custom_infowindow\">\n        <a href=\"#close\" class=\"aemp-infodrawer cartodb-popup-close-button close\">x</a>\n        <div class=\"aemp-infodrawer cartodb-popup-content-wrapper\">\n          <div class=\"aemp-infodrawer-content cartodb-popup-content row\">\n            <div class=\"label\"></div>\n            <div class=\"info\">\n              <h4>Name</h4>\n              <p>{{name}}</p>\n              <h4>Description</h4>\n              <p>{{description}}</p>\n              <h4>Narrative</h4>\n              <p>{{{narrative}}}</p>\n              <h4>Credits</h4>\n              <p>{{credit}}</p>\n            </div>\n          </div>\n        </div>\n      </div>",
                "alternative_names": {},
                "width": 400,
                "maxHeight": 180
              },
              "tooltip": {
                "fields": [
                  { "name": "name", "title": true, "position": 0 },
                  { "name": "address", "title": true, "position": 1 },
                  { "name": "description", "title": true, "position": 2 },
                  { "name": "credit", "title": true, "position": 3 }
                ],
                "template_name": "",
                "template": "<div class=\"aemp-tooltip cartodb-tooltip-content-wrapper dark\">\n        <div class=\"aemp-tooltip cartodb-tooltip-content\">\n          <h4>name</h4>\n          <p>{{name}}</p>\n          <h4>address</h4>\n          <p>{{address}}</p>\n          <h4>description</h4>\n          <p>{{description}}</p>\n        </div>\n      </div>\n",
                "alternative_names": { "narrative": "" },
                "maxHeight": 180
              }
            }
          ]
        },
        "attribution": ""
      }
    }
  ],
  "overlays": [
    {
      "type": "text",
      "order": 1,
      "options": {
        "x": 58,
        "y": 68.25,
        "device": "desktop",
        "display": true,
        "style": {
          "z-index": 4,
          "color": "#ffffff",
          "text-align": "left",
          "font-size": 14,
          "font-family-name": "Helvetica",
          "box-padding": 10,
          "box-color": "#41006D",
          "box-opacity": 0.6,
          "box-width": 460
        },
        "extra": {
          "pLeft": "50",
          "pTop": "50",
          "landscapeDirection": "left",
          "portraitDirection": "top",
          "text": "This map is a digital assemblage of geo-located interviews documenting personal narratives of home, resilience, and displacement from tenants, organizers and community members layered with relevant eviction data.<br><br> Please do not use any of these stories for your own work without first checking with us. Interviewees have only authorized the release of their stories to the AEMP.",
          "rendered_text": "This map is a digital assemblage of geo-located interviews documenting personal narratives of home, resilience, and displacement from tenants, organizers and community members layered with relevant eviction data.<br><br> Please do not use any of these stories for your own work without first checking with us. Interviewees have only authorized the release of their stories to the AEMP.",
          "default_position": false,
          "landscape_dominant_side": "left",
          "portrait_dominant_side": "top",
          "top_percentage": 10.03368623676612,
          "left_percentage": 23.62848893166506,
          "right_position": 606,
          "bottom_position": 410.75,
          "right": 981,
          "bottom": 482.75,
          "width": 375,
          "height": 72
        }
      },
      "template": null
    },
    {
      "type": "text",
      "order": 2,
      "options": {
        "x": 411.9196472167969,
        "y": 0,
        "device": "desktop",
        "display": true,
        "style": {
          "z-index": 4,
          "color": "#ffffff",
          "text-align": "left",
          "font-size": 20,
          "font-family-name": "Helvetica",
          "box-padding": 10,
          "box-color": "#b50f53",
          "box-opacity": 0.7,
          "box-width": 1000
        },
        "extra": {
          "landscapeDirection": "left",
          "pTop": 0,
          "pLeft": 0,
          "portraitDirection": "top",
          "text": "<strong>Narratives of Displacement and Resistance, *Anti-Eviction Mapping Project*<br> </strong>",
          "rendered_text": "<strong>Narratives of Displacement and Resistance, <em>Anti-Eviction Mapping Project</em><br> </strong>",
          "default_position": false,
          "landscape_dominant_side": "right",
          "portrait_dominant_side": "top",
          "top_percentage": 1.4483212639894667,
          "left_percentage": 51.14678388524009,
          "right_position": 377.0803527832031,
          "bottom_position": 789,
          "right": 1107.0803527832031,
          "bottom": 833,
          "width": 730,
          "height": 44
        }
      },
      "template": null
    },
    {
      "type": "annotation",
      "order": 3,
      "options": {
        "device": "desktop",
        "display": true,
        "style": {
          "z-index": 4,
          "color": "#ffffff",
          "text-align": "left",
          "font-size": "13",
          "font-family-name": "Helvetica",
          "box-color": "#11002F",
          "box-opacity": 0.7,
          "box-padding": 5,
          "line-color": "#000000",
          "line-width": 50,
          "min-zoom": 0,
          "max-zoom": 21
        },
        "extra": {
          "latlng": [37.742213748480864, -122.41447448730469],
          "text": "Click on eviction sites to hear stories of home and displacement<br>",
          "rendered_text": "Click on eviction sites to hear stories of home and displacement<br>"
        }
      },
      "template": null
    },
    {
      "type": "text",
      "order": 4,
      "options": {
        "x": 755.0625,
        "y": 68.25,
        "device": "desktop",
        "display": true,
        "style": {
          "z-index": 4,
          "color": "#ffffff",
          "text-align": "left",
          "font-size": 14,
          "font-family-name": "Helvetica",
          "box-padding": 10,
          "box-color": "#11002F",
          "box-opacity": 0.7,
          "box-width": 350
        },
        "extra": {
          "pLeft": "50",
          "pTop": "50",
          "landscapeDirection": "left",
          "portraitDirection": "top",
          "text": "Red eviction markers represent evictions executed by NYC Marshals since 2017, and blue circles contain oral histories. <br>",
          "rendered_text": "Red eviction markers represent evictions executed by NYC Marshals since 2017, and blue circles contain oral histories. <br>",
          "default_position": false,
          "landscape_dominant_side": "right",
          "portrait_dominant_side": "top",
          "top_percentage": 13.217122683142101,
          "left_percentage": 82.08848190644306,
          "right_position": 27.9375,
          "bottom_position": 334.75,
          "right": 377.9375,
          "bottom": 497.75,
          "width": 350,
          "height": 163
        }
      },
      "template": null
    },
    {
      "type": "zoom",
      "order": 5,
      "options": { "display": true, "x": 20, "y": 20 },
      "template": "<a href=\"#zoom_in\" class=\"zoom_in\">+</a> <a href=\"#zoom_out\" class=\"zoom_out\">-</a>"
    },
    {
      "type": "fullscreen",
      "order": 6,
      "options": { "x": 20, "y": 201, "display": true },
      "template": null
    },
    {
      "type": "loader",
      "order": 7,
      "options": { "display": true, "x": 20, "y": 150 },
      "template": "<div class=\"loader\" original-title=\"\"></div>"
    }
  ],
  "prev": null,
  "next": null,
  "transition_options": {}
})
