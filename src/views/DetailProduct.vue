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
                    <li><a href=" ">GIỚI THIỆU</a></li>
                    <li><a href=" ">HƯỚNG DẪN</a></li>
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

    <div style="margin-top: 20px;height: 100%;">
        <div class="row">
            <div class="col-sm-3 p-3 bg-white">
                  <img @click="main_url = img" v-for="(img, idx) in product.imgs" :key="idx" style="height: 100px; width: 100px;" :src="img"> 
            </div>
            <div class="col-sm-5  bg-white">
                <img style="height: 400px; width: 400px;" :src="main_url">
            </div>
            
            <div class="col-sm-4 p-3 bg-white">
                <div style="font-size: 30px;  ">Signature 1 Tee SKU</div>
                <div style="font-size: 20px;"> {{ product.price }}</div>
                <div>
                    <ul class=" pagination ">
                        <li @click="decrease" class="page-item "><a class="page-link " href="# ">-</a></li>
                        <li class="page-item "><a class="page-link " href="# ">{{ quantity }}</a></li>
                        <li @click="increase" class="page-item "><a class="page-link " href="# ">+</a></li>
                    </ul>
                </div>

                <button @click="add_to_cart" class="btn btn-dark " style="height: 40px;width: 200px; font-size: 15px;">Thêm vào giỏ hàng</button>
                <div style="margin-top: 20px">
                    MÔ TẢ
                    <br>Chất liệu: Cotton 2 chiều
                    <br>Màu sắc: Hồng
                    <br>Họa tiết: In kéo lụa
                    <br> Form áo: Oversize
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from "@/api/base"
export default {
    data: () => ({
        product: {},
        quantity: 1,
        main_url: ''
    }),
    created () {
        var url = `/products?product_id=${this.$route.query.id}` 
        api.get(url)
            .then(r => {
                this.product = r.data.product
                this.main_url = r.data.product.imgs[0]
        })
    },
    methods: {
        decrease: function () {
            if (this.quantity == 1) {
                this.quantity = 0
            } else {
                this.quantity = this.quantity - 1
            }
        },
        increase: function () {
            this.quantity = this.quantity + 1
        },
        add_to_cart: function () {
            this.product.quantity = this.quantity
            var cart = localStorage.getItem('cart')
            if (cart) {
                cart = JSON.parse(cart)
            } else {
                cart = []
            }
            cart.push(this.product)
            localStorage.setItem('cart', JSON.stringify(cart))
            alert('Đã thêm vào giỏ hàng')
        }
    }
}
</script>