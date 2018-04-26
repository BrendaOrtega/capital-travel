import React from 'react'
import { RuedaCard } from './RuedaCard'
import { Button, Modal, Form, DatePicker, Input, AutoComplete } from 'antd'
const { RangePicker } = DatePicker
const FormItem = Form.Item


export const AdminBody = ({ onSubmit, saveSector, saveCita, saveFechas, savePais, eventos, showModal, handleOk, handleCancel, loading, visible, formItemLayout, dataSource, dateFormat, saveNombre }) => (
    < section >
        <div className="card-container">
            {eventos.map((r, index) => <RuedaCard key={index} {...r} />)}
        </div>
        <Button type="primary floatButton greenButton" style={{ fontSize: '20px' }} onClick={showModal}>Agregar Rueda</Button>
        <Modal
            visible={visible}
            title="Agregar Rueda de Negocios."
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>Cancelar</Button>,
                <Button key="submit" className="greenButton" type="primary" loading={loading} onClick={handleOk} >Agregar</Button>,
            ]}>
            <Form onSubmit={onSubmit}>
                <FormItem {...formItemLayout}>
                    Nombre del evento:
                    <Input name='nombre' placeholder='Ej. Rueda BBVA 2018' onChange={saveNombre} />
                </FormItem>
                <FormItem {...formItemLayout}>
                    País:
                    <AutoComplete
                        name='pais'
                        onChange={savePais}
                        dataSource={dataSource}
                        placeholder="Ej. Mexico"
                        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    />
                </FormItem>
                <FormItem {...formItemLayout}>
                    Seleccione las fechas del evento:
                    <RangePicker name='fechaInicio' format={dateFormat} placeholder={['Inicio de Rueda', 'Fin de Rueda']} onChange={saveFechas} />
                </FormItem>
                <FormItem {...formItemLayout}>
                    Fecha de inicio de las citas:
                    <DatePicker name='fechaFin' format={dateFormat} style={{ width: '100%' }} placeholder='Fecha de inicio de citas' onChange={saveCita} />
                </FormItem>
                <FormItem {...formItemLayout}>
                    Industria o Sector:
                    <Input onChange={saveSector} name='sector' placeholder='Ej. Negocios.' />
                </FormItem>
            </Form>
        </Modal>
    </section >
);
