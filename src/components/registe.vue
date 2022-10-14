<template>
  <!-- 登录盒子 -->
  <div class="innerBox">
    <div class="loginbox">
      <el-form
        :rules="rules"
        class="login-form"
        :model="registeForm"
        @keyup.enter.native="login"
      >
        <el-form-item>
          <div class="denglu">注册</div>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            placeholder="账号"
            prefix-icon="el-icon-s-custom"
            type="text"
            v-model="registeForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            prefix-icon="el-icon-lock"
            type="password"
            v-model="registeForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="password1">
          <el-input
            placeholder="再次输入密码"
            prefix-icon="el-icon-lock"
            type="password"
            v-model="registeForm.password1"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            style="width: 100%"
            round
            @click="login"
            >注  册</el-button
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
      registeForm: {
        username: "",
        password: "",
        password1: "",
      },
      loading: false,
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password1: [{ required: true, message: "请再次输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {},
  methods: {
    login() {
      if(this.registeForm.username==''||this.registeForm.password==''||this.registeForm.password1==''){
        this.$message.error("请填写完整！");
        return;
      }else
      if (this.registeForm.password!==this.registeForm.password1) {
        this.$message.error("两次密码输入不一致！");
        return;
      } else {
        this.$message.success("注册成功！");
        localStorage.setItem("username",this.registeForm.username);
        localStorage.setItem("password",this.registeForm.password);
        this.$router.push("/login");
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
  /* top: 40%; */
  /* left: 50%; */
  margin: 13rem auto;

  padding: 1rem;
  min-width: 20rem;
  max-width: 30rem;
  /* background-color: rgb(142, 138, 138); */
  word-wrap: break-word;
  /* box-shadow: 7px 0em 0.1875em 0 rgb(0 0 0 / 10%), 20px -1em 0 -0.25em #fef0f0,
    20px -1em 0.1875em -0.25em rgb(0 0 0 / 10%), 20px -1em 0px 0em #e5e5e5,
    20px 0em 0.1875em -0.5em rgb(0 0 0 / 10%); */
}
.forget {
  margin-bottom: 14px;
  margin-left: 56%;
  /* float: right; */
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
