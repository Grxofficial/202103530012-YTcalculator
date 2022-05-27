
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: ['二进制', '八进制', '十进制', '十六进制'],
    index: '2', //选择器value2代表默认十进制
    base: '',
    change_hidden: true,
    B: '',
    O: '',
    D: '',
    H: ''
 },

 PickerChange(e) {
  console.log(e);
  this.setData({
    index: e.detail.value,
  })
  this.base_change()
},

  //监听input
  base_input: function(e){
    let base = e.detail.value
    this.data.base = base
    this.base_change()
  },

  //转换进制
  base_change: function(){
    const baseindex = this.data.index
    const basevalue = this.data.base

    // console.log(baseindex, basevalue)

    var base
    if (baseindex == 0) {
      // console.log('二进制')
      base = this.Btoall(basevalue) //二进制
    } else if(baseindex == 1) {
      // console.log('八进制')
      base = this.Otoall(basevalue) //八进制
    } else if(baseindex == 2) {
      // console.log('十进制')
      base = this.Dtoall(Number(basevalue)) //十进制
    } else {
      // console.log('十六进制')
      base = this.Htoall(basevalue) //十六进制
    }
    this.setData({
      B: base[0],
      O: base[1],
      D: base[2],
      H: base[3]
    })
    if (basevalue != 0) {
      this.setData({
        change_hidden: false
      })
    } else {
      this.setData({
        change_hidden: true
      })
    }
  },

  //二进制转换其他进制
  Btoall: function(original){
    //先用parseInt转成十进制再用toString转到目标进制
    const B = parseInt(original,2).toString(2) //2
    const O = parseInt(original,2).toString(8) //8
    const D = parseInt(original,2).toString(10) //10
    const H = parseInt(original,2).toString(16) //16
    // console.log('二进制', B)
    // console.log('八进制', O)
    // console.log('十进制', D)
    // console.log('十六进制', H)
    return [B, O, D, H]
  },
  
  //八进制转换其他进制
  Otoall: function(original){
    //先用parseInt转成十进制再用toString转到目标进制
    const B = parseInt(original,8).toString(2) //2
    const O = parseInt(original,8).toString(8) //8
    const D = parseInt(original,8).toString(10) //10
    const H = parseInt(original,8).toString(16) //16
    // console.log('二进制', B)
    // console.log('八进制', O)
    // console.log('十进制', D)
    // console.log('十六进制', H)
    return [B, O, D, H]
  },

  //十进制转换其他进制
  Dtoall: function(original){
    //先用parseInt转成十进制再用toString转到目标进制
    const B = original.toString(2) //2
    const O = original.toString(8) //8
    const D = original.toString(10) //10
    const H = original.toString(16) //16
    // console.log('二进制', B)
    // console.log('八进制', O)
    // console.log('十进制', D)
    // console.log('十六进制', H)
    return [B, O, D, H]
  },

  //十六进制转换其他进制
  Htoall: function(original){
    //先用parseInt转成十进制再用toString转到目标进制
    const B = parseInt(original,16).toString(2) //2
    const O = parseInt(original,16).toString(8) //8
    const D = parseInt(original,16).toString(10) //10
    const H = parseInt(original,16).toString(16) //16
    // console.log('二进制', B)
    // console.log('八进制', O)
    // console.log('十进制', D)
    // console.log('十六进制', H)
    return [B, O, D, H]
  },

  // 复制
  copy_text: function (e) {
    if (this.data.base != '') {
      let base = e.currentTarget.dataset.base
      let data
      if (base == 'B') {
        data = this.data.B
      } else if (base == 'O'){
        data = this.data.O
      } else if (base == 'D'){
        data = this.data.D
      } else {
        data = this.data.H
      }
      wx.setClipboardData({
        data: data,
        success: function (res) {
          console.log(res)
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})