<template>
    <div class="container" id="app">
        <div class="main">
            <div class="head">
                <p>
                    <input type="text" placeholder="京东生鲜超级品类日，领券满199减…">
                    <a href="#">登录</a>
                </p>
            </div>
            <header>
                <!--<router-view></router-view>-->
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
            </header>
            <section>
                <main>
                    <div class="img">
                        <img src="../../static/img/banner/newpeople.jpg">
                    </div>
                    <nav>
                        <div class="box">
                            <dl>
                                <dt><img src="../../static/img/nav/05.png"></dt>
                                <dd>京东超市</dd>
                            </dl>
                            <dl>
                                <dt><img src="../../static/img/nav/09.png"></dt>
                                <dd>全球购</dd>
                            </dl>
                            <dl>
                                <dt><img src="../../static/img/nav/06.png"></dt>
                                <dd>服装城</dd>
                            </dl>
                            <dl>
                                <dt><img src="../../static/img/nav/10.png"></dt>
                                <dd>京东生鲜</dd>
                            </dl>
                            <dl>
                                <dt><img src="../../static/img/nav/07.png"></dt>
                                <dd>京东到家</dd>
                            </dl>
                        </div>
                        <div class="box">
                            <dl>
                                <dt><img src="../../static/img/nav/02.png"></dt>
                                <dd>充值缴费</dd>
                            </dl>
                            <dl>
                                <dt><img src="../../static/img/nav/01.png"></dt>
                                <dd>领京豆</dd>
                            </dl>
                            <dl>
                                <dt><img src="../../static/img/nav/08.png"></dt>
                                <dd>领券</dd>
                            </dl>
                            <dl>
                                <dt><img src="../../static/img/nav/03.png"></dt>
                                <dd>惠赚钱</dd>
                            </dl>
                            <dl>
                                <dt><img src="../../static/img/nav/04.png"></dt>
                                <dd>物流查询</dd>
                            </dl>
                        </div>
                    </nav>
                    <div class="img">
                        <img src="../../static/img/banner/profiansion.jpg">
                    </div>
                    <div class="kb">
                        <span><img src="../../static/img/icon/jd_news.png"></span>
                        <swiper :options="jdkb" :not-next-tick="notNextTick" ref="mySwiper">
                            <!-- slides -->
                            <swiper-slide class="li"><p><span>抢</span><a href="#">京东生鲜领券满199减80…</a></p></swiper-slide>
                            <swiper-slide class="li"><p><span>热</span><a href="#">iPhone手机最神气的功能…</a></p></swiper-slide>
                            <swiper-slide class="li"><p><span>爆</span><a href="#">内裤多久换一次？大多数…</a></p></swiper-slide>
                        </swiper>
                        <b><a href="#">更多</a></b>
                    </div>
                    <div class="seckill-floor">
                        <div class="seckill-title">
                            <div class="seckill-left">
                                <img src="../../static/img/icon/ms.png">
                                <strong><em>8</em>点场</strong>
                                <span class="time">
                                    <span>01</span>:<span>13</span>:<span>14</span>
                                </span>
                            </div>
                            <a href="#" class="seckill-right">精选尖货轮番<img src="../../static/img/icon/left.png"></a>
                        </div>
                        <div class="seckill-sec">
                            <swiper :options="ms" class="con">
                                <!-- slides -->
                                <swiper-slide class="cons">
                                    <img src="../../static/img/product/01 (49).jpg">
                                    <p class="xj">￥899</p>
                                    <p class="yj">￥1299<hr></p>
                                </swiper-slide>
                                <swiper-slide class="cons">
                                    <img src="../../static/img/product/01 (45).jpg">
                                    <p class="xj">￥899</p>
                                    <p class="yj">￥1299</p>
                                </swiper-slide>
                                <swiper-slide class="cons">
                                    <img src="../../static/img/product/01 (44).jpg">
                                    <p class="xj">￥899</p>
                                    <p class="yj">￥1299</p>
                                </swiper-slide>
                                <swiper-slide class="cons">
                                    <img src="../../static/img/product/01 (42).jpg">
                                    <p class="xj">￥899</p>
                                    <p class="yj">￥1299</p>
                                </swiper-slide>
                                <swiper-slide class="cons">
                                    <img src="../../static/img/product/01 (43).jpg">
                                    <p class="xj">￥899</p>
                                    <p class="yj">￥1299</p>
                                </swiper-slide>
                                <swiper-slide class="cons">
                                    <img src="../../static/img/product/01 (43).jpg">
                                    <p class="xj">￥899</p>
                                    <p class="yj">￥1299</p>
                                </swiper-slide>
                                <swiper-slide class="cons">
                                    <img src="../../static/img/product/01 (43).jpg">
                                    <p class="xj">￥899</p>
                                    <p class="yj">￥1299</p>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <div class="m_footer">
                        <div class="img">
                            <img src="../../static/img/banner/newpeople.jpg">
                        </div>
                        <ul class="footer_list">
                            <li><img src="../../static/img/ms/0.jpg"></li>
                            <li><img src="../../static/img/ms/1.jpg"></li>
                            <li><img src="../../static/img/ms/2.jpg"></li>
                            <li><img src="../../static/img/ms/3.jpg"></li>
                        </ul>
                    </div>

                    <!-- 十一长假 -->
                    <div class="real_box">
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">闪购</strong>
                                <p class="graphic-wz">统统1块钱</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (5).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 爱生活 -->
                    <div class="real_box">
                        <div class="hr_img">
                            <img src="../../static/img/hr/1 (6).jpg">
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">闪购</strong>
                                <p class="graphic-wz">统统1块钱</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (5).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (5).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="swiper">
                            <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="header">
                                <swiper-slide><img src="../../static/img/banner/swiper/1/01.jpg"></swiper-slide>
                                <swiper-slide><img src="../../static/img/banner/swiper/1/02.jpg"></swiper-slide>
                                <div class="swiper-pagination"  slot="pagination"></div>
                            </swiper>
                        </div>
                    </div>

                    <!-- 享品质 -->
                    <div class="real_box">
                        <div class="hr_img">
                            <img src="../../static/img/hr/1 (7).jpg">
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">闪购</strong>
                                <p class="graphic-wz">统统1块钱</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (5).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (5).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="swiper">
                            <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="header">
                                <swiper-slide><img src="../../static/img/banner/swiper/2/01.jpg"></swiper-slide>
                                <swiper-slide><img src="../../static/img/banner/swiper/2/02.jpg"></swiper-slide>
                                <div class="swiper-pagination"  slot="pagination"></div>
                            </swiper>
                        </div>
                    </div>

                    <!-- 购特色 -->
                    <div class="real_box">
                        <div class="hr_img">
                            <img src="../../static/img/hr/1 (4).jpg">
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">闪购</strong>
                                <p class="graphic-wz">统统1块钱</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="swiper">
                            <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="header">
                                <swiper-slide><img src="../../static/img/banner/swiper/3/01.jpg"></swiper-slide>
                                <swiper-slide><img src="../../static/img/banner/swiper/3/02.jpg"></swiper-slide>
                                <div class="swiper-pagination"  slot="pagination"></div>
                            </swiper>
                        </div>
                    </div>

                    <!-- 逛商场 -->
                    <div class="real_box">
                        <div class="hr_img">
                            <img src="../../static/img/hr/1 (5).jpg">
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">闪购</strong>
                                <p class="graphic-wz">统统1块钱</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">闪购</strong>
                                <p class="graphic-wz">统统1块钱</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">闪购</strong>
                                <p class="graphic-wz">统统1块钱</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="graphic-text">
                                <strong class="graphic-tit">发现好货</strong>
                                <p class="graphic-wz">发现品质生</p>
                            </div>
                            <div class="graphic-img">
                                <img src="../../static/img/product/01 (1).jpg">
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="real-show">
                            <div class="real-l">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                            <div class="real-r">
                                <div class="graphic-text_1">
                                    <strong class="graphic-tit_1">发现好货</strong>
                                    <p class="graphic-wz_1">发现品质生活</p>
                                </div>
                                <div class="graphic-imgs">
                                    <img src="../../static/img/product/01 (5).jpg">
                                </div>
                            </div>
                        </div>
                        <div class="swiper">
                            <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="header">
                                <swiper-slide><img src="../../static/img/banner/swiper/3/01.jpg"></swiper-slide>
                                <swiper-slide><img src="../../static/img/banner/swiper/3/02.jpg"></swiper-slide>
                                <div class="swiper-pagination"  slot="pagination"></div>
                            </swiper>
                        </div>
                    </div>

                    <!-- 发现好店 -->
                    <div class="shop-list">
                        <div class="shop_img">
                            <img src="../../static/img/hr/1 (1).jpg">
                            <span>更多精彩<img src="../../static/img/icon/left.png"></span>
                        </div>
                        <ul>
                            <li>
                                <strong>休闲食品</strong>
                                <p>吃货集散中心</p>
                                <div class="hd_img">
                                    <img src="../../static/img/product/01 (11).jpg">
                                    <img src="../../static/img/product/01 (11).jpg">
                                </div>
                                <p class="b_p">三只松鼠京东自营旗舰店</p>
                            </li>
                            <li>
                                <strong>手机通讯</strong>
                                <p>是不是在淘手机？</p>
                                <div class="hd_img">
                                    <img src="../../static/img/product/01 (11).jpg">
                                    <img src="../../static/img/product/01 (11).jpg">
                                </div>
                                <p class="b_p">京东Apple产品专营店</p>
                            </li>
                        </ul>
                    </div>

                    <!-- 优选清单 -->
                    <div class="clear"></div>
                    <div class="shop-list">
                        <div class="shop_img">
                            <img src="../../static/img/hr/1 (2).jpg">
                            <span>更多精彩<img src="../../static/img/icon/left.png"></span>
                        </div>
                        <ul>
                            <li>
                                <strong>休闲食品</strong>
                                <div class="hd_img">
                                    <img src="../../static/img/product/01 (11).jpg">
                                    <img src="../../static/img/product/01 (11).jpg">
                                </div>
                            </li>
                            <li>
                                <strong>手机通讯</strong>
                                <div class="hd_img">
                                    <img src="../../static/img/product/01 (11).jpg">
                                    <img src="../../static/img/product/01 (11).jpg">
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- 直播 -->
                    <div class="clear"></div>
                    <div class="shop-list">
                        <div class="shop_img">
                            <img src="../../static/img/hr/1 (3).jpg">
                            <span>更多精彩<img src="../../static/img/icon/left.png"></span>
                        </div>
                        <ul>
                            <li>
                                <strong>休闲食品</strong>
                                <p>吃货集散中心</p>
                                <div class="hd_img">
                                    <img src="../../static/img/product/01 (11).jpg">
                                    <img src="../../static/img/product/01 (11).jpg">
                                </div>
                            </li>
                            <li>
                                <strong>手机通讯</strong>
                                <p>是不是在淘手机？</p>
                                <div class="hd_img">
                                    <img src="../../static/img/product/01 (11).jpg">
                                    <img src="../../static/img/product/01 (11).jpg">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                    <div class="tj">
                        <div class="tj_tit">为你推荐</div>
                        <ul>
                            <li>
                                <img src="../../static/img/product/01 (83).jpg">
                                <p>艾璐歌 摩托车 迷你小跑车 四冲程 手拉启动雷鹰…</p>
                                <p class="xj">￥950.00</p>
                                <p class="hp_xs">
                                    <span>好评率97%</span>
                                    <button>看相似</button>
                                </p>
                            </li>
                            <li>
                                <img src="../../static/img/product/01 (83).jpg">
                                <p>艾璐歌 摩托车 迷你小跑车 四冲程 手拉启动雷鹰…</p>
                                <p class="xj">￥950.00</p>
                                <p class="hp_xs">
                                    <span>好评率97%</span>
                                    <button>看相似</button>
                                </p>
                            </li>
                            <li>
                                <img src="../../static/img/product/01 (83).jpg">
                                <p>艾璐歌 摩托车 迷你小跑车 四冲程 手拉启动雷鹰…</p>
                                <p class="xj">￥950.00</p>
                                <p class="hp_xs">
                                    <span>好评率97%</span>
                                    <button>看相似</button>
                                </p>
                            </li>
                            <li>
                                <img src="../../static/img/product/01 (83).jpg">
                                <p>艾璐歌 摩托车 迷你小跑车 四冲程 手拉启动雷鹰…</p>
                                <p class="xj">￥950.00</p>
                                <p class="hp_xs">
                                    <span>好评率97%</span>
                                    <button>看相似</button>
                                </p>
                            </li>
                        </ul>
                    </div>
                </main>


            </section>
            <footer>
                <ul>
                    <li><img src="../../static/img/footer/f_1.png"></li>
                    <li><img src="../../static/img/footer/f_3.png"></li>
                    <li><img src="../../static/img/footer/f_4.png"></li>
                    <li><img src="../../static/img/footer/f_2.png"></li>
                    <li><img src="../../static/img/footer/f_5.png"></li>
                </ul>
            </footer>

            <!--<router-view></router-view>-->
        </div>
    </div>
