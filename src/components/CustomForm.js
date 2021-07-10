import React, { useState, useEffect } from 'react';
import { Row, Col, message, Button, Avatar, Upload, Input, Radio, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import './CustomForm.css'
import CustomIcon from '../tools/CustomIcon'
import { CirclePicker } from 'react-color'
import CustomFormView from './CustomFormView';

const circleColors = ['#39B0FF', '#04B58B', '#3E9C4B', '#B6BC00', '#E59100',
    '#E55C00', '#EE1F50', '#D6198A', '#B321F1']

const CustomForm = () => {
    //Definiendo el estado
    const [src, setSrc] = useState('')
    const [placeName, setPlaceName] = useState('')
    const [placeUrl, setPlaceUrl] = useState('')
    const [amountPersons, setAmountPersons] = useState('')
    const [themeColor, setThemeColor] = useState('')
    const [privateSelected, setPrivateSelected] = useState(true)
    const [publicSelected, setPublicSelected] = useState(false)

    const formView = {
        logo: src,
        placename: placeName,
        placeurl: placeUrl,
        amountpersons: amountPersons,
        themecolor: themeColor,
        privateselected: privateSelected,
        publicselected: publicSelected
    }

    const beforeUpload = file => {
        if (file.type !== 'image/png') {
            message.error(`${file.name} no es un fichero .png.`, 1.4)

        }
        return file.type === 'image/png' && checkImage(file)
    }

    const checkImage = file => {
        const value = file
        return new Promise((resolve, reject) => {
            const filereader = new FileReader()
            filereader.onload = e => {
                const src = e.target.result
                const image = new Image()
                image.onload = () => {
                    value.width = image.width
                    value.height = image.height
                    resolve()
                };
                image.onerror = reject
                setSrc(src)
            }
            filereader.readAsDataURL(value)
        })
    }

    const handleNameChange = (e) => {
        setPlaceName(e.target.value)
    }

    const handleUrlChange = (e) => {
        setPlaceUrl(e.target.value)
    }

    const showInfo = () => {
        Modal.info({
            content: (
                <div>
                    <p>Formulario descartado</p>
                </div>
            ),
            centered: true,
            onOk: () => resetValues()
        })
    }

    const showSuccess = () => {
        Modal.success({
            title: 'EXITO',
            content: 'Formulario guardado',
            confirmLoading: true,
            centered: true
        })
    }

    const changePrivate = () => {
        setPublicSelected(false)
        setPrivateSelected(true)
    }

    const changePublic = () => {
        setPrivateSelected(false)
        setPublicSelected(true)
    }

    const handleChangeColor = (color) => {
        setThemeColor(color)
    }

    const resetValues = () => {
        setSrc('')
        setPlaceName('')
        setPlaceUrl('')
        setAmountPersons('')
        setThemeColor('')
        setPrivateSelected(true)
        setPublicSelected(false)
    }

    return (
        <React.Fragment>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={12} className="gutter-row column_content">
                    <Row justify='start' style={{ marginTop: '42px' }}>
                        <Col flex={24}>
                            <div >
                                <label className='configuracion'>Configuración</label>
                            </div>
                        </Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '20px' }}>
                        <Col flex={24}>
                            <div >
                                <label className='logo_espacio'>Logo del espacio</label>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="start" gutter={[10, 10]} style={{ marginTop: '14px' }}>
                        <Col flex='67px'>
                            <Avatar
                                style={{
                                    color: '#FFFFFF',
                                    fontWeight: 'normal',
                                    fontSize: '20px',
                                    fontFamily: 'Fira Sans',
                                    width: '67px',
                                    height: '67px',
                                    background: '#343c4a 0% 0% no-repeat padding-box',
                                    borderRadius: '34px',
                                    opacity: '1',
                                    verticalAlign: 'middle'
                                }}
                                src={src}
                            >
                                <Row justify="space-around">
                                    <Col flex={8}>
                                    </Col>
                                    <Col flex='23px'>
                                        <div className='b_text'>
                                            B
                                        </div>
                                    </Col>
                                    <Col flex={8}>
                                    </Col>
                                </Row>
                            </Avatar>
                        </Col>
                        <Col flex={1}>
                            <div className='logo'>
                                <Upload
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                >
                                    <Row justify="space-around" gutter={[10, 10]}>
                                        <Col flex={3} offset={2}>
                                            <div className='upload_icon'>
                                                <CustomIcon background='transparent url("../img/Group_2493.png") 0% 0 % no-repeat padding-box' />
                                            </div>
                                        </Col>
                                        <Col flex={15}>
                                            <div className='subirlogo_text'>
                                                <span >
                                                    Subir logo
                                                </span>
                                            </div>
                                        </Col>
                                        <Col flex={5}></Col>
                                    </Row>
                                </Upload>
                            </div>
                        </Col>
                        <Col flex={22} ></Col>
                    </Row>
                    <Row justify='start' style={{ flexWrap: 'nowrap', marginTop: '14.5px' }}>
                        <Col flex={1}>
                            <div className='exclamation_circle'>
                                <ExclamationCircleOutlined />
                            </div>
                        </Col>
                        <Col flex={23}>
                            <div className='imessage1'>
                                <span>
                                    Este logo identificará tu espacio entre el resto. <br />
                                    Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp <br />
                                    con fondo transparente.
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '30px' }}>
                        <Col flex='128px'>
                            <div className='nombre_espacio'>
                                <label>Nombre del espacio</label>
                            </div>
                        </Col>
                        <Col flex='auto'>
                        </Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '10px' }}>
                        <Col flex='611px'>
                            <div>
                                <Input
                                    style={{
                                        top: '322px',
                                        left: '110px',
                                        width: '611px',
                                        height: '45px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #e4e4e4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'static',
                                        font: 'normal normal normal 14px/20px Fira Sans'
                                    }}
                                    placeholder='Ep: Mi nombre de espacio'
                                    value={placeName}
                                    onChange={handleNameChange}
                                ></Input>
                            </div>
                        </Col>
                        <Col flex='auto'></Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '30px' }}>
                        <Col flex='202px'>
                            <div className='input_url_espacio'>
                                <label>URL del espacio (dirección web)</label>
                            </div>
                        </Col>
                        <Col flex='auto'>
                        </Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '10px' }}>
                        <Col flex='611px'>
                            <div>
                                <Input
                                    style={{
                                        top: '322px',
                                        left: '110px',
                                        width: '611px',
                                        height: '45px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #e4e4e4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'static',
                                        font: 'normal normal normal 14px/20px Fira Sans'
                                    }}
                                    placeholder='Ep: mi.dominio.dofleini.com'
                                    value={placeUrl}
                                    onChange={handleUrlChange}
                                ></Input>
                            </div>
                        </Col>
                        <Col flex='auto'></Col>
                    </Row>
                    <Row justify='start' style={{ flexWrap: 'nowrap', marginTop: '15px' }}>
                        <Col flex={1}>
                            <div className='exclamation_circle'>
                                <ExclamationCircleOutlined />
                            </div>
                        </Col>
                        <Col flex={23}>
                            <div className='imessage2'>
                                <span>
                                    Puedes cambiar la URL de tu espacio (dirección web en cualquier momento), pero por <br />
                                    cortesía hacia tus compañeros de trabajo y otros usuario de Plankton, por favor no lo <br />
                                    hagas muy seguido. <br /> <br />
                                    Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la <br />
                                    antigua dirección hascia la nueva. En cualquier caso deberías asegurarte que tus <br />
                                    compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y <br />
                                    puede ser usada por otro espacio en el futuro.
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '30px' }}>
                        <Col flex='359px'>
                            <div className='cuantas_personas'>
                                <label>¿Cuántas personas trabajarán contigo, incluyéndote a ti?</label>
                            </div>
                        </Col>
                        <Col flex='auto'>
                        </Col>
                    </Row>
                    <Row justify='start' gutter={[12, 12]} style={{ marginTop: '10px' }}>
                        <Col flex='76px'>
                            <div>
                                <Button
                                    style={{
                                        top: '691px',
                                        left: '111px',
                                        width: '76px',
                                        height: '46px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #e4e4e4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'static',
                                        font: 'normal normal normal 14px/20px Fira Sans'
                                    }}
                                    onClick={() => setAmountPersons('Sólo yo')}
                                >
                                    Sólo yo
                                </Button>
                            </div>
                        </Col>
                        <Col flex='65px'>
                            <div>
                                <Button
                                    style={{
                                        top: '691px',
                                        left: '197px',
                                        width: '65px',
                                        height: '46px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #e4e4e4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'static',
                                        font: 'normal normal normal 14px/20px Fira Sans'
                                    }}
                                    onClick={() => setAmountPersons('2 - 10')}
                                >
                                    2 - 10
                                </Button>
                            </div>
                        </Col>
                        <Col flex='76px'>
                            <div>
                                <Button
                                    style={{
                                        top: '691px',
                                        left: '272px',
                                        width: '76px',
                                        height: '46px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #e4e4e4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'static',
                                        font: 'normal normal normal 14px/20px Fira Sans'
                                    }}
                                    onClick={() => setAmountPersons('11 - 25')}
                                >
                                    11 - 25
                                </Button>
                            </div>
                        </Col>
                        <Col flex='76px'>
                            <div>
                                <Button
                                    style={{
                                        top: '691px',
                                        left: '358px',
                                        width: '76px',
                                        height: '46px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #e4e4e4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'static',
                                        font: 'normal normal normal 14px/20px Fira Sans'
                                    }}
                                    onClick={() => setAmountPersons('26 - 50')}
                                >
                                    26 - 50
                                </Button>
                            </div>
                        </Col>
                        <Col flex='82px'>
                            <div>
                                <Button
                                    style={{
                                        top: '691px',
                                        left: '444px',
                                        width: '82px',
                                        height: '46px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #e4e4e4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'static',
                                        font: 'normal normal normal 14px/20px Fira Sans'
                                    }}
                                    onClick={() => setAmountPersons('51 - 100')}
                                >
                                    51 - 100
                                </Button>
                            </div>
                        </Col>
                        <Col flex='66px'>
                            <div>
                                <Button
                                    style={{
                                        top: '691px',
                                        left: '536px',
                                        width: '82px',
                                        height: '46px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #e4e4e4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'static',
                                        font: 'normal normal normal 14px/20px Fira Sans'
                                    }}
                                    onClick={() => setAmountPersons('500 +')}
                                >
                                    500 +
                                </Button>
                            </div>
                        </Col>
                        <Col flex='auto'></Col>
                    </Row>
                    <Row justify='start' style={{ flexWrap: 'nowrap', marginTop: '12px' }}>
                        <Col flex={1}>
                            <div className='exclamation_circle'>
                                <ExclamationCircleOutlined />
                            </div>
                        </Col>
                        <Col flex={23}>
                            <div className='imessage1'>
                                <span>
                                    Este logo identificará tu espacio entre el resto. <br />
                                    Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp <br />
                                    con fondo transparente.
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '30px' }}>
                        <Col flex='93px'>
                            <div className='color_tema'>
                                <label>Color del tema</label>
                            </div>
                        </Col>
                        <Col flex='auto'>
                        </Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '10px' }}>
                        <Col flex={'531px'}>
                            {<CirclePicker
                                colors={circleColors}
                                circleSize={45}
                                width={539}
                                onChange={(c) => handleChangeColor(c)}
                            />}
                        </Col>
                        <Col flex='auto'>
                            <div >
                                <input type='radio' className='circle_radio' />
                            </div>
                        </Col>
                    </Row>
                    <Row justify='start' style={{ marginTop: '30px' }}>
                        <Col flex='143px'>
                            <div className='privacidad_espacio'>
                                <label>Privacidad del espacio</label>
                            </div>
                        </Col>
                        <Col flex='auto'>
                        </Col>
                    </Row>
                    <Row justify='start' gutter={[12, 12]} style={{ marginTop: '10px' }}>
                        <Col flex='299px'>
                            <div className='privado' onClick={changePrivate}>
                                <Row justify='start' style={{ marginTop: '10px' }}>
                                    <Col flex='11px'></Col>
                                    <Col flex='79px'>
                                        <Radio
                                            style={{
                                                top: '996px',
                                                left: '152px',
                                                width: '48px',
                                                height: '17px',
                                                textAlign: 'left',
                                                font: 'normal normal normal 14px/20px Fira Sans',
                                                letterSpacing: '0px',
                                                color: '#149ffc',
                                                opacity: 1,
                                                position: 'initial'
                                            }}
                                            checked={privateSelected}
                                            onChange={changePrivate}
                                        >
                                            Privado
                                        </Radio>
                                    </Col>
                                    <Col flex='auto'></Col>
                                </Row>
                                <Row justify='start' style={{ marginTop: '5px' }}>
                                    <Col flex='36px'></Col>
                                    <Col flex='237px'>
                                        <div className='private_message'>
                                            <span>
                                                El contenido será visible sólo para ti
                                                y los miembros de tu Organización
                                            </span>
                                        </div>
                                    </Col>
                                    <Col flex='auto'></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col flex='299px'>
                            <div className='publico' onClick={changePublic}>
                                <Row justify='start' style={{ marginTop: '10px' }}>
                                    <Col flex='11px'></Col>
                                    <Col flex='79px'>
                                        <Radio
                                            style={{
                                                top: '996px',
                                                left: '465px',
                                                width: '47px',
                                                height: '17px',
                                                textAlign: 'left',
                                                font: 'normal normal normal 14px/20px Fira Sans',
                                                letterSpacing: '0px',
                                                color: '#000000',
                                                opacity: 1,
                                                position: 'initial'
                                            }}
                                            checked={publicSelected}
                                            onChange={changePublic}
                                        >
                                            Público
                                        </Radio>
                                    </Col>
                                    <Col flex='auto'></Col>
                                </Row>
                                <Row justify='start' style={{ marginTop: '5px' }}>
                                    <Col flex='36px'></Col>
                                    <Col flex='237px'>
                                        <div className='private_message'>
                                            <span>
                                                Cualquiera con el vínculo podrá ver
                                                la actividad de tu Organización
                                            </span>
                                        </div>
                                    </Col>
                                    <Col flex='auto'></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row justify='start' gutter={[12, 12]} style={{ marginTop: '40px' }}>
                        <Col flex='159px'>
                            <div>
                                <Button type="primary"
                                    style={{
                                        top: '1116px',
                                        left: '110px',
                                        width: '159px',
                                        height: '45px',
                                        background: '#48b5fe 0% 0% no-repeat padding-box',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'initial'
                                    }}
                                    onClick={showSuccess}
                                >
                                    <span className='guardar_button_text'>Guardar cambios</span>
                                </Button>
                            </div>
                        </Col>
                        <Col flex='112px'>
                            <div>
                                <Button
                                    style={{
                                        top: '1116px',
                                        left: '284px',
                                        width: '112px',
                                        height: '45px',
                                        background: '#ffffff 0% 0% no-repeat padding-box',
                                        border: '1px solid #E4E4E4',
                                        borderRadius: '5px',
                                        opacity: 1,
                                        position: 'initial'
                                    }}
                                    onClick={showInfo}
                                >
                                    <span className='descartar_button_text'>Descartar</span>
                                </Button>
                            </div>
                        </Col>
                        <Col flex='auto'></Col>
                    </Row>
                </Col>
                <Col id='viewMode' xs={0} sm={0} md={12} className="gutter-row" style={{ marginTop: '275px' }}>
                    <Row justify='center' className='column2-style' gutter={[32, 32]}>
                        <Col flex={24}>
                            <CustomFormView viewInfo={formView} />
                        </Col>
                    </Row>
                </Col>
            </Row >
        </React.Fragment>
    );
}

export default CustomForm;