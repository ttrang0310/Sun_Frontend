<template>
          <nav class="navbar navbar-default  ">
        
        <div class="container" style="display:inline">
           <div> <a class="navbar-brand" href="#myPage">SUN</a></div>

            <div class="input-group">
                <input type="search" class="form-control"  style="font-size:15px" placeholder="Nhập tên sản phẩm" required>
                <div class="input-group-btn">
                    <button type="button" class="btn btn-dark" style="font-size:15px">Tìm kiếm</button>
                </div>
                <div></div>
            </div>
            <div>
                <ul class="nav navbar-nav "  style="display:inline-block">
                    <li><a href="/homepage">TRANG CHỦ</a></li>
                    <li><a href="/products">SẢN PHẨM</a></li>
                    <li><a href="coming soon">GIỚI THIỆU</a></li>
                    <li><a href="">HƯỚNG DẪN</a></li>
                    <li><a href=" ">BẢNG SIZE</a></li>
                </ul>
            </div>


        </div>
        <div class="sign">
            <a href="./signup.html" class="">
                <button type="button" class="btn btn-link"   style="font-size:15px" >Đăng ký</button>
            </a>

            <a href="./login.html" class="">
                <button type="button" class="btn btn-link" style="font-size: 15px;">Đăng nhập</button>
            </a>
            <div style="margin-top: 10px;">
                <i class='bx bxs-cart-download' style=" font-size: 30px"></i>
            </div>
        </div>

    </nav>
    <!-- --------------------------------------------------------- -->
    <div class="container1">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                    <img src="img/slide.png" alt="Los Angeles" style="width:100%;">
                </div>

                <div class="item">
                    <img src="img/slide.jpg" alt="Chicago" style="width:100%;">
                </div>

                <div class="item">
                    <img src="img/slide (2).jpg" alt="New york" style="width:100%;">
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <br>
    <!-- --------------------------------- -->
    <div class="container">
        <div class="row">
            <a v-for="p in top" :key="p.id" :href="`/detail_product?id=${p.id}`">
                <div class="  " style="margin-right: 160px;" >
                    <div class="thumbnail">
                        <img class="thumbnail" :src="p.imgs[0]" alt="Paris">
                        <p><strong>p.category</strong></p>
                        <p>Giảm giá shok</p>
                    </div>
                </div>
            </a>
    </div>
</div>
    <!-- ------------------------------------------ -->
    <div class="container">

        <h4>__________ CÂU CHUYỆN VỀ NGUỒN GỐC CỦA MẪU HOẠ TIẾT IRON FLAME _________</h4><br>
        <video width="1080" height="720" autoplay muted>
                <source src="img/Grimm DC.mp4" type="video/mp4">  
            </video>

        <!-- ------------------------------------------- -->
        <br><br><br><br> 
        <h4>__________ SẢN PHẨM MỚI VỀ __________</h4><br>
        <div id="myslide1" data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'>
                        <div>
                <div class="thumbnail">
                    <img src="img/TSUN Lit Mascot Polo.jpg" alt="Paris">
                    <p><strong>Sig 1 - Pink</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/hoodie.jpeg" alt="Paris">
                    <p><strong>Sig 1 - Pink </strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/Sweater Tiedye.jpg" alt="Paris">
                    <p><strong>TSUN Mascot Shirt</strong></p>
                </div>
            </div>
            <div>
                <div class="img/thumbnail">
                    <img src="TSUN Lit Mascot Polo.jpg" alt="Paris">
                    <p><strong>LNY Lì Xì Tee</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/quan.jpg" alt="Paris">
                    <p><strong>TSUN Sticker Tee</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/phukien.jpg" alt="Paris">
                    <p><strong>TSUN Basic Shirt</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/TSUN Lit Mascot Polo.jpg" alt="Paris">
                    <p><strong>TSUN Mascot Cupid Tee</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/floral_hoodie_white_ms_58f5358187814fc1a75fcd7bd9d01536_master.jpg" alt="Paris">
                    <p><strong>ABC</strong></p>
                </div>
            </div>

        </div>
        <!-- ------------------------------------------- -->
        <h4>__________ SẢN PHẨM __________</h4>
        <div class="container" id="myslide2" data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'>
                        <div>
                <div class="thumbnail">
                    <img src="img/Tote Bag Canva.jpg" alt="Paris">
                    <p><strong>TSUN Backpack</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/TSUN Mascot Tattooss Hoodieazdvc.jpg" alt="Paris">
                    <p><strong>TSUN Mascot Tattooss </strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/TSUN Black.jpg" alt="Paris">
                    <p><strong>TSUN Black</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/TSUN Lit Mascot Polo.jpg" alt="Paris">
                    <p><strong>Tsun Black Socks</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/quan.jpg" alt="Paris">
                    <p><strong>TSUN Mascot Keychain</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/TSUN Mascot Sweater.jpg" alt="Paris">
                    <p><strong>TSUN Mascot Sweater</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/TSUN Lit Mascot Polo.jpg" alt="Paris">
                    <p><strong>TSUN Mascot Wallet</strong></p>
                </div>
            </div>
            <div>
                <div class="thumbnail">
                    <img src="img/floral_hoodie_white_ms_58f5358187814fc1a75fcd7bd9d01536_master.jpg" alt="Paris">
                    <p><strong>TSUN Messenger Bag </strong></p>
                </div>
            </div>

        </div>
        <!-- ------------------------------------------- --><br>
        <h4>__________ SẢN PHẨM ĐANG GIẢM GIÁ _________</h4>

        <p id="countdown"></p>
        <div class="container sales">
            <div class="row thumbnail">
                <div class="col-sm-3 sale-item-large">
                    <div>
                        <img src="img/black_socks_a026a3f5f00d44d6a9a65ffeb6d19b5e_master.jpg" alt="Paris">
                    </div>
                    <div>
                        <img src="img/bucket_651fc6e2c5ac444c8b428f2ff2374939_master.jpg" alt="Paris">
                    </div>
                </div>
                <div class="col-sm-6 sale-item"><img src="img/phukien.jpg" alt="Paris"></div>
                <div class="col-sm-3 sale-item-large">
                    <div>
                        <img src="img/Tote Bag Canvas.jpg" alt="Paris">
                    </div>
                    <div>
                        <img src="img/2-pk9702-tx05-1_f544b28fcb784cc5b48450b3864fce8a_master.jpg" alt="Paris">
                    </div>
                </div>
            </div>
            <div class="row thumbnail">
                <div class="col-sm-3 sale-item"><img src="img/floral_hoodie_white_ms_58f5358187814fc1a75fcd7bd9d01536_master.jpg" alt="Paris"></div>
                <div class="col-sm-3 sale-item"><img src="img/hoodie.jpeg" alt="Paris"></div>
                <div class="col-sm-3 sale-item"><img src="img/quan.jpg" alt="Paris"></div>
                <div class="col-sm-3 sale-item"><img src="img/floral_hoodie_white_92c4b434911549a18372e8c746d14ea6_master.jpg" alt="Paris"></div>
            </div>

        </div>
        <!-- ------------------------------------------- --><br><br>

        <div class="row " style="margin-top: 100px">

        </div>
    </div>



    <!-- ------------- -->
    <footer class="container-fluid text-center">

        <div class="row ">
            <div class="col-sm-4 thumbnail ">
                <div class="my-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.29442044!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1633069353566!5m2!1svi!2s" width=" " height="200px" style="border:0;"  
                        loading="lazy"></iframe>
                </div>
            </div>
            <div class="col-sm-4 thumbnail" style="height: 217px;">
                <h4  style="color: white ;">SHYNTEE</h4>
                <p>SHYNTEE được thành lập vào năm 2021 Tất cả sản phẩm của SHYNTEE đều được tự thiết kế và sản xuất dựa theo tiêu chí chất lượng. Tất cả sản phẩm của SHYNTEE đều thuộc bản quyền của SHYNTEE </p>
            </div>
            <div class="col-sm-4 thumbnail" style="height: 217px;">
                <h4 style="color: white" >THÔNG TIN LIÊN HỆ</h4>
                <p> Hotline: 0984269047 <br>Cơ sở 1: Yên Mô – Ninh Bình <br>Cơ sở 2: Hà Đông – Hà Nội<br> Mail: ttrang03102000@gmail.com

                </p>
                <i class='bx bx-mail-send' style="font-size: 30px; margin-right: 20px;"></i>
                <i class='bx bxl-facebook-circle' style="font-size: 30px"></i>
            </div>
        </div>
    </footer>  
</template>
<style lang="scss" scope>
h2 {
    font-size: 24px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 600;
    margin-bottom: 30px;
}

h4 {
    font-size: 19px;
    line-height: 1.375em;
    color: #303030;
    font-weight: 400;
    margin-bottom: 30px;
}

.jumbotron {
    background-color: #f4511e;
    color: #fff;
    padding: 100px 25px;
    font-family: Montserrat, sans-serif;
}

.container-fluid {
    padding: 60px 50px;
}

.bg-grey {
    background-color: #f6f6f6;
}

.logo-small {
    color: #f4511e;
    font-size: 50px;
}

.logo {
    color: #f4511e;
    font-size: 200px;
}

.thumbnail {
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
}

.thumbnail img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}

.carousel-control.right,
.carousel-control.left {
    background-image: none;
    color: #f4511e;
}

.carousel-indicators li {
    border-color: #f4511e;
}