</template>
<script>
    // 设置字体大小
    var rem = document.documentElement.offsetWidth / 3.2;
    document.documentElement.style.fontSize = rem + "px";
    // import  from "header.vue"
    // import ;
    // 头部轮播
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
                },
                jdkb: {
                    autoplay: 3000,
                    direction : 'vertical',
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                    debugger: true
                },
                ms: {
                    grabCursor : true,
                    // setWrapperSize :true,
                    autoHeight: true,
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                    debugger: true
                },
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
        //   console.log('this is current swiper instance object', this.swiper)
        //   this.swiper.slideTo(3, 1000, false)
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    .clear{
        clear: both;
    }
    img{
        width: 100%;
        height: auto;
    }
    
    body{
        font-size: .16rem;
    }
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .head p{
        position: fixed;
        left: 0;
        top:0;
        width: 100%;
        line-height: .4rem;
        font-size: .12rem;
        z-index: 10;
        display: flex;
    }
    .head p input{
        flex:1;
        margin: .05rem;
        border-radius: .15rem;
        border: none;
        padding-left: .4rem;
        font-size: .12rem;
    }
    .head p a{
        color: #fff;
        padding: 0 .08rem;
    }
    header{
        width: 100%;
        position: relative;
    }
    .header{
        width: 100%;
        height: auto;
    }
    .header swiper-slide{
        width: 100%;
        height: auto;
    }
    nav{
        width: 100%;
        height: auto;
        margin: .1rem 0;
    }
    .box{
        width: 100%;
        height: auto;
        display: flex;
        font-size: .12rem;
        text-align: center;
    }
    .box dl{
        flex: 1;
    }
    .box dl dt{
        width: 100%;
    }
    .box img{
        width: 50%;
        margin:0 25%;
    }
    .box dl dd{
        line-height: .2rem;
    }

    section{
        flex: 1;
        margin-bottom: .45rem;
    }
    main{
        width: 100%;
        height: auto;
        overflow-y: scroll;
    }


    .kb{
        width: 100%;
        height: .3rem;
        line-height: .3rem;
        display: flex;
        text-align: center;
        font-size: .12rem;
    }
    .kb span{
        width: 25%;
    }
    .kb swiper{
        width: 65%;
    }
    .kb b{
        width: 15%;
    }
    .kb a{
        color:#333;
    }
    .kb .li span{
        padding: 0 .05rem;
        color:red;
    }


    .seckill-floor{
        width: 100%;
        height: auto;
    }
    .seckill-title{
        width: 100%;
        height: .35rem;
        line-height: .35rem;
        display: flex;
        font-size: .12rem;
    }
    .seckill-left{
        flex: 7;
    }
    .seckill-left img{
        height: .3rem;
        width: auto;
        margin-top: .03rem;
        float: left;
    }
    .seckill-left strong{
        margin-left: .05rem;
    }
    .time span{
        border: 1px solid #ccc;
        padding: .02rem;
        margin: 0 .02rem;
    }
    .seckill-right{
        float: right;
        width: 30%;
        color: #f00;
        font-size: .12rem;
    }
    .seckill-right img{
        width: 12%;
        margin-left: .05rem;
    }

    .seckill-sec{
        height: auto;
        text-align: center;
    }
    .con .swiper-wrapper{
        display: flex;
    }
    .con .swiper-wrapper .swiper-slide{
        width: 30% !important;
    }
    .con img{
        width: 70%;
    }
    .xj{
        color: red;
        font-size: .14rem;
        font-weight: bold;
    }
    .yj{
        color: #999;
        font-size: .12rem;
        text-decoration: line-through;
    }
    .footer_list{
        width: 100%;
        height: auto;
    }
    .footer_list li{
        width: 50%;
        float: left;
    }


    .real-box{
        width: 100%;
        height: auto;
    }
    .real-show{
        width: 50%;
        height: auto;
        float: left;
        padding: .05rem 0;
    }
    .graphic-text{
        float: left;
    }
    .graphic-tit,.graphic-tit_1{
        font-size: .14rem;
    }
    .graphic-wz,.graphic-wz_1{
        font-size: .12rem;
    }
    .graphic-img{
        float: right;
    }
    .graphic-img img{
        width: 70%;
    }
    .hr_img{
        width: 100%;
        height: auto;
    }
    .hr_img img{
        width: 20%;
        margin:0 40%;
    }
    .real-l{
        float: left;
        width: 50%;
        height: auto;
    }
    .real-r{
        float: left;
        width: 50%;
        height: auto;
    }
    .graphic-imgs{
        width: 100%;
        height: auto;
    }
    .graphic-imgs img{
        width: 50%;
        height: auto;
        margin: 0 25%;
    }

    /* 发现好店 */
    .shop_list{
        margin-top: .1rem;
        width: 100%;
        height: auto;
    }
    .shop_img{
        width: 100%;
        height: .35rem;
        line-height: .35rem;
    }
    .shop_img>img{
        width: 25%;
        height: auto;
        margin:.05rem 0 0 35%;
    }
    .shop_img span{
        width: 24%;
        float: right;
        font-size: .12rem;
    }
    .shop_img span img{
        width: 15%;
        margin-left: .05rem;
    }
    .shop-list ul{
        width: 100%;
        height: auto;
        font-size: .12rem;
    }
    .shop-list li{
        width: 50%;
        float: left;
    }
    .hd_img{
        width: 100%;
    }
    .shop-list li strong{
        font-size: .14rem;
    }
    .hd_img img{
        width: 50%;
        float: left;
    }
    .b_p{
        text-align: center;
        color: #fff;
        background: rgba(0,0,0,0.6)
    }


    /* 推荐 */
    .tj{
        width: 100%;
        height: auto;
    }
    .tj_tit{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .12rem;
        color: #999;
    }
    .tj ul{
        width: 100%;
        height: auto;
    }
    .tj ul li{
        width:46%;
        float: left;
        margin:.1rem 0 0 3%;
    }
    .tj p{
        font-size: .14rem;
    }
    .tj .hp_xs{
        width: 100%;
        font-size: .1rem;
    }
    .hp_xs button{
        float: right;
        font-size: .1rem;
        padding: .02rem;
    }

    footer{
        width: 100%;
        height: .45rem;
        line-height: .45rem;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
    }
    footer ul{
        width: 100%;
        height: auto;
        display: flex;
    }
    footer ul li{
        flex: 1;
        padding: .06rem;
    }
</style>