<template lang="pug">
ul
  li(v-for="(record, r_id) in records")
    h2 {{ record.name }}
    ListRecords(:c_records="record.recordData")
</template>

<script>
export default {
  data () {
    return {
      records: [
        {
          name: 'Mark',
          recordData: [
            {
              cata: 'food',
              price: 200,
              date: '2018/03/20'
            }, {
              cata: 'drink',
              price: 500,
              date: '2018/03/25'
            }, {
              cata: 'home',
              price: 1200,
              date: '2018/04/01'
            }, {
              cata: 'food',
              price: 2300,
              date: '2018/04/10'
            }
          ]
        }, {
          name: 'Lily',
          recordData: [
            {
              cata: 'shopping',
              price: 2400,
              date: '2018/01/15'
            }, {
              cata: 'medicine',
              price: 5300,
              date: '2018/06/03'
            }, {
              cata: '3C',
              price: 1000,
              date: '2017/12/12'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass">

</style>