.carousel-indicators li.active {
    background-color: #f4511e;
}

.item h4 {
    font-size: 19px;
    line-height: 1.375em;
    font-weight: 400;
    font-style: italic;
    margin: 70px 0;
}

.item span {
    font-style: normal;
}

.panel {
    border: 1px solid #f4511e;
    border-radius: 0 !important;
    transition: box-shadow 0.5s;
}

.panel:hover {
    box-shadow: 5px 0px 40px rgba(0, 0, 0, .2);
}

.panel-footer .btn:hover {
    border: 1px solid #f4511e;
    background-color: #fff !important;
    color: #f4511e;
}

.panel-heading {
    color: #fff !important;
    background-color: #f4511e !important;
    padding: 25px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.panel-footer {
    background-color: white !important;
}

.panel-footer h3 {
    font-size: 32px;
}

.panel-footer h4 {
    color: #aaa;
    font-size: 14px;
}

.panel-footer .btn {
    margin: 15px 0;
    background-color: #f4511e;
    color: #fff;
}

.navbar {
    margin-bottom: 0;
    background-color: #000000 !important;
    z-index: 9999;
    border: 0;
    font-size: 15px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 2px;
    border-radius: 0;
    font-family: 'Times New Roman';
    border: 0;
}

.navbar li a {
    margin-top: 10px;
    color: #fff !important;
}

.navbar .navbar-brand {
    margin-top: 10px;
    font-size: 25px;
    color: rgb(255, 255, 255);
}

.navbar-default .navbar-brand {
    color: #ffffff !important;
}

.navbar-nav li a:hover,
.navbar-nav li.active a {
    color: #f4511e !important;
    background-color: rgb(0, 0, 0) !important;
}

.navbar-default .navbar-toggle {
    border-color: transparent;
    color: #fff !important;
}

.input-group {
    margin-top: 15px;
}

.sign {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 30px;
    color: #ffffff !important;
}

footer .glyphicon {
    font-size: 20px;
    margin-bottom: 20px;
    color: #f4511e;
}

.slideanim {
    visibility: hidden;
}

.slide {
    animation-name: slide;
    -webkit-animation-name: slide;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    visibility: visible;
}

@keyframes slide {
    0% {
        opacity: 0;
        transform: translateY(70%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}

@-webkit-keyframes slide {
    0% {
        opacity: 0;
        -webkit-transform: translateY(70%);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0%);
    }
}

@media screen and (max-width: 768px) {
    .col-sm-4 {
        text-align: center;
        margin: 25px 0;
    }
    .btn-lg {
        width: 100%;
        margin-bottom: 35px;
    }
}

@media screen and (max-width: 480px) {
    .logo {
        font-size: 150px;
    }
}

.myPage {
    margin: 0;
    padding: 0;
}

.container1 {
    width: 100%;
}

.navbar .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 70%;
}

.navbar-default .btn-link {
    color: rgb(255, 255, 255) !important;
    padding-bottom: 0px !important;
}

.navbar-nav>li>a {
    padding-top: 0px !important;
    padding-bottom: 5px !important;
}

.row .thumbnail img {
    width: auto !important;
    height: 100px !important;
    margin-bottom: 10px;
}

.row {
    margin-right: 15% !important;
    margin-left: 15% !important;
}

h4 {
    text-align: center;
}

#countdown {
    text-align: center;
    font-size: 50px;
}

.sales {
    height: 500px !important;
}

.sale-item {
    border: 1px;
    border-radius: 1px;
    border-style: solid;
    border-color: #e9dfdf;
}

.sale-item-large {
    border: 1px;
    border-radius: 1px;
    border-style: solid;
    border-color: #e9dfdf;
    height: 374px;
}

footer {
    background-color: black !important;
}

footer .thumbnail {
    color: white;
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
    background-color: rgb(0, 0, 0) !important;
}

.navbar-fixed-top {
    border-bottom: 0px !important;
}
</style>
<script>
import api from  "@/api/base"

export default {
    data: () => ({
        top: [],
        news: [],
        fake: []
    }),
    created () {
        api.get('/products')
            .then(r => {
            this.top = [r.data.products[0], r.data.products[1], r.data.products[2]]
        })
        api.get('/products?sort=desc')
            .then(r => {
                var num = [0, 1, 2, 3, 4, 5, 6]
                num.forEach(i => this.news.push(r.data.products[i]))
                var fake = [0, 5, 7, 2, 6, 9 ,13]
                fake.forEach(i => this.fake.push(r.data.products[i]))
        })
    },
    mounted () {
        $('#myslide1').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        });
        $('#myslide2').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
        });
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="countdown"
            document.getElementById("countdown").innerHTML = days + " Ngày " + hours + " giờ " +
                minutes + " phút " + seconds + " giây ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
    } 
}
</script>