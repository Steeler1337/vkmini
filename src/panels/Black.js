import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {Group, Header, List, Cell, View, PanelHeaderContext, PanelHeaderContent, PanelHeaderBack} from '@vkontakte/vkui';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


const osName = platform();

const ExpansionPanel = withStyles({
  root: {
	backgroundColor: 'rgba(228, 228, 230, 1)',
    border: '1px solid rgba(35, 35, 35, 1)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: '1px solid rgba(23, 23, 23, 1)',
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },

	color: 'black',
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(25, 25, 25, 1)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
		color: 'white',
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);



const handleChange = (panel) => (event, newExpanded) => {
  };



const Persik = props => (
	
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			FAQ
		</PanelHeader>
		
      <ExpansionPanel onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Какой наиболее удобный способ связаться с преподавателем?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Телеграм. Ссылки на контакты можно найти во вкладке "Преподаватели факультета".
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Как получить свой сервер на домене Политеха?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Нужно перейти по ссылке "Хостинг" во вкладке "Полезные ссылки". После этого
			нужно подать заявку на получение сервера.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Какие программы и утилиты следует установить для удобного процесса обучения? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Для веб-разработки отлично подойдёт Visual Studio Code. Для программирования на C++ хорошим вариантом будет Visual Studio. Нередко встречается задание сделать презентацию,
			и в этом вам поможет Office PowerPoint. Для составления отчётов и написания рефератов - Office Word. Google Документы отличная альтернатива всем продуктам Office, но для работы потребуется Интернет. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Знакомство с какими курсами облегчит начальный этап обучения на данном факультете? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Как правило, многим первокурсникам тяжело даётся программирование. Для лучшего представления ООП рекомендуем пройти следующие курсы Stepik
			(все ресуры можно найти во вкладке "Полезные ссылки") : "Введение в программирование (C++)" от Яндекс и ВШЭ, "Программирование на языке C++" от CSC.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	   <ExpansionPanel onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Кем я смогу стать, когда успешно завершу обучение специальности ФИТа? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Как правило, многим первокурсникам тяжело даётся программирование. Для лучшего представления ООП рекомендуем пройти следующие курсы Stepik
			(все ресуры можно найти во вкладке "Полезные ссылки") : "Введение в программирование (C++)" от Яндекс и ВШЭ, "Программирование на языке C++" от CSC.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Как проходит проектная деятельность на этом факультете? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            В основе обучения на Факультете Информационных Технологий лежит программирование, поэтому и ядром любого проекта станет кодинг. Безусловно, творческих подход 
			также является неотъемлимой частью ПД на любом факультете. 		
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Как я могу проявить свои профессиональные навыки в Московском Политехе? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Московский Политех сотрудничает с большим количеством передовых компаний. В рамках Хакатонов часто проходят мероприятия, где каждый студент 
			может проявить себя и продемонстрировать своё мастерство.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  
	
	
	
 	
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;

