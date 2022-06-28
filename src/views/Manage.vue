<template>
            <div class="container-fluid" style="background-color: rgb(0, 0, 0);">
        <div class="row ">

            <div class="col-9 p-5  ">
                <div class="d-flex ">
                    <div class="   text-white">
                        <h1><strong>Admin: Quản lý sản phẩm</strong></h1>
                    </div>
                </div>

                <div class="  ">
                    <div class="d-flex  ">
                        <div class="px-4  ">
                            <div class="input-group ">
                                <input type="text" placeholder="Tìm kiếm sản phẩm...">
                                <div class="input-group-append">
                                    <button class="btn btn-dark" type="button" id="button-addon2">
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
                                <tr>
                                    <td style="width: 10%;">
                                        <img src="img/Blue.jpeg" style="width: 100%;" alt="">
                                    </td>
                                    <td>Blue </td>
                                    <td>T-shirt</td>
                                    <td>350000</td>
                                    <td>23</td>
                                    <td><a href="/edit.html" class="">Sửa </a></td>
                                    <td><a href="#" class="">Xóa  </a></td>
                                </tr>
                                <tr>
                                    <td style="width: 10%;">
                                        <img src="img/OutDoor Jacket.jpg" style="width: 100%;" alt="">
                                    </td>
                                    <td>OutDoor Jacket </td>
                                    <td>Jacket</td>
                                    <td>230000</td>
                                    <td>63</td>
                                    <td><a href="/edit.html" class="">Sửa </a></td>
                                    <td><a href="#" class="">Xóa  </a></td>
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
export default {
    data() {
        return {
            
        }
    },
    methods: {

    },
    created: {

    }
}
</script>