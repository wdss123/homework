// var url = 'http://localhost:3000/';

// function fetchData (url) {
//     fetch(url, {
//         mode: 'cors'
//     }).then(response => response.json())
//     .then(data => {
//         return data.data;
//     })
//     .catch(e => console.log("Oops, error", e))
// }

// window.onload = function () {
//     fetchData(url);
// }
var app = new Vue({
    el: '#app',
    data: {
        url:'http://localhost:3000/',
        imgData: [],
        firstArr: []
    },
    mounted () { 
        this.fetchData(this.url); 
    },
    updated () {
        this.getwidth();         
    },
    methods: {
        // 获取数据
        async fetchData (url) {
            await fetch(url, {
                mode: 'cors'
            }).then(response => response.json())
            .then(data => {
                this.imgData = [];
                this.imgData = [...data.data]

            })
            .catch(e => console.log("Oops, error", e));
        },

        // 固定coniter高度
        getwidth () {
            var winwidth = document.documentElement.clientWidth;
            var imgwidth = 202;
            var colwidth = Math.floor(winwidth/imgwidth);
            this.$refs.main.style.cssText = `width: ${colwidth*imgwidth}px;margin: 0 auto`;
            this.firstArr = [];
                for (var i = 0; i < this.imgData.length; i++) {
                    if (i < colwidth) {
                        this.firstArr.push(this.$refs.obox[i].offsetHeight)
                    } else {
                        // this.$nextTick(() => {
                            // 获取数组最小值
                            var minH = Math.min(...this.firstArr);
                            // 获取最小值在数组的位置
                            var a = this.firstArr.indexOf(minH);
                            // 让下一列图片放到上一列最小高度的图片下
                            this.$refs.obox[i].style.position = 'absolute';
                            this.$refs.obox[i].style.top = `${minH}px`;
                            this.$refs.obox[i].style.left = 202*a + 'px';
                            this.firstArr[a] += this.$refs.obox[i].offsetHeight; 
                        // })
                    }
                }
        }
    }
})
