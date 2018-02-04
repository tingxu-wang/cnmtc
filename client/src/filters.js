export default {
  getOption (value = '', list = []){
    return list.find((item) =>{
      return item.value === value;
    })
  },
  getOptionText (value = '', list = []){
    const item =  list.find((item) =>{
      return item.value === value;
    });

    if(item){
      return item.text;
    }else{
      return '';
    }
  }
}
