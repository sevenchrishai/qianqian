<template>
    <div class="home">
        <div class="header">
            <h2>闪耀暖暖联盟智能统分</h2>
            <p class="by" align="center">
                <span class="dash"></span>
                <span class="writer">
                    by
                    <a href="javascript:void(0)">芊芊</a>|
                    <a target="_blank" href="https://weibo.com/u/3126062800">其实然也其实未然</a>|
                    <a target="_blank" href="https://github.com/sevenchrishai/qianqian"> sevenchrishai</a>|
                </span>
                <span class="dash"></span>
            </p>
            <p class="by">
                <a class="aToken" target="_blank" href="javascript:void(0)" @click="getAccessToken">点击获取access_token</a>
                <el-input type="hidden" class="token" v-model="token" placeholder="粘贴获取的access_token"></el-input>
            </p>
        </div>
        <div class="picUploadList">
            <el-upload
                    class="upload-demo"
                    action=""
                    accept=".jpg,.jpeg,.png,.JPG,.JPEG,.bmp"
                    :multiple="true"
                    :auto-upload="false"
                    :on-change="getFile"
                    :on-remove="getFile"
                    :file-list="fileList">
                <el-button size="small" type="primary" icon="el-icon-upload">点击上传图片</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png/bmp文件，且不超过500kb</div>
            </el-upload>

        </div>
        <el-button class="run" type="primary" @click.native="run" icon="el-icon-caret-right">Run</el-button>
        <div class="table">
            <el-table
                    :data="tableData"
                    stripe
                    :default-sort = "{prop: 'score', order: 'descending'}"
                    v-loading="listLoading">
                <el-table-column prop="name" label="Name"></el-table-column>
                <el-table-column prop="collect" label="收集度"></el-table-column>
                <el-table-column prop="score" label="Score" sortable></el-table-column>
            </el-table>
        </div>
        <el-button class="exportEX" type="primary"
                   :loading="downloadLoading"
                   icon="el-icon-document"
                   @click.native="exportEX">导出Excel</el-button>
    </div>
</template>

<script>
    /* eslint-disable */
    import http from '@/api/api'
    import urls from '@/api/url'

    export default {
        name: 'home',
        data() {
            return {
                tokenUrl: 'https://aip.baidubce.com' + urls.access_token,
                token: '',
                templateSign: 'aba01721b7261633127622aa8c7c57cd',
                fileList: [],
                imageBase64List: [],
                listLoading: false,
                downloadLoading: false,
                tableData: [],
                reqFlag: true,
                reqCount: 0,
                filename: 'DataTable',
                autoWidth: true,
            }
        },
        created() {
            // this.getAccessToken();
        },
        mounted() {
        },
        computed: {
        },
        methods: {
            getAccessToken() {
                http().getAccessToken().then(res => {
                    this.token = res.access_token;
                })
            },
            requestData(){
                if(this.reqFlag && this.reqCount > 0){ // 判断 1 是否请求成功 2 是否到达请求次数
                    let tmpArr = [], resArr = [];
                    let params = new FormData();
                    params.append('templateSign', this.templateSign);
                    params.append('image', this.imageBase64List[this.reqCount-1]);
                    this.listLoading = true;
                    http().getData(this.token, params).then((res) => {
                        this.listLoading = false;
                        console.log('加载成功！');
                        res.data.ret.forEach((item) => {
                            if (item['location']) {
                                let obj = {};
                                obj.id = item['word_name'] ? item['word_name'].split('#')[1] : '';
                                if (item['word_name'].indexOf('Name') < 0) {  //分数
                                    item['word'] = item['word'].replace('分', '');
                                    obj.score = item['word'];
                                } else {
                                    let arr = item['word'] ? item['word'].split('收集度') : [];
                                    obj.name = arr[0];
                                    obj.collect = arr[1];
                                }
                                tmpArr.push(obj)
                            }
                        });
                        tmpArr.forEach((item, index) => {
                            if (index < tmpArr.length - 1) {
                                if (tmpArr[index + 1].id == item.id) {
                                    let resObj = Object.assign(item, tmpArr[index + 1])
                                    resArr.push(resObj)
                                }
                            }
                        });
                        resArr.forEach(each => {
                            this.tableData.push(each)
                        });
                        this.reqCount -- ;    //请求次数 - 1
                        this.requestData();
                    }).catch(()=>{
                        this.reqFlag = false;
                        this.listLoading = false;
                    });

                }
            },
            run() {
                console.log('运行！')
                if (this.imageBase64List.length > 0) {
                    this.tableData = [];
                    //  * 尽量避免使用for循环请求，而要用递归的方式
                    this.reqCount = this.imageBase64List.length;
                    this.requestData();
                }
            },
            exportEX(){ // 导出Excel表格
                console.log('导出！')
                let list = this.tableData;
                if (list.length>0){
                    this.downloadLoading = true;
                    import('@/vendor/Export2Excel').then(excel => {
                        const tHeader = ['Name', '收集度', 'Score'];
                        const filterVal = ['name', 'collect', 'score'];
                        const data = this.formatJson(filterVal, list);
                        excel.export_json_to_excel({
                            titleName: 'DataTable',
                            header: tHeader,
                            data,
                            filename: this.filename,
                            autoWidth: this.autoWidth
                        });
                        this.downloadLoading = false;
                    });
                }
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => {
                    return v[j];
                }))
            },
            getFile(file, fileList) {
                this.fileList = fileList;
                this.imageBase64List = []
                let tmpArr = [];
                this.fileList.forEach((item) => {
                    this.getBase64(item.raw).then(res => {
                        // * 图片的base64编码是不包含图片头的，如（data:image/jpg;base64,）
                        res = res.replace(/^data:image\/\w+;base64,/, "");
                        tmpArr.push(res)
                    });
                });
                this.imageBase64List = tmpArr;
            },
            getBase64(file) {
                return new Promise(function (resolve, reject) {
                    let reader = new FileReader();
                    let imgResult = "";
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        imgResult = reader.result;
                    };
                    reader.onerror = function (error) {
                        reject(error);
                    };
                    reader.onloadend = function () {
                        resolve(imgResult);
                    };
                });
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '~@/assets/home'
</style>
