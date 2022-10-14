<template>
  <div class="main">
    <div>
      <a :href="img" download="图片.png">
      <el-button
        class="xiazai"
        :v-model="uploadForm.imageUrl"
        @click="xiazai(uploadForm.imageUrl)"
        >下载图片</el-button
      >
      </a>
    </div>
    <div class="back">
      <el-form :model="uploadForm">
        <el-form-item>
          <el-upload
            class="inupload"
            action="http://localhost:8081/file/upload"
            :show-file-list="false"
            :on-success="handleSuccess"
          >
            <img
              v-if="uploadForm.imageUrl"
              :src="uploadForm.imageUrl"
              class="avatar"
            />
            <i v-else class="el-icon-plus inupload-icon"
              ><p style="font-size: 20px">点击上传</p></i
            >
            <!-- <div class="jieshao"> 一句话介绍</div> -->
          </el-upload>
        </el-form-item>
        <el-form-item>
          <div class="jieshao">将图片上传，只需5秒，即刻抠图</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploadForm: {
        imageUrl: "",
      },
      img:"",
    };
  },
  methods: {
    handleSuccess(file) {
      this.uploadForm.imageUrl = file;
    },

    // 图片下载
    xiazai(imageUrl) {

      if (imageUrl) {
        this.img=imageUrl;
        // console.log(this.img);
        this.$message.success("下载中");
      } else {
        this.$message.error("请先上传图片！");
      }
    },
  },
};
</script>
<style>
.jieshao {
  width: 80vw;
  margin: auto;
  font-size: 20px;
  background-color: #d9ebfcb9;
  color: #676c73;
  position: relative;
  top: 90px;
}
.main {
  padding-top: 10vh;
  padding-left: 10vw;
  background-color: #c4e0fb;
  background: url(../assets/11.jpg);

  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  text-align: center;
}
.back {
  height: 80vh;
  width: 80vw;
  background-color: #efeaea3d;
  border-radius: 20px;
}
.inupload .el-upload {
  background-color: #f7f7f7;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  top: 11vh;
  overflow: hidden;
}
.inupload .el-upload:hover {
  border-color: #409eff;
}
.inupload-icon {
  font-size: 50px;
  color: #8c939d;
  width: 50vw;
  height: 50vh;
  position: relative;
  top: 22vh;
  line-height: 50vh;
  text-align: center;
}
.avatar {
  /* width: 50vw; */
  height: 50vh;
  display: block;
  /* padding-top: 89px; */
}
.resultpicture {
  height: 50vh;
}
.xiazai {
  background-color: #70b1f2 !important ;
  font-size: 16px !important;
  color: #ffeeee !important;
  float: right;
  position: relative;
  right: 11vw;
  top: 15px;
  z-index: 10;
}
</style>
