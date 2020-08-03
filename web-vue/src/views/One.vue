<template>
  <div class="ht100 overflow-y-auto padding-right-10">
    <div>
      <el-form :ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动区域">
              <el-select
                v-model="form.region"
                placeholder="请选择"
                class="wt100"
              >
                <el-option
                  v-for="item in selectList"
                  :key="item.index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="时间">
              <el-row type="flex" justify="space-between">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date1"
                    class="wt100"
                  ></el-date-picker>
                </el-col>
                <el-col :span="2">-</el-col>
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date2"
                    class="wt100"
                  ></el-date-picker>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox
                  :label="item.label"
                  name="type"
                  v-for="item in checkList"
                  :key="item.index"
                  >{{ item.label }}</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio
                  :label="item.label"
                  v-for="item in radioList"
                  :key="item.index"
                ></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><el-form-item label="活动形式">
              <el-input
                type="textarea"
                v-model="form.desc"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button type="danger">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'One',
  data() {
    return {
      data: [],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: '',
        type: [],
        resource: '',
        desc: ''
      },
      selectList: [
        {
          label: '区域一',
          value: 1
        },
        {
          label: '区域二',
          value: 2
        }
      ],
      checkList: [
        {
          label: '美食、餐厅线上活动'
        },
        {
          label: '地推活动'
        },
        {
          label: '线下主题活动'
        },
        {
          label: '单纯品牌曝光'
        }
      ],
      radioList: [
        {
          label: '线上'
        },
        {
          label: '线下'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('dd')
    }
  }
}
</script>
