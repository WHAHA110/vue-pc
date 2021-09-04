const NTableData = {
  tableList: [
    { ccc: Math.random(), ddd: Math.random() + ' ddd' },
    { ccc: Math.random(), ddd: Math.random() + ' ddd' },
    { ccc: Math.random(), ddd: Math.random() + ' ddd' },
    { ccc: Math.random(), ddd: Math.random() + ' ddd' },
    { ccc: Math.random(), ddd: Math.random() + ' ddd' },
    { ccc: Math.random(), ddd: Math.random() + ' ddd' },
    { ccc: Math.random(), ddd: Math.random() + ' ddd' },
    { ccc: Math.random(), ddd: Math.random() + ' ddd' },
    { ccc: Math.random(), ddd: Math.random() + ' ddd' }
  ],
  formList_: [
    {
      type: 'SLOT',
      miniType: 1,
      label: '山东分公司的',
      prop: 'slot0',
      ableFlag: true,
      vIf: true
    },
    {
      type: 'DIC',
      miniType: 2,
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: false
    },
    {
      type: 'INPUT',
      miniType: 2,
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      miniType: 'date',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      miniType: 1,
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      miniType: 2,
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      miniType: 2,
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      miniType: 'date',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      miniType: 1,
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'SLOT',
      miniType: 1,
      label: '山东分公司的',
      prop: 'slot1',
      ableFlag: false,
      vIf: true
    }
  ],
  tableThList: [
    {
      label: '给第三方',
      prop: 'ccc',
      subTh: [
        {
          label: '给第三方',
          prop: 'ddd',
          type: 'TEXT',
          subTh: []
        },
        {
          label: '山东分公司的',
          prop: 'ddd',
          type: 'TEXT',
          subTh: []
        }
      ]
    },
    {
      label: '山东分公司的',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的2',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的个',
      prop: 'ccc',
      type: 'INPUT',
      subTh: []
    },
    {
      label: '阿斯顿发',
      type: 'DATE',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的2',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的个',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '阿斯顿发',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    }
  ]
}
const NDialogData = {
  tableList: [{ ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }],
  tableThList: [
    {
      label: '给第三方',
      type: 'INPUT',
      miniType: 1,
      prop: 'ccc'
    },
    {
      label: '山东分公司的',
      type: 'SELECT',
      miniType: 1,
      prop: 'ccc'
    },
    {
      label: '山东分公司的2',
      type: 'SELECT',
      miniType: 2,
      prop: 'ccc'
    },
    {
      label: '山东分公司的个',
      type: 'INPUT',
      miniType: 2,
      prop: 'ccc'
    },
    {
      label: '阿斯顿发',
      type: 'DATE',
      miniType: 'date',
      format: 'yyyy-MM-dd',
      prop: 'ccc'
    },
    {
      label: '山东分公司的',
      type: 'SELECT',
      miniType: 1,
      prop: 'ccc'
    },
    {
      label: '山东分公司的2',
      type: 'SELECT',
      miniType: 2,
      prop: 'ccc'
    },
    {
      label: '山东分公司的个',
      type: 'TEXTAREA',
      miniType: 2,
      prop: 'ccc'
    },
    {
      label: '阿斯顿发',
      type: 'DATE',
      miniType: 'date',
      format: 'yyyy-MM-dd',
      prop: 'ccc'
    }
  ]
}
const NFormData = {
  formList: [
    {
      type: 'OPTIONS', //显示类型
      label: '山东分公司的', //显示名称
      prop: 'ccc', //提交字段名称
      ableFlag: false, //是否可输入
      vIf: true //是否可显示
    },
    {
      type: 'DIC',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: false
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    }
  ]
}
export { NTableData, NDialogData, NFormData }
