<template>
  <div class="ht100 ">
    <el-table :data="tableData" height="300" border>
      <el-table-column type="index" label="序号" width="80" align="center">
        <template slot="header">
          序号
        </template>
        <template slot-scope="scope"> {{ scope.$index }} </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableColumns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
import API from '../../APIServices/index'
export default {
  name: 'Twoone',
  data() {
    return {
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
      ]
    }
  },
  mounted() {
    this.getOneData()
  },
  methods: {
    getOneData() {
      let params = {
        name: '酱鸭',
        code: 'jy'
      }
      API.getOneData(params).then(res => {
        console.log('res====', res.data)
        if (res.data.code === 200) {
          this.tableData = res.data.data
        }
      })
      API.getTwoData(params).then(res => {
        console.log('res11====', res.data)
      })
    }
  }
}
</script>
