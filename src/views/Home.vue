<!-- 时间: 2021年08月27日 09:56:13 -->
<template>
    <div></div>
</template>


<script>
export default {
    name: 'template',
    props: {},
    components: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {},
    // 以下是生命周期钩子   注：没用到的钩子请自行删除
    beforeCreate() {},
    /**
     * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
     */
    created() {
        console.log(log, '----------------->log')

        this.nextTick(() => {
            this.msg2 = this.refs.msgDiv.innerHTML
        })
    },
    /**
     * 在挂载开始之前被调用：相关的 render 函数首次被调用。
     */
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    /**
     * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
     */
    activated() {},
    /**
     * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
     */
    deactivated() {},
    /**
     * 实例销毁之前调用。在这一步，实例仍然完全可用。
     */
    beforeDestroy() {},
    destroyed() {}
}
</script> 

<style scoped lang='scss'>
.lll {
    position: relative;
    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 15px;
        height: 1px;
        background-color: #c8c7cc;
    }
}
</style>
