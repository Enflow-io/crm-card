import React, { useState } from 'react'
import { cssClassName } from '../../utils'
import Title from './title'
import './style.scss'

import BlocWithIcon from './blocWithIcon'
import Label from './label'
import ErrorNote from './errorNote'

import Icon from './icon'
import AddBtn from './addBtn'
import Text from './text'
import Tr from './tr'
import Input from './input'
import Select from './select'
import InputSelect from './inputSelect'

const cn = cssClassName('form-page')

const errorText = 'В документе заполнена только часть данных.'
export default () => {

  const initialStateDemoForm = {
    financePayment: undefined,
    financeVat: undefined,
    fromPlace: undefined,
    fromPerson: undefined,

    destinationPlace: undefined,
    cargoDescription: undefined,
    cargoWeight: undefined,
    cargoSpace: undefined,
    car: undefined,
    carDriver: undefined,
    tripWaybillBefore: undefined,
    tripWaybillAfter: undefined,
    carDocumentContract: undefined,
    carDocumentInvoice: undefined,
    carDocumentWaybill: undefined
  }

  const [formState, setFormState] = useState(initialStateDemoForm)

  const handleChangeForm = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }

  const financePaymentInput = <Input
    propsHandleChange={(value) => handleChangeForm('financePayment', value)}
    type = 'money'
    value = {formState.financePayment || '...'}
  />

  const financeVat = <Select
      options = {['Без НДС', 'c НДС']}
      onChange={(value => handleChangeForm('financeVat', value))}
      value = {formState.financeVat}
    />

    const fromPlaces = {
      'first': {
        title: 'Склад на юге Москвы',
        address: 'ул. Улочная д.101 стр. 6'
      },
      'second': {
        title: 'Склад на севере Москвы',
        address: 'ул. Закаулочная д.1'
      }
    }

  const findBy = (value, findBy) => {
    const arrKeys = Object.keys(fromPlaces)
    const arrFindBy = arrKeys.map(key => fromPlaces[key][findBy])
    const indexFindBy = arrFindBy.indexOf(value);
    console.log(arrKeys[indexFindBy])
    return arrKeys[indexFindBy]
  }

  const fromPlaceField = <Select
    options = {Object.keys(fromPlaces).map(key => fromPlaces[key].title)}
    onChange={(title => handleChangeForm('fromPlace', findBy(title, 'title')))}
    value = {formState.fromPlace && fromPlaces[formState.fromPlace].title}
  />
  const formAddressField = <Select
    options = {['ул. Улочная д.101 стр. 6', 'ул. Закаулочная д.1']}
    onChange={(address => handleChangeForm('fromPlace', findBy(address, 'address')))}
    value = {formState.fromPlace &&  fromPlaces[formState.fromPlace].address}
  />

  const fromPersons = {
    'Олеся Узорова': {
      phone: '+7 915 123 4567',
      email: 'uzorova@yandex.ru'
    },
    'Анна Взорова': {
      phone: '+7 915 7654 321',
      email: 'vzorova@bk.ru'
    }
  }
  const fromPersonField = <Select
    options = {Object.keys(fromPersons)}
    onChange={(person => handleChangeForm('fromPerson', person))}
    value = {formState.fromPerson || '...'}
  />


  const cargoDescriptionInput = <Input
    propsHandleChange={(value) => handleChangeForm('cargoDescription', value)}
    type = 'text'
    value = {formState.cargoDescription || '...'}
  />

  const cargoWeightInput = <Input
    propsHandleChange={(value) => handleChangeForm('cargoWeight', value)}
    type = 'weight'
    value = {formState.cargoWeight || '...'}
  />

  const cargoSpaceInput = <Input
    propsHandleChange={(value) => handleChangeForm('cargoSpace', value)}
    type = 'space'
    value = {formState.cargoSpace || '...'}
  />

  const destinationPlaceInput = <InputSelect
    value={formState.destinationPlace || '...'}
    handleChange={(value) => handleChangeForm('destinationPlace', value)}
    options = {[
      'Склад на юге Москвы',
      'Склад под Питером',
      'Склад в Екатеринбурге Заказчик',
      'К списку мест погрузки'
    ]}
  />
  return (
    <div className={cn()}>
      <div className={cn('bloc')}>
        <Title>Ответственный</Title>
        <BlocWithIcon type={'man'}>
          <Label type={'retired'}>Ответственный</Label>
          <Text big black>Андрей Лесных</Text>
        </BlocWithIcon>
      </div>
      <div className={cn('bloc')}>
        <Title>Финансы</Title>
        <Tr label={'Оплата от заказчика'}>
          {financePaymentInput}
        </Tr>
        <Tr label={'НДС, заказчик'}> {financeVat} </Tr>
        <Tr label={'Оплата перевозчику'}> ...руб </Tr>
        <Tr label={'НДС, перевозчик'}> ...руб </Tr>

      </div>
      <div className={cn('bloc')}>
        <Title>Заказчик</Title>
        <BlocWithIcon type={'briefcase'}>
          <Label type={'retired'}>Компания-заказчик</Label>
          <Text big black>ОАО “Йогурты и Ко”</Text>

        </BlocWithIcon>
        <BlocWithIcon type={'man'}>
          <Label type={'retired'}>Контактное лицо</Label>
          <Text big black>Елена Иванова</Text>
          <Tr label={'Телефон'}>
            <Text black>+7 929 123 4567</Text>
          </Tr>
          <Tr label={'E-mail'}>
            <Text black>elena.ivanova@zakazchik.ru</Text>
          </Tr>
        </BlocWithIcon>
        <AddBtn>Добавить контакт заказчика</AddBtn>
      </div>
      <div className={cn('bloc')}>
        <Title>Откуда</Title>
        <Tr label={'Дата погрузки'}>
          <Text black>Четверг, 28 марта 2019</Text>
        </Tr>
        <Tr label={'Время погрузки'}>
          <Text black>12:00</Text>
        </Tr>
        <BlocWithIcon type={'pin'}>
          <Label type={'retired'}>Место погрузки</Label>
          {fromPlaceField}
          <Tr label={'Адрес'}>
            {formAddressField}
          </Tr>
        </BlocWithIcon>


        <BlocWithIcon type={'man'}>
          <Label type={'retired'}>Контактное лицо</Label>
          {fromPersonField}
          {
            formState.fromPerson && <Tr label={'Телефон'}>
              {fromPersons[formState.fromPerson].phone}
            </Tr>
          }
          {
            formState.fromPerson && <Tr label={'E-mail'}>
              {fromPersons[formState.fromPerson].email}
            </Tr>
          }
        </BlocWithIcon>
        <AddBtn wide>Добавить контакт по месту погрузки</AddBtn>
        <AddBtn wide>Добавить компанию-отправителя</AddBtn>

      </div>
      <div className={cn('bloc')}>
        <Title>Куда</Title>
        <Tr label={'Дата разгрузки'}>
          <Text black>Пятница, 29 марта 2019</Text>
        </Tr>
        <Tr label={'Время разгрузки'}>
          <Text black>12:00</Text>
        </Tr>
        <BlocWithIcon type={'pin'}>
          <Label type={'retired'}>Место погрузки</Label>
          {destinationPlaceInput}
        </BlocWithIcon>
        <BlocWithIcon type={'man'}>
          <Label type={'retired'}>Контактное лицо</Label>
          <Text big black>Антон Петров</Text>
          <Tr label={'Телефон'}>
            <Text black>+7 911 123 4567</Text>
          </Tr>
          <Tr label={'E-mail'}>
            <Text black>petrov@mail.ru</Text>
          </Tr>
        </BlocWithIcon></div>
      <AddBtn wide>Добавить контакт по месту разгрузки</AddBtn>
      <AddBtn wide>Добавить компанию-отправителя</AddBtn>
      <div className={cn('bloc')}>
        <Title>Груз</Title>
        <Tr label={'Описание груза'}>
          {cargoDescriptionInput}
        </Tr>
        <Tr label={'Вес'}>
          {cargoWeightInput}
        </Tr>
        <Tr label={'Объем'}>
          {cargoSpaceInput}
        </Tr>
      </div>
      <div className={cn('bloc')}>
        <Title>ТС и водитель</Title>
        <AddBtn wide>Загрузить документ</AddBtn>
        <AddBtn wide>Загрузить документ</AddBtn>
      </div>
      <div className={cn('bloc')}>
        <Title>Перевозчик</Title>
        <AddBtn wide>Добавить ТС</AddBtn>
        <AddBtn wide>Добавить водителя</AddBtn>
      </div>
      <div className={cn('bloc')}>
        <Title>Рейс</Title>
        <Tr label={'Время подачи ТС на погрузку'}>
          <Text black>...</Text>
        </Tr>
        <Tr label={'Время окончания погрузки'}>
          <Text black>...</Text>
        </Tr>
        <BlocWithIcon type={'doc'}>
          <Label>ТТН после погрузки</Label>
          <Text>Документ еще не загружен</Text>

        </BlocWithIcon>
        <BlocWithIcon type={'tracker'}>
          <Label>Тракер местоположения</Label>
          <Text>Местоположение еще не было указано</Text>

        </BlocWithIcon>
        <Tr label={'Время подачи ТС на разгрузку'}>
          <Text black>...</Text>
        </Tr>
        <Tr label={'Время окончания разгрузки'}>
          <Text black>...</Text>
        </Tr>
      </div>

      <div className={cn('bloc')}>
        <Title>Документы</Title>
        <AddBtn>Загрузить документ</AddBtn>

      </div>
      <div className={cn('bloc')}>
        <Title>Автодокументы</Title>
        <BlocWithIcon type={'doc'}>
          <Label>Документы на перевозку</Label>
          <ErrorNote>{errorText}</ErrorNote>

        </BlocWithIcon>
        <BlocWithIcon type={'doc'}>
          <Label>Счет заказчику на оплату</Label>
          <ErrorNote>{errorText}</ErrorNote>

        </BlocWithIcon>
        <BlocWithIcon type={'doc'}>
          <Label>ТТН</Label>
          <ErrorNote>{errorText}</ErrorNote>
        </BlocWithIcon>
      </div>
      <div className={cn('config')}>
        <Icon type={'config'} mix={cn('config-icon')}/>
        Настройка автодокументов
      </div>
    </div>
  )
}
