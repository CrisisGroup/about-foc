var config = {
    style: 'mapbox://styles/daltonwb/cktxr68q80d2517v4evyob5nl',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="60" height="60" /></a><br /><h1>Global Climate Overview</h1>',
    subtitle: '',
    byline: '',
    footer: '<a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a>, <a href="https://www.mapbox.com" target="_blank">Mapbox</a><br /><br /><img src="images/icg_logo.png" width="150" height="150" />',
    chapters: [
        {
            id: '00',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
              center: [5.133761, 26.268723],
              zoom: 1.6,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'cw-countries-ranking-all',
                duration: 1000,
                opacity: .7
              }
            ],
            onChapterExit: [
              {
                layer: 'cw-countries-ranking-all',
                duration: 1000,
                opacity: .1
              }
          ]
        },
        {
            id: '00A',
            alignment: 'left',
            hidden: false,
            title: 'Climate Fragility and Conflict Risk',
            image: '',
            description: '64% of the most climate fragile countries...',
            location: {
              center: [5.133761, 26.268723],
              zoom: 1.6,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'cw-countries-high',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'cw-countries-high',
                duration: 1000,
                opacity: 0
              }

          ]
        },
        {
            id: '00B',
            alignment: 'left',
            hidden: false,
            title: 'Climate Fragility and Conflict Risk',
            image: '',
            description: '64% of the most climate fragile countries witness conflict or security risks today. As the world is warming, climatic distress plays an increasingly central role in many of today’s conflicts.',
            location: {
              center: [39.826029, 19.893737],
              zoom: 2.4,
              pitch: 52,
              bearing: 18.87
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'cw-countries-yes',
                duration: 1000,
                opacity: .8
              },
              {
                layer: 'cw-countries-yes-both',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'cw-countries-ranking-all',
                duration: 1000,
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'cw-countries-yes',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'cw-countries-yes-both',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'cw-countries-high',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '01A',
            alignment: 'left',
            hidden: false,
            title: 'Climate Change, Water and Conflict',
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
            description: 'Yet, the relationship between climate change, water supply, and instability is by no means linear. Parts of the world will experience a decrease in water supply, frequently associated with droughts and extreme heat.',
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
            title: 'It can also be about vast oversupply',
            image: '',
            description: 'On the contrary, many regions currently experiencing climate-related insecurity are expected to witness increased water supply, like the Horn of Africa.',
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
            title: 'A Tale of Extremes',
            image: '',
            description: 'Crucially, many of the regions with the highest exposure to seasonal variability are projected to become even more volatile in the coming decades.',
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
            title: 'Higher Variability likely to continue',
            image: '',
            description: 'Crucially, many of the regions with the highest exposure to seasonal variability are projected to become even more fragile in the coming decades.',
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
            title: 'Climate Fragile Regions to Watch',
            image: '',
            description: 'Crisis Group identifies the most urgent climate security risks in the Horn of Africa, Sahel, South East Asia, Central America, and Middle East and North Africa. Our ongoing work focuses on the relationship between climatic shocks and resource competition, displacement and other security risks.',
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
              {
                  layer: 'country-labels',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'nigeria',
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
            description: 'Deadly conflicts between farmers and herders in Nigeria have claimed the lives of thousands, with climate change contributing to wide-scale livelihood insecurity, displacement, criminality - all furthering ethnic and political divides.',
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
                    layer: 'country-labels',
                    duration: 3000,
                    opacity: 1
                },
                {
                    layer: 'nigeria',
                    duration: 3000,
                    opacity: .4
                },
                {
                    layer: 'white_nile',
                    duration: 3000,
                    opacity: 0
                },
                {
                    layer: 'south-sudan2',
                    duration: 2000,
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'nigeria-landuse',
                    duration: 3000,
                    opacity: 0
                }
            ]
        },
        {
            id: '06B',
            alignment: 'left',
            hidden: false,
            title: 'Nigeria – Livestock Herding and Farming',
            image: '',
            description: 'Deadly conflicts between farmers and herders in Nigeria have claimed the lives of thousands, with climate change contributing to wide-scale livelihood insecurity, displacement, criminality - all furthering ethnic and political divides.',
            location: {
              center: [4.674479, 10.011739],
              zoom: 5,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'acled-2021',
                    duration: 2000,
                    opacity: 1
                }
            ],
            onChapterExit: [
              {
                  layer: 'acled-2021',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'nigeria',
                  duration: 3000,
                  opacity: 0
              }
            ]
        },
        {
            id: '06C',
            alignment: 'left',
            hidden: false,
            title: 'Nigeria – Livestock Herding and Farming',
            image: '',
            description: 'Deadly conflicts between farmers and herders in Nigeria have claimed the lives of thousands, with climate change contributing to wide-scale livelihood insecurity, displacement, criminality - all furthering ethnic and political divides.',
            location: {
              center: [4.674479, 10.011739],
              zoom: 5,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                  layer: 'nigeria-landuse',
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
                    opacity: 0
                },
                {
                    layer: 'white_nile',
                    duration: 3000,
                    opacity: 0
                },
                {
                    layer: 'south-sudan2',
                    duration: 2000,
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'nigeria-landuse',
                    duration: 3000,
                    opacity: 0
                },
                {
                    layer: 'nigeria',
                    duration: 3000,
                    opacity: 1
                }
            ]
        },
        {
            id: '07',
            alignment: 'left',
            hidden: false,
            title: 'South Sudan – Flooding',
            image: '',
            description: '<strong>Hazard</strong>: Unprecedented flooding of the White Nile<br /><br /><strong>Impact</strong>:Displacement of pastoralists into Southern Equatoria, exacerbating grievances and leading to farmer-herder violence.<br /><br /><strong>Our Insight</strong>: Quantifying how internal climate-related displacement drives instability and violence.',
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
                layer: 'mapbox-satellite',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'south-sudan2',
                  duration: 2000,
                  opacity: 1
              },
              {
                layer: 'reach-lines',
                duration: 3000,
                opacity: 1
              },
              {
                  layer: 'white_nile',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'reach-lines',
                duration: 3000,
                opacity: 0
              }
            ]
        },
        {
            id: '08',
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
            id: '09',
            alignment: 'left',
            hidden: false,
            title: 'Kenya – Severe Shortages',
            image: '',
            description: '<strong>Hazard</strong>: Droughts<br /><br /><strong>Impact</strong>:Increased resource competition aggravates ethnic tensions and contributes to violence around elections<br /><br /><strong>Our Insight</strong>: Assessing how politics and climatic hazards can potentially reignite historical grievances and intergroup conflict leading up to the 2022 elections',
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
                    layer: 'white_nile',
                    duration: 3000,
                    opacity: 0
                },
                {
                    layer: 'south-sudan2',
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
              {
                  layer: 'kenya',
                  duration: 3000,
                  opacity: 0
              }
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
              zoom: 3.5,
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
                  layer: 'south-sudan2',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'main_nile',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'white_nile',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [

            ]
        }
    ]
};
