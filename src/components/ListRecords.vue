<template lang="pug">
.list_records
  ul.records
    li.record(v-for="(record, r_id) in c_records"
              :style="{'animation-delay': r_id * 0.3 + 's'}"
              :key="record.cata")
      h3.cata {{ record.cata }}
      h3.price NT$ {{ record.price }}
      h3.date {{ record.date }}
      button.btn_remove(@click="removeRecord(record)") x
  h2.total Total: NT$ {{ total }}
  .input_box
    input(v-model="new_record.cata" placeholder="NAME")
    input(v-model.number="new_record.price" placeholder="PRICE")
    input(v-model="new_record.date" placeholder="DATE")
  button.btn_add(@click="addRecord") Add To List
//- 注意！一個 component 只能裝一個元素(根元素只能有一個)，
//- 因此如果這個元件會用到其他的元素，
//- 記得以一個 div (.list_records) 去包住所有元素
</template>

<script>
export default {
  props: [
    'c_records'
  ],
  data () {
    return {
      new_record: {}
    }
  },
  methods: {
    removeRecord (record) {
      this.c_records = this.c_records.filter(item => {
        return item !== record
        // 記得有 {} 就一定要加上 return
      })
      // this.$emit('c_removeRecord', {
      //   record
      // })
      // 此為 ES6 寫法，也可以寫成 record: record
      // 將子元件要傳給父元件的資料打包成物件傳送出去
    },
    addRecord () {
      this.c_records.push(this.new_record)
      this.new_record = {}
    }
  },
  computed: {
    total () {
      return this.c_records.reduce((total, record) => total + record.price, 0)
    }
  }
}
</script>

<style lang="sass">
// 這裡是設定全域的 CSS ，如果其他地方也有使用到同樣名稱的 class ，
// 也會一併套上相同的樣式，若要避免元素間 CSS 互相干擾，
// 可以加上 <style lang="sass" scoped> 定義作用範圍只在這個元件之中，
// 或是將所有元素放入一個空的根元素之中，如下 .list_records
.list_records
  width: 90vw
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  .records
    width: 100%
    margin: 10px 0
    .record
      padding: 5px 10px
      border: 1px solid #000
      display: flex
      justify-content: flex-start
      align-items: center
      animation: fadingIn 2s both
      & > *
        margin: 0
      .price
        font-size: 15px
        position: absolute
        left: 35%
      .date
        font-size: 15px
        color: rgba(black, 0.5)
        position: absolute
        right: 20%
      .btn_remove
        font-size: 13px
        position: absolute
        right: 10%
  .total
    margin: 10px 0
  .input_box
    margin: 10px 0
    display: flex
    justify-content: center
    align-items: center
    input
      width: 100px
      margin: 0 10px
      outline: none
  .btn_add
    margin: 10px 0 40px 0
    font-size: 13px

@keyframes fadingIn
  0%
    opacity: 0
  100%
    opacity: 1
</style>
