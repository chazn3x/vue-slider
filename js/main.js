const app = new Vue({
    el: "#root",
    data: {
        categories: [
            {
                type: "Cucine",
                rooms: [
                    {
                        src: "img/kitchen/blue-kitchen.jpeg",
                        alt: "blue kitchen",
                        text: "Una classica cucina ad angolo per donare vivacità alle vostre giornate con il suo colore indistinguibile."
                    },
                    {
                        src: "img/kitchen/modern-elegant-kitchen.jpeg",
                        alt: "modern elegant kitchen",
                        text: "Un contrasto perfetto fra stili e colori per chi ama il classico e il moderno, il bianco e il nero."
                    },
                    {
                        src: "img/kitchen/modern-wooden-kitchen.jpeg",
                        alt: "modern wooden kitchen",
                        text: "Una classica cucina ad angolo per donare vivacità alle vostre giornate con il suo colore indistinguibile."
                    },
                    {
                        src: "img/kitchen/simple-kitchen.jpeg",
                        alt: "simple kitchen",
                        text: "Una classica cucina ad angolo per donare vivacità alle vostre giornate con il suo colore indistinguibile."
                    },
                    {
                        src: "img/kitchen/dark-kitchen.jpeg",
                        alt: "dark kitchen",
                        text: "Una classica cucina ad angolo per donare vivacità alle vostre giornate con il suo colore indistinguibile."
                    }
                ]
            },
            {
                type: "Soggiorni",
                rooms: [
                    {
                        src: "img/livingroom/livingroom-classic.jpeg",
                        alt: "livingroom classic",
                        text: ""
                    },
                    {
                        src: "img/livingroom/livingroom-grey.jpeg",
                        alt: "livingroom grey",
                        text: ""
                    },
                    {
                        src: "img/livingroom/livingroom-parquet.jpeg",
                        alt: "livingroom parquet",
                        text: ""
                    },
                    {
                        src: "img/livingroom/livingroom-small.jpeg",
                        alt: "livingroom small",
                        text: ""
                    },
                    {
                        src: "img/livingroom/livingroom-window.jpeg",
                        alt: "livingroom window",
                        text: ""
                    }
                ]
            },
            {
                type: "Stanze da letto",
                rooms: [
                    {
                        src: "img/bedroom/double-bed-dark.jpeg",
                        alt: "double bed dark",
                        text: ""
                    },
                    {
                        src: "img/bedroom/double-bed-light.jpeg",
                        alt: "double bed light",
                        text: ""
                    },
                    {
                        src: "img/bedroom/double-bed-spacious.jpeg",
                        alt: "double bed spacious",
                        text: ""
                    },
                    {
                        src: "img/bedroom/single-bed.jpeg",
                        alt: "single bed",
                        text: ""
                    },
                    {
                        src: "img/bedroom/two-single-bed.jpeg",
                        alt: "two single bed",
                        text: ""
                    }
                ]
            },
            {
                type: "Bagni",
                rooms: [
                    {
                        src: "img/bathroom/bathroom-brown-marble.jpeg",
                        alt: "bathroom brown marble",
                        text: ""
                    },
                    {
                        src: "img/bathroom/bathroom-classic-design.jpeg",
                        alt: "bathroom classic design",
                        text: ""
                    },
                    {
                        src: "img/bathroom/bathroom-round-bath.jpeg",
                        alt: "bathroom round bath",
                        text: ""
                    },
                    {
                        src: "img/bathroom/bathroom-grey-marble.jpeg",
                        alt: "bathroom grey marble",
                        text: ""
                    },
                    {
                        src: "img/bathroom/bathroom-square-tiles.jpeg",
                        alt: "bathroom square tiles",
                        text: ""
                    }
                ]
            },
            {
                type: "Spazi aperti",
                rooms: [
                    {
                        src: "img/open-space/open-space.jpeg",
                        alt: "open space",
                        text: ""
                    },
                    {
                        src: "img/open-space/kitchen-blue-island.jpeg",
                        alt: "kitchen blue island",
                        text: ""
                    },
                    {
                        src: "img/open-space/kitchen-island-two-lights.jpeg",
                        alt: "kitchen island two lights",
                        text: ""
                    },
                    {
                        src: "img/open-space/open-space-parquet.jpeg",
                        alt: "open space parquet",
                        text: ""
                    },
                    {
                        src: "img/open-space/wooden-island-kitchen.jpeg",
                        alt: "wooden island kitchen",
                        text: ""
                    }
                ]
            }
        ],
        category: 0,
        room: 0
    },
    methods: {
        categoryChange: function(i) {
            this.category = i;
            this.room = 0;
        },
        next: function(categoryShown) {
            this.room == categoryShown.rooms.length -1 ? this.room = 0 : this.room++
        },
        prev: function(categoryShown) {
            this.room == 0 ? this.room = categoryShown.rooms.length -1 : this.room--
        }
    }
});