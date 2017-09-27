<template>
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="header">
        <!-- slides -->
        <swiper-slide><img src="../../static/img/header_swiper/01.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/img/header_swiper/02.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/img/header_swiper/03.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/img/header_swiper/04.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/img/header_swiper/05.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/img/header_swiper/06.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/img/header_swiper/07.jpg"></swiper-slide>
        <swiper-slide><img src="../../static/img/header_swiper/08.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>
    export default {
        name: 'main',
        data() {
            return {
                notNextTick: true,
                swiperOption: {
                    autoplay: 2000,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                    debugger: true
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
        }
    }
</script>
<style>
    .header{
        width: 100%;
        height: auto;
    }
    .header swiper-slide{
        width: 100%;
        height: auto;
    }
</style>