var config = {
    style: 'mapbox://styles/daltonwb/cktks7kh316gh17mi4a280sp3',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg_logo.png" width="100" height="100" /></a><br /><br /><h1>Global Climate Overview [something more hard-hitting!]</h1>',
    subtitle: '',
    byline: '',
    footer: '<a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a>, <a href="https://www.mapbox.com" target="_blank">Mapbox</a><br /><br /><img src="images/icg_logo.png" width="150" height="150" />',
    chapters: [
        {
            id: '00',
            alignment: 'left',
            hidden: false,
            title: 'Water, water everywhere (or nowhere)',
            image: '',
            description: 'Why does this matter? We need a catchier hook, both visual and text, here to start. (This is the Lake Kariba Dam in Zimbabwe [but this can be anywhere in the world representative of water.])',
            location: {
                center: [28.7594805, -16.5221016],
                zoom: 15,
                pitch: 60,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: 'func',
            onChapterEnter: [
              {
                layer: 'mapbox-satellite',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'mapbox-satellite',
                duration: 3000,
                opacity: 0
              },
              {
                layer: 'sup_abs',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '01A',
            alignment: 'left',
            hidden: false,
            title: 'Why look at water supply?',
            image: '',
            description: 'The majority of climate security risks revolve around water, making water supply a crucial variable to consider when assessing climate change’s impact on livelihoods.',
            location: {
              center: [19.133761, 26.268723],
              zoom: 1.85,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'sup_abs',
                duration: 7000,
                opacity: .9
              },
              {
                layer: 'sup_change_red',
                duration: 2000,
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'sup_abs',
                duration: 1000,
                opacity: 0
              }
            ]
        },
        {
            id: '01B',
            alignment: 'left',
            hidden: false,
            title: 'It is not just about droughts.',
            image: '',
            description: 'Yet, the relationship between climate change, water supply, and instability is by no means linear. Parts of the world will experience a decrease in water supply, frequently associated with droughts and extreme heat.<h4>Absolute Water Supply by 2040</h4><img src="images/water_dec.png" />',
            location: {
              center: [19.133761, 26.268723],
              zoom: 1.85,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'sup_change_red',
                duration: 1000,
                opacity: .9
              }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '01C',
            alignment: 'left',
            hidden: false,
            title: 'It can also be about vast oversupply.',
            image: '',
            description: 'On the contrary, many regions currently experiencing climate-related insecurity are expected to witness increased water supply, like the Horn of Africa.<h4>Absolute Water Supply by 2040</h4><img src="images/supply_full.png" />',
            location: {
              center: [19.133761, 26.268723],
              zoom: 1.85,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'sup_change',
                duration: 3000,
                opacity: .9
              },
              {
                layer: 'sup_change_red',
                duration: 1000,
                opacity: .9
              }
            ],
            onChapterExit: [
              {
                layer: 'sup_change',
                duration: 3000,
                opacity: 0
              },
              {
                layer: 'sup_change_red',
                duration: 2000,
                opacity: 0
              }
            ]
        },
        {
            id: '02',
            alignment: 'left',
            hidden: false,
            title: 'Seasonal Variability by 2040',
            image: '',
            description: 'Increases in water supply oftentimes manifest in extreme forms, such as prolonged dry seasons, followed by erratic and extreme distributions of precipitation. Climate volatility can induce livelihood insecurity, which frequently is key element of climate-related insecurity issues.<h4>Absolute Water Supply by 2040</h4><img src="images/variability.png" />',
            location: {
              center: [19.133761, 26.268723],
              zoom: 1.85,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'var_abs',
                duration: 3000,
                opacity: .9
              }
            ],
            onChapterExit: [
              {
                layer: 'var_abs',
                duration: 3000,
                opacity: 0
              }
            ]
        },
        {
            id: '03',
            alignment: 'left',
            hidden: false,
            title: 'Higher Variability Rates Likely to Continue',
            image: '',
            description: 'Crucially, many of the regions with the highest exposure to seasonal variability are projected to become even more fragile in the coming decades.<h4>Change in Seasonal Variability of Water Supply (Baseline – 2040)</h4><img src="images/last.png" />',
            location: {
              center: [19.133761, 26.268723],
              zoom: 1.85,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'var_change',
                  duration: 3000,
                  opacity: .9
              }
            ],
            onChapterExit: [
              {
              layer: 'var_change',
              duration: 2000,
              opacity: 0
              }
            ]
        },
        {
            id: '04',
            alignment: 'left',
            hidden: false,
            title: 'Three Regions to Watch for the Future of Climate Change',
            image: '',
            description: 'Climatic distress presents security risks in the Horn of Africa, Sahel, South East Asia, Central America, Middle East and North Africa. We focus on the relationship between climatic shocks, resource competition, displacement and transboundary water disputes.',
            location: {
              center: [19.133761, 26.268723],
              zoom: 1.85,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'countries_latam',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'countries_mena',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'countries_mena_dis',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'countries_mekong',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'countries_latam',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'countries_mena',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'countries_mena_dis',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'countries_mekong',
                  duration: 3000,
                  opacity: 0
              }
            ]
        },
        {
            id: '05',
            alignment: 'left',
            hidden: false,
            title: 'Land-Related Violence in Africa',
            image: '',
            description: 'In Africa, it is no coincidence that resource related violence is concentrated in the climate fragile Sahel and Horn regions. Climate mapping alone, however, is insufficient to predict conflict risks. To exactly pin down the link between climatic stress factors and conflict, Crisis Group pairs cutting-edge statistical analysis with field research to measure how climatic shocks interact with political and social dynamics at a granular level.',
            location: {
              center: [-1.705, 17.271],
              zoom: 2.8,
              pitch: 35.82,
              bearing: 19.10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'acled-2021',
                  duration: 3000,
                  opacity: 0.4
              },
              {   layer: 'mapbox-satellite',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'country-labels',
                  duration: 3000,
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'acled-2021',
                  duration: 3000,
                  opacity: 0
              },
            ]
        },
        {
            id: '06',
            alignment: 'left',
            hidden: false,
            title: 'Nigeria – Livestock Herding and Farming',
            image: '',
            description: '<strong>Hazard</strong>: Increased temperatures and seasonal variability<br /><br /><strong>Impact</strong>: Rise in resource-related farmer-herder violence<br /><br /><strong>Our Insight</strong>: Assessing the climatic and political risks associated with the implementation of Nigeria’s National Livestock Transformation Plan.',
            location: {
              center: [7.801678, 9.181589],
              zoom: 5.5,
              pitch: 40.40,
              bearing: -12.89
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nigeria',
                    duration: 3000,
                    opacity: 1
                },
                {
                    layer: 'country-labels',
                    duration: 3000,
                    opacity: 1
                },
                {   layer: 'mapbox-satellite',
                    duration: 3000,
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'nigeria',
                    duration: 3000,
                    opacity: 0
                }
            ]
        },
        {
            id: '07',
            alignment: 'left',
            hidden: false,
            title: 'Grand Ethiopian Renaissance Dam',
            image: '',
            description: '<strong>Hazard</strong>: Potential reduction in downstream water supplies<br /><br /><strong>Impact</strong>: Disagreement over a cohesive drought mitigation framework increases tensions between Nile Riparian States<br /><br /><strong>Our Insight</strong>: Drought during future filling stages and long-term water sharing on the Nile',
            location: {
              center: [35.0912717, 11.2153265],
              zoom: 15.5,
              pitch: 60,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: '08',
            alignment: 'left',
            hidden: false,
            title: 'Kenya – Severe Shortages',
            image: '',
            description: '<ul><li><strong>Hazard</strong>: Droughts</li><li><strong>Impact</strong>:Increased resource competition aggravates ethnic tensions and contributes to violence around elections</li><li><strong>Our Insight</strong>: Assessing how politics and climatic hazards can potentially reignite historical grievances and intergroup conflict leading up to the 2022 elections</li></ul>',
            location: {
              center: [37.886659, -0.160837],
              zoom: 5.8,
              pitch: 46.50,
              bearing: -20.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kenya',
                    duration: 3000,
                    opacity: 1
                },
                {
                    layer: 'south-sudan2',
                    duration: 3000,
                    opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'kenya',
                  duration: 3000,
                  opacity: 0
              }
            ]
        },
        {
            id: '09',
            alignment: 'left',
            hidden: false,
            title: 'South Sudan – Flooding',
            image: '',
            description: '<ul><li><strong>Hazard</strong>: Unprecedented flooding of the White Nile</li><li><strong>Impact</strong>:Displacement of pastoralists into Southern Equatoria, exacerbating grievances and leading to farmer-herder violence.</li><li><strong>Our Insight</strong>: Quantifying how internal climate-related displacement drives instability and violence.</li></ul>',
            location: {
              center: [30.172241, 6.428853],
              zoom: 5.80,
              pitch: 38,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'south-sudan2',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'white_nile',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'main_nile',
                  duration: 3000,
                  opacity: 0
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: 'Grand Conclusion!',
            image: '',
            description: 'How do we communicate climate change effectively?',
            location: {
              center: [24.414762, 7.835762],
              zoom: 4.2,
              pitch: 48,
              bearing: 13.15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'kenya',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'nigeria',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'white_nile',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'main_nile',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [

            ]
        }
    ]
};
