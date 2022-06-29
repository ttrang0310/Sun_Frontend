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
        <img src="img/ourproduct.jpeg" alt="Paris">
    </div> 
    <div> 
        <div class="container-fluid mt-3">
            <h4>__________ TẤT CẢ SẢN PHẨM __________</h4><br>
            <div style="text-align: center; "><br>
                <button @click="get_all" type="button" class="btn btn-secondary" style="margin-right: 5px;background-color: black; width:100px;">Tất cả</button>
                <button @click="get_tshirt" type="button" class="btn btn-secondary" style="margin-right: 5px;background-color: black; width:100px;">T-shirt</button>
                <button @click="get_hoodie" type="button" class="btn btn-secondary" style="margin-right: 5px;background-color: black; width:100px;">Hoodie</button>
                <button @click="get_quan" type="button" class="btn btn-secondary" style="margin-right: 5px;background-color: black; width:100px;">Quần</button>
                <button @click="get_phukien" type="button" class="btn btn-secondary" style="margin-right: 5px;background-color: black; width:100px;">Phụ kiện</button>
                <button @click="get_aokhoac" type="button" class="btn btn-secondary" style="margin-right: 5px;background-color: black; width:100px;" >Áo khoác</button>
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
                <h4 style="color:white">SHYNTEE</h4>
                <p>SHYNTEE được thành lập vào năm 2021 Tất cả sản phẩm của SHYNTEE đều được tự thiết kế và sản xuất dựa theo tiêu chí chất lượng. Tất cả sản phẩm của SHYNTEE đều thuộc bản quyền của SHYNTEE </p>
            </div>
            <div class="col-sm-4 thumbnail " style="height: 217px; ">
                <h4 style="color:white">THÔNG TIN LIÊN HỆ</h4>
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