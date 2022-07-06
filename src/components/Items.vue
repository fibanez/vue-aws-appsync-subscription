<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Total {{ items.length }}</h2>
  </div>
</template>

<script>
import listItemsModel from "@/queries/listItemsModel";
import oncreateEvent from "@/subscription/oncreateEvent";

export default {
  name: "Items",

  data() {
    return {
      msg: "All Items",
      items: [],
    };
  },

  apollo: {
    items: {
      query: () => listItemsModel,
      update: ({ listItemsModel }) => listItemsModel.items,
      subscribeToMore: [
        {
          document: oncreateEvent,
          updateQuery: (
            previous,
            {
              subscriptionData: {
                data: { oncreateEvent },
              },
            }
          ) => {
            console.log(oncreateEvent);

            const listItemsModel = {
              ...previous.listEvents,
              items: [oncreateEvent].concat(previous.listItemsModel.items),
            };

            return { listItemsModel };
          },
        },
      ],
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
