<template>
        <nav class="navbar navbar-default navbar-fixed-top">
        <div class="sign">
            <a href="./signup.html" class="">
                <button type="button" class="btn btn-link">Đăng ký</button>
            </a>

            <a href="./login.html" class="">
                <button type="button" class="btn btn-link">Đăng nhập</button>
            </a>
            <div style="margin-top: 10px;">
                <i class='bx bxs-cart-download' style=" font-size: 30px"></i>
            </div>
        </div>
        <div class="container">
            <a class="navbar-brand" href="#myPage">SHYNTEE</a>

            <div class="input-group">
                <input type="search" class="form-control" style="margin-left: 5 0px;" placeholder="Nhập tên sản phẩm" required>
                <div class="input-group-btn">
                    <button type="button" class="btn btn-dark">Tìm kiếm</button>
                </div>

            </div>
            <div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="./homepage.html">TRANG CHỦ</a></li>
                    <li><a href="./sanpham.html">SẢN PHẨM</a></li>
                    <li><a href="./detailSanpham.html">GIỚI THIỆU</a></li>
                    <li><a href="giohang.html">HƯỚNG DẪN</a></li>
                    <li><a href="thanhtoan.html">BẢNG SIZE</a></li>
                </ul>
            </div>


        </div>

    </nav>
    <!-- --------------------------------------------------------- -->
    <div class="container1">
        <img style="margin-top: 80px" src="img/ourproduct.jpeg" alt="Paris">
    </div>
    <br>
    <div>

        <div class="container-fluid mt-3">
            <h4>__________ TẤT CẢ SẢN PHẨM __________</h4><br>
            <div style="text-align: center; padding-bottom: 30px;"><br>
                <button @click="get_all" type="button" class="btn btn-secondary">Tất cả</button>
                <button @click="get_tshirt" type="button" class="btn btn-secondary">T-shirt</button>
                <button @click="get_hoodie" type="button" class="btn btn-secondary">Hoodie</button>
                <button @click="get_quan" type="button" class="btn btn-secondary">Quần</button>
                <button @click="get_phukien" type="button" class="btn btn-secondary">Phụ kiện</button>
                <button @click="get_aokhoac" type="button" class="btn btn-secondary">Áo khoác</button>
            </div>
            <div class="row">
                    <div v-for="p in products" :key="p.id" class="col-sm-3 p-3 bg-white">
                        <router-link  target="_blank" :to="{ path: 'detail_product', query: { id: p.id }}">
                            <div class="thumbnail">
                                <img :src="p.imgs[0]" alt="Paris">
                                <p><strong>{{ p.title }}</strong></p>
                            </div>
                        </router-link>
                    </div>
            </div>
            <br>
        </div>

        <ul class="pagination" style="margin-left: 400px; ">
            <li class="page-item"> <a class="page-link" href="#" style="color:black">Previous</a></li>
            <li class=" page-item "><a class="page-link " href="# " style="color:black">1</a></li>
            <li class="page-item "><a class="page-link " href="# " style="color:black">2</a></li>
            <li class="page-item "><a class="page-link " href="# " style="color:black">3</a></li>
            <li class="page-item "><a class="page-link " href="# " style="color:black">Next</a></li>
        </ul>
    </div>



    <!-- ------------- -->
    <footer class="container-fluid text-center ">

        <div class="row ">
            <div class="col-sm-4 thumbnail ">
                <div class="my-5 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.29442044!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1633069353566!5m2!1svi!2s " width=" " height="200px
                    " style="border:0; " allowfullscreen=" " loading="lazy "></iframe>
                </div>
            </div>
            <div class="col-sm-4 thumbnail " style="height: 217px; ">
                <h4>SHYNTEE</h4>
                <p>SHYNTEE được thành lập vào năm 2021 Tất cả sản phẩm của SHYNTEE đều được tự thiết kế và sản xuất dựa theo tiêu chí chất lượng. Tất cả sản phẩm của SHYNTEE đều thuộc bản quyền của SHYNTEE </p>
            </div>
            <div class="col-sm-4 thumbnail " style="height: 217px; ">
                <h4>THÔNG TIN LIÊN HỆ</h4>
                <p> Hotline: 0984269047 <br>Cơ sở 1: Yên Mô – Ninh Bình <br>Cơ sở 2: Hà Đông – Hà Nội<br> Mail: ttrang03102000@gmail.com

                </p>
            </div>
        </div>
    </footer>
</template>
<script>
import api from "@/api/base"
export default {
    data: () => ({
        products: []
   }),
    created () {
    api.get('/products')
        .then(r => {
        this.products = r.data.products
    })
    },
    methods: {
        get_all: function () {
            api.get('/products')
                .then(r => {
                this.products = r.data.products
            })
        },
        get_tshirt: function () {
            api.get('/products?category=tshirt')
                .then(r => {
                this.products = r.data.products
            })
        },
        get_hoodie: function () {
            api.get('/products?category=hoodie')
                .then(r => {
                this.products = r.data.products
            })
        },
        get_quan: function () {
            api.get('/products?category=quan')
                .then(r => {
                this.products = r.data.products
            })
        },
        get_phukien: function () {
            api.get('/products?category=phukien')
                .then(r => {
                this.products = r.data.products
            })
        },
        get_aokhoac: function () {
            api.get('/products?category=aokhoac')
                .then(r => {
                this.products = r.data.products
            })
        },

   }

}
</script>