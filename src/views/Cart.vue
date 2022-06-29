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

    <div style="margin-top: 30px;height: 100%;">

    </div>
    <h4>__________ Giỏ hàng của bạn __________</h4><br>

    <table class="table" style="width: 1000px; margin-left: 250px; ">

        <tbody>
            <tr v-for="(p, idx) in cart" :key="p.id">
                <td style="width: 70px"> <img :src="p.imgs[0]" style="height: 100px; "> </td>
                <td>
                    <div  >{{ p.title }}</div>
                    <div>{{ p.price }}</div>
                    <ul class="pagination ">
                        <li @click="p.quantity--, has_changed = !has_changed" class="page-item "><a class="page-link " href="# " style="color: black ">-</a></li>
                        <li class="page-item "><a class="page-link " href="# " style="color: black ">{{ p.quantity }}</a></li>
                        <li @click="p.quantity++, has_changed = !has_changed" class="page-item "><a class="page-link " href="# " style="color: black ">+</a></li>
                    </ul>
                </td>
                <td ><i @click="delete_product(idx)" class='bx bxs-trash-alt' style="font-size: 30px "></i></td>
            </tr>

        </tbody>
    </table>

    <div style="margin-left: 1000px">
        <div style="font-size: 20px;">Total: {{ this.total }}</div>
        <div>
            <router-link  target="_blank" :to="{path: 'payment',}">
                <button type="button" class="btn btn-dark" style="height:40px; width:100px; font-size:15px" >Thanh toán</button><br><br>
            </router-link>
            
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        cart: [],
        total: 0,
        has_changed: false,
    }),
    created () {
        this.cart = JSON.parse(localStorage.getItem('cart'))
        if (!this.cart) {
            this.cart = []
        }
        if (this.cart.length) {
            this.cart.forEach(p => this.total = this.total + (p.quantity * p.price))
        }
    },
    methods: {
        delete_product: function (idx) {
            this.cart.splice(idx, 1)
            localStorage.setItem('cart', JSON.stringify(this.cart))
        }
    },
    watch: {
        has_changed: function () {
            this.total = 0
            if (this.cart.length) {
                this.cart.forEach(p => this.total = this.total + (p.quantity * p.price))
            }
        }
    }
}
</script>