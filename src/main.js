import Vue from "vue";
import App from "./App";
import router from "./router";
import VueApollo from "vue-apollo";
import awsAppSyncClient from "aws-appsync";

const el = "#app";
const defaultClient = new awsAppSyncClient({
  url: "appsyncire.mc1.expo.academy/graphql",
  region: "eu-west-1",
  auth: {
    type: "AWS_LAMBDA",
    jwtToken: "1"
  }
});

const appsyncProvider = new VueApollo({ defaultClient });
const provide = appsyncProvider.provide();
const template = "<App/>";
const components = { App };

Vue.config.productionTip = false;
Vue.use(VueApollo);

new Vue({ el, router, provide, template, components });
