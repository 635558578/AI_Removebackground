<template>
  <!-- 登录盒子 -->
  <div class="innerBox">
    <div class="loginbox">
      <el-form
        :rules="rules"
        class="login-form"
        :model="loginForm"
        @keyup.enter.native="login"
      >
        <el-form-item>
          <div class="denglu">登录</div>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            placeholder="请输入账号"
            prefix-icon="el-icon-s-custom"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            type="password"
            v-model="loginForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item style="line-height:20px!important;">
            <div class="registe">
          <router-link :to="{ path: '/registe' }" replace
            >点击注册
          </router-link>
        </div>
        <div class="forget">
          <router-link :to="{ path: '/forget' }" replace
            >忘记密码
          </router-link>
        </div>
        </el-form-item>

        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            style="width: 100%"
            round
            @click="login"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loading: false,
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {},
  methods: {
    login() {
      if (this.loginForm.username == "" || this.loginForm.password == "") {
        this.$message.error("请填写完整！");
      } else if (
        this.loginForm.username == localStorage.getItem("username") &&
        this.loginForm.password == localStorage.getItem("password")
      ) {
        this.$message.success("登陆成功！");
        this.$router.push("/upload");
      } else {
        this.$message.error("账号或密码错误,请重试！");
      }
    },
  },
};
</script>
<style scoped>
.innerBox {
  background-color: #749ad8;
  height: 100%;
  width: 100%;
  background: url(../assets/beijing1.png);
  display: flex;
}
.loginbox {
  height: 350px;
  width: 430px;
  background-color: rgb(242, 243, 246);
  border-radius: 14px;
  margin: 13rem auto;

  padding: 1rem;
  min-width: 20rem;
  max-width: 30rem;
  word-wrap: break-word;
}
.forget {
  margin-right: 10px;
  float: right;
}
.registe {
  margin-left: 10px;
  float: left;
}
a {
  font-size: 15px;
  color: #0094ff;
  text-decoration: none;
}
.denglu {
  color: black;
  text-align: center;
  font-family: "Lato", "sans-serif";

  font-size: 27px;
}
h2 {
  text-align: center;
  font-family: "Lato", "sans-serif";
  font-weight: 300;
  /* font-spacing:2px; */
  font-size: 28px;
}
.login-form {
  margin: 0 auto;
  width: 300px;
  padding-top: 30px;
}
.el-input__inner {
  background-color: rgba(219, 203, 203, 0.356);
  border-radius: 0;
  border: 1px solid #1126e9;
  color: rgba(0, 0, 0, 0.7);
}
.el-input__inner::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.el-button {
  border-radius: 4px;
}
</style>
