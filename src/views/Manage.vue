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
                <button type="button" class="btn btn-link"   style="font-size:15px" >ADMIN</button>
            </a>
 
        </div>

    </nav>
            <div >
        <div>

            <div class="abc">
              

                <div class="  ">
                    <div class="   ">
                        <div class="px-4  ">
                            <div class="input-group ">
                                <input v-model="keyword" type="text" placeholder="Tìm kiếm sản phẩm...">
                                <div class="input-group-append">
                                    <button @click="search_product" class="btn btn-dark" type="button" id="button-addon2">
                                              <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light   " style="margin-left: 200px;margin-right: 300px;">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Tên sản phẩm </th>
                                    <th scope="col">Danh mục</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Kho hàng</th>
                                    <th scope="col">Sửa</th>
                                    <th scope="col">Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="p in products" :key="p.id">
                                    <td style="width: 10%;">
                                    <img :src="p.imgs[0]" style="width: 100%;" alt="">
                                    </td>
                                    <td>{{ p.title }}</td>
                                    <td>{{ p.category }}</td>
                                    <td>{{ p.price }}</td>
                                    <td>{{ p.quantity }}</td>
                                    <td @click="update_product(p)"><a  class="">Sửa </a></td>
                                    <td @click="delete_product(p.id)"><a  class="">Xoá </a></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <a href="/add_product"><button type="button" class="btn btn-secondary" style="background-color:rgb(0, 0, 0); color: rgb(255, 255, 255); width: 200px; height: 40px; font-size: 15px; margin-left: 500px;margin-bottom: 100px;">Thêm sản phẩm</button></a>

                 
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/base'
export default {
    data() {
        return {
            products: [],
            edit: {},
            keyword: ''
        }
    },
    methods: {
        update_product: function (body) {
            api.put('/products', body)
                .then(r => {
                alert(r.data.msg)
            })
        },
        logout: function () {
            localStorage.setItem('login_status', 'not loggin')
        },
        delete_product: function (_id) {
            api.delete(`/products?id=${_id}`)
                .then(r => {
                    alert(r.data.msg)
            })
        },
        search_product: function () {
            api.get(`/products?keyword=${this.keyword}`)
                .then(r => {
                    this.products = r.data.products
                })
        }

    },
    created () {
        api.get('/products')
            .then(r => {
                this.products = r.data.products
            })
    }
}
</script>
<style lang="sass" scoped>

</style>