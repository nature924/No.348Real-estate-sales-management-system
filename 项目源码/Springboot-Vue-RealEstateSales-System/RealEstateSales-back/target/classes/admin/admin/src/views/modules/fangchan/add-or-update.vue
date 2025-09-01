<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="房产编号" prop="fangchanUuidNumber">
                       <el-input v-model="ruleForm.fangchanUuidNumber"
                                 placeholder="房产编号" clearable  :readonly="ro.fangchanUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="房产编号" prop="fangchanUuidNumber">
                           <el-input v-model="ruleForm.fangchanUuidNumber"
                                     placeholder="房产编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="房产名" prop="fangchanName">
                       <el-input v-model="ruleForm.fangchanName"
                                 placeholder="房产名" clearable  :readonly="ro.fangchanName"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="房产名" prop="fangchanName">
                           <el-input v-model="ruleForm.fangchanName"
                                     placeholder="房产名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="房产户型" prop="fangchanTypes">
                        <el-select v-model="ruleForm.fangchanTypes" :disabled="ro.fangchanTypes" placeholder="请选择房产户型">
                            <el-option
                                v-for="(item,index) in fangchanTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="房产户型" prop="fangchanValue">
                        <el-input v-model="ruleForm.fangchanValue"
                            placeholder="房产户型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.fangchanPhoto" label="房产图片" prop="fangchanPhoto">
                        <file-upload
                            tip="点击上传房产图片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.fangchanPhoto?ruleForm.fangchanPhoto:''"
                            @change="fangchanPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.fangchanPhoto" label="房产图片" prop="fangchanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.fangchanPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="房产地址" prop="fangchanAddress">
                       <el-input v-model="ruleForm.fangchanAddress"
                                 placeholder="房产地址" clearable  :readonly="ro.fangchanAddress"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="房产地址" prop="fangchanAddress">
                           <el-input v-model="ruleForm.fangchanAddress"
                                     placeholder="房产地址" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="房屋面积" prop="fangchanMianjis">
                       <el-input v-model="ruleForm.fangchanMianjis"
                                 placeholder="房屋面积" clearable  :readonly="ro.fangchanMianjis"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="房屋面积" prop="fangchanMianjis">
                           <el-input v-model="ruleForm.fangchanMianjis"
                                     placeholder="房屋面积" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
			   <el-col :span="12">
			       <el-form-item class="input" v-if="type!='info'"  label="房产价格" prop="fangchanMoney">
			           <el-input v-model="ruleForm.fangchanMoney"
			                     placeholder="房产价格" clearable  :readonly="ro.fangchanMoney"></el-input>
			       </el-form-item>
			       <div v-else-if="type=='info'">
			           <el-form-item class="input" label="房产价格" prop="fangchanMoney">
			               <el-input v-model="ruleForm.fangchanMoney"
			                         placeholder="房产价格" readonly></el-input>
			           </el-form-item>
			       </div>
			   </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="所在区域" prop="fangchanQuyu">
                       <el-input v-model="ruleForm.fangchanQuyu"
                                 placeholder="所在区域" clearable  :readonly="ro.fangchanQuyu"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="所在区域" prop="fangchanQuyu">
                           <el-input v-model="ruleForm.fangchanQuyu"
                                     placeholder="所在区域" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="房产详情" prop="fangchanContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.fangchanContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.fangchanContent" label="房产详情" prop="fangchanContent">
                            <span v-html="ruleForm.fangchanContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
 return {
         addEditForm:null,
         id: '',
         type: '',
         sessionTable : "",//登录账户所在表名
         role : "",//权限
         userId:"",//当前登录人的id
         ro:{
             fangchanUuidNumber: false,
             fangchanName: false,
             fangchanTypes: false,
             fangchanPhoto: false,
             fangchanMoney: false,
             fangchanAddress: false,
             fangchanMianjis: false,
             fangchanQuyu: false,
             fangchanContent: false,
             insertTime: false,
         },
         ruleForm: {
             fangchanUuidNumber: new Date().getTime(),
             fangchanName: '',
             fangchanTypes: '',
             fangchanPhoto: '',
             fangchanMoney: '',
             fangchanAddress: '',
             fangchanMianjis: '',
             fangchanQuyu: '',
             fangchanContent: '',
             insertTime: '',
         },
         fangchanTypesOptions : [],
         rules: {
            fangchanUuidNumber: [
                       { required: true, message: '房产编号不能为空', trigger: 'blur' },
                   ],
            fangchanName: [
                       { required: true, message: '房产名不能为空', trigger: 'blur' },
                   ],
            fangchanTypes: [
                       { required: true, message: '房产户型不能为空', trigger: 'blur' },
                       {  pattern: /^[0-9]*$/,
                           message: '只允许输入整数',
                           trigger: 'blur'
                       }
                   ],
            fangchanPhoto: [
                       { required: true, message: '房产图片不能为空', trigger: 'blur' },
                   ],
            fangchanMoney: [
                       { required: true, message: '房产价格不能为空', trigger: 'blur' },
                       {  pattern: /^[0-9]{0,6}(\.[0-9]{1,2})?$/,
                           message: '只允许输入整数6位,小数2位的数字',
                           trigger: 'blur'
                       }
                   ],
            fangchanAddress: [
                       { required: true, message: '房产地址不能为空', trigger: 'blur' },
                   ],
            fangchanMianjis: [
                       { required: true, message: '房屋面积不能为空', trigger: 'blur' },
                       {  pattern: /^[0-9]*$/,
                           message: '只允许输入整数',
                           trigger: 'blur'
                       }
                   ],
            fangchanQuyu: [
                       { required: true, message: '所在区域不能为空', trigger: 'blur' },
                   ],
            fangchanContent: [
                       { required: true, message: '房产详情不能为空', trigger: 'blur' },
                   ],
            insertTime: [
                       { required: true, message: '发布时间不能为空', trigger: 'blur' },
                   ],
         }
     };
         },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");

            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=fangchan_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.fangchanTypesOptions = data.data.list;
                    }
                });


        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `fangchan/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`fangchan/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.fangchanCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.fangchanCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            fangchanPhotoUploadChange(fileUrls){
                this.ruleForm.fangchanPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & ::v-deep .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

