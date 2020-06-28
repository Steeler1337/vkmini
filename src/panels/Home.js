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
import Icon16User from '@vkontakte/icons/dist/16/user';
import Icon16Place from '@vkontakte/icons/dist/16/place';
import Icon24Phone from '@vkontakte/icons/dist/24/phone';
import Icon28MailOutline from '@vkontakte/icons/dist/28/mail_outline';
import Icon28Message from '@vkontakte/icons/dist/28/message';

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
			<Div style={{display: 'flex'}}>
			<Div className = "cellback">
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Div>
			<a style={{textDecoration: 'none', color: 'rgb(228,228,230)'}} href="https://e.mospolytech.ru/" target="_blank" rel="nofollow noopener">
			<Div className="icon">
			<Icon16User width={20} height={20}/>
			</Div>
			</a>
			</Div>
			
			</Cell>
		</Div>
		
		</Group>}

		<Group header={<Header mode="secondary">Основное</Header>}>
		<Div style={{ background: '#191919' }}>
			<Button size="xl" level="2" mode = "overlay_secondary" onClick={go} data-to="teachers">
				Преподаватели факультета
			</Button>
		</Div>
			<Div style={{ background: '#191919' }} className="decor">
				<Button  size="xl" level="2" mode = "overlay_primary" onClick={go} data-to="links">		
					Полезные ссылки
				</Button>
			</Div>						
			
		</Group>
		<Group className="separatorColor" header={<Header mode="secondary">Расписания</Header>}>
			<Div style={{display: 'flex'}}>
			<Button href="https://rasp.dmami.ru/" target="_blank" rel="nofollow noopener" size="l" mode = "overlay_outline" stretched style={{ marginRight: 8 }}>Расписание занятий</Button>
			<Button href="https://rasp.dmami.ru/session" target="_blank" rel="nofollow noopener" size="l" mode = "overlay_outline" stretched>Расписание сессии</Button>
			</Div>
		</Group>

		<Div className="faq">
			
				<CellButton style={{ textDecoration: 'none', color: 'rgb(228, 228, 230)'}} onClick={go} data-to="black" stretched>FAQ</CellButton>
				
		</Div>
				<Div className='contact' style={{color: 'rgb(228, 228, 230)' }}>
					<ul>
						<li style={{display: 'flex'}} className='contactElem'>
							<Icon16Place width={20} height={20}/>
							<a style={{textDecoration: 'none', color: 'rgb(228,228,230)'}} href="https://www.google.ru/maps/place/Московский+политехнический+университет/@55.7813318,37.7121353,16.5z/data=!4m5!3m4!1s0x46b54ad610abc8a5:0xc42703145fe53a8d!8m2!3d55.7814468!4d37.7112901" target="_blank" rel="nofollow noopener">107023 г. Москва ул. Б. Семёновская, 38</a>
						</li>
						<li style={{display: 'flex'}} className='contactElem'>
							<Icon24Phone width={20} height={20}/>
							<a style={{textDecoration: 'none', color: 'rgb(228,228,230)'}} href="tel:+79257817835" target="_blank" rel="nofollow noopener">+7 495 223-05-23, доб. 1709</a>
						</li>
						<li style={{display: 'flex'}} className='contactElem'>
							<Icon28Message width={20} height={20}/>
							<a style={{textDecoration: 'none', color: 'rgb(228,228,230)'}} href="mailto:marina_danshina@mail.ru" target="_blank" rel="nofollow noopener">fit@mospolytech.ru</a>
						</li>
					</ul>
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
