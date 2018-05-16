import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
    tasks:['go for a walk','buy tickets','bench press - 30 reps','shrugs - 10 reps'],
    results: computed("tasks", "query", function() {
        return this.get('tasks').filter(item => item.includes(this.get('query')))
    }),
    query:"",
    task:"",
    actions:{
        removeAllTasks(){
            this.set('tasks',[]);
        },
        remove(index){
            let tasks = this.get('tasks');
            tasks.splice(index, 1);
            this.set('tasks', tasks.slice());
        },
        clear(){
            this.set('tasks',[])
        },
        add(task){
            if(task){
                let tasks = this.get('tasks');
                tasks.push(task);
                this.set('tasks',tasks.slice());
                this.set('task','');
            }
        },
        search(query){
            this.set('query',query);
        },
        clearResults(){
            this.set('query','');
        }
    }
});
