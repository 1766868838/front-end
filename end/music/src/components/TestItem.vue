<template>
<div id="root">
        <!-- 遍历列表 -->
        <h2>人员列表</h2>
        <ul>
            <li v-for="p in persons" :key="p.id">
                {{p.name}} -- {{p.age}}
            </li>
        </ul>
    </div>
</template>
<script setup>
let persons= [
  {id:'001',name:'张三',age:18},
  {id:'002',name:'李四',age:19},
  {id:'003',name:'王五',age:20}
]
</script>