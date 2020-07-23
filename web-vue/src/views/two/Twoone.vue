<template>
  <div class="ht100 ">
    <el-row class="select-table">
      <el-radio v-model="isCheck" label="0" @change="handleChangeSelect"
        >多选</el-radio
      >
      <el-radio v-model="isCheck" label="1" @change="handleChangeSelect"
        >单选</el-radio
      >
    </el-row>
    <el-table :data="tableData" height="300" border>
      <el-table-column type="index" label="序号" width="80" align="center">
        <template slot="header">
          序号
        </template>
        <template slot-scope="scope">
          <div @click="handleSelectRadio(scope.$index, scope.row)">
            <el-radio v-model="selectKey" :label="scope.$index + 1">
              {{ scope.$index + 1 }}
            </el-radio>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableColumns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
    </el-table>
    <el-button>{{ $t('commons.change') }}</el-button>
  </div>
</template>
<script>
import API from '../../APIServices/index'
export default {
  name: 'Twoone',
  data() {
    return {
      isCheck: '0',
      tableData: [],
      tableColumns: [
        {
          label: '地址',
          prop: 'address'
        },
        {
          label: '星星',
          prop: 'star'
        },
        {
          label: '姓名',
          prop: 'name'
        }
      ],
      selectKey: ''
    }
  },
  mounted() {
    this.getOneData()
    console.log('ddddd', this.$i18n)
  },
  methods: {
    getOneData() {
      let params = {
        name: '酱鸭',
        code: 'jy'
      }
      API.getOneData(params).then(res => {
        if (res.data.code === 200) {
          this.tableData = res.data.data
        }
      })
      API.getTwoData(params).then(res => {
        console.log('res11====', res.data)
      })
    },
    handleSelectRadio(index, row) {
      console.log('dddd', index, row)
    },
    handleChangeSelect(value) {
      this.isCheck = value
    }
  }
}
</script>
<style scoped>
.select-table {
  height: 40px;
  line-height: 40px;
  text-align: right;
}
</style>
