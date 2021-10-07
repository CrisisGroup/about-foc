var config = {
    style: 'mapbox://styles/daltonwb/cku7ug8zc44o918poakr37l2i',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="60" height="60" /></a><br /><h1>Climate Change and Conflict Risks</h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Ulrich Eberle<br /><strong>Visualizations</strong>: Paul Franz<br /><strong>Support: </strong>Andrew Ciacci and Juan Lozano<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.crisisgroup.org/crisiswatch" target="_blank">CrisisWatch</a>, September, 2021<br /><a href="http://www.esa-landcover-cci.org/?q=node/164" target="_blank">European Space Agency</a>. 2017. Land Cover CCI Product User Guide Version 2.<br /><a href="https://www.gadm.org" target="_blank">GADM</a>. 2012. “Database of Global Administrative Areas”.<br />Luck, M., M. Landis, and F. Gassert. 2015. “Aqueduct Water Stress Projections: Decadal Projections of Water Supply and Demand using CMIP5 GCMs.” <a href="https://www.wri.org/applications/aqueduct/water-risk-atlas/#/?advanced=false&basemap=hydro&indicator=w_awr_def_tot_cat&lat=-14.445396942837744&lng=-142.85354599620152&mapMode=view&month=1&opacity=0.5&ponderation=DEF&predefined=false&projection=absolute&scenario=optimistic&scope=baseline&timeScale=annual&year=baseline&zoom=2" target="_blank">World Resources Institute</a>.<br />Raleigh, C., A. Linke, H. Hegre and J. Karlsen. 2010. “<a href="https://acleddata.com/data-export-tool/" target="_blank">Introducing ACLED Armed Conflict Location and Event Data</a>.” Journal of Peace Research 47(5):651-660.<br /><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><strong>Note</strong>: “Climate Fragility” refers to the average country-wide exposure to interannual variability, seasonal variability, riverine flood risk, coastal flood risk, drought risk (equal weights). “The most climate-fragile countries” refers to the top 50% of countries. Among those, exposure to conflict and crises is twice as high as it is for the bottom 50% of less climate fragile countries.<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
        {
            id: '00',
            alignment: 'left',
            hidden: false,
            title: 'The Dangers  of Climate Fragility',
            image: '',
            description: 'Climate fragility afflicts more and more countries in the world today. Flood and drought, as well as changes in multiyear and seasonal variability, have become major risk factors.',
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
                layer: 'wri-risk-basin',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'wri-risk-basin-high2',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'risk-country-borders',
                duration: 1000,
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'wri-risk-basin',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '00A',
            alignment: 'left',
            hidden: false,
            title: 'Climate Fragility and Conflict Risk',
            image: '',
            description: 'These are the most climate-fragile countries in the world today.',
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
                layer: 'wri-risk-basin-high2',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'risk-country-borders',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'risk-country-borders',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '00B',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Half of the most climate-fragile countries also face <span style="color: #f71d1d;"><u>conflict and crises</u></span>.',
            location: {
              center: [10.818423, -1.069410],
              zoom: 2.2,
              pitch: 36.00,
              bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'wri-risk-basin-high-cw2',
                duration: 1000,
                opacity: .8
              },
              {
                layer: 'wri-risk-basin-high2',
                duration: 1000,
                opacity: .2
              }
            ],
            onChapterExit: [
              {
                layer: 'wri-risk-basin-high-cw2',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'wri-risk-basin-high2',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'risk-country-borders',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: 'QUOTE',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">As the world warms, climatic distress plays an increasingly central role in many of today’s conflicts.</h2>',
            location: {
              center: [10.818423, -1.069410],
              zoom: 2.2,
              pitch: 36.00,
              bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '01A',
            alignment: 'left',
            hidden: false,
            title: 'Climate Change, Water and Conflict',
            image: '',
            description: 'From flood-induced livelihood insecurity to transboundary water disputes, the majority of climate security risks revolve around water. Climate change will continue to imperil the global water supply in coming decades.',
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
            title: 'A Tale of Extremes',
            image: '',
            description: 'It is critical for all those with a stake in the region’s stability and prosperity to understand the complex links among climate change, water supply and instability.<br /><br />Parts of the world will suffer a decrease in water supply, frequently associated with multi-year droughts and extreme heat.',       location: {
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
            title: 'It Is Not Only about Drought',
            image: '',
            description: 'At the same time, many regions experiencing climate-related insecurity are expected to witness increased water supply, like the Horn of Africa.',
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
            title: 'Living with a Rogue Climate',
            image: '',
            description: 'Increases in water supply often manifest in extreme forms, such as prolonged dry seasons followed by erratic and extreme precipitation. Extreme climatic volatility often induces livelihood insecurity, which can exacerbate conflict risks.',
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
            title: 'Climate Swings Likely to Intensify in Fragile Regions',
            image: '',
            description: 'Crucially, many climate-fragile regions with the highest exposure to seasonal variability are projected to become even more volatile in the coming decades.',
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
            title: 'Regions to Watch',
            image: '',
            description: 'Among the countries facing climate security risks, Crisis Group identifies the most urgent to be in the Horn of Africa, Sahel, South East Asia, Central America, and Middle East and North Africa.<br /><br />We focus particularly on Africa, where climatic distress has wreaked havoc in recent years. It has resulted in resource competition, displacement and other security risks.',
            location: {
              center: [10.818423, -1.069410],
              zoom: 2.2,
              pitch: 36.00,
              bearing: 0
            },
            mapAnimation: 'easeTo',
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
              },
              {
                  layer: 'acled-2021',
                  duration: 1000,
                  opacity: 0
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
            title: 'Climatic Distress and Land-related Violence in Africa',
            image: '',
            description: 'In Africa, resource-related violence is concentrated in the climate fragile Sahel and Horn regions. Climate mapping alone, however, is insufficient to predict conflict risks. To pin down the link between climatic stress factors and conflict, Crisis Group pairs cutting-edge statistical analysis with on-the-ground research to measure how climatic shocks interact with political and social dynamics.',
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
                  opacity: 1
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

            ]
        },
        {
            id: '06',
            alignment: 'left',
            hidden: false,
            title: 'Nigeria’s Farmer-Herder Violence',
            image: '',
            description: 'Deadly conflicts between farmers and herders in Nigeria have claimed thousands of lives. Climate change plays a role in the food insecurity, economic inequality, displacement and criminality that aggravate ethnic and political divides.',
            location: {
              center: [7.801678, 9.181589],
              zoom: 6,
              pitch: 40.40,
              bearing: -12.89
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                  layer: 'acled-2021',
                  duration: 3000,
                  opacity: 1
                },
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
                    layer: 'nile',
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
            title: 'Nigeria’s Farmer-Herder Violence',
            image: '',
            description: '<strong>Our Analysis</strong>: Crisis Group pairs remotely-sensed land productivity assessments with field insights to unpack farmer-herder conflicts at the local level, showing that disputes are frequently concentrated in Nigeria’s grasslands and along the agricultural fringe used by both groups – especially when land productivity is very low.<br /><br /><strong>What Should be Done</strong>: The federal government should ensure that all states participating in the country’s livestock transformation plan adopt measures to address climate change’s impact and consider future climate projections in designating locations for ranches and grazing reserves. Making progress on pilot ranches, donor commitments and staff training before the 2023 election, and ensuing change of administration, may help preserve the Plan’s post-election viability.',
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
                    layer: 'nile',
                    duration: 3000,
                    opacity: 0
                },
                {
                  layer: 'ss-floods',
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
            title: 'South Sudan – Floods and Displacement',
            image: '',
            description: 'Three consecutive years of historic flooding in South Sudan exacerbated widespread food and economic insecurity, displacing over half a million people, driving pastoralists south and fueling violence in the Equatoria region.',
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
                layer: 'ss-floods',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'south-sudan2',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'nile',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'ss-floods',
                  duration: 3000,
                  opacity: 0
              },
            ]
        },
        {
            id: 'QUOTE2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">“Snakes and people were competing for higher ground”.</h2> – <em>Anonymous herder who fled Twic East county during the 2020 floods.</em></h2>',
            location: {
              center: [30.172241, 6.428853],
              zoom: 5.80,
              pitch: 38,
              bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [
              {
                  layer: 'nile',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '07B',
            alignment: 'left',
            hidden: false,
            title: 'Analysis from South Sudan',
            image: '',
            description: '<strong>Our Insight</strong>: Crisis Group’s quantitative analysis maps the flood’s impact on displacement pathways, identifying an increased incidence of conflict where displaced groups relocated. Paired with survey data, we can map and anticipate migration routes, to help improve anticipatory action and crisis response.<br /><br /> <strong>What Should be Done</strong>: Build flood resilience to improve livelihood security. Prevent long-distance displacement in the first place. Broker negotiations between displaced and host communities to mitigate conflict when displacement is unavoidable. Build new norms, sensitive to existing political dynamics, for displaced-host communities interactions during climate displacements.',
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

            ],
            onChapterExit: [

            ]
        },
        {
            id: '08',
            alignment: 'left',
            hidden: false,
            title: 'Grand Ethiopian Renaissance Dam',
            image: '',
            description: '<strong>Background</strong>: Stalled negotiations between Ethiopia, Egypt and Sudan over fillings and drought management protocols for the Grand Ethiopian Renaissance Dam has the potential to escalate into conflict as climate change worsens, threatening downstream water supplies.<br /><br /><strong>Planned Work</strong>: Future work will detail ways forward to get beyond zero-sum thinking and explore how the project can be the fulcrum of a new era of cooperation.<br /><br />(Image taken December 2019)',
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
            title: 'Climate Change and Pastoralist Livelihoods in Kenya',
            image: '',
            description: '<strong>Background</strong>: Severe seasonal droughts and other weather extremes in Kenya’s northern region helped intensify land and resource competition among rival ethnic groups and contributed to inter-communal violence, particularly around election cycles.<br /><br /><strong>Planned Work</strong>: Future work will evaluate to what extent intercommunal conflicts are caused or exacerbated by climate change and look at avenues for resolution. In northern Kenya, we will research ongoing intercommunal conflicts, partially driven by drought and depleting pastures, which have serious implications for cross-border violence.',
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
                    layer: 'nile_end',
                    duration: 3000,
                    opacity: 0
                },
                {
                    layer: 'south-sudan2',
                    duration: 3000,
                    opacity: 0
                },
                {
                    layer: 'gerd-label',
                    duration: 1000,
                    opacity: 0
                },
                {
                    layer: 'gerd-dot',
                    duration: 1000,
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
            title: 'Crisis Group’s Climate and Conflict Research',
            image: 'images/icg_logo.png',
            description: 'Crisis Group blends local research with climate science and state-of-the-art quantitative methods to formulate effective policy recommendations that address the root causes of conflict.<br /><br />Read more of Crisis Group’s work on climate change and conflict <a href="https://www.crisisgroup.org/climate" target="_blank">here</a> and on Nigeria’s farmer-herder violence <a href="https://nigeriaclimate.crisisgroup.org/" target="_blank">here</a> and <a href="https://www.crisisgroup.org/africa/west-africa/nigeria/302-ending-nigerias-herder-farmer-crisis-livestock-reform-plan" target="_blank">here</a>.',
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
                  layer: 'gerd-label',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'gerd-dot',
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
                  layer: 'nile_end',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'country-labels',
                  duration: 3000,
                  opacity: 1
              },
              {
                layer: 'mapbox-satellite',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'countries_latam_end',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'countries_mekong_end',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'countries_mena_end',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'countries_mena_dis_end',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'india_end',
                  duration: 3000,
                  opacity: 0
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: '11',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
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
                  layer: 'kenya',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'gerd-label',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'gerd-dot',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'nigeria',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'south-sudan2',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'country-labels',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'nile_end',
                  duration: 3000,
                  opacity: 0
              },
              {
                layer: 'mapbox-satellite',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'countries_latam_end',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'countries_mekong_end',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'countries_mena_end',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'countries_mena_dis_end',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'india_end',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [

            ]
        }
    ]
};
