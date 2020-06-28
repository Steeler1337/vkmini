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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './Persik.css';
import danshina from '../img/contemplative-reptile.jpg';

const osName = platform();

const useStyles = makeStyles({
root: {
maxWidth: 345,
},
media: {
height: 140,
},
});



const Teachers = props => (



	<Panel id={props.id}>
	<Div className = "background">
		<Div>
			<PanelHeader
				left={<PanelHeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Преподаватели ФИТа
			</PanelHeader>
			<Div className="margin">
			<Card className={useStyles.root}>
<CardActionArea>
<CardMedia
className={useStyles.media}
image={danshina}
title="Преподаватель"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Даньшина Марина 
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Заместитель декана по развитию факультета, старший преподаватель
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button href="mailto:marina_danshina@mail.ru" size="small" color="primary" target="_blank" rel="nofollow noopener">
Почта
</Button>
<Button href="tel:+79257817835" size="small" color="primary" target="_blank" rel="nofollow noopener">
Телефон
</Button>
<Button href="https://telegram.im/@MDanshina" size="small" color="primary" target="_blank" rel="nofollow noopener">
Telegram
</Button>
</CardActions>
</Card>
</Div>

<Div className="margin">
<Card className={useStyles.root}>
<CardActionArea>
<CardMedia
className={useStyles.media}
image={danshina}
title="Преподаватель"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Гневшев Александр
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Куратор проектной деятельности факультета, руководитель образовательной программы
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button href="https://telegram.im/@a0070" size="small" color="primary" target="_blank" rel="nofollow noopener">
Telegram
</Button>
</CardActions>
</Card>
</Div>
<Div className="margin">
<Card className={useStyles.root}>
<CardActionArea>
<CardMedia
className={useStyles.media}
image={danshina}
title="Преподаватель"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Змазнева Олеся
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Руководитель лаборатории Soft Skills
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button href="mailto:ozmazneva@gmail.com" size="small" color="primary" target="_blank" rel="nofollow noopener">
Почта
</Button>
</CardActions>
</Card>
</Div>
<Div className="margin">
<Card className={useStyles.root}>
<CardActionArea>
<CardMedia
className={useStyles.media}
image={danshina}
title="Преподаватель"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Филиппович Андрей
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Декан
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button href="mailto:philippovich@list.ru" size="small" color="primary" target="_blank" rel="nofollow noopener">
Почта
</Button>
</CardActions>
</Card>
</Div>
			
			
		</Div>
		</Div>
	</Panel>
);

Teachers.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Teachers;