<template>
  <div id="views-Layout-components-siderBar">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        :default-selected-keys="['1']"
        mode="inline">
        <menu-item :item="route" :base-path="route.path"></menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import MenuItem from './menuItem'
export default {
  components: {
    MenuItem
  },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {

  }

}
</script>

<style >
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
