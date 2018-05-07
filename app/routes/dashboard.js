import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        click(){
            alert('clicked');
        }
    }
});
