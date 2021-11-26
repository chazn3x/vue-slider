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
                    }
                ]
            },
            {
                type: "Soggiorni",
                rooms: [
                    {
                        src: "img/livingroom/livingroom-classic.jpeg",
                        alt: "livingroom classic",
                        text: "Una classica cucina ad angolo per donare vivacità alle vostre giornate con il suo colore indistinguibile"
                    }
                ]
            },
            {
                type: "Stanze da letto",
                rooms: [
                    {
                        src: "img/bedroom/double-bed-dark.jpeg",
                        alt: "double bed dark",
                        text: "Una classica cucina ad angolo per donare vivacità alle vostre giornate con il suo colore indistinguibile"
                    }
                ]
            },
            {
                type: "Bagni",
                rooms: [
                    {
                        src: "img/bathroom/bathroom-brown-marble.jpeg",
                        alt: "bathroom brown marble",
                        text: "Una classica cucina ad angolo per donare vivacità alle vostre giornate con il suo colore indistinguibile"
                    }
                ]
            },
            {
                type: "Spazi aperti",
                rooms: [
                    {
                        src: "img/open-space/open-space.jpeg",
                        alt: "open space",
                        text: "Una classica cucina ad angolo per donare vivacità alle vostre giornate con il suo colore indistinguibile"
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
        }

    }
});