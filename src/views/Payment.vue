<template>
         <nav class="navbar navbar-default  ">
        
        <div class="container" style="display:inline">
           <div> <a class="navbar-brand" href="#myPage">SUN </a></div>

            <div class="input-group">
                <input type="search" class="form-control"  style="font-size:15px" placeholder="Nhập tên sản phẩm" required>
                <div class="input-group-btn">
                    <button type="button" class="btn btn-dark" style="font-size:15px">Tìm kiếm</button>
                </div>
                <div></div>
            </div>
            <div>
                <ul class="nav navbar-nav "  style="display:inline-block">
                    <li><a href="./homepage.html">TRANG CHỦ</a></li>
                    <li><a href="./sanpham.html">SẢN PHẨM</a></li>
                    <li><a href=" ">GIỚI THIỆU</a></li>
                    <li><a href=" ">HƯỚNG DẪN</a></li>
                    <li><a href=" ">BẢNG SIZE</a></li>
                </ul>
            </div>


        </div>
        <div class="sign">
            <a href=" " class="">
                <button @click="logout" type="button" class="btn btn-link"   style="font-size:15px" >Đăng xuất</button>
            </a>
            <a href=" " class="">
                <button type="button" class="btn btn-link"   style="font-size:15px" >Đăng nhập</button>
            </a>
 
        </div>

    </nav>
    <!-- --------------------------------------------------------- -->


<div class="container" style="width: fit-content;  " method="post">
    <h4>__________ Thanh toán __________</h4><br>
    <h5 style=" ">Bạn đã có tài khoản? </h5>
    <a href="/login.html">Đăng nhập</a>

    <table class="table" style="width: 1000px; margin-left: 0; ">

        <tbody>
            <tr v-for="(p, idx) in cart" :key="idx">
                <td style="width: 70px"> <img :src="p.imgs[0]" style="height: 100px; "> </td>
                <td>
                    <div>{{ p.title }}</div>
                    <div>{{ p.price }}</div>
                    <div>{{ p.quantity }}</div>
                </td>

            </tr>

        </tbody>

    </table>

    <!-- <form> -->
    <input v-model="name" type="text" placeholder=" Họ tên" style="width: 500px"><br> <br>
    <input v-model="email" type="text" placeholder=" Email" style="width: 500px"><br> <br>
    <input v-model="phone" type="text" placeholder=" Số điện thoại." style="width: 500px"><br> <br>
    <input v-model="address" type="text" placeholder=" Địa chỉ" style="width: 500px"><br><br> 
    <label for="">Phương thức vận chuyển:</label>
    <select>
          <option value=""> Giao hàng tận nơi-30k</option>   
        </select> <br>
    <label for="">Phương thức thanh toán:   </label>
    <select>
            <option value="">Momo</option> 
            <!-- <option value="">Paypal</option>      -->
            <option value="">Thanh toán khi nhận hàng</option>   
          </select>
    <!-- </form> -->
    <div style="color: red;  ">Tạm tính: {{ this.total }}</div>
    <div style="color: red; ">Tổng tiền: {{ this.total + 30000 }} </div>
    <div style="color: red; ">Tổng tiền: {{ this.total + 30000 }} </div><br>
    <button @click="create_order" type="button" class="btn btn-dark"  style="height: 40px;width: 200px; font-size: 15px;">Hoàn tất đơn hàng</button><br><br> 
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