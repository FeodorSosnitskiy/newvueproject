import { createApp } from 'vue'

import App from './App'

import components from '@/components/ui/'

console.log(components)

const app = createApp(App);
components.forEach(component=>{
	app.component(component.name, component);
})

app.mount('#app')
