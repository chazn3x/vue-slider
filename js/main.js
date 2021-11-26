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
                        text: "Design moderno accompagnato dal calore del legno: minimal quanto basta."
                    },
                    {
                        src: "img/kitchen/simple-kitchen.jpeg",
                        alt: "simple kitchen",
                        text: "Uno spazio cucina ampio e luminoso che con il suo design regala un giusto equilibrio fra le forme."
                    },
                    {
                        src: "img/kitchen/dark-kitchen.jpeg",
                        alt: "dark kitchen",
                        text: "A volte basta anche il minimo indispensabile per preparare ottimi piatti."
                    }
                ]
            },
            {
                type: "Soggiorni",
                rooms: [
                    {
                        src: "img/livingroom/livingroom-classic.jpeg",
                        alt: "livingroom classic",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    },
                    {
                        src: "img/livingroom/livingroom-grey.jpeg",
                        alt: "livingroom grey",
                        text: "Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa? Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/livingroom/livingroom-parquet.jpeg",
                        alt: "livingroom parquet",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/livingroom/livingroom-small.jpeg",
                        alt: "livingroom small",
                        text: "Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa? Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/livingroom/livingroom-window.jpeg",
                        alt: "livingroom window",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa?"
                    }
                ]
            },
            {
                type: "Stanze da letto",
                rooms: [
                    {
                        src: "img/bedroom/double-bed-dark.jpeg",
                        alt: "double bed dark",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    },
                    {
                        src: "img/bedroom/double-bed-light.jpeg",
                        alt: "double bed light",
                        text: "Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa? Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/bedroom/double-bed-spacious.jpeg",
                        alt: "double bed spacious",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/bedroom/single-bed.jpeg",
                        alt: "single bed",
                        text: "Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa? Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/bedroom/two-single-bed.jpeg",
                        alt: "two single bed",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa?"
                    }
                ]
            },
            {
                type: "Bagni",
                rooms: [
                    {
                        src: "img/bathroom/bathroom-brown-marble.jpeg",
                        alt: "bathroom brown marble",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    },
                    {
                        src: "img/bathroom/bathroom-classic-design.jpeg",
                        alt: "bathroom classic design",
                        text: "Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa? Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/bathroom/bathroom-round-bath.jpeg",
                        alt: "bathroom round bath",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/bathroom/bathroom-grey-marble.jpeg",
                        alt: "bathroom grey marble",
                        text: "Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa? Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/bathroom/bathroom-square-tiles.jpeg",
                        alt: "bathroom square tiles",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa?"
                    }
                ]
            },
            {
                type: "Spazi aperti",
                rooms: [
                    {
                        src: "img/open-space/open-space.jpeg",
                        alt: "open space",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    },
                    {
                        src: "img/open-space/kitchen-blue-island.jpeg",
                        alt: "kitchen blue island",
                        text: "Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa? Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/open-space/kitchen-island-two-lights.jpeg",
                        alt: "kitchen island two lights",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/open-space/open-space-parquet.jpeg",
                        alt: "open space parquet",
                        text: "Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa? Ab deserunt culpa in eius error recusandae autem?"
                    },
                    {
                        src: "img/open-space/wooden-island-kitchen.jpeg",
                        alt: "wooden island kitchen",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores veritatis libero facilis nostrum neque numquam velit, tenetur, eaque minima consequatur, iste ipsa?"
                    }
                ]
            }
        ],
        category: 0,
        room: 0,
        autoplay: 0
    },
    methods: {
        categoryChange: function(i) {
            this.category = i;
            this.room = 0;
        },
        next: function(i) {
            if (this.room == i.rooms.length -1) {
                this.room = 0;
                this.category == this.categories.length -1 ? this.category = 0 : this.category++
            } else {
                this.room++;
            }
        },
        prev: function(i) {
            if (this.room == 0) {
                this.room = i.rooms.length -1;
                this.category == 0 ? this.category = this.categories.length -1 : this.category--
            } else {
                this.room--;
            }
        },
        roomChange: function(i) {
            this.room = i;
        },
        sliderPlay: function() {
            const goOn = () => {
                if (this.room == this.categories[this.category].rooms.length -1) {
                    this.room = 0;
                    this.category == this.categories.length -1 ? this.category = 0 : this.category++
                } else {
                    this.room++;
                }
            }
            this.autoplay = setInterval(goOn, 3000);
        },
        sliderStop: function() {
            clearInterval(this.autoplay);
        }
    },
    mounted(){
        this.sliderPlay();
    },
});