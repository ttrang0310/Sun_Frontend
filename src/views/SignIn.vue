<script>
export default ({
    data () {
        return {
           title: '', 
        }
    },
    methods: {
        test: function () {
            alert(this.title)
        }
    },
})
</script>

<template>
    <form>
        <h2>Thêm sản phẩm</h2>

        <img src="img/1-ba9207-tx01-2_6c57e57e57f848a3aaedf4536d75cbac_master.jpg" alt="Girl in a jacket" width="70" height="70">


        <div class="container">
            <input v-model="title" id="title" type="text" placeholder="Nhập tên sản phẩm" name="title" required>
            <input id="price" type="text" placeholder="Nhập giá sản phẩm" name="price" required>
            <input id="description" type="text" placeholder="Nhập mô tả sản phẩm" name="description" required>
            <input id="quantity" type="text" placeholder="Nhập số lượng sản phẩm" name="quantity" required>
            <input id="img1" type="text" placeholder="Main url" name="main_url" required>
            <input id="img2" type="text" placeholder="second url" name="second_url" required>
            <input id="img3" type="text" placeholder="thirt url" name="thirt_url" required>

            <label for="cars">Chọn danh mục sản phẩm: </label>

            <select name="category" id="category">
                 <option value="tshirt">T-shirt</option>
                <option value="hoodie">Hoodie</option>
                <option value="quan">Quần</option>
                <option value="phukien">Phụ kiện</option>
                <option value="aokhoac">Áo khoác</option>
            </select><br>

            <a href="management.html"> <button type="button" class="btn btn-secondary" style="background-color:rgb(0, 0, 0); color: rgb(255, 255, 255); width: 100px;">Hủy</button></a>
            <button @click="test" type="button" class="btn btn-secondary" style="background-color:rgb(0, 0, 0); color: rgb(255, 255, 255); width: 200px;">Thêm sản phẩm</button>
        </div>
    </form>

</template>
<style lang="scss" scoped>
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