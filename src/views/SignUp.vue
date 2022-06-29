<template>
    <div class="container" style="width: fit-content; ">
        <h1>Đăng ký</h1>
        <hr>

        <input v-model="email" type="text" placeholder="Nhập Email" id="email">
        <input v-model="name" type="text" placeholder="Nhập name" id="name">
        <input v-model="password" type="text" placeholder="Nhập Password" id="password">
        <input v-model="phone" type="text" placeholder="Nhập Số điện thoại" id="phone">
        <input v-model="address" type="text" placeholder="Nhập địa chỉ" id="address">

        <button @click="signup" type="button " class="btn btn-link " style="background-color: black; ">Đăng ký</button>


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