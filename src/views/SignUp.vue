<template>
    <div class="container" style="width: fit-content; ">
         <h2 style="text-align: center;margin-top: 50px;font-size: 30px;" >Đăng ký </h2>

        <hr>  
        <input v-model="email" type="text" placeholder="Nhập Email" id="email" style="color: black; width: 800px;"><br> <br>  
        <input v-model="name" type="text" placeholder="Nhập name" id="name" style="color: black; width: 800px;"><br> <br> 
        <input v-model="password" type="text" placeholder="Nhập Password" id="password" style="color: black; width: 800px;" ><br> <br> 
        <input v-model="phone" type="text" placeholder="Nhập Số điện thoại" id="phone" style="color: black; width: 800px;"><br> <br> 
        <input v-model="address" type="text" placeholder="Nhập địa chỉ" id="address" style="color: black; width: 800px;"><br>   
<br>   <br>   
        <button @click="signup" type="button " class="btn btn-link " style="background-color: black;font-size: 15px;color: white;width: 200px; margin-left: 250px; ">Đăng ký</button>


    </div>
</template>
<script>
import api from "@/api/base"
export default {
    data: () => ({
        email: '',
        password: '',
        name: '',
        phone: '',
        address: '',
    }),
    methods: {
        signup: function (){
            var body = {
                email: this.email,
                name: this.name,
                password: this.password,
                phone: this.phone,
                address: this.address
            }
            api.post('http://210.245.54.243:5002/user', body)
                .then(r => {
                    alert(r.data.msg)
            })
    }
    }
}
</script>