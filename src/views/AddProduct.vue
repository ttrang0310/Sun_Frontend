<script>
import api from "@/api/base"
export default ({
    name: 'AddProduct',
    data () {
        return {
           title: '', 
           description: '',
           price: '',
           category: '',
           quantity: '',
           img1: '',
           img2: '',
           img3: '',

        }
    },
    methods: {
        create_product: function () {
            var body = {
                category: this.category,
                title: this.title,
                description: this.description,
                price: this.price,
                quantity: this.quantity,
                imgs: [this.img1, this.img2, this.img3]
            }

            api.post('/products', body)
            .then(r => {
                alert(r.data.msg)
            })

        }
    },
})
</script>

<template>
    <form>
        <h2  style="color: black; text-align: center;margin-top: 40px;margin-bottom: 0;  ">Thêm sản phẩm</h2> 
        <div class="container">
            <input v-model="title" id="title" type="text"  style="height:35px;color: black;" placeholder="Nhập tên sản phẩm" name="title" required>
            <input v-model="price" type="text" style="height:35px;color: black;" placeholder="Nhập giá sản phẩm" name="price" required>
            <input v-model="description" type="text" style="height:35px;color: black;" placeholder="Nhập mô tả sản phẩm" name="description" required>
            <input v-model="quantity" type="text" style="height:35px;color: black;" placeholder="Nhập số lượng sản phẩm" name="quantity" required>
            <input v-model="main_url" type="text"  style="height:35px;color: black;" placeholder="Ảnh sản phẩm 1" name="main_url" required>
            <input v-model="secondary_url" type="text" style="height:35px;color: black;" placeholder="Ảnh sản phẩm 2" name="second_url" required>
            <input v-model="thirt_url" type="text" style="height:35px;color: black;" placeholder="Ảnh sản phẩm 3" name="thirt_url" required>

            <label for="cars">Chọn danh mục sản phẩm: </label>

            <select v-model="category" name="category" id="category"  style="height:30px; width: 200px;" >
                 <option value="tshirt">T-shirt</option>
                <option value="hoodie">Hoodie</option>
                <option value="quan">Quần</option>
                <option value="phukien">Phụ kiện</option>
                <option value="aokhoac">Áo khoác</option>
            </select><br>

            <a href="management.html"> <button type="button" class="btn btn-secondary" style="background-color:rgb(0, 0, 0); color: rgb(255, 255, 255); height: 40px; width: 200px; font-size: 15px; margin-left: 30%;">Hủy</button></a>
            <button @click="create_product" type="button" class="btn btn-secondary" style="background-color:rgb(0, 0, 0); color: rgb(255, 255, 255);  height: 40px;width: 200px; font-size: 15px;">Thêm sản phẩm</button>
        </div>
    </form>

</template>
<style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        
        form {
            border: 3px solid #f1f1f1;
        }
        
        input[type=text],
        input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        
        button {
            background-color: #04AA6D;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
        }
        
        button:hover {
            opacity: 0.8;
        }
        
        .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
        }
        
        .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
        }
        
        img.avatar {
            width: 40%;
            border-radius: 50%;
        }
        
        .container {
            padding: 16px;
        }
        
        span.psw {
            float: right;
            padding-top: 16px;
        }
        /* Change styles for span and cancel button on extra small screens */
        
        @media screen and (max-width: 300px) {
            span.psw {
                display: block;
                float: none;
            }
            .cancelbtn {
                width: 100%;
            }
        }
</style>