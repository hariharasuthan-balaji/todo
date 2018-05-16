import Component from '@ember/component';

export default Component.extend({
    actions:{
        search(query){
            this.sendAction('search',query);
        },
        clearResults(){
            this.sendAction('clearResults');
        }
    }
});
