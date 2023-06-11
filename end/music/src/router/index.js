import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'
import DownloadView from '../views/DownloadView.vue'
import SettingView from '../views/SettingView.vue'
import ListView from '../views/ListView.vue'
import EnterListView from '../views/EnterListView.vue'
import MyListView from '../views/MyListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'search',
      component: SearchView
    },
    {
      path: '/myList',
      name: 'myList',
      component: MyListView
    },
    {
      path: '/enterList',
      name: 'enterList',
      component: EnterListView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadView
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingView
    },
  ]
})

export default router
