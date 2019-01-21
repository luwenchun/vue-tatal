class Vue {
    constructor(options){
        this.$data=options.data;//获取data
        this.observe(this.$data)//执行响应式
    }

    observe(value){
        if(!value  || typeof value !== 'object'){
            return;
        }
        // 遍历data选项
        Object.keys(value).forEach(key => {
            // 为每一个key属性定义响应式
            this.defineReactive(value,key,value[key]);

        })
    }
    defineReactive(obj,key,val){

        //  为d2ata对象定义属性

        Object.defineProperty(obj,key,{
            enumerable:true,
            configurable:true,
            get(){
                
                return val;
            },
            set(newVal){
                if(newVal===val){
                    return;
                }else{
                    val=newVal;
                }
            }
        })
    }
}