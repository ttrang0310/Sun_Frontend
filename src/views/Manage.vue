<template>
            <div >
        <div>

            <div class="abc">
                <div>
                    <div >
                        <h1><strong>Admin: Quản lý sản phẩm</strong></h1>
                    </div>
                </div>

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
                    <div class="bg-light m-4 p-3   ">
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
                <a href="add.html"><button type="button" class="btn btn-secondary" style="background-color:rgb(0, 0, 0); color: rgb(255, 255, 255); width: 200px;">Thêm sản phẩm</button></a>

                <div class="d-flex justify-content-end pr-4">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link text-dark" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
                        <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link text-dark" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>
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