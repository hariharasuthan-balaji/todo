import Component from '@ember/component';

export default Component.extend({
    tasks: [],
    actions:{
        remove(index){
            let tasks = this.get('tasks');
            // console.log(this.get('tasks')[index]);
            tasks.splice(index, 1);
            this.set('tasks', tasks.slice());
        },
        clear(){
            this.set('tasks',[])
        },
        add(task){
            let tasks = this.get('tasks');
            tasks.push(task);
            this.set('tasks',tasks.slice()); 
        }
    }
});
