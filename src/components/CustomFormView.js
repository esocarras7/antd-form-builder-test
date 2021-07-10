import React, { useState } from 'react'
import { Row, Col, Avatar, Input, Form } from 'antd'
import FormBuilder from 'antd-form-builder'
import './CustomFormView.css'

const CustomFormView = props => {
    const [form] = Form.useForm()

    const { viewInfo } = props

    const meta = [
        {
            key: 'viewInfo.placename',
            label: '',
            readOnly: true,
            initialValue: '',
            render: () => {
                return (
                    <Row justify='start' style={{ marginTop: '90px' }}>
                        <Col flex='241px'></Col>
                        <Col flex='180px'>
                            <div>
                                <Input
                                    value={viewInfo.placename}
                                    style={{ border: 0, font: 'normal normal normal 14px / 20px Fira Sans' }}
                                />
                            </div>
                        </Col>
                        <Col flex='auto'>
                        </Col>
                    </Row>
                )
            },
        },
        {
            key: 'viewInfo.placeurl',
            readOnly: true,
            initialValue: '',
            render: () => {
                return (
                    <Row justify='start' style={{ marginTop: '5px' }}>
                        <Col flex={22}></Col>
                        <Col span={1} ></Col>
                        <Col flex='390px'>
                            <div>
                                <Input
                                    value={viewInfo.placeurl}
                                    style={{
                                        border: 0,
                                        font: 'normal normal normal 14px / 20px Fira Sans',
                                        height: '20px',
                                        marginTop: '2px',
                                        width: '390px'
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                )
            }
        },
        {
            key: 'viewInfo.amountpersons',
            readOnly: true,
            initialValue: '',
            render: () => {
                return (
                    <Row justify='start'>
                        <Col flex='270px'></Col>
                        <Col flex='242px' style={{ marginTop: '21px' }}>
                            <div>
                                <label
                                    style={{
                                        font: 'normal normal normal 14px / 20px Fira Sans',
                                        height: '21px',
                                        width: '140px'
                                    }}
                                >
                                    Número de personas:
                                </label>
                                <label
                                    style={{
                                        font: 'normal normal normal 14px / 20px Fira Sans',
                                        height: '21px',
                                        width: '70px'
                                    }}
                                >
                                    {viewInfo.amountpersons}
                                </label>
                            </div>
                        </Col>
                        <Col flex='137px'></Col>
                        <Col flex='120px' style={{ marginTop: '17px' }}>
                            <FormBuilder
                                form={form}
                                meta={{
                                    key: 'viewInfo.themecolor',
                                    render: () => {
                                        return (
                                            <div className='color_view' style={{ backgroundColor: viewInfo.themecolor.hex, borderColor: viewInfo.themecolor.hex }}>
                                                <label
                                                    style={{
                                                        font: 'normal normal normal 14px / 20px Fira Sans',
                                                        height: '21px',
                                                        width: '70px',
                                                        color: '#FFFFFF',
                                                        marginLeft: '37px',
                                                        marginTop: '7px'
                                                    }}
                                                >
                                                    {viewInfo.privateselected === true ? 'Privado' : 'Público'}
                                                </label>
                                            </div>
                                        )
                                    },
                                }}
                            />
                        </Col>
                    </Row>
                )
            },
        },
        {
            key: 'viewInfo.logo',
            readOnly: true,
            initialValue: '',
            render: () => {
                return (
                    <Row justify='start'>
                        <Col flex='207px'></Col>
                        <Col flex='24px'>
                            <div style={{ marginTop: '51px' }}>
                                <Avatar
                                    style={{
                                        height: '24px',
                                        width: '24px',
                                        background: '#39B0FF 0% 0% no-repeat padding-box',
                                        borderRadius: '34px',
                                        opacity: '1',
                                        verticalAlign: 'middle',
                                        borderColor: '#39B0FF',
                                    }}
                                    src={viewInfo.logo}
                                >
                                </Avatar>
                            </div>
                        </Col>
                        <Col flex='auto'>
                        </Col>
                    </Row>
                )
            }
        },
        {
            key: 'viewInfo.themecolor',
            readOnly: true,
            initialValue: '',
            render: () => {
                return (
                    <Row justify='start' style={{ marginTop: '96px' }}>
                        <Col flex='258px'></Col>
                        <Col flex='auto'>
                            <div
                                style={{
                                    width: '6px',
                                    height: '46px',
                                    backgroundColor: viewInfo.themecolor.hex,
                                    borderColor: viewInfo.themecolor.hex,
                                    opacity: '1',
                                    verticalAlign: 'middle'
                                }}
                            >
                            </div>
                            <Row justify='start' style={{ marginTop: '-30px', marginLeft: '15px' }}>
                                <Col flex='119px'>
                                    <div
                                        style={{
                                            width: '119px',
                                            height: '10px',
                                            borderRadius: '30px',
                                            backgroundColor: viewInfo.themecolor.hex,
                                            borderColor: viewInfo.themecolor.hex,
                                        }}>

                                    </div>
                                </Col>
                                <Col flex='104px'>
                                    <div
                                        style={{
                                            marginLeft: '5px',
                                            width: '104px',
                                            height: '10px',
                                            borderRadius: '30px',
                                            backgroundColor: viewInfo.themecolor.hex,
                                            borderColor: viewInfo.themecolor.hex,
                                        }}>

                                    </div>
                                </Col>
                                <Col flex='46px'>
                                    <div
                                        style={{
                                            marginLeft: '4px',
                                            width: '46px',
                                            height: '10px',
                                            borderRadius: '30px',
                                            backgroundColor: viewInfo.themecolor.hex,
                                            borderColor: viewInfo.themecolor.hex,
                                        }}>

                                    </div>
                                </Col>
                                <Col flex='96px'>
                                    <div
                                        style={{
                                            marginLeft: '60px',
                                            width: '96px',
                                            height: '10px',
                                            borderRadius: '30px',
                                            backgroundColor: viewInfo.themecolor.hex,
                                            borderColor: viewInfo.themecolor.hex,
                                        }}>

                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row >
                )
            }
        }
    ]

    const forceUpdate = FormBuilder.useForceUpdate();

    return (
        <Form form={form} onValuesChange={forceUpdate}>
            <FormBuilder meta={meta} form={form} />
        </Form>
    )
}

export default CustomFormView