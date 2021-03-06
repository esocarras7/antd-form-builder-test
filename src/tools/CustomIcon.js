import React from 'react';
import 'antd/dist/antd.css';
import Icon from '@ant-design/icons';

const UploadSvg = () => (
    <svg width="13" height="13" viewBox="0 0 13 13">
        <path
            d="M11.556,13H1.444A1.446,1.446,0,0,1,0,11.555V2.527A1.433,1.433,0,0,1,.332,1.6L1.336.4A1.053,1.053,0,0,1,2.167,0h8.666a1.084,1.084,0,0,1,.838.389l1,1.214A1.466,1.466,0,0,1,13,2.527v9.028A1.446,1.446,0,0,1,11.556,13ZM6.5,4.844a.355.355,0,0,0-.253.1L2.528,8.666H5.056v1.444H7.945V8.666h2.527L6.753,4.947A.353.353,0,0,0,6.5,4.844ZM2.124.722h0l-.592.722h9.931L10.79.722Z"
        />
    </svg>
);

const UploadIcon = props => <Icon component={UploadSvg} {...props}
    style={{
        background: props.background
    }}
/>;

export default UploadIcon
