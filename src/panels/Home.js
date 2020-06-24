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
import { platform, IOS } from '@vkontakte/vkui';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Link from '@material-ui/core/Link';


import persik from '../img/persik.png';
import './Persik.css';

const preventDefault = (event) => event.preventDefault();

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<Div className="background">
		<PanelHeader theme="space_gray">Moscow Polytech FIT</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
		<Div className = "center">
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

		<Group title="Navigation Example">
			
			
			<Div style={{ background: '#232323' }}>
				<Button  size="xl" level="2" mode = "overlay_secondary" href="https://new.mospolytech.ru/postupayushchim/priem-v-universitet/prohodnye-bally/" target="_blank" rel="nofollow noopener">		
					Узнать проходные баллы
				</Button>
			</Div>						
			<Div className="faq" >
				<CellButton onClick={go} data-to="black">FAQ</CellButton>
			</Div>
		</Group>
		<Group header={<Header mode="secondary">Растягивание по ширине</Header>}>
			<Div style={{display: 'flex'}}>
			<Button size="l" mode = "overlay_secondary" stretched style={{ marginRight: 8 }}>Stretched</Button>
			<Button size="l" mode = "overlay_outline" stretched>Stretched</Button>
			</Div>
		</Group>
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
