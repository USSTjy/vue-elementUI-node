<template>
  <div class="ht100 ">
    <el-row class="select-table"> </el-row>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="序号" width="80" align="center">
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
    <el-row class="text-align-right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="sizeList"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableTotal"
      >
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
import API from '../../APIServices/index'
export default {
  name: 'Twoone',
  data() {
    return {
      tableData: [],
      tableAllData: [],
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
      selectKey: '',
      selectRow: {},
      currentPage: 1,
      pageSize: 10,
      sizeList: [2, 5, 10],
      tableTotal: 0
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
        if (res.data.code === 200) {
          this.tableAllData = res.data.data
          this.tableTotal = res.data.data.length
          this.handleCurrentChange(1)
        }
      })
    },
    handleSelectRadio(index, row) {
      this.selectKey = index
      this.selectRow = row
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.tableData = this.tableAllData.slice(
        this.pageSize * (val - 1),
        this.pageSize * val
      )
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.tableData = this.tableAllData.slice(
        val * (this.currentPage - 1),
        val * this.currentPage
      )
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
