import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'; 
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import {CellButton} from '@vkontakte/vkui';

import './Persik.css';

const osName = platform();

const useStyles = makeStyles((theme) => ({
root: {
width: '100%',
maxWidth: 360,
backgroundColor: theme.palette.background.paper,
},
}));

const Links = props => (

	<Panel id={props.id}>
		<Div className="background">
			<PanelHeader
				left={<PanelHeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Полезные ссылки
			</PanelHeader>
			
<List component="nav" className={useStyles.root} aria-label="mailbox folders">
<a style={{ textDecoration: 'none', color: 'rgb(228, 228, 230)' }} href="https://fit.mospolytech.ru/systems/infrastructure" target="_blank" rel="nofollow noopener" > <ListItem button>
<ListItemText primary="Хостинг"  />

</ListItem>
</a>
<Divider />
<a style={{ textDecoration: 'none', color: 'rgb(228, 228, 230)' }} href="https://pd.fit.mospolytech.ru/" target="_blank" rel="nofollow noopener" ><ListItem button divider>
<ListItemText primary="Проектная деятельность" />
</ListItem>
</a>
<a style={{ textDecoration: 'none', color: 'rgb(228, 228, 230)' }} href="https://old.mospolytech.ru/index.php?id=3796" target="_blank" rel="nofollow noopener" ><ListItem button divider>
<ListItemText primary="Студенческий городок" />
</ListItem>
</a>
<Divider light />
<ListItem button>
<ListItemText primary="Spam" />
</ListItem>
</List>
			
			
	</Div>
	</Panel>
);

Links.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Links;
