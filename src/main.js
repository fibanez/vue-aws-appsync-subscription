import Vue from 'vue'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'
import AwsAppSyncClient from 'aws-appsync'

const el = '#app'

const config = {
  url: 'appsyncire.mc1.expo.academy/graphql',
  region: 'eu-west-1',
  auth: {
    type: 'LAMBDA',
    jwtToken: '1'
  }
}
const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
}

const client = new AwsAppSyncClient(config, options)

const appsyncProvider = new VueApollo({ defaultClient: client })
const provide = appsyncProvider.provide()
const template = '<App/>'
const components = { App }

Vue.config.productionTip = false
Vue.use(VueApollo)

new Vue({ el, router, provide, template, components })
