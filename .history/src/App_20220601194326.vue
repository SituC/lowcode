<template>
  <div id="app">
    <el-page-header :content="pageTitle"></el-page-header>
    <div>
      <el-form label-width="150px" :form="form" :rules="rules">
        <el-row v-for="(config, configIdx) in fields" :key="configIdx">
          <el-col v-for="(field, fieldIdx) in config" :key="fieldIdx" :span="field.colSpan">
            <el-form-item :label="field.label" :prop="field.key">
              <template>
                <template v-if="field['x-component'] ==='el-input'">
                  <el-input v-model="form[field.key]" :disabled="field['disabled']" :placeholder="field['x-component-props'].placeholder"></el-input>
                </template>
                <template v-else-if="field['x-component'] === 'el-select'">
                  <el-select v-model="form[field.key]" @focus="getOriginOption(field)">
                    <el-option v-for="(option, opIdx) in field.options" :key="opIdx" :label="option.label" :value="option.value">{{ option.label }}</el-option>
                  </el-select>
                </template>
                <template v-else-if="field['x-component'] === 'el-upload'">
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :limit="field['x-component-props'].limit"
                    :before-upload="(file) =>  { return handleBeforeUpload(file, field)}"
                    :on-remove="handleUploadRemove"
                    :on-success="handleUploadSuccess">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </template>
                <template v-else-if="field['x-component'] === 'el-button'">
                  <el-button
                    :plain="field['x-component-props'].plain"
                    :circle="field['x-component-props'].circle"
                    :loading="field['x-component-props'].loading"
                    :size="field['x-component-props'].size"
                    :type="field['x-component-props'].type"
                    @click.stop="fnMap[field['x-props'].buttonClickFnName]"
                    >{{ field['x-props'].label }}</el-button>
                </template>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { form, options } from './data'
export default {
  name: 'App',
  data() {
    return {
      form: {},
      dialogImageUrl: '',
      dialogVisible: false,
      fnMap: {
        handleSubmit:() => {
          this.$message.success('提交方法触发')
        },
        cancelHandle: () => {
          this.$message.success('取消方法触发')
        }
      },
    }
  },
  computed: {
    fields() {
      return form.formFields
    },
    rules() {
      return form.formRules
    },
    pageTitle() {
      return form.formTitle
    }
  },
  components: {
  },
  methods: {
    getOriginOption(field) {
      this.$set(field, 'options', options)
      this.$forceUpdate()
      // console.log(field)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleBeforeUpload(file, field) {
      console.log(field, file)
      const curFileType = file.type.split('/')[1]
      const fileType = field['x-component-props'].accept
      const maxFileSize = field['x-component-props'].maxFileSize || 2
      const isLimit= file.size / 1024 / 1024 < maxFileSize;
      const isType = fileType.includes(curFileType)
      if (!isType) {
        this.$message.error(`上传头像图片只能是 ${fileType.join('，')} 格式!`);
      }
      if (!isLimit) {
        this.$message.error(`上传头像图片大小不能超过 ${maxFileSize}MB!`);
      }
      return isType && isLimit;
    },
    handleUploadSuccess() {
    },
    handleUploadRemove() {}
  }
}
</script>

<style>

</style>
