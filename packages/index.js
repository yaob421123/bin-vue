import './style/base.less';
import './fonts/w-icon.css';
import { Button } from './components/button';
import { Icon } from './components/icon';
import { Flexbox, FlexboxItem } from './components/flexbox';
import { Grid, GridItem } from './components/grid';
import { Badge } from './components/badge';
import { CellGroup, Cell } from './components/cell';

const install = function(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Icon.name, Icon);
  Vue.component(Flexbox.name, Flexbox);
  Vue.component(FlexboxItem.name, FlexboxItem);
	Vue.component(Grid.name, Grid);
  Vue.component(GridItem.name, GridItem);
  Vue.component(Badge.name, Badge);
  Vue.component(CellGroup.name, CellGroup);
  Vue.component(Cell.name, Cell);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
