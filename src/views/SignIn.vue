<template>
  <div>
    <h2 style="text-align: center;margin-top: 50px;font-size: 30px;" >Đăng nhập </h2>

      <div class="container" style="width: fit-content;  " method="post">
          <label for="uname" style="color: black;"><b>Username</b></label>
          <input v-model="email" id="username" type="text" style="color: black;" placeholder=" Username......" name="usename" required>

          <label for="psw" style="color: black;"><b>Password</b></label>
          <input v-model="password" type="password"  style="color: black;" placeholder="Password..." name="password" required>

          <!-- <a href="./management.html" class=""> -->
              <button @click="signIn" type="button"  class="btn btn-link" name="login" style="background-color: black; color: white; height: 40px; font-size: 15px;">Đăng nhập</button>
          <!-- </a> -->
          <label>
       
      </label>
      </div>
  </div>
</template>
<script>
import api from "@/api/base"
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    signIn: function () {
      api.post('/login', {email: this.email, password: this.password})
        .then(r => {
            localStorage.setItem('login_status', 'logged')
            localStorage.setItem('email', r.data.email)
            localStorage.setItem('id', r.data.id)
            localStorage.setItem('role', r.data.role)
            localStorage.setItem('phone', r.data.phone)
            localStorage.setItem('address', r.data.address)
        }).then(r => {
            location.href = 'http://http://210.245.54.243:3000/homepage'
        })
    }
  }
}
</script>
<style lang="scss" scope>
@media (min-width: 1024px) {
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
            padding: 16px !important;
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

}
</style>
