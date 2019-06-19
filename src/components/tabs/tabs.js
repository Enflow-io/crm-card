import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FormPage from '../formPage/formPage';
import "react-tabs/style/react-tabs.css";
import './tabs.scss'

function CardTabs() {
	return (
		<div className="tabs">
			<Tabs>
				<TabList>
					<Tab>Основное</Tab>
					<Tab>Общее с водителем</Tab>
					<Tab>Общее с ТК</Tab>
				</TabList>

				<TabPanel>
					<FormPage />
				</TabPanel>
				<TabPanel>
					<div>Any content 2</div>
				</TabPanel>
			</Tabs>

		</div>
	);
}

export default CardTabs;
