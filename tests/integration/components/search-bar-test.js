import $ from 'jquery';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | search-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('calling search method', async function(assert) {
    assert.expect(1);
    this.search = () => {
      assert.ok('search called');
    }
    await render(hbs`{{search-bar search=search}}`);

    await $('#search-btn').click();
  });
  test('calling clear results method',async function(assert){
    assert.expect(1);
    this.clearResults = ()=>{ 
      assert.ok('clear results called') 
    };
    await render(hbs `{{search-bar search='search' clearResults='clearResults'}}`);
    await $('#clear-results-btn').click();
  });
  test('default search bar value check', async function(assert){
    assert.expect(1);
    await render(hbs `{{search-bar search='search' clearResults='clearResults'}}`);
    assert.equal($('#search-bar').val(),'','search query is empty by default');
  });
  // test('sample search', async function(assert){
  //   assert.expect(1);
  //   await render(hbs `{{search-bar search='search' clearResults='clearResults'}}`);
  //   await $('#search-bar').val('go for a walk');
  //   await $('#search-btn').click();
  //   await render(hbs `{{pending-list add='add' remove='remove' clear='clear' remTasks=results task=task}}`);
  //   if($(".list-container--text:contains('go for a walk')")){
  //     assert.ok('result found');
  //   }
  // }); 

});
