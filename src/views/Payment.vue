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
                    <!-- <button type="button" class="btn btn-dark">Tìm kiếm</button>    -->
                </div>

            </div>


            <div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="./homepage.html">TRANG CHỦ</a></li>
                    <li><a href="./sanpham.html">SẢN PHẨM</a></li>
                    <li><a href="./detailSanpham.html">GIỚI THIỆU</a></li>
                    <li><a href="#pricing">HƯỚNG DẪN</a></li>
                    <li><a href="#contact">BẢNG SIZE</a></li>
                </ul>
            </div>


        </div>

    </nav>
    <!-- --------------------------------------------------------- -->


<div class="container" style="width: fit-content;  " method="post">
    <h4>__________ Thanh toán __________</h4><br>
    <h5 style="margin-top: 100px">Bạn đã có tài khoản? </h5>
    <a href="/login.html">Đăng nhập</a>

    <table class="table" style="width: 1000px; margin-left: 0; ">

        <tbody>
            <tr v-for="(p, idx) in cart" :key="idx">
                <td style="width: 70px"> <img :src="p.imgs[0]" style="height: 100px; "> </td>
                <td>
                    <div style="color: red ">{{ p.title }}</div>
                    <div>{{ p.price }}</div>
                    <div>{{ p.quantity }}</div>
                </td>

            </tr>

        </tbody>

    </table>

    <!-- <form> -->
    <input v-model="name" type="text" placeholder=" Họ tên">
    <input v-model="email" type="text" placeholder=" Email">
    <input v-model="phone" type="text" placeholder=" Số điện thoại.">
    <input v-model="address" type="text" placeholder=" Địa chỉ"><br>
    <label for="">Phương thức vận chuyển:</label>
    <select>
          <option value=""> Giao hàng tận nơi-30k</option>   
        </select> <br>
    <label for="">Phương thức thanh toán</label>
    <select>
            <option value="">Momo</option> 
            <!-- <option value="">Paypal</option>      -->
            <option value="">Thanh toán khi nhận hàng</option>   
          </select>
    <!-- </form> -->
    <div style="color: red;  ">Tạm tính: {{ this.total }}</div>
    <div style="color: red; ">Tổng tiền: {{ this.total + 30000 }} </div>
    <div style="color: red; ">Tổng tiền: {{ this.total + 30000 }} </div>
    <button @click="create_order" type="button" class="btn btn-dark">Hoàn tất đơn hàng</button>
</div>
</template>
<script>
import api from "@/api/base"
export default {
    data: () => ({
        cart: [],
        email: localStorage.getItem('email'),
        address: localStorage.getItem('address'),
        phone: localStorage.getItem('phone'),
        name: localStorage.getItem('name'),
        total: null,
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
        create_order: function () {
            if (this.cart.length) {
                api.post('/payment', {'items': this.cart})
                    .then(r => {
                        if (r.data.status) {
                        location.href = r.data.url
                    }
                })
            }
        }
    }
}
</script>