import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {View, CellButton, Header} from '@vkontakte/vkui';
import { platform, IOS, ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Link from '@material-ui/core/Link';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28CameraOutline from '@vkontakte/icons/dist/28/camera_outline';
import Button1 from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import persik from '../img/persik.png';
import './Persik.css';

const osname = platform();




const Home = ({ id, go, fetchedUser }) => (
	
	<Panel id={id}>
		<Div className="background">
		<PanelHeader className = "ph" >Moscow Polytech FIT</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
		<Div className = "benis"> 
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
			<Div className = "cellback">
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Div>
			</Cell>
		</Div>
		
		</Group>}

		<Group header={<Header mode="secondary">Основное</Header>}>
		<Div style={{ background: '#232323' }}>
			<Button size="xl" level="2" mode = "overlay_secondary" onClick={go} data-to="teachers">
				Преподаватели факультета
			</Button>
		</Div>
			<Div style={{ background: '#232323' }} className="decor">
				<Button  size="xl" level="2" mode = "overlay_primary" onClick={go} data-to="links">		
					Полезные ссылки
				</Button>
			</Div>						
			
		</Group>
		<Group className="separatorColor" header={<Header mode="secondary">Расписания</Header>}>
			<Div style={{display: 'flex'}}>
			<Button href="https://rasp.dmami.ru/" target="_blank" rel="nofollow noopener" size="l" mode = "overlay_secondary" stretched style={{ marginRight: 8 }}>Расписание занятий</Button>
			<Button href="https://rasp.dmami.ru/session" target="_blank" rel="nofollow noopener" size="l" mode = "overlay_outline" stretched>Расписание сессии</Button>
			</Div>
		</Group>
	
		<Div className="faq">
				<CellButton style={{ textDecoration: 'none', color: 'rgb(228, 228, 230)' }} onClick={go} data-to="black">FAQ</CellButton>
		</Div>

		<img className="Persik" src={persik} alt="Persik The Cat"/>
		
		</Div>
	</Panel>
);


Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
