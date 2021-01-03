<template>
  <div>
    <Slider/>
    <secenekler/>
    <Kategoriler/>
    <Ayakkabilar :shoes="dataSource"/>
  </div>
</template>

<script>

  import Slider from "../components/default/Foto";
  import Ayakkabilar from "../components/default/Ayakkabilar";
  import Secenekler from "../components/default/Secenekler";
  import Kategoriler from "../components/default/Kategoriler";

  export default {
    components: {Kategoriler, Secenekler, Ayakkabilar, Slider},
    data:()=>({
      dataSource:[]
    }),
    created() {
      this.$auth.getData('shoes').then(res=>{
        this.dataSource = res
      })
    }
    // async asyncData({params, $axios}) {
    //   const dataSource = await $axios.$get(`shoes/`)
    //   return {dataSource}
    // }
  }
</script>
