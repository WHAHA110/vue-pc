
<template>
    <div class="NDialog">
        <el-dialog title="示例-dialog" :visible.sync="dialogTableVisible" :close-on-click-modal="false" append-to-body :width="dialogWidth">
            <!-- 可编辑表格 -->
            <template v-if="dialogType==='editTable'">
                <el-table class="colInput" :data="tableList" :height="dialogHeigth" @current-change="handleCurrentChange" @selection-change="handleSelectionChange" stripe border highlight-current-row>
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column type="index" width="50" label="序号"></el-table-column>
                    <template v-for="(item ,idx) in tableThList">
                        <el-table-column :property="item.prop" :label="item.label" min-width="180px" v-if="item.type==='INPUT'">
                            <template slot-scope="scope">
                                <el-input size="small" v-model="scope.row[item.prop]" :placeholder="item.label" />
                                <!-- <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.date }}</span>-->
                            </template>
                        </el-table-column>
                        <el-table-column show-overflow-tooltip :property="item.prop" :label="item.label" min-width="180px" v-else></el-table-column>
                    </template>
                </el-table>
                <div class="operateBox">
                    <el-pagination background layout="total, prev, pager, next, jumper" :total="1000"></el-pagination>
                    <div class="btns">
                        <el-button>默认按钮</el-button>
                        <el-button type="primary">主要按钮</el-button>
                    </div>
                </div>
            </template>

            <!-- 表单提交 -->
            <template v-if="dialogType==='form'">
                <N-form formHeigth="450px" :formType="formType" ref="N-form1">
                    <div class="s-btn" slot="slot1">
                        <el-button size="mini" type="primary" @click="getList()">主要按钮</el-button>
                        <el-button size="mini">默认按钮</el-button>
                    </div>
                </N-form>
                <div class="commitBox">
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <!-- <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>-->
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import { NDialogData } from './NData.js'
import NForm from './NForm.vue'
export default {
    name: 'NDialog',
    components: { NForm },
    props: {
        dialogType: {
            type: String,
            default: 'form'
        },
        dialogWidth: {
            type: String,
            default: '950px'
        },
        dialogHeigth: {
            type: String,
            default: '450px'
        },
        formType: {
            type: String,
            default: 'el-form-row'
        }
    },
    data() {
        return {
            dialogTableVisible: false,
            tableList: NDialogData.tableList,
            tableThList: NDialogData.tableThList
        }
    },
    methods: {
        openNDialog() {
            this.dialogTableVisible = true
        },
        handleCurrentChange(a1, a2) {
            console.log(a1, a2)
        },
        handleSelectionChange(a1, a2) {
            console.log(a1, a2)
        }
    }
}
</script>

<style lang="scss" scoped>
.el-dialog {
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.el-dialog__body {
    padding-top: 9px;
}
.operateBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}
.colInput {
    input {
        border: none;
        background: rgb(255, 208, 80);
    }
}
.btns {
    display: flex;
    justify-content: flex-end;
    // margin-top: 15px;
}
.commitBox {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
}
</style>

