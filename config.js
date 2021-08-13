var config = {
    style: 'mapbox://styles/daltonwb/cks9rthnj0exd17qenges3atk',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Global Climate Overview [something more hard-hitting!]',
    subtitle: '',
    byline: '',
    footer: '<a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a>, <a href="https://www.mapbox.com" target="_blank">Mapbox</a><br /><br /><img src="images/icg_logo.png" width="150" height="150" />',
    chapters: [
        {
            id: '00',
            alignment: 'left',
            hidden: false,
            title: 'Why look at water supply?',
            image: '',
            description: 'The majority of climate security risks revolve around water, making water supply a crucial variable to consider when assessing climate change’s impact on livelihoods.',
            location: {
                center: [28.7594805, -16.5221016],
                zoom: 15,
                pitch: 60,
                bearing: 20
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'mapbox-satellite',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '01A',
            alignment: 'left',
            hidden: false,
            title: 'It is not just about droughts.',
            image: '',
            description: 'Yet, the relationship between climate change, water supply, and instability is by no means linear. Parts of the world will experience a decrease in water supply, frequently associated with droughts and extreme heat. ',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
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
            id: '01B',
            alignment: 'left',
            hidden: false,
            title: 'Climate Change and Rising Temperatures',
            image: '',
            description: '',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
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
            id: '01C',
            alignment: 'left',
            hidden: false,
            title: 'It can be about vast oversupply.',
            image: '',
            description: 'On the contrary, many regions currently experiencing climate-related insecurity are expected to witness increased water supply, like the Horn of Africa.',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
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
            id: '01C',
            alignment: 'left',
            hidden: false,
            title: 'It can be about vast oversupply.',
            image: '',
            description: 'On the contrary, many regions currently experiencing climate-related insecurity are expected to witness increased water supply, like the Horn of Africa.',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
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
            id: '02A',
            alignment: 'left',
            hidden: false,
            title: 'Higher Variability Leads to More Violence',
            image: '',
            description: 'Increases in water supply oftentimes manifest in extreme forms, such as prolonged dry seasons, followed by erratic and extreme distributions of precipitation. Climate volatility can induce livelihood insecurity, which frequently is key element of climate-related insecurity issues.',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        }
    ]
};
