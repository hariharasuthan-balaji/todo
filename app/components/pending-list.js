import Component from '@ember/component';

export default Component.extend({
    actions:{
        remove(index){
            this.sendAction('remove',index);
        },
        clear(){
            this.sendAction('clear');
        },
        add(task){
            this.sendAction('add',task);
        }
    }
});
