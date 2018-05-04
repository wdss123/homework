var app = new Vue({
    el: "#main",
    data: {
        list: [],
        imglist: ['./img/China.png','./img/Cuba.png','./img/Franch.png','./img/Germany.png','./img/Ireland.png','./img/Japan.png','./img/China.png','./img/Cuba.png','./img/Franch.png','./img/Germany.png','./img/Ireland.png','./img/Japan.png'],
        listcompare: [],
        index: 0,
        size: []
    },
    mounted () {
        this.getImg();
    },
    wathch: {
        list: {        
            handler: function () {
                console.log(list)
            },
            deep:true
        }
    },
    methods: {
        randImg () {
            var randlength = Math.random()*(this.imglist.length-1);
            var randimg = Math.floor(randlength);
            this.list.push({
                click: false,
                show: false,
                src1: this.imglist[randimg],
                src2: './img/cardback.png' ,
                id: this.index++
            });
            this.imglist.splice(randimg, 1);
        },
        getImg () {
            this.list = [];
            while (this.imglist.length !== 0) {
                this.randImg();
            }
        },
        change (index) {
            this.list[index].click = true;
            this.list[index].show = true;
            this.listcompare.push(this.list[index]);
            if (this.listcompare.length === 2) {
                this.loop();
            }
        },
        loop() {
            setTimeout( () => {
                if (this.listcompare[0].src1 === this.listcompare[1].src1) {
                    this.success();
                    this.list[this.listcompare[0].id].click = true;
                    this.list[this.listcompare[1].id].click = true;
                    this.listcompare = [];
                } else {
                    this.list[this.listcompare[0].id].click = false;
                    this.list[this.listcompare[1].id].click = false;
                    this.listcompare = [];
                }                    
            },500);
        },
        success () {
            this.list.forEach(item => {
                // this.size = 0;
                if(item.click === true) {
                    this.size.push(item.id);
                    console.log(new Set(this.size))
                    if (new Set(this.size).size === 11) {
                        confirm('通关');
                    }
                }
            });
        }
    }
}) 